function getFahrenheits(result){
  var temp_array = [];
  $.each(result.hourly_forecast, function(index, hourly_obj){
    temp_array.push(hourly_obj.temp.english)
  });
  return temp_array;
}

function getHours(result){
  var hour_array = [];
  $.each(result.hourly_forecast, function(index, hourly_obj){
    hour_array.push(hourly_obj.FCTTIME.hour)
  });
  return hour_array;
}

function generateDataSet(labels, data) {
  var dataObj = {};
  dataObj.labels = labels;
  dataObj.datasets = [
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
  return dataObj;
}

function makeAjaxRequest(endpoint, success) {

  var obj = $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success,
  });

}
