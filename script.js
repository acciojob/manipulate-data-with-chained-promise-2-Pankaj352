function processArray() {
  const outputDiv = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); // Initial 1-second delay (matches Cypress wait)
  })
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.innerText = evenNumbers.join(", "); // Update output
          resolve(evenNumbers);
        }, 1000); // 1-second delay (matches Cypress wait)
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.innerText = multipliedNumbers.join(", "); // Update output
          resolve(multipliedNumbers);
        }, 2000); // 2-second delay (matches Cypress wait)
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function on script load
processArray();
