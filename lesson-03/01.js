function createColorString() {
  const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
  return colors
    .filter(
      (value) => value == "черный" || value == "красный" || value == "желтый"
    )
    .join("-");
}
console.log(createColorString());
