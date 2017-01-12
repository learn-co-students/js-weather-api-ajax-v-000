function getFahrenheits(result){
 var temps = result.hourly_forecast.map(function(obj){
  	return obj.temp.english
  })
 return temps
}

function getHours(result){
   var time = result.hourly_forecast.map(function(obj){
  	return obj.FCTTIME.hour
  })
   return time
}

function generateDataSet(labels, data) {
  var obj = {};
  obj.labels = labels;
  obj.datasets = [
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
  return obj;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({ url: endpoint, dataType: 'jsonp', success: success})

}
