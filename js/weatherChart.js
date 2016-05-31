function getFarenheits(result){
  return $.map(result['hourly_forecast'], function(item, index){
    return item['temp']['english'];
  });
}

function getHours(result){
  return $.map(result['hourly_forecast'], function(item, index){
    return item['FCTTIME']['hour'];
  });
}

function generateDataSet(labels, tempData) {
  var datasetForChart = {
    labels: labels,
    datasets: [
      {
        label: 'Hourly Weather for New York',
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: tempData
      }
    ]
  };
  return datasetForChart;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
