function getFarenheits(result){
  // Your code goes here
  var farenheit = [];
  for(var i = 0; i < result["hourly_forecast"].length; i++){
    farenheit.push(result["hourly_forecast"][i]["temp"]["english"]);
  }
  return farenheit;
}

function getHours(result){
  // Your code goes here
  var hours = [];
  for(var i = 0; i < result["hourly_forecast"].length;i++){
    hours.push(result["hourly_forecast"][i]["FCTTIME"]["hour"]);
  }
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataSet = {
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
