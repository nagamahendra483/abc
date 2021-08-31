function load() {
  const tableDiv = document.getElementById('table-body');
  const values = JSON.parse(localStorage.getItem("obj"));
  let text = "";
  values.forEach(data => {
    text += `<tr>
      <td>${data.title}</td>
      <td>${data.option1}</td>
      <td>${data.option2}</td>
      <td>${data.option3}</td>
      <td>${data.option4}</td>
      <td>${data.correct}</td>
      <td><button class="btn btn-primary btn-sm" type="button" onClick="removeRow(this)">Remove</button></td>
    </tr>`
  });
  tableDiv.innerHTML = text;
}

const removeRow = (td) => {
  row = td.parentElement.parentElement;
  const values = JSON.parse(localStorage.getItem("obj"));
  const remainingvalues = values.filter((element, index) => index != (row.rowIndex - 1));
  localStorage.setItem("obj", JSON.stringify(remainingvalues));
  document.getElementById("table1").deleteRow(row.rowIndex);
}
