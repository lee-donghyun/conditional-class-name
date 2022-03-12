
class ConditionalClassName {
  constructor(classNames) {
    this.classNames = classNames ?? "";
    this.readyToAdd = null;
  }
  if(condition) {
    if (condition && this.readyToAdd == null) {
      this.readyToAdd = true;
    } else {
      this.readyToAdd = false;
    }
    return this;
  }
  elif(condition) {
    if (condition && this.readyToAdd == false) {
      this.readyToAdd = true;
    }
    return this;
  }
  else() {
    if (this.readyToAdd == false) {
      this.readyToAdd = true;
    }
    return this;
  }
  push(className) {
    if (this.readyToAdd) {
      this.classNames = this.classNames + " " + className;
      this.readyToAdd = null;
    }
    return this;
  }
  toString() {
    return this.classNames;
  }
  return() {
    return this.classNames;
  }
}

const cn = (base) => new ConditionalClassName(base);

module.exports = cn