var myVar = setInterval(myTimer, 1000);

var hours = ["១២",
"០១","០២","០៣","០៤","០៥","០៦","០៧","០៨","០៩","១០","១១","១២",
"០១","០២","០៣","០៤","០៥","០៦","០៧","០៨","០៩","១០","១១"];

var months = [
    'មករា', 'កុម្ភៈ', 'មិនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'
];

var days = ["អាទិត្យ","ច័ន្ទ","អង្គារ","ពុធ","ព្រហ","សុក្រ","សៅរ៍"];

var numdays = ["០០",
"១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",
"១៣","១៤","១៥","១៦","១៧","១៨","១៩","២០","២១","២២","២៣","២៤","២៥","២៦","២៧",
"២៨","២៩","៣០","៣១"];

var min = ["០០",
"០១","០២","០៣","០៤","០៥","០៦","០៧","០៨","០៩","១០","១១","១២",
"១៣","១៤","១៥","១៦","១៧","១៨","១៩","២០","២១","២២","២៣","២៤","២៥","២៦","២៧",
"២៨","២៩","៣០","៣១","៣២","៣៣","៣៤","៣៥",
"៣៦","៣៧","៣៨","៣៩","៤០","៤១","៤២","៤៣","៤៤","៤៥","៤៦",
"៤៧","៤៨","៤៩","៥០","៥១","៥២","៥៣","៥៤","៥៥","៥៦","៥៧","៥៨",
"៥៩","៦០"];

var sec = ["០០",
"០១","០២","០៣","០៤","០៥","០៦","០៧","០៨","០៩","១០","១១","១២",
"១៣","១៤","១៥","១៦","១៧","១៨","១៩","២០","២១","២២","២៣","២៤","២៥","២៦","២៧",
"២៨","២៩","៣០","៣១","៣២","៣៣","៣៤","៣៥",
"៣៦","៣៧","៣៨","៣៩","៤០","៤១","៤២","៤៣","៤៤","៤៥","៤៦",
"៤៧","៤៨","៤៩","៥០","៥១","៥២","៥៣","៥៤","៥៥","៥៦","៥៧","៥៨",
"៥៩","៦០"];

function khnum(num){
    var alphabet = {
        "0": "០",  "1": "១",  "2": "២",  "3": "៣",  "4": "៤", 
        "5": "៥",  "6": "៦",  "7": "៧",  "8": "៨",  "9": "៩" 
        
    };

    var strnum = toString(num);
    var khstring = '';

    var chars = split(strnum);

    for(chars in car){
        khstring = alphabet[car];
    }
    return khstring;

    // for (var i = 0; i < 10; ++i) {
        // var code = i.toString();
        // var chars = split(code);

        // if (chars in alphabet) {
        //     var khstring = alphabet[chars];
            
        //         // document.getElementById("num").innerHTML = letter;
        //         return khstring;
        //         // console.log(letter);
        // }
    // }
}

function myTimer() {

    var date = new Date();

    // var alphabet = {
    //     "0": "០",  "1": "១",  "2": "២",  "3": "៣",  "4": "៤", 
    //     "5": "៥",  "6": "៦",  "7": "៧",  "8": "៨",  "9": "៩" 
        
    // };

    // for (var i = 0; i < 10; ++i) {
    //     var code = i.toString();
    //     // var chars = split(code);

    //     if (code in alphabet) {
    //         var letter = alphabet[code];
            
    //         document.getElementById("date").innerHTML = "ថ្ងៃ" + days[date.getDay()] + "-" + 
    //         "ទី" + numdays[date.getDate()] + "-" + 
    //         "ខែ" + months[date.getMonth()] + "-" + 
    //         "ឆ្នាំ" + letter;
    //     }
    // }
    
    // document.getElementById("date").innerHTML = "ថ្ងៃ" + days[date.getDay()] + "-" + 
    //         "ទី" + numdays[date.getDate()] + "-" + 
    //         "ខែ" + months[date.getMonth()] + "-" + 
    //         "ឆ្នាំ" + 0;
    document.getElementById("date").innerHTML = "ថ្ងៃ" + days[date.getDay()] + "-" + 
            "ទី" + numdays[date.getDate()] + "-" + 
            "ខែ" + months[date.getMonth()] + "-" + 
            "ឆ្នាំ" + 0;
    
    document.getElementById("hours").innerHTML = "ម៉ោង " + hours[date.getHours()];
    document.getElementById("minutes").innerHTML = min[date.getMinutes()];
    document.getElementById("seconds").innerHTML = sec[date.getSeconds()];
    document.getElementById("ampm").innerHTML = date.getHours()<12?"ព្រឹក":"ល្ងាច";

}






