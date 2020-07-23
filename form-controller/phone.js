const messageNotNullPhone = "form.error.messageNotNullPhone";
const messageNotValidPhone = "form.error.messageNotValidPhone";

export default class Phone {
  constructor() {
    this.messageText = messageNotNullPhone;
  }
  validate(number, errText) {
    if (number.length == 0) {
      return false;
    }
    if (!number.match(/[0-9]/g)) {
      this.messageText = errText || messageNotNullPhone;
      return false;
    }
    if (number.match(/[0-9]/g).length !== 11) {
      this.messageText = messageNotValidPhone;
      return false;
    }
    return true;
  }
}
