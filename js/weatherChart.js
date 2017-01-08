function getFahrenheits(result){
  // Your code goes here
  var ferenheits = []
  var forcasts = result.hourly_forecast
  for (i = 0; i < forcasts.length; i++) {
    ferenheits.push(forcasts[i].temp.english);
  }
  return ferenheits
}

function getHours(result){
  // Your code goes here
  var hours = []
  var forcasts = result.hourly_forecast
  for (i = 0; i < forcasts.length; i++) {
    hours.push(forcasts[i].FCTTIME.hour);
  }
  return hours
}

function generateDataSet(labels, data) {
  // Your code goes here
  var obj = {};
  obj.labels = labels;
  obj.datasets = [
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
  ];

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
