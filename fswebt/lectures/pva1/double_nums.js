function doubleNums(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
