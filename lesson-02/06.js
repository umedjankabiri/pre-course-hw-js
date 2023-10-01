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
  clone.address.city = "Bobryisk";
  console.log(passportWithAddress);
  console.log(clone);
}
objectCopy();
