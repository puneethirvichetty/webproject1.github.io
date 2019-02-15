function input(id)
{
	alert("hello");
	var inp=document.getElementById("addprodinput").value;
	
	document.getElementById(id).value=inp;
	var out=document.getElementById(id).value;
	alert("hi");
	document.getElementById(id).innerHTML=out;
	
}