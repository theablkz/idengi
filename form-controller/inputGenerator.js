import Regular from "./regular";

class Generator {
  constructor(form) {
    this.warning = false
    this.defaultValue = form.value;
    this.form = form;
    this.component = () => import(`~/components/inputs/${form.type}`);
    this.setValue = e => {
      this.form.error = false
      if (e.target.value.length > this.form.typing.max) {
        this.form.value = this.defaultValue;
        return 0;
      }
      if (
        Regular[this.form.typing.regex].test(e.target.value) ||
        e.target.value.length === 0
      ) {
        this.defaultValue = e.target.value;
        this.warning = false
      } else {
        this.form.value = this.defaultValue;
        this.warning = true
      }
    };
    this.pushValue = (e) => {
      let answer = this.form.documentSelects.find(el => el.id === e.target.value)
      let child = this.form.child.find(item => item.childId === answer.childId)

      child.typing = answer.typing
      child.value = ""
      child.input_type = answer.input_type
      this.form.error = false
      console.log(answer, child)
    }
    this.removeWarning = () => { this.warning = false }
    this.removeError = () => { this.form.error = false }
    this.removeWarningChild = (child) => {child.warning = false}
    this.setValueChild = (child) => {
      child.error = false
      if (child.value.length > child.typing.max) {
        child.value = child.defaultValue;
        return 0;
      }
      if (
        Regular[child.typing.regex].test(child.value) ||
        child.value.length === 0
      ) {
        child.defaultValue = child.value;
        child.warning = false
      } else {
        child.value = child.defaultValue;
        child.warning = true
      }
    }
  }
  hi(){
    console.log('this is my method')
  }
}

export default Generator;
