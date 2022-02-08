import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import { ISecurityGroup, ISubnet, IVpc, Subnet } from '@aws-cdk/aws-ec2';
import { AccountRootPrincipal, ManagedPolicy, Role, ServicePrincipal } from '@aws-cdk/aws-iam';
import { IpAddressType, ListenerAction } from '@aws-cdk/aws-elasticloadbalancingv2';
import { readFileSync } from 'fs';
import { EC2ResourcesProps } from '../interfaces/ec2-props';



export class EC2ResourcesStack extends cdk.Stack {
    public alb: elbv2.ApplicationLoadBalancer;
    public atg: elbv2.ApplicationTargetGroup;
    public autoScalingGroup: autoscaling.AutoScalingGroup;
    constructor(scope: cdk.Construct, id: string, props: EC2ResourcesProps) {
        super(scope, id, props);
        const vpc = this.getVpc(props);
        const privateSubnets = this.getPrivateSubnets(props);
        const publicSubnets = this.getPublicSubnets(props);
        const securityGroup = this.getSecurityGroup(props);

        this.alb = this.createApplicationLoadBalancer(props, vpc, publicSubnets,securityGroup);
        this.atg = this.createApplicationLoadBalancerTargetGroup(props, vpc);
        this.addListeners(props);

        this.autoScalingGroup = this.createAutoscalingGroup(props, vpc, privateSubnets, securityGroup);
        this.autoScalingGroup.attachToApplicationTargetGroup(this.atg);
        
        new cdk.CfnOutput(this, 'albDNS', {
            value: this.alb.loadBalancerDnsName,
        });
    }

    private addListeners(props: EC2ResourcesProps) {
        this.alb.addListener('HTTP Listener', { 
            port: 80, 
            defaultAction: ListenerAction.redirect({ port: "443" }) 
        });

        this.alb.addListener('HTTPs Listener', { 
            port: 443, 
            defaultAction: ListenerAction.forward([this.atg]) ,
            certificates:[
                {
                    certificateArn: props.certificateArn,
                }
            ]
        });
    }

    getVpc(props: EC2ResourcesProps) {
        return ec2.Vpc.fromVpcAttributes(this, `VPC-${props.stage}`, {
            vpcId: props.vpcId,
            availabilityZones: props.availabilityZones,
        })
    }

    getPublicSubnets(props: EC2ResourcesProps) {
        const vpcSubnets = [
            Subnet.fromSubnetAttributes(this, `PublicSubnet1-${props.stage}`, {

                subnetId: props.publicSubnetIds[0],
                availabilityZone: props.availabilityZones[0],
            }),
            Subnet.fromSubnetAttributes(this, `PublicSubnet2-${props.stage}`, {

                subnetId: props.publicSubnetIds[1],
                availabilityZone: props.availabilityZones[1],
            })
        ]

        return vpcSubnets;
    }

    getPrivateSubnets(props: EC2ResourcesProps) {
        const vpcSubnets = [
            Subnet.fromSubnetAttributes(this, `PrivateSubnet1-${props.stage}`, {

                subnetId: props.privateSubnetIds[0],
                availabilityZone: props.availabilityZones[0],
            }),
            Subnet.fromSubnetAttributes(this, `PrivateSubnet2-${props.stage}`, {

                subnetId: props.privateSubnetIds[1],
                availabilityZone: props.availabilityZones[1],
            })
        ]

        return vpcSubnets;
    }

    getSecurityGroup(props: EC2ResourcesProps) {
        return ec2.SecurityGroup.fromSecurityGroupId(this, `SG-${props.stage}`, props.securityGroupId);
    }

    createApplicationLoadBalancerTargetGroup(props: EC2ResourcesProps, vpc: IVpc,) {
        return new elbv2.ApplicationTargetGroup(this, `TG1-${props.stage}`, {
            targetGroupName: `TARGET-GROUP-FALP-${props.stage}`,
            targetType: elbv2.TargetType.INSTANCE,
            port: 80,
            vpc,
        });
    }
    
    createApplicationLoadBalancer(props: EC2ResourcesProps, vpc: IVpc, subnets: ISubnet[],securityGroup:ISecurityGroup) {
        const alb = new elbv2.ApplicationLoadBalancer(this, `ApplicationLoadBalancer-${props.stage}`, {
            loadBalancerName: `load-balancer-${props.stage}`,
            vpc,
            internetFacing: true,
            ipAddressType: IpAddressType.IPV4,
            vpcSubnets: { subnets: subnets },
            securityGroup: securityGroup
        });

        return alb
    }

    createAutoscalingGroup(props: EC2ResourcesProps, vpc: IVpc, subnets: ISubnet[], securityGroup: ISecurityGroup) {
        const role = this.getRole(props);

        return new autoscaling.AutoScalingGroup(this, `ASG-${props.stage}`, {
            autoScalingGroupName: `ASG-${props.stage}`,
            keyName: props.keyName,
            vpc,
            vpcSubnets: { subnets: subnets },
            instanceType: ec2.InstanceType.of(
                ec2.InstanceClass.T3,
                ec2.InstanceSize.MEDIUM),
            machineImage: ec2.MachineImage.genericLinux({
                'us-east-2': props.amiId //Ubuntu 20.04 LTS AMI
            }),
            blockDevices:[
                {
                    deviceName:'/dev/sda1',
                    volume: autoscaling.BlockDeviceVolume.ebs(30),
                }
            ],
            securityGroup: securityGroup,
            minCapacity: 1,
            maxCapacity: 3,
            desiredCapacity: 1,
            role: role,

        });
    }

    getRole(props: EC2ResourcesProps) {
        return new Role(this, `role-${props.stage}`, {
            assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
            roleName: `role-${props.stage}`,
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2FullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('CloudWatchLogsFullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('AWSCodeDeployFullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('AmazonElasticFileSystemFullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMFullAccess'),
                ManagedPolicy.fromAwsManagedPolicyName('CloudWatchAgentServerPolicy')
            ]
        });
    }



}