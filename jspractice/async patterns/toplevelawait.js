function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Top-level await works!"), 2000);
  });
}

console.log("Start...");
const result = await fetchData();
console.log(result);
console.log("End...")