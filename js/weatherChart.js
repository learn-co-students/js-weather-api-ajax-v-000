function getFarenheits(result){
  return $.map(result["hourly_forecast"], function(val, i) {
    return val["temp"]["english"];
  });
}

function getHours(result){
  return $.map(result["hourly_forecast"], function(val, i) {
    return val["FCTTIME"]["hour"];
  });
}

function generateDataSet(labels, data) {
  var dataOutput = {
    labels: labels,
    datasets: [{label: "Hourly Weather for New York",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data}]
  };
return dataOutput;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    "url": endpoint,
    "dataType": "jsonp",
    //"contentType": "application/json",
    //"type": "GET",
    "success": success
  });
}
