function Married() {
  let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
      country: "USA",
      city: "Bobryisk",
    },
  };
  let passportMarried2 = { ...passportMarried };
  passportMarried2.Married = "true";
  console.log(passportMarried);
  console.log(passportMarried2);
}
Married();