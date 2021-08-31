function load(){
    const tableDiv = document.getElementById('table-body');
    // var table = document.getElementById('table-body');

	// var rowCount = table.rows.length;
	// var row = table.insertRow(rowCount);
    // const title= localStorage.getItem("title"), option1=localStorage.getItem("option1"), option2=localStorage.getItem("option2"),
    // option3=localStorage.getItem("option3"),option4=localStorage.getItem("option4"), correct=localStorage.getItem("correct");
    const data=JSON.parse(localStorage.getItem("obj"));
    // addtolist(data);
    // displayAll();

    const content = `<tr>
      <td>${data.title}</td>
      <td>${data.option1}</td>
      <td>${data.option2}</td>
      <td>${data.option3}</td>
      <td>${data.option4}</td>
      <td>${data.correct}</td>
      <td><button class="btn btn-primary btn-sm" type="button" onClick="removeRow(this)">Remove</button></td>
    </tr>`;
    
    tableDiv.innerHTML += content; 
}

// list=[];
// function addtolist(data1){
//   list.push(data1);
  

// }

// function displayAll(){
//   const tableDiv = document.getElementById('table-body');
//     for(let dat in list){
//       const content = `<tr>
//       <td>${dat.title}</td>
//       <td>${dat.option1}</td>
//       <td>${dat.option2}</td>
//       <td>${dat.option3}</td>
//       <td>${dat.option4}</td>
//       <td>${dat.correct}</td>
//       <td><button class="btn btn-primary btn-sm" type="button" onClick="removeRow(this)">Remove</button></td>
//     </tr>`;
    
//     tableDiv.innerHTML += content; 

//     }
// }
// function myFunction() {
//     var table = document.getElementById("table-body");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     var cell6 = row.insertCell(5);
//     cell1.innerHTML = localStorage.getItem("title");
//     cell2.innerHTML = localStorage.getItem("option1");
//     cell3.innerHTML = localStorage.getItem("option2")
//     cell4.innerHTML = localStorage.getItem("option3")
//     cell5.innerHTML = localStorage.getItem("option4")
//     cell6.innerHTML = localStorage.getItem("correct")
//   }

const removeRow = (td)=>{
   
        row=td.parentElement.parentElement;
        document.getElementById("table1").deleteRow(row.rowIndex);
        
      }
    // document.getElementById("title").innerHTML=localStorage.getItem("title");

    // document.getElementById("option1").innerHTML=localStorage.getItem("option1");
    // document.getElementById("option2").innerHTML=localStorage.getItem("option2");
    // document.getElementById("option3").innerHTML=localStorage.getItem("option3");
    // document.getElementById("option4").innerHTML=localStorage.getItem("option4");
    // document.getElementById("correct").innerHTML=localStorage.getItem("right");
  