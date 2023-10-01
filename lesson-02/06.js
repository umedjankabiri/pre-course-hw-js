function objectCopy() {
  let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
      country: "USA",
      city: "LA",
    },
  };
  let clone = {};
  for (let i in passportWithAddress) {
    clone[i] = passportWithAddress[i];
  }
  clone.address.city = "Babryisk";
  console.log(clone);
}
objectCopy();
