function processArray() {
  const outputDiv = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); 
  })
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.innerText = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 500); // Reduced from 1000ms
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.innerText = multipliedNumbers.join(", ");
          resolve(multipliedNumbers);
        }, 1000); 
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
