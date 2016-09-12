function getFarenheits(result){
  // Your code goes here
  farenheit_temp = [];
  for (var i = 0; i < result.hourly_forecast.length; i ++){
  	farenheit_temp.push(result.hourly_forecast[i].temp.english);
  }
  return farenheit_temp;
}

function getHours(result){
  // Your code goes here
  hours = [];
  for (var i = 0; i < result.hourly_forecast.length; i ++) {
  	hours.push(result.hourly_forecast[i].FCTTIME.hour);
  }
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var data = {
  	labels: labels,
  	datasets: [
  		{
  			label : "Hourly Weather for New York",
  			fillColor : "rgba(220,220,220,0.2)",
  			strokeColor : "rgba(220,220,220,1)",
  			pointColor : "rgba(220,220,220,1)",
  			pointStrokeColor : "#fff",
  			pointHighlightFill : "#fff",
  			pointHighlightStroke : "rgba(220,220,220,1)",
  			data: data
  		}
  	]
  };
  return data;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
  	url: endpoint,
  	dataType: "jsonp",
  	success: success
  });
}
