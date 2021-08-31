function load(){
    document.getElementById("title").innerHTML=localStorage.getItem("title");

    document.getElementById("option1").innerHTML=localStorage.getItem("option1");
    document.getElementById("option2").innerHTML=localStorage.getItem("option2");
    document.getElementById("option3").innerHTML=localStorage.getItem("option3");
    document.getElementById("option4").innerHTML=localStorage.getItem("option4");
    // document.getElementById("correct").innerHTML=localStorage.getItem("correct");

}
function check(element){
    if(document.getElementById(element.id).innerHTML== localStorage.getItem("correct")){
        document.getElementById('error-msg-div').innerHTML="Correct";
    }
    else{
        document.getElementById('error-msg-div').innerHTML="Wrong";
    }
}