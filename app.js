const renderErrorMessages = (errors) => {
    const errorDiv = document.getElementById('error-msg-div');
  
    const content = errors.map(error => `<li>${error}</li>`).join('');
    
  
    errorDiv.innerHTML = content;
  }
  
//   const renderTableRows = () => {
//     const tableDiv = document.getElementById('table-body');
//     let title= localStorage.getItem("title"), option1=localStorage.getItem("option1"), option2=localStorage.getItem("option2"),
//     option3=localStorage.getItem("option3"),option4=localStorage.getItem("option4"), correct=localStorage.getItem("correct");
//     console.log(title);
//     const content = `<tr>
//       <td>${title}</td>
//       <td>${option1}</td>
//       <td>${option2}</td>
//       <td>${option3}</td>
//       <td>${option4}</td>
//       <td>${correct}</td>
//       <td><button class="btn btn-primary btn-sm" type="button" onClick="removeRow(this)">Remove</button></td>
//     </tr>`;
    
//     tableDiv.innerHTML += content; 
//   }
//   const removeRow = (td)=>{
   
//     row=td.parentElement.parentElement;
//     document.getElementById("table1").deleteRow(row.rowIndex);
    
//   }
    
  
  const submitForm = () => {
    const title = document.getElementById('title'),
          option1 = document.getElementById('option1'),
          option2 = document.getElementById('option2'),
          option3 = document.getElementById('option3');
          option4 = document.getElementById('option4');
          correct = document.getElementById('correct');
  
    let errorMessages = [];
    if (!title.value) {
      errorMessages.push('Please enter title');
    }
    if (!option1.value) {
      errorMessages.push('Please enter option1');
    }
    if (!option2.value) {
        errorMessages.push('Please enter option2');
      }
    if (!option3.value) {
        errorMessages.push('Please enter option3');
      }
    if (!option4.value) {
        errorMessages.push('Please enter option4');
      }
    if (!correct.value) {
        errorMessages.push('Please enter option4');
      }
  
    if (errorMessages.length > 0) {
      renderErrorMessages(errorMessages);
      return false;
    } else {
      document.getElementById('error-msg-div').innerHTML = "";
    }
  
    // Table rows rendering
    let t=title.value, o1=option1.value, o2=option2.value, o3=option3.value,o4=option4.value ,c=correct.value;
     const object1={
      "title":t,
      "option1": o1,
      "option2": o2,
      "option3": o3,
      "option4": o4,
      "correct": c

    }
    localStorage.setItem("obj",JSON.stringify(object1))
    // localStorage.setItem("option1", option1.value)
    // localStorage.setItem("option2", option2.value)
    // localStorage.setItem("option3", option3.value)
    // localStorage.setItem("option4", option4.value)
    // localStorage.setItem("correct", correct.value)
    //renderTableRows();
  
    title.value = '';
    option1.value = '';
    option2.value = '';
     option3.value= ''; 
     option4.value = '';
     correct.value= '';
     return false;
  }