/**********
* FRES: Static Site Generator
***********
* This should do a few things:
*   - Explore post configs placed in input folder
*   - Build a representation of each post, probably in JSON
*   - Build a representation of all the content, probably in JSON
*   - Build a searchable index of keywords, tags, post content (?)
*   - Place these generated assets in output folder
**********/

const fs = require('fs');
const glob = require('glob');
const cheerio = require('cheerio');

class Fres {
  constructor(config) {
    this.config = config;

    this.metadata = this.getMetadata();
    this.indexes = this.getIndexes();
  }

  getMetadata() {
    const globString = (this.config.input.slice(-1) === '/') ?
      `${this.config.input}**/*.html` : `${this.config.input}/**/*.html`;

    return glob.sync(globString).map((file) => {
      const contents = fs.readFileSync(file);
      const dom = cheerio.load(contents);
      const data = dom('script#fres-metadata').html();
      return JSON.parse(data);
    });
  }

  getIndexKeywords() {
    const keywordsIndex = {};

    this.metadata.forEach((md) => {
      md.keywords.forEach((keyword) => {
        keywordsIndex[keyword] = keyword in keywordsIndex ?
          [...keywordsIndex[keyword], md.id] : [md.id];
      });
    });

    return keywordsIndex;
  }

  getIndexes() {
    return {
      keywords: this.getIndexKeywords(),
    };
  }

  save() {
    const output = (this.config.output.slice(-1) === '/') ?
      this.config.output.slice(0, -1) : this.config.output;

    fs.writeFileSync(`${output}/metadata.json`, JSON.stringify(this.metadata));
    fs.writeFileSync(`${output}/index.keywords.json`, JSON.stringify(this.indexes.keywords));

    return this;
  }
}

module.exports = Fres;
