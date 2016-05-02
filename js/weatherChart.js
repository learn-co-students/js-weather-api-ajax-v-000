function getFarenheits(result){
  // Your code goes here
  var fahrenheits = [];
  $.each(result["hourly_forecast"], function(index, forecast) {
    fahrenheits.push(forecast["temp"]["english"]);
  });
  return fahrenheits;
}

function getHours(result){
  // Your code goes here
  var hours = [];
  $.each(result["hourly_forecast"], function(index, forecast) {
    hours.push(forecast["FCTTIME"]["hour"]);
  });
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataObj = {};
  dataObj["labels"] = labels;
  dataSetProperties = {
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
  };
  dataObj["datasets"] = [dataSetProperties];
  return dataObj;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success
  })
}
