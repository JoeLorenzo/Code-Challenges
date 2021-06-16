// A stack data structure using a string
const Stack = function () {
  this.storage = "";
  this.size = 0;
  return console.log(this.storage);
};

Stack.prototype.push = function (val) {
  this.storage += "-" + val;
  this.size += 1;
  return this.storage;
};

Stack.prototype.pop = function () {
  let item = "";
  for (i = this.storage.length - 1; i > 0; i--) {
    if (this.storage[i] !== "-") {
      item = this.storage[i] + item;
      this.storage = this.storage.slice(0, -1);
    } else {
      this.storage = this.storage.slice(0, -1);
      this.size -= 1;
      return item;
    }
  }
  if ((this.storage.length = 1)) {
    this.size = 0;
    this.storage = "";
  }
};

Stack.prototype.stackSize = function () {
  // console.log(this.storage);
  return console.log(this.size);
};
const newStack = new Stack();
console.log(newStack.push("hello"));
console.log(newStack.push("world"));
console.log(newStack.stackSize());
console.log(newStack.pop());
console.log(newStack.pop());
console.log("stack should be empty");
console.log(newStack.stackSize());
