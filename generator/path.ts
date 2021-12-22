import * as path from 'path';
import fs from 'fs';

export const baseGeneratorPath = path.join(__dirname, '../src');

export function pathExists(path: string) {
  return fs.existsSync(path);
}
