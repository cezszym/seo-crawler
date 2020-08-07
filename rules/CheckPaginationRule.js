
export default class CheckPaginationCommand {
    value = null;
    errors = [];
  
    constructor(document) {
      this.value = document.head.querySelector('link[rel="next"]') || document.head.querySelector('link[rel="prev"]') || null;
    }
  
    execute() {

      if (!this.value) {
        this.errors.push('There is no pagination on site or prev/next is missing');
      }
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: "There is pagination and its OK"};
    }
  }
