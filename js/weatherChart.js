function getFahrenheits(result){
  // Your code goes here
  var fahrenheitsArray = result.hourly_forecast.map(function(forecast) {
  	return forecast.temp.english;
  });
  // console.log(fahrenheitsArray);
  return fahrenheitsArray;
}

function getHours(result){
  // Your code goes here
    var hoursArray = result.hourly_forecast.map(function(forecast) {
  	return forecast.FCTTIME.hour;
  });
  // console.log(hoursArray);
  return hoursArray;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataset = {
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
    return dataset;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
  	url: endpoint,
  	dataType: 'jsonp',
  	success: success
  });
}
