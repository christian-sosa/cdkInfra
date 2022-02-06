export interface ProcessEnv {
    vpcCidr: string | undefined;
    aZs: Array<string> | undefined;
    stage:string | undefined;
    vpcId:string | undefined;
    securityGroupId:string | undefined;
    privateSubnets:string[] | undefined;
}

export interface ProcessEnv2 {
    az1: string | undefined;
    az2: string | undefined;
    ps1: string | undefined;
    ps2: string | undefined;
}