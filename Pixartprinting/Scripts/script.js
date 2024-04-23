let rowNum = 1;

function addRow() {
    rowNum++;
    const tableBody = document.getElementById("tableBody");
    const newRow = tableBody.insertRow();
    const inputCell = newRow.insertCell();
    const outputCell = newRow.insertCell();

    inputCell.innerHTML = `<td><input type="text" id="input${rowNum}"></td>`;
    outputCell.innerHTML = `<td><pre id="output${rowNum}"></pre></td>`;
}
function createSpiral(size, string) {
  // Initialize empty square matrix
  const matrix = Array.from({ length: size }, () => Array(size).fill(""));

  // Define direction variables and starting position
  let direction = "right";
  let x = 0;
  let y = 0;

  // Loop through all elements in the matrix
  for (let i = 0; i < size * size; i++) {
    // Set current element with the string
    matrix[y][x] = string;

    // Change direction based on current position and rules
    switch (direction) {
      case "right":
        if (x === size - 1 || matrix[y][x + 1] !== "") {
          direction = "down";
          y++;
        } else {
          x++;
        }
        break;
      case "down":
        if (y === size - 1 || matrix[y + 1][x] !== "") {
          direction = "left";
          x--;
        } else {
          y++;
        }
        break;
      case "left":
        if (x === 0 || matrix[y][x - 1] !== "") {
          direction = "up";
          y--;
        } else {
          x--;
        }
        break;
      case "up":
        if (y === 0 || matrix[y - 1][x] !== "") {
          direction = "right";
          x++;
        } else {
          y--;
        }
        break;
    }
  }

  // Return the completed square matrix
  return matrix;
}

// Example usage
const size = 5;
const string = "helLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut est ut eros iaculis luctus quis eget sapien. In in porttitor quam, nec aliquam nibh. Aliquam ut quam congue, placerat lectus a, feugiat est. Aenean a placerat orci, id pulvinar mi. Proin consectetur nec velit non luctus. Suspendisse ullamcorper odio sit amet ante viverra, non dapibus nunc porttitor. Duis condimentum fermentum sapien ac cursus. Ut sed mi a elit sodales eleifend nec eget ex. Nunc at sapien diam.lo";
const spiral = createSpiral(size, string);

console.log(spiral);
