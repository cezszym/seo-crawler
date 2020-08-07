
export default class CheckDescriptionCommand {
    value = null;
    errors = [];
  
    constructor(document) {
      this.value = document.head.querySelector('meta[name=description]');
    }
  
    execute() {
      if (!this.value || this.value.length === 0) {
        this.errors.push('The page description is empty');
      }
    }
  
    getResult() {
      if (this.errors.length > 0) {
        return {isValid: false, message: this.errors.toString()};
      }
  
      return {isValid: true, message: 'Meta description is OK'};
    }
  }