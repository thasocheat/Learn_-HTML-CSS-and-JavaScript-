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


// function NumToWordsInt(NumIn) {

//     //  if (NumIn==0) return "០";
//      var  
//           Ones  = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩", "១០", "១១", "១២", "១៣", "១៤", "១៥", "១៦", "១៧", "១៨", "១៩"],
//           Tens  = ["", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
//           Scale = ["", "០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
//           N1, N2, j, i, Trplt, tns="", NumAll = "";
//      NumIn += "";                                            // Make NumIn a String
//     //----------------- code starts -------------------
//      NumIn = "0".repeat(NumIn.length * 2 % 3) + NumIn;       //Create shortest string triplets 0 padded
//      j = 0;                                                  //Start with the highest triplet from LH
//         for (i = NumIn.length / 3 - 1; i >= 0; i--) {        //Loop thru number of triplets from LH most
//           Trplt = NumIn.substring(j, j + 3);                 //Get a triplet number starting from LH
//           if (Trplt !="000") {                               //Skip empty trplets
//             N1 = Number(Trplt[0]);                           //Get Hundreds digit
//             N2 = Number(Trplt.substr(1));                    //Get 2 lowest digits (00 to 99) 
//             tns = N2 > 19 ? Tens[Number(Trplt[1])] + Ones[Number(Trplt[2])] : Ones[N2];
//             NumAll += ((h = N1>0 ? Ones[N1] + "": "") + tns).trim() + Scale[i]; 
//           }
//           j += 3;                                            //Next lower triplets (move to RH)
//         }
//     //----------------- code Ends --------------------
//      return NumAll.trim();
//     }

    

//     var num = "០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩".split(" ");
//   var tens = "២ ៣ ៤ ៥ ៦ ៧ ៨ ៩".split(" ");
// function number2words(n){
//     if (n < 20) return num[n];
//     var digit = n%10;
//     if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
//     if (n < 1000) return num[~~(n/100)] + num[~~(n/100)] + (n%100 == 0? "": " and " + number2words(n%100));
//     return number2words(~~(n/1000)) + "០" + (n%1000 != 0? " " + number2words(n%1000): "");
// }

function convertKhmerNumber(number) {
  const symbolMap = {
    1: "១",
    2: "២",
    3: "៣",
    4: "៤",
    5: "៥",
    6: "៦",
    7: "៧",
    8: "៨",
    9: "៩",
    0: "០",
  };
  return number.toString().replace(/\d/g, function (match) {
    return symbolMap[match];
  });
}

function myTimer() {

    var date = new Date();
    
    // document.getElementById("date").innerHTML = "ថ្ងៃ" + days[date.getDay()] + "-" + 
    //         "ទី" + numdays[date.getDate()] + "-" + 
    //         "ខែ" + months[date.getMonth()] + "-" + 
    //         "ឆ្នាំ" + NumToWordsInt(date.getFullYear());

    // document.getElementById("hours").innerHTML = "ម៉ោង " + hours[date.getHours()];
    // document.getElementById("minutes").innerHTML = min[date.getMinutes()];
    // document.getElementById("seconds").innerHTML = sec[date.getSeconds()];
    
    
    document.getElementById("date").innerHTML = "ថ្ងៃ" + days[date.getDay()] + "-" + 
    "ទី" + convertKhmerNumber(date.getDate()) + "-" + 
    "ខែ" + months[date.getMonth()] + "-" + 
    "ឆ្នាំ" + convertKhmerNumber(date.getFullYear());
    
    // document.getElementById("hours").innerHTML = "ម៉ោង " + NumToWordsInt(date.getHours());
    document.getElementById("hours").innerHTML = "ម៉ោង " + convertKhmerNumber([date.getHours()]);
    document.getElementById("minutes").innerHTML = convertKhmerNumber([date.getMinutes()]);
    document.getElementById("seconds").innerHTML = convertKhmerNumber([date.getSeconds()]);

    document.getElementById("ampm").innerHTML = date.getHours()<12?"ព្រឹក":"ល្ងាច";

    // document.getElementById("num").innerHTML = NumToWordsInt(date.getFullYear());
    // document.getElementById("num").innerHTML = number2words(date.getFullYear());

}






