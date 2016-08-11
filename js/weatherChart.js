

function getFarenheits(result){
  var hourly_temperatures = $.map(result.hourly_forecast, function(temperature, index) {
      return temperature.temp.english;
  });
  return hourly_temperatures;
}

function getHours(result){
  var hours = $.map(result.hourly_forecast, function(hour, index) {
      return hour.FCTTIME.hour;
  });
  return hours;
}

function generateDataSet(labels, inputData) {
  var data = {};
  var dataSetProperties = {
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
  };
  data["labels"] = labels;
  data["datasets"] = [];
  data["datasets"].push(dataSetProperties);
  data["datasets"][0]["data"] = inputData;
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
  url: endpoint,
  dataType:'jsonp',
  success: success
        });
}
