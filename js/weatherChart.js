function getFarenheits(result){
  var temp = [];

  $.each(result.hourly_forecast, function(index, forcast) {
    temp.push(forcast.temp.english);
  });
  return temp;
}


function getHours(result){
    var hour = [];

  $.each(result.hourly_forecast, function(index, hourly) {
    hour.push(hourly.FCTTIME.hour);
  });
  return hour;
}

function generateDataSet(labels, inputData) {
  return {
    'labels': labels,
    'datasets': [{
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: inputData
    }]
  };
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}