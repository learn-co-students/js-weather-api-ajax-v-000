function getFarenheits(result){
  temps = [];
  result.hourly_forecast.forEach(function(i){
    temps.push(i.temp.english);
  });
  return temps;
}

function getHours(result){
  return result.hourly_forecast.map(function(i) {
    return i.FCTTIME.hour
  });
}

function generateDataSet(labels, data) {
  var chartData = {
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
            data: data
          }
      ]
    };
    return chartData;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType : "jsonp",
    success: success
  });
}
