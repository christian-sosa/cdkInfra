import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as rds from '@aws-cdk/aws-rds';
import { InstanceClass, InstanceSize, InstanceType, ISubnet, IVpc, Subnet, ISecurityGroup } from '@aws-cdk/aws-ec2';
import { MysqlEngineVersion } from '@aws-cdk/aws-rds';
import { RdsProps } from '../interfaces/rds-props';

export class RDSStack extends cdk.Stack {
  private vpc: IVpc;
  private subnets: ISubnet[];
  sg: ISecurityGroup;

  constructor(scope: cdk.Construct, id: string, props: RdsProps) {
    super(scope, id, props);

    this.getVPC(props);
    this.getSubnets(props);
    this.createSecurityGroup(props);
    this.createRDS(props);
  }

  getVPC(props: RdsProps) {
    this.vpc = ec2.Vpc.fromVpcAttributes(this, `FalpVPC-${props.stage}`, {
      vpcId: props.vpcId,
      availabilityZones: props.aZs
    })
  }

  getSubnets(props:RdsProps) {
    this.subnets = [
      Subnet.fromSubnetAttributes(this, `PrivateSubnet1-${props.stage}`, {
        subnetId: props.privateSubnets[0],
        availabilityZone: props.aZs[0],
      }),
      Subnet.fromSubnetAttributes(this, `PrivateSubnet2-${props.stage}`, {
        subnetId: props.privateSubnets[1],
        availabilityZone: props.aZs[1],
      })
    ]
  }

  createSecurityGroup(props:RdsProps) {
    this.sg = ec2.SecurityGroup.fromSecurityGroupId(this, 'FalpSG', props.securityGroupId);
  }

  //RDS
  createRDS(props:RdsProps) {
    const instance = new rds.DatabaseInstance(this, 'Instance', {
      engine: rds.DatabaseInstanceEngine.mysql({ version: MysqlEngineVersion.VER_5_7_22 }),
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MEDIUM),
      instanceIdentifier: `FALP-${props.stage}`,
      databaseName: 'wordpress',
      publiclyAccessible: false,
      credentials: rds.Credentials.fromGeneratedSecret('wordpress'),
      vpc: this.vpc,
      vpcSubnets: {
        subnets: this.subnets
      },
      securityGroups: [
        this.sg
      ]
    });

    return instance;
  }

}
