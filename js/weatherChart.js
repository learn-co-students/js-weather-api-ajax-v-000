function getHours(result){
  var data = result["hourly_forecast"];
  var hours = [];
  for (var i = 0; i < data.length; i++) {
    hours.push(data[i]["FCTTIME"]["hour"])
  }
  return hours;
};

function getFarenheits(result){
  var data = result["hourly_forecast"];
  var temperature = [];
  for (var i = 0; i < data.length; i++) {
    temperature.push(data[i]["temp"]["english"])
  }
  return temperature
};

function generateDataSet(labels, data) {
  var dataObj = {};
  dataObj.labels = labels;
  dataObj.datasets = [
    {
      label: "Hourly Weather for New York",
      fillColor : 'rgba(220,220,220,0.2)',
      strokeColor : 'rgba(220,220,220,1)',
      pointColor : 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)'
      data: data
    }
  ];
  return dataObj;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
