/**
 * Slice Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import inquirer from 'inquirer';

import { baseGeneratorPath, pathExists } from '../path';
import path from 'path';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum SlicePropNames {
  sliceName = 'sliceName',
  path = 'path',
  wantSaga = 'wantSaga',
}

type Answers = { [P in SlicePropNames]: string };

export const rootStatePath = `${baseGeneratorPath}/stores/rootState.ts`;

export const typesPath = `${baseGeneratorPath}/types`;

export const sliceGenerator: PlopGeneratorConfig = {
  description: 'Add a redux toolkit slice',
  prompts: [
    {
      type: 'input',
      name: SlicePropNames.sliceName,
      message: 'What should it be called (automatically adds ...Slice postfix)',
    },
    {
      type: 'directory',
      name: SlicePropNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: SlicePropNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const slicePath = `${baseGeneratorPath}/${answers.path}/${answers.sliceName}`;

    if (pathExists(slicePath)) {
      throw new Error(`Slice '${answers.sliceName}' already exists`);
    }
    const actions: Actions = [];

    actions.push({
      type: 'add',
      path: `${slicePath}/index.ts`,
      templateFile: './sliceGenerator/index.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${slicePath}/selectors.ts`,
      templateFile: './sliceGenerator/selectors.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: `${typesPath}/${answers.sliceName}Types.ts`,
      templateFile: './sliceGenerator/types.ts.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\].+\n/),
      templateFile: './sliceGenerator/importContainerState.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'modify',
      path: `${rootStatePath}`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
      templateFile: './sliceGenerator/appendRootState.hbs',
      abortOnFail: true,
    });
    if (answers.wantSaga) {
      actions.push({
        type: 'add',
        path: `${slicePath}/saga.ts`,
        templateFile: './sliceGenerator/saga.ts.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${slicePath}/**` },
    });

    return actions;
  },
};
