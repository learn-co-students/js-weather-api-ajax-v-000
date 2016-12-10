function getFahrenheits(result){
 	var temp = [];

  for(var i = 0; i < result.hourly_forecast.length; i++){
	temp.push(result.hourly_forecast[i].temp.english);
	console.log(result.hourly_forecast[i].temp.english);
  }
  return temp;
}

function getHours(result){
	var hours = [];
	console.log(result);
  for(var i = 0; i < result.hourly_forecast.length; i++){
	hours.push(result.hourly_forecast[i].FCTTIME.hour);
  }
  return hours;
}

function generateDataSet(labels, data) {
  var test = {
  labels : labels,
  datasets : [{
    label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
  }]
  }
  return test;
}

function makeAjaxRequest(endpoint, success) {
 $.ajax({
	url : endpoint,
	dataType : "jsonp",
	success : success
 });
}
