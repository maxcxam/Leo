                                                  //ВАРІАНТ З submit

//$('#form').submit(function(e){
//    e.preventDefault();
//    $.ajax({
//        url: "xxx.php",
//        type: "POST",
//        dataType: "html",
//        data: $("#form").serialize(),
//        success: function(resp) {
//        	$('#first').html('1: '+resp.first);
//        	$('#second').html('2: '+resp.second);
//        	$('#third').html('3: '+resp.third);
//        	$('#fourth').html('4: '+respt.fourth);
//            alert("Дані відправлені")
//    	},
//    	error: function(resp) { 
//             alert("Дані не відправлені")
//    	}
// 	});
//});

                                                  //ВАРІАНТ З XMLHttpRequest

function start(){
   var x=document.getElementById('first').value;
   var y=document.getElementById('second').value;
   var z=document.getElementById('third').value;
   var k=document.getElementById('fourth').value;

   var xhttp=new XMLHttpRequest();
   xhttp.onreadystatechange=function(){
      if (xhttp.readyState==4 && xhttp.status==200)
         document.getElementById('first').innerHTML=xhttp.responseText.first;
         document.getElementById('second').innerHTML=xhttp.responseText.second;
         document.getElementById('third').innerHTML=xhttp.responseText.third;
         document.getElementById('fourth').innerHTML=xhttp.responseText.fourth;
      }
   xhttp.open('POST','xxx.php',true);
   xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   xhttp.send();
}

$(document).ready(function(){
     $(".btn").click(function () {
          if ($("#first").val() == "") {
               $("#first").css("border-color", "red");
          } else {
               $("#first").css("border-color", "grey");
          }
          if ($("#third").val() == "") {
               $("#second").css("border-color", "red");
          } else {
               $("#second").css("border-color", "grey");
          }
          if ($("#fourth").val() == "") {
               $("#third").css("border-color", "red");
          } else {
               $("#third").css("border-color", "grey");
          }
          if ($("#fourth").val() == "") {
               $("#fourth").css("border-color", "red");
          } else {
               $("#fourth").css("border-color", "grey");
          }
     });
     alert("Завдання зроблено в двох варіантах: 1. з submit, 2. з XMLHttpRequest Обробку форми на РНР, на жаль,            зробити на даний момент не можу, так-як з РНР не працював")
});

