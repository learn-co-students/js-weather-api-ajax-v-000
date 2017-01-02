function getFahrenheits(result){
  // Your code goes here
  var temps = []; 
  result.hourly_forecast.forEach( function(forecast){
    temps.push(forecast.temp.english);  
  }); 
  return temps; 
}

function getHours(result){
  // Your code goes here
  var hours = []; 
  result.hourly_forecast.forEach( function(forecast){
    hours.push(forecast.FCTTIME.hour); 
  }); 
  return hours; 
}

function generateDataSet(labels, data) {
  var dataObj = {}; 
  dataObj.labels = labels; 
  dataObj.datasets = []; 
  var dataSet = {
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
  }; 
  dataObj.datasets.push(dataSet); 
  return dataObj; 
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({url: endpoint, dataType: "jsonp", success: success });
}
