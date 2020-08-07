
export default class CheckResponsiveCommand {
    value = null;
    errors = [];
  
    constructor(document) {
      this.value = document.head.querySelector('meta[name=viewport]');
    }
  
    execute() {
      if (!this.value || this.value.length === 0) {
        this.errors.push('The page is missing viewport tag');
      }
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: 'Viewport tag is OK'};
    }
  }