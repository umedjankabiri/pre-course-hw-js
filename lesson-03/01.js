const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
function createColorString() {
  return colors
    .filter(
      (value) => value == "черный" || value == "красный" || value == "желтый"
    )
    .join("-");
}
console.log(createColorString());
