import BooleanTrue from "~/form/booleanTrue";
import Iin from "~/form/iin";
import Phone from "~/form/phone";
import NotNull from "~/form/notNull";


export default class Validation {

}


Validation.prototype.booleanTrue = new BooleanTrue()
Validation.prototype.iin = new Iin()
Validation.prototype.phone = new Phone()
Validation.prototype.notNull = new NotNull()
