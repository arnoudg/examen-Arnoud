function Text(string) {
  this.str = string;
  this.left = function left(number) {
    return string.slice(0, number);
  };
}
