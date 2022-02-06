require('dotenv').config()
import { ProcessEnv, ProcessEnv2 } from "../../interfaces/env"

const AZPS: ProcessEnv2 ={
    az1: process.env.aZs11,
    az2: process.env.aZs12,
    ps1:  process.env.privateSubnets11,
    ps2: process.env.privateSubnets12

}

const vpcStackPRD = {
    env: { account: process.env.account, region: process.env.region },
    aZs: [
        process.env.aZsVPC1,
        process.env.aZsVPC2
    ],
    vpcCidr: process.env.vpcCidr,
    stage: process.env.stage
}

const rds1 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId,
    securityGroupId: process.env.securityGroupId,
    aZs: [AZPS.az1,AZPS.az2] ,
    privateSubnets:[
        AZPS.ps1,
        AZPS.ps2
    ]
}

const rds2 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId2,
    securityGroupId: process.env.securityGroupId2,
    aZs: [process.env.aZs21,process.env.aZs22],
    privateSubnets:[
        process.env.privateSubnets21,
        process.env.privateSubnets22
    ]
}

const rds3 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId3,
    securityGroupId: process.env.securityGroupId3,
    aZs: [process.env.aZs31,process.env.aZs32],
    privateSubnets:[
        process.env.privateSubnets31,
        process.env.privateSubnets32
    ]
}

const rds4 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId4,
    securityGroupId: process.env.securityGroupId4,
    aZs: [process.env.aZs41,process.env.aZs42],
    privateSubnets:[
        process.env.privateSubnets41,
        process.env.privateSubnets42
    ]
}

const rds5 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId5,
    securityGroupId: process.env.securityGroupId5,
    aZs: [process.env.aZs51,process.env.aZs52],
    privateSubnets:[
        process.env.privateSubnets51,
        process.env.privateSubnets52
    ]
}

const rds6 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId6,
    securityGroupId: process.env.securityGroupId6,
    aZs: [process.env.aZs61,process.env.aZs62],
    privateSubnets:[
        process.env.privateSubnets61,
        process.env.privateSubnets62
    ]
}

const rds7 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId7,
    securityGroupId: process.env.securityGroupId7,
    aZs: [process.env.aZs71,process.env.aZs72],
    privateSubnets:[
        process.env.privateSubnets71,
        process.env.privateSubnets72
    ]
}

const rds8 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId8,
    securityGroupId: process.env.securityGroupId8,
    aZs: [process.env.aZs81,process.env.aZs82],
    privateSubnets:[
        process.env.privateSubnets81,
        process.env.privateSubnets82
    ]
}

const rds9 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId9,
    securityGroupId: process.env.securityGroupId9,
    aZs: [process.env.aZs91,process.env.aZs92],
    privateSubnets:[
        process.env.privateSubnets91,
        process.env.privateSubnets92
    ]
}

const rds10 = {
    env: { account: process.env.account, region: process.env.region },
    stage: process.env.stage, 
    vpcId: process.env.vpcId10,
    securityGroupId: process.env.securityGroupId10,
    aZs: [process.env.aZs101,process.env.aZs102],
    privateSubnets:[
        process.env.privateSubnets101,
        process.env.privateSubnets102
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