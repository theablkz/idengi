import Regular from "./regular";

const messageErrorNull = "form.error.messageErrorNull";

const messageErrorNotValid = "form.error.messageErrorNotValid";

export default class Cyrillic {
  constructor() {
    this.messageText = "";
    this.regular = Regular.cyrillic;
  }

  validate(value, errorText) {
    if (value.trim().length == 0) {
      this.messageText = errorText || messageErrorNull;
      return false;
    }
    if (!this.regular.test(value.trim())) {
      this.messageText = messageErrorNotValid;
      return false;
    }
    this.messageText = errorText || messageErrorNull;
    return true;
  }
}
