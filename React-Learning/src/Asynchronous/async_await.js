function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function run() {
  try {
    const data = await fetchData(); // wait here
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

run();