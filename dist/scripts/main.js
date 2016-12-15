;(function(){
	"use strict";

	nextPrime:
  for (var x = 2; x < 20; x++) {

    for (var y = 2; y < x; y++) {
      if (x % y == 0) continue nextPrime;
    }

    alert( x ); // prime number
  }
	
})();