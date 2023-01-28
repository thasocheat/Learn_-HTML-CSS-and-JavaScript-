const messageInput = document.getElementById("message_input");

//When press key enter
messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        getmessage();
    }
});


function getmessage(){
    document.getElementById("message_value").innerHTML = messageInput.value;
    messageInput.value = "";
}