;(function(){
	"use strict";

	nextPrimeNumber:
  for (var x = 2; x < 20; x++) {

    for (var y = 2; y < x; y++) {
      if (x % y == 0) continue nextPrimeNumber;
    }

    alert(x); // prime number
  }
	
})();