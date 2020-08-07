
export default class CheckCanonicalCommand {
    value = null;
    canonical = null;
    errors = [];
    url = null;

    constructor(document, url) {
      this.canonical = document.head.querySelector('link[rel="canonical"]') || null;
      this.value = this.canonical ? this.canonical.getAttribute('href') : null;
      this.url = url;
    }
  
    execute() {

    if (!this.value) {
        this.errors.push('There is no canonical on this site');
    } else if (this.value !== this.url) {
        this.errors.push('Canonical doesnt match url');
    }

    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: `There is cannonical on the site and its OK`};
    }
  }
