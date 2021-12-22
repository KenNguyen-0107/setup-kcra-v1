import { NodePlopAPI } from 'node-plop';
import shell from 'shelljs';
import { componentGenerator } from './componentGenerator';
import { sliceGenerator } from './sliceGenerator';

interface PrettifyCustomAction {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data as PrettifyCustomAction;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
