function Married() {
  let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
      country: "USA",
      city: "Bobryisk",
    },
  };
  let passportMarried2 = { ...passportMarried, married: true };
  passportMarried2.married = "true";
  console.log(passportMarried);
  console.log(passportMarried2);
}
Married();
