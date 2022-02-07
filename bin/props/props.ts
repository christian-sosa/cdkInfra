import { IVpcProps } from "../../interfaces/vpc-props";


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
    vpcId:'vpc-XXX',
    securityGroupId:'sg-XXX',
    aZs:['us-east2a','us-east2b'],
    privateSubnets:[
        'subnet-XXXX',
        'subnet-XXXX'
    ]
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
    rds10
}