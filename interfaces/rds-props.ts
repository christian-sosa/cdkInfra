import * as cdk from '@aws-cdk/core';

export interface RdsProps extends cdk.StackProps {
    stage:string; //dev,qa,prod,
    vpcId:string;
    securityGroupId:string;
    aZs:string[];
    privateSubnets:string[];
    name:string;
}