function getFahrenheits(result){
  var array = [];
  result.hourly_forecast.forEach(function(obj){
    array.push(obj.temp.english);
  });
  return array;
}

function getHours(result){
  var array = [];
  result.hourly_forecast.forEach(function(obj){
    array.push(obj.FCTTIME.hour);
  });
  return array;
}

function generateDataSet(labels, data) {
  var obj1 = [];
  obj1.push({
    label: 'Hourly Weather for New York', 
    fillColor : 'rgba(220,220,220,0.2)', 
    strokeColor : 'rgba(220,220,220,1)', 
    pointColor : 'rgba(220,220,220,1)', 
    pointStrokeColor : '#fff', 
    pointHighlightFill : '#fff', 
    pointHighlightStroke : 'rgba(220,220,220,1)', 
    "data" : data
  });
  var obj2 = {
    labels: labels
  };
  obj2["datasets"] = obj1;
  return obj2;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    "url" : endpoint,
    dataType: "jsonp",
    success: success
  });
}

function makeChart(data){
  debugger;
  var degrees = getFahrenheits(data);
  var time = getHours(data);
  var data = generateDataSet(time, degrees);
  var ctx = $('#NYCWeatherChart').get(0).getContext("2d");
  var chart = Cart.Line(ctx, {
    "data" : data
  });
}

$(document).ready(function(){
  makeAjaxRequest(URL, makeChart)
});
