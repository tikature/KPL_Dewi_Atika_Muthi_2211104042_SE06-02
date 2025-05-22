class Observer {
  update(data) {
    throw new Error("Method 'update()' harus diimplementasikan oleh subclass.");
  }
}

module.exports = Observer;
