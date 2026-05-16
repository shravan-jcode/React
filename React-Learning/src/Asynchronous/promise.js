function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data received");
      } else {
        reject("Failed to fetch");
      }
    }, 2000);
  });
}

fetchData(true)
  .then((data) => {
    console.log("SUCCESS:", data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });