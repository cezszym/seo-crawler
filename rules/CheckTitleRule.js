

export default class CheckTitleRule {
    value = null;
    errors = [];
  
    constructor(document) {
      this.value = document.title;
    }
  
    execute() {
      if (!this.value || this.value.length === 0) {
        this.errors.push('The page title is empty');
      } else if (this.value.length > 65) {
        this.errors.push('The page title is too long');
      }   
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: 'Title is OK'};
    }
  }