submit.onclick=validateForm;

function validateForm() {
   //alert (document.getElementById("country").value);
    var x = document.getElementById("fname").value;
    var y=document.getElementById("address1").value;
    var z=document.getElementById("address2").value;
    var c=document.getElementById("city").value;
    var zi=document.getElementById("zip").value;
    var s=document.getElementById("state").value;
    var e=document.getElementById("email").value;
    var t=document.getElementById("phone").value;
   var co= document.getElementById("country").value;
    if (x == "" || y==""|| z==""||c==""||s==""||zi==""||e==""||t==""||co=='select') {
      alert("One of more details are not filled.");
      return false;
    }else if (isNaN(t) || t.length != 10 ) {
        alert ("Phone number not valid");
      }
    else{
        alert("Thank You")
    }
  }