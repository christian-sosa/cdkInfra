import * as cdk from '@aws-cdk/core';

export interface IVpcProps extends cdk.StackProps {
    vpcCidr: string;
    aZs: string[];
    stage:string;
}