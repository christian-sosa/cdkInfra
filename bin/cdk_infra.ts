#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RDSStack } from '../lib/rds-stack';
import { PROPS } from './props/props';
import { EC2ResourcesStack } from '../lib/ec2-stack';

const app = new cdk.App();
new RDSStack(app,'RDS1',PROPS.rds1)

new RDSStack(app,'RDS2',PROPS.rds2)

new RDSStack(app,'RDS3',PROPS.rds3)

new RDSStack(app,'RDS4',PROPS.rds4)

new RDSStack(app,'RDS5',PROPS.rds5)

new RDSStack(app,'RDS6',PROPS.rds6)

new RDSStack(app,'RDS7',PROPS.rds7)

new RDSStack(app,'RDS8',PROPS.rds8)

new RDSStack(app,'RDS9',PROPS.rds9)

new RDSStack(app,'RDS10',PROPS.rds10)

new EC2ResourcesStack(app, 'EC2STACK', PROPS.ec2ResourcesPRD)
