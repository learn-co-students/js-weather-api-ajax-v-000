function getFarenheits(result){
  var farenheits = [];
  result['hourly_forecast'].forEach(function(hourly){
    farenheits.push(hourly['temp']['english']);
  });
  return farenheits;
}

function getHours(result){
  var hours = [];
  result['hourly_forecast'].forEach(function(hourly){
    hours.push(hourly['FCTTIME']['hour']);
  });
  return hours;
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [ { 
      label : 'Hourly Weather for New York', 
      fillColor : 'rgba(220,220,220,0.2)', 
      strokeColor : 'rgba(220,220,220,1)', 
      pointColor : 'rgba(220,220,220,1)', 
      pointStrokeColor : '#fff', 
      pointHighlightFill : '#fff', 
      pointHighlightStroke : 'rgba(220,220,220,1)',
      data : data 
    } ]
  }
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
