var dataSetProperties = {
  label : 'Hourly Weather for New York',
  fillColor : 'rgba(220,220,220,0.2)', 
  strokeColor : 'rgba(220,220,220,1)', 
  pointColor : 'rgba(220,220,220,1)', 
  pointStrokeColor : '#fff', 
  pointHighlightFill : '#fff', 
  pointHighlightStroke : 'rgba(220,220,220,1)',  
};

function getFarenheits(result){
  var farenheits = []
  for (var i = 0; i < result.hourly_forecast.length; i++){
    farenheits.push(result.hourly_forecast[i].temp.english);
  }
  return farenheits;
}

function getHours(result){
  var hours = [];
  for (var i = 0; i < result.hourly_forecast.length; i++){
    hours.push(result.hourly_forecast[i].FCTTIME.hour);
  }
  return hours;
}

function generateDataSet(labels, inputData) {
  var data = {};
  data.labels = labels;
  data.datasets = [dataSetProperties];
  data.datasets[0].data = inputData;
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });

}





