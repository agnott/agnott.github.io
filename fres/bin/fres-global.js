#!/usr/bin/env node

const Fres = require('../lib/generator');

class CLI {
  constructor() {
    this.options = {
      general: [],
    };
  }

  parse(argv) {
    let isKey;
    let value;
    let keyContext;
    for (let arg of argv) {
      isKey = !!arg.match(/^--\w+$/);
      value = isKey ? arg.replace(/^--/, '') : arg;

      if (!keyContext && !isKey) {
        this.options.general.push(value);
        continue;
      }

      if (isKey) keyContext = value;

      if (isKey) {
        this.options[value] = null;
      } else if (keyContext && !this.options[keyContext]) {
        this.options[keyContext] = value;
      } else if (Array.isArray(this.options[keyContext])) {
        this.options[keyContext] = this.options[keyContext].concat([value]);
      } else {
        this.options[keyContext] = [this.options[keyContext], value];
      }
    }

    return this.options;
  }
}

const options = (new CLI()).parse(process.argv);

const fres = new Fres(options).save();

console.log(fres.metadata, fres.indexes);
