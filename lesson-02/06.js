function objectCopy() {
  let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
      country: "USA",
      city: "LA",
    },
  };
  let copyPassportWithAddress = Object.assign({}, passportWithAddress);
  console.log(passportWithAddress.address.city);
  copyPassportWithAddress.address.city = "Bobryisk";
  console.log(copyPassportWithAddress.address.city);
}
objectCopy();
