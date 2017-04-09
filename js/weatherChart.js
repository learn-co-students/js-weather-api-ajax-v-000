function getFarenheits(result){
  temp = [];
  $.each(result.hourly_forecast, function(idx, forecast) {
    temp.push(forecast.temp.english);
  });
  return temp;
}

function getHours(result){
  hour = [];
  $.each(result.hourly_forecast, function(idx, forecast) {
    hour.push(forecast.FCTTIME.hour);
  });
  return hour;
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [
    {
        label : 'Hourly Weather for New York',
        fillColor : 'rgba(220,220,220,0.2)',
        strokeColor : 'rgba(220,220,220,1)',
        pointColor : 'rgba(220,220,220,1)',
        pointStrokeColor : '#fff',
        pointHighlightFill : '#fff',
        pointHighlightStroke : 'rgba(220,220,220,1)',
        data : data
    }
    ]
  }
  // Your code goes here
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({ url: endpoint, dataType: "jsonp", success: success});
  // Your code goes here
}
