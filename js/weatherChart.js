var dataSetProperties = {
  fillColor: 'rgba(220,220,220,0.2)',
  strokeColor: 'rgba(220,220,220,1)',
  pointColor : 'rgba(220,220,220,1)',
  pointStrokeColor : '#fff',
  pointHighlightFill : '#fff',
  pointHighlightStroke : 'rgba(220,220,220,1)'
};

function getFahrenheits(result){
  // Your code goes here
  var fahrenheits = []
  $.each(result.hourly_forecast, function(index, forecast) {
    fahrenheits.push(forecast.temp.english);
  })
  return fahrenheits;
}

function getHours(result){
  // Your code goes here
  var hours = []
  $.each(result.hourly_forecast, function(index, forecast) {
    hours.push(forecast.FCTTIME.hour);
  })
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var chartObject = {};
chartObject['labels'] = labels;
chartObject['datasets'] = [];
$.each(['Hourly Weather for New York'], function(index, label) {
  chartObject['datasets'][index] = {};
  chartObject['datasets'][index]['label'] = label;
  chartObject['datasets'][index]['fillColor'] = dataSetProperties.fillColor;
  chartObject['datasets'][index]['strokeColor'] = dataSetProperties.strokeColor;
  chartObject['datasets'][index]['pointColor'] = dataSetProperties.pointColor;
  chartObject['datasets'][index]['pointStrokeColor'] = dataSetProperties.pointStrokeColor;
  chartObject['datasets'][index]['pointHighlightFill'] = dataSetProperties.pointHighlightFill;
  chartObject['datasets'][index]['pointHighlightStroke'] = dataSetProperties.pointHighlightStroke;
  chartObject['datasets'][index]['data'] = data;
})
return chartObject;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    'url': endpoint,
    dataType : 'jsonp',
    success : success
  });
}
