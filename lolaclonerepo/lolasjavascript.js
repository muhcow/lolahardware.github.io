

function showText() {

  //var plsWork = document.getElementById("contactInfo");

  var deets = document.getElementById("contactInfo");

  //console.log(deets.style.diplay);
//  console.log("HI");

      if(deets.style.display  === "inline-block"){
         document.getElementById("contactInfo").style.display = "none";
         document.getElementById("lolaBorder").style.display = "none";
       }

       else {
         document.getElementById("contactInfo").style.display = "inline-block";
         document.getElementById("lolaBorder").style.display = "inline-block";
       }

//console.log(deets.style.display);
}
