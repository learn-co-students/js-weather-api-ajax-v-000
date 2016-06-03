
function getFarenheits(result){
  return result.hourly_forecast.map(function(item){
  	return item.temp.english;
  });
}

function getHours(result){
  return result.hourly_forecast.map(function(item){
  	return item.FCTTIME.hour;
  });
}

var dataSet = { 
	label: 'Hourly Weather for New York',
	fillColor: 'rgba(220,220,220,0.2)',
	strokeColor: 'rgba(220,220,220,1)',
	pointColor: 'rgba(220,220,220,1)',
	pointStrokeColor: '#fff',
	pointHighlightFill: '#fff',
	pointHighlightStroke : 'rgba(220,220,220,1)'
}

function generateDataSet(labels, data) {
  var obj = {
  	labels: labels,
  	datasets: [dataSet]
  };
  obj.datasets[0]["data"] = data;
  return obj;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
  	url: endpoint,
  	dataType: 'jsonp',
  	success: success
  });
}
