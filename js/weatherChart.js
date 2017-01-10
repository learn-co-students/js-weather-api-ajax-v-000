function getFahrenheits(result){
  var inputData = result.hourly_forecast.map(function(eachHour, index) {
    return eachHour.temp.english;
  });
  return inputData
}

function getHours(result){
  var labels = result.hourly_forecast.map(function(eachHour, index) {
    return eachHour.FCTTIME.hour;
  });
  return labels
}

function generateDataSet(labels, data) {
  var data = {
    labels: labels,
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: data
      }
    ]
  }
  return data
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
