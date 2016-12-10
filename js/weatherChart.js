function getFahrenheits(result){
  // Your code goes here
  console.log(result);
  return result.hourly_forecast.map(function(forecastAtHour){
  	return forecastAtHour.feelslike.english;
  });
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(forecastAtHour){
  	return forecastAtHour.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  return {
  	labels: labels,
  	datasets: [
  		{
	        label: "Hourly Weather for New York",
	        fillColor: "rgba(220,220,220,0.2)",
	        strokeColor: "rgba(220,220,220,1)",
	        pointColor: "rgba(220,220,220,1)",
	        pointStrokeColor: "#fff",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgba(220,220,220,1)",
	        data: data
  		}
  	]
  };
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
  	url: endpoint,
  	dataType: 'jsonp',
  	success: success
  });
}
