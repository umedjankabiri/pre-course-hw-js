function objectCopy() {
  let passport = {
    name: "Petr",
    surname: "Petrov",
  };
  let copyPassport = { ...passport };
  copyPassport.name = "Ivan";
  console.log(passport);
  console.log(copyPassport);
}
objectCopy();
