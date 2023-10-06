function indexOfEmulation() {
  const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
  if (words.indexOf("апельсин")) return "Ура! нашел";
  else return "Придется поискать в другом магазине…";
}
console.log(indexOfEmulation());
