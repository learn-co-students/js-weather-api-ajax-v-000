function getFahrenheits(result){
  // Your code goes here
  // return json['tracks'].slice(0,10);
  var hours = result['hourly_forecast']
  return hours.map(function(hour){
    return hour['temp']['english']
  });
}

function getHours(result){
  // Your code goes here
  var hours = result['hourly_forecast']
  return hours.map(function(hour){
    return hour['FCTTIME']['hour']
  });
}

function generateDataSet(labels, data) {
  // Your code goes here
  var chartData = {
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
  return chartData;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({url: endpoint, dataType : "jsonp", success: success});
}
