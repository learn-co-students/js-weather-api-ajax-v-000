var dataSetProperties = {
  label: 'Hourly Weather for New York',
  fillColor: 'rgba(220,220,220,0.2)', 
  strokeColor: 'rgba(220,220,220,1)', 
  pointColor : 'rgba(220,220,220,1)',
  pointStrokeColor: '#fff', 
  pointHighlightFill: '#fff',
  pointHighlightStroke : 'rgba(220,220,220,1)',
}


function getFarenheits(result){
  var degrees = [];
  //debugger
  result.hourly_forecast.forEach(function(degree){
    degrees.push(degree.temp.english);
  });
  return degrees;
}

function getHours(result){
 var hours = [];
  //debugger
  result.hourly_forecast.forEach(function(time){
    hours.push(time.FCTTIME.hour);
  });
  return hours;
  //result.hourly_forecast[0].FCTTIME.hour
    
}

function generateDataSet(labelsArr, inputData) {
  var chartInfo = {};
  dataSetProperties.data = inputData;
  
  chartInfo.labels = labelsArr;
  chartInfo.datasets = [dataSetProperties];

  return chartInfo;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
   $.ajax({
    url: endpoint, 
    dataType: 'jsonp',
    success: success
  });
}
