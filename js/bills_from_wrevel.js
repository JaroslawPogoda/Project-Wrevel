

var welcome= document.getElementById('b1');
var total=0.00;
function beta(id){
 var welcome= document.getElementById(id);
	if(welcome.className =='hot'){
		welcome.setAttribute('class','cool');
		total = total + welcome.value;
		}
	else{
		welcome.setAttribute('class','hot');
		total -= welcome.value;
		}
		
		document.getElementById('writeTot').innerHTML= total+.00;
	}
	
	


  