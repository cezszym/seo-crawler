import CheckTitleRule from './rules/CheckTitleRule.js';
import CheckDescriptionRule from './rules/CheckDescriptionRule.js';
import CheckNoIndexRule from './rules/CheckRobotsRule.js';
import CheckCanonicalRule from './rules/CheckCanonicalRule.js';
import CheckPaginationRule from './rules/CheckPaginationRule.js';
import CheckOnlyOneRule from './rules/CheckOnlyOneRule.js';
import CheckResponsiveRule from './rules/CheckResponiveRule.js';

export default class Validator {
    document = null;
    url = null;
    json = {};

    constructor(dom, url) {
      this.document = dom.window.document;
      this.url = url
    }
  
    validate() {
      console.log(`Checking for url ===>  ${this.url}`);
      [
        new CheckTitleRule(this.document),
        new CheckDescriptionRule(this.document),
        new CheckNoIndexRule(this.document),
        new CheckPaginationRule(this.document),
        new CheckOnlyOneRule(this.document),
        new CheckResponsiveRule(this.document),
        new CheckCanonicalRule(this.document, this.url)
      ].forEach(rule => {
         rule.execute();
         console.log(rule.getResult().message);
      });
      console.log('\n');
    }
  }