function processArray() {
  const outputDiv = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Fix: 3-second initial delay as per requirements
  })
    .then((arr) => {
      return new Promise((resolve) => {
        const evenNumbers = arr.filter((num) => num % 2 === 0);
        setTimeout(() => {
          outputDiv.innerText = evenNumbers.join(", "); // Update output
          resolve(evenNumbers);
        }, 1000); // 1-second delay for filtering step
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        setTimeout(() => {
          outputDiv.innerText = multipliedNumbers.join(", "); // Update output
          resolve(multipliedNumbers);
        }, 2000); // 2-second delay for multiplication step
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function on script load
processArray();
