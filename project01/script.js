
var index = 0;

function changecolorbg(){
    var colors = ["red","yellow","blue","green","pink","purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
        index = 0;

    // alert(colors[index++]);
}


var newcolors = ["Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", 
"SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var newindex = 0;

document.querySelector("#submit").addEventListener("click", () => {
    if(newindex > newcolors.length - 1)
    newindex = 0;
    document.body.style.background = newcolors[newindex++];

    // alert(newcolors[newindex++]);
});