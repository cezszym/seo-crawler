
export default class CheckOnlyOneCommand {
    value = null;
    errors = [];
  
    constructor(document) {
      this.value = document.getElementsByTagName('h1').length || 2;
    }
  
    execute() {

      if (this.value > 1) {
        this.errors.push('There is more or less than one h1');
      }
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: "Use of h1 tag is OK"};
    }
  }
