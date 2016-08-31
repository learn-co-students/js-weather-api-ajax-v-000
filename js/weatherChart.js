function getFarenheits(result){
	var temps = [];
  result.hourly_forecast.forEach(function(forecast){
  	temps.push(forecast.temp.english);
  });
  return temps;
}

function getHours(result){
	var hours = [];
  result.hourly_forecast.forEach(function(forecast){
  	hours.push(forecast.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [
	    {
	        label : 'Hourly Weather for New York', 
	        fillColor : 'rgba(220,220,220,0.2)', 
	        strokeColor : 'rgba(220,220,220,1)', 
	        pointColor : 'rgba(220,220,220,1)', 
	        pointStrokeColor : '#fff', 
	        pointHighlightFill : '#fff', 
	        pointHighlightStroke : 'rgba(220,220,220,1)', 
	        data : data
	    }
    ]
  }
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
  	url: endpoint,
  	dataType: 'jsonp',
  	success: success
  });
}
