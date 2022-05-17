import { CliOptions } from './types';

export const browserMockTemplate = (
  handlersCode: string,
  baseURL: string,
  options?: CliOptions
) => `/**
* This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
* Feel free to commit/edit it as you need.
*/
/* eslint-disable */
/* tslint:disable */
const { rest } = require('msw');
const { faker } = require('@faker-js/faker');

faker.seed(1);

const baseURL = '${baseURL}';
const MAX_ARRAY_LENGTH = ${options?.maxArrayLength ?? 20};

const gen = (function *() {
  let i = 0;
  while (true) {
    if (i === Number.MAX_SAFE_INTEGER - 1) {
      i = 0;
    }
    yield i;
  }
})();

exports.handlers = [
  ${handlersCode}
];

`;
