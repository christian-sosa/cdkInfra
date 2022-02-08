import { IVpcProps } from "../../interfaces/vpc-props";
import { EC2ResourcesProps } from "../../interfaces/ec2-props"


const vpcStackPRD: IVpcProps = {
    env: { account: 'XXXX', region: 'us-east-2' },
    aZs: [
        'us-east-2a',
        'us-east-2b'
    ],
    vpcCidr: '0.0.0.0/0',
    stage: 'PROD'
}

const rds1 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds2 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds3 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds4 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds5 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds6 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    name: 'RDS',
    stage:'PROD',  
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds7 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD', 
    name: 'RDS', 
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds8 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds9 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const rds10 = {
    env: { account: 'XXXX', region: 'us-east-2' },
    stage:'PROD',  
    name: 'RDS',
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
}

const ec2ResourcesPRD: EC2ResourcesProps = {
    env: { account: 'XXX', region: 'us-east-2' },
    stage: 'PRD',
    vpcId: 'vpc-XXX',
    availabilityZones: ['us-east-2a', 'us-east-2b'],
    amiId: 'ami-XXX',
    publicSubnetIds: ['subnet-XXX', 'subnet-XXX'],
    privateSubnetIds: ['subnet-XXX', 'subnet-XXX'],
    securityGroupId: 'sg-XXX',
    keyName: 'Pem',
    projectName: 'name',
    certificateArn:'arn:aws:acm:us-east-2:509280318280:certificate/64d5c76b-13ef-47f6-9334-b9d441d2b40e',
}



export const PROPS = {
    vpcStackPRD,
    rds1,
    rds2,
    rds3,
    rds4,
    rds5,
    rds6,
    rds7,
    rds8,
    rds9,
    rds10,
    ec2ResourcesPRD
}