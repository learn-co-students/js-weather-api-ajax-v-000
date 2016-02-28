function getFarenheits(result){
  var degrees = [];
  result.hourly_forecast.forEach(function(forecast){
    degrees.push(forecast.temp.english);
  });
  return degrees;
}

function getHours(result){
  var hours = [];
  result.hourly_forecast.forEach(function(forecast){
    hours.push(forecast.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  var dataset = {
    labels: labels,
    datasets: [{
      label : 'Hourly Weather for New York',
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }]
  };
  return dataset;
}

function makeAjaxRequest(endpoint, callback) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: callback
  });
}