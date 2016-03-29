function getFarenheits(result){
  // Your code goes here
  var farenheits = [];
  $.each(result.hourly_forecast, function(index, hourly_weather){
    farenheits.push(hourly_weather.temp.english);
  });
  return farenheits
}

function getHours(result){
  // Your code goes here
  var hours = [];
  $.each(result.hourly_forecast, function(index, hourly_weather){
    hours.push(hourly_weather.FCTTIME.hour);
  });
  return hours
}

function generateDataSet(labels, data) {
  // Your code goes here
  var object = {}
  object["labels"] = labels;
  object["datasets"] = [ { label : 'Hourly Weather for New York', fillColor : 'rgba(220,220,220,0.2)', strokeColor : 'rgba(220,220,220,1)', pointColor : 'rgba(220,220,220,1)', pointStrokeColor : '#fff', pointHighlightFill : '#fff', pointHighlightStroke : 'rgba(220,220,220,1)', data: data } ];
  return object;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}


