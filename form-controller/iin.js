const messageErrorNullIin = "form.error.messageErrorNullIin";
const messageNoDecimalIin = "form.error.messageNoDecimalIin";
const messageLengthErrorIin = "form.error.messageLengthErrorIin";
const messageErrorIin = "form.error.messageErrorIin";

export default class Iin {
  constructor() {
    this.messageText = messageErrorNullIin;
  }
  validate(i, errorText) {
    if (i.length == 0) {
      this.messageText = messageErrorNullIin;
      return false;
    }
    if (i.match(/\D/)) {
      this.messageText = messageNoDecimalIin;
      return false;
    }
    let iin = i;

    if (iin.length !== 12) {
      this.messageText = messageLengthErrorIin;
      return false;
    }

    this.messageText = messageErrorIin;

    let razryad = {
      1: { gen: "man", century: 1800 },
      2: { gen: "baba", century: 1800 },
      3: { gen: "man", century: 1900 },
      4: { gen: "baba", century: 1900 },
      5: { gen: "man", century: 2000 },
      6: { gen: "baba", century: 2000 }
    };
    let century = Object.keys(razryad);
    century = century.find(i => iin[6] == i);
    if (!century) return false;
    century = razryad[century].century;

    let year = century + parseInt(iin.slice(0, 2));
    let month = iin.slice(2, 4);
    let day = iin.slice(4, 6);
    if (day == 0 || day > 31) {
      return false;
    }
    if (month == 0 || month > 12) {
      return false;
    }
    if (new Date().getFullYear() < year) {
      return false;
    }

    let b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
    let a = [];
    let controll = 0;

    for (let i = 0; i < 12; i++) {
      a[i] = parseInt(iin.substring(i, i + 1));
      if (i < 11) controll += a[i] * b1[i];
    }

    controll = controll % 11;

    if (controll === 10) {
      controll = 0;
      for (let i = 0; i < 11; i++) controll += a[i] * b2[i];
      controll = controll % 11;
    }

    if (controll !== a[11]) {
      return false;
    }
    this.messageText = messageErrorNullIin;
    return true;
  }
}
