const messageNotConfirm = "form.error.messageNotConfirm";

export default class BooleanTrue {
  constructor() {}
  validate(value, errorText) {
    this.messageText = errorText || messageNotConfirm;
    if (!value) {
      return false;
    }
    return true;
  }
}
