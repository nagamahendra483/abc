let i=0;
const values = JSON.parse(localStorage.getItem("obj"));
function load(){
    setQuestion();
}

function setQuestion(){
    if(values && values.length>0){
        let firstElement = values[i];
        document.getElementById("title").innerHTML=firstElement.title;
        document.getElementById("option1").innerHTML=firstElement.option1;
        document.getElementById("option2").innerHTML=firstElement.option2;
        document.getElementById("option3").innerHTML=firstElement.option3;
        document.getElementById("option4").innerHTML=firstElement.option4;
    }
}

function next(){
    if(i < values.length){
        i += 1;
        document.getElementById('error-msg-div').innerHTML="";
        setQuestion();
    }
}

function previous(){
    if(i > 0){
        i -=1;
        document.getElementById('error-msg-div').innerHTML="";
        setQuestion();
    }
}

function check(element){
    const question = document.getElementById("title").textContent;
    const correctOption = values.filter((element) => element.title == question)[0].correct;
    if(document.getElementById(element.id).innerHTML== correctOption){
        document.getElementById('error-msg-div').innerHTML="Correct";
    }
    else{
        document.getElementById('error-msg-div').innerHTML="Wrong";
    }
}
