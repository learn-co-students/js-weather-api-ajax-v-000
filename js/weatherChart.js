function getFarenheits(result){
  //result.response.hourly_forecast.temp.english
  return result.hourly_forecast.map(function(temp) {
    return temp.temp.english;
  });
}

function getHours(result){
  //result.response.hourly_forecast.FCTTIME.hour
  return result.hourly_forecast.map(function(hour) {
    return hour.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  var dataSet = {};
  dataSet.labels = labels;
  dataSet.datasets = [
    {
      label: 'Hourly Weather for New York',
      fillColor : 'rgba(220,220,220,0.2)',
      strokeColor : 'rgba(220,220,220,1)',
      pointColor : 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)',
      data: data
    }
  ];
  return dataSet;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({ url: endpoint, dataType: 'jsonp', success: success });
}
