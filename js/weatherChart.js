function getFahrenheits(result){
  var hourly = result.hourly_forecast;
  return hourly.map(function(day) {
    return day.temp.english;
  });
}

function getHours(result){
  var hourly = result.hourly_forecast;
  return hourly.map(function(day) {
    return day.FCTTIME.hour;
  });
}

function generateDataSet(labels, inputData) {
  var data = {};
  data.labels = labels;
  data.datasets = [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: inputData
    }
  ];
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
