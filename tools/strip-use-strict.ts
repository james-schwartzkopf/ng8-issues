import * as fs from 'fs';
import * as path from 'path';

// TODO get rid of this once @angular/angular #30569 is fixed
// https://github.com/angular/angular/issues/30569

const [_, __, ...dirs] = process.argv;

dirs.forEach(dir => fs.readdirSync(dir).filter(filename => /-es5([.][0-9]+|)[.]js$/.test(filename)).forEach(filename => {
  const filepath = path.join(dir, filename);
  const text = fs.readFileSync(filepath, 'utf-8');
  const newText = text.replace(/"use strict";/g, '"";');
  if (newText !== text) {
    fs.writeFileSync(filepath, newText, 'utf-8');
  }
}));
