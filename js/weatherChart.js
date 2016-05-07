function getFarenheits(result){
  return $.map(result.hourly_forecast, function(hourcast, index){
    return hourcast.temp.english;
  });
}

function getHours(result){
  return $.map(result.hourly_forecast, function(hourcast, index){
    return hourcast.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {

  var dataParams = {};

  dataParams.labels = labels;
  dataParams.datasets = [{
    label: 'Hourly Weather for Merida, Mexico',
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)',
    data: data
  }];

  return dataParams;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
