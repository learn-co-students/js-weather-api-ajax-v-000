function getFahrenheits(result){
  // Your code goes here
  var farenTemps =  result['hourly_forecast'].map(function(x) {
    return x['temp']['english']
  });
  return farenTemps;
}

function getHours(result){
  // Your code goes here
  var hourTimes = result.hourly_forecast.map(function(x) {
    return x['FCTTIME']['hour']
  });
  return hourTimes;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataSet = {
    labels: labels,
    datasets: [{
       label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }]
  };
  return dataSet;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
