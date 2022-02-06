#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RDSStack } from '../lib/rds-stack';
import { PROPS } from './props/props';

const app = new cdk.App();
new RDSStack(app,'FalpRDSStackPRD',PROPS.rds1)
