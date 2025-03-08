//your JS code here. If required.
function processArray() {
  const outputDiv = document.getElementById("output");

  // Initial Promise: Resolves with the array after 3 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    .then((arr) => {
      // First Transformation: Filter out odd numbers (1-second delay)
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.innerText = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Second Transformation: Multiply even numbers by 2 (2-second delay)
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.innerText = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function when the script loads
processArray();
