
function kimonoCallback(data) {
  	var prizePoolName = data.name;
  	var prizePoolFreq = data.frequency;
  	var	prizePoolLastSuccess = data.lastsuccess;
 	var prizePoolSize = data.results.collection1[0].currentpool;
	  	
	  	$("#poolname").html(prizePoolName);
	  	$("#poolfreq").html(prizePoolFreq);
	  	$("#poolsucc").html(prizePoolLastSuccess);
		$("#poolsize").html(prizePoolSize);
	}
function worker(){
  $.ajax({
    "url":"http://www.kimonolabs.com/api/34lhsspe?apikey=296d7af19aa06eafb66d56159770aab5&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp",
    "cache":"false",
    complete: function() {
      // Schedule the next request when the current one's complete
      setTimeout(worker, 10000);
    	}
	})
};
worker()