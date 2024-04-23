
function removeBrackets() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.rows;
    let stringValues="";
    for (let i = 0; i < rows.length; i++) {
        const inputEl = rows[i].cells[0].children[0];
        const outputEl = rows[i].cells[1].children[0];
        const inputText = inputEl.value;

        // Remove external round brackets using regex
        const cleanedText = removeOutermostBrackets(inputText);
        stringValues = stringValues +" "+cleanedText;
        outputEl.innerText = cleanedText;
    }
    document.getElementById("textPdf").value=stringValues;
}

function removeOutermostBrackets(str) {
  const openingIndex = str.indexOf("(");
  const closingIndex = str.lastIndexOf(")");

  
  if(openingIndex === 0 && closingIndex === str.length - 1){
    str = str.substring(openingIndex+1,closingIndex);
    return removeOutermostBrackets(str);
  }else{
    return str;
  }
}
