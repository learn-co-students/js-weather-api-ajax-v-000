var dataSetProperties = {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
      };

function getFarenheits(result){
  return result.hourly_forecast.map(function(forecast){
    return forecast.temp.english;
  });
}

function getHours(result){
  return result.hourly_forecast.map(function(forecast){
    return forecast.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  var dataSet = {};
  dataSet["labels"] = labels;
  dataSetProperties["data"] = data;
  dataSet["datasets"] = [dataSetProperties];
  return dataSet;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
  url: endpoint,
  dataType: 'jsonp',
  success: success
  })
}