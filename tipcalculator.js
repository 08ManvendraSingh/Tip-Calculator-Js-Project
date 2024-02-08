function cal(){
	var a=Number(document.getElementById('amount').value);
	var b=Number(document.getElementById('pertip').value);
	var c=document.getElementById('tipamount');
	var d=document.getElementById('total');

	if(a<=0 || a==NaN || a== null){
		alert('Please enter a valid Bill Amount');
	}
	else if(b<=0 || b==NaN || b== null){
		alert('Please enter a valid Tip percentage');
	}
	else{
		c.value=a*(b)/100;
		d.value=a + a*(b)/100;
	}
}