     //even
  var even=[4,5,6,7,8]
  let count=0;
  function add(even)
  {
	    for(i=0;i<even.length;i++)
	  {
		  if(even[i]%2==0){
		   console.log(even[i]);
		   count++;
	  }
  }
  return count;
  }
  console.log(add(even));
  