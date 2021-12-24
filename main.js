
//  ----- Question 1
function reset_msg(year) {
    if (year === 1789) {
        document.querySelector("#msg").innerHTML = "Bonne réponse";
    } else {
        document.querySelector("#msg").innerHTML = "Mauvaise réponse";
    }
}


// ----- Question 2 
function verifyAnswer2(letter) {
   
    // Si B est false, et A ou C true => message bonne réponse
    
    if (
        document.getElementById("B").checked == false &&
        (document.getElementById("A").checked == true ||
         document.getElementById("C").checked == true)
        ) {
        // console.log('Bonne réponse');
        document.querySelector("#msg2").innerHTML = "Bonne réponse";
    } else {
        document.querySelector("#msg2").innerHTML = "Mauvaise réponse";
    }
    
    // Reset txt msg2 pour ne pas laisser msg Mauvaise réponse quand on a redécoche tt
    
    if (
        document.getElementById("A").checked == false &&
        document.getElementById("B").checked == false &&
        document.getElementById("C").checked == false
        ) {
        // Reset du message sinon pr les 3 Q° > si on decoche > display: msg fausse reponse
        document.querySelector("#msg2").innerHTML = "";
    }
}




/*
 var msg = '<span style="color:red;">Mauvaise réponse</span><br /><br />';
*/




