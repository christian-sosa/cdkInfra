import * as cdk from '@aws-cdk/core';

export interface EC2ResourcesProps extends cdk.StackProps {
    stage:string; //dev,qa,prod,
    projectName:string;
    vpcId:string;
    publicSubnetIds:string[];
    privateSubnetIds:string[];
    availabilityZones:string[];
    amiId:string;
    securityGroupId:string;
    keyName:string;
    certificateArn: string;


}