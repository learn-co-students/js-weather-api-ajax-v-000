function getFarenheits(result){
  // Your code goes here

  var farenheits = result.hourly_forecast.map(function(item, index){
    return item.temp.english;
  });

  return farenheits;
}

function getHours(result){
  // Your code goes here
  var hours = result.hourly_forecast.map(function(item, index){
    return item.FCTTIME.hour;
  });

  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataSet = {
    labels: labels,
    datasets: [{
      label : 'Hourly Weather for New York',
      fillColor : 'rgba(220,220,220,0.2)',
      strokeColor : 'rgba(220,220,220,1)',
      pointColor : 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)',
      data : data
    }]
  }

  return dataSet;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  return $.ajax({
    url: endpoint,
    dataType : 'jsonp',
    success : success
  });
}
