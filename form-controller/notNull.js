const messageNotNull = "form.error.messageNotNull";

export default class NotNull {
  constructor() {}
  validate(value, errorText) {
    this.messageText = errorText || messageNotNull;
    if (!value) {
      return false;
    }
    return true;
  }
}
