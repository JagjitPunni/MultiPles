//start or controller function
function getValues() {
  //get values from the page
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;

  //We need to validate our input
  //parse into integers with build-in function
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let fbData = fizzBuzz(fizzValue, buzzValue);
    displayData(fbData);
  } else {
    alert('You must enter integers');
  }
}

//logic functions(s)
function fizzBuzz(value1, value2) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % value1 == 0 && i % value2 == 0) {
      returnArray.push('FizzBuzz');
    } else if (i % value1 == 0) {
      returnArray.push('Fizz');
    } else if (i % value2 == 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(i);
    }
  }

  return returnArray;
}

//display or view functions
function displayData(fbData) {
  //get the table body element from the page
  let tableBody = document.getElementById('results');

  //get the template row
  let templateRow = document.getElementById('fbTemplate');

  //clear table first
  tableBody.innerHTML = '';

  for (let i = 0; i < fbData.length; i += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    //grab use the td#s to put into array
    let rowCols = tableRow.querySelectorAll('td');
    rowCols[0].classList.add(fbData[i]);
    rowCols[0].textContent = fbData[i];

    rowCols[1].classList.add(fbData[i + 1]);
    rowCols[1].textContent = fbData[i + 1];

    rowCols[2].classList.add(fbData[i + 2]);
    rowCols[2].textContent = fbData[i + 2];

    rowCols[3].classList.add(fbData[i + 3]);
    rowCols[3].textContent = fbData[i + 3];

    rowCols[4].classList.add(fbData[i + 4]);
    rowCols[4].textContent = fbData[i + 4];

    tableBody.appendChild(tableRow);
  }
}
