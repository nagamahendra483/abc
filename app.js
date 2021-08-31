const renderErrorMessages = (errors) => {
  const errorDiv = document.getElementById('error-msg-div');

  const content = errors.map(error => `<li>${error}</li>`).join('');


  errorDiv.innerHTML = content;
}
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
  const latestvalues = {
    "title": title.value,
    "option1": option1.value,
    "option2": option2.value,
    "option3": option3.value,
    "option4": option4.value,
    "correct": correct.value

  }
  const output = [...JSON.parse(localStorage.getItem("obj")) ?? [], latestvalues]
  localStorage.setItem("obj", JSON.stringify(output))
  title.value = '';
  option1.value = '';
  option2.value = '';
  option3.value = '';
  option4.value = '';
  correct.value = '';
  return false;
}
