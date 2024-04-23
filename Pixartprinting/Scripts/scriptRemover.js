
function removePairs() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.rows;
    let stringValues="";
    for (let i = 0; i < rows.length; i++) {
        const inputEl = rows[i].cells[0].children[0];
        const outputEl = rows[i].cells[1].children[0];
        const inputText = inputEl.value;

        // Remove pair characters
        const cleanedText = RemoveMatchingLetters(inputText);
        stringValues = stringValues +" "+cleanedText;
        outputEl.innerText = cleanedText;
    }
    document.getElementById("textPdf").value=stringValues;
}

const letters="abcdefghijklmnopqrstuvwxyz";

function RemoveMatchingLetters(str) { 
  let tmp = str.toLowerCase();
  let mid =letters.length/2;
  for(let i=0, j=letters.length-1;i<mid+1,j>mid-1;i++,j--){
    if(tmp.startsWith(letters[i])&&tmp.endsWith(letters[j])){
        tmp = tmp.substring(1,tmp.length-1)
    }
  }
  return tmp;
}


