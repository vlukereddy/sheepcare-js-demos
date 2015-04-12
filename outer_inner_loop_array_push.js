var text = "Peter has been blessed by the Lord. Petras is the word for Peter in Greek. It means rock. ";
var myName = "Peter";
var hits = [];
for(var i = 0; i < text.length; i++){
  
    console.log("----------------OUTER LOOP OPENED--------------");
    console.log("The current value of i is: " + i);
    console.log("The character value of text[i] is: " + text[i]);
    if (text[i] === myName[0] ){
        // DO something here Sammy
        console.log("The i value is: " + i + " when the character found is P.");
        console.log("The value inside text at index i is: " + text[i]);
        for (var j = i;
        j < i + myName.length; j++){
            console.log("----------------INNER LOOP OPENED--------------");
            console.log("The j value is: " + j);
            console.log("The value inside text at index j: " + text[j]);
            hits.push(text[j]);
            console.log("----------------INNER LOOP CLOSED--------------");
        }

    }
     console.log("----------------OUTER LOOP CLOSED--------------");   
}

console.log("The elements inside the hits array are: " + hits);


if (hits.length === 0){
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}