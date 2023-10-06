function emulationIndexOf() {
  const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
  const elemIndex = words.indexOf("апельсин");
  elemIndex == "апельсин"
    ? console.log("Придется поискать в другом магазине...")
    : console.log("Ура! нашел");
}
emulationIndexOf();
