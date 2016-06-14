function getFarenheits(result){
  return result.hourly_forecast.map(function(hourForecast){
  	return hourForecast['temp']['english']
  })
}

function getHours(result){
    return result.hourly_forecast.map(function(hourForecast){
  	return hourForecast['FCTTIME']['hour']
  })
}

function generateDataSet(labels, inputData) {
  
  var data = {
    labels: labels, 
    datasets: [
      {
        label: 'Hourly Weather for New York',
        fillColor: 'rgba(220,220,220,0.2)', 
        strokeColor: 'rgba(220,220,220,1)', 
        pointColor: "rgba(220,220,220,1)",
      	pointStrokeColor: "#fff",
     	pointHighlightFill: "#fff",
      	pointHighlightStroke: "rgba(220,220,220,1)",
        data: inputData
      }
    ]

  };
  
  return data;
}

function makeAjaxRequest(endpoint, callback) {
	$.ajax({url: endpoint, dataType : 'jsonp', success: callback})
}
