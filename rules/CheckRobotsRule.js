
export default class CheckNoIndexCommand {
    value = null;
    robots = null;
    errors = [];
  
    constructor(document) {
      this.robots = document.head.querySelector('meta[name=robots]') || null;
      this.value = this.robots ? this.robots.getAttribute('content') : null;
    }
  
    execute() {

      if (!this.value) {
        this.errors.push('There is no robots file on this site');
      }
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: `The robots says ${this.value}`};
    }
  }
