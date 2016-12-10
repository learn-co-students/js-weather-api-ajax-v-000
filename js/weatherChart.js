function getFahrenheits(result) {
  return result.hourly_forecast.map(function(item) {
    return item.temp.english;
  });
}

function getHours(result){
  return result.hourly_forecast.map(function(item) {
    return item.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }
    ]
  };
}

function makeAjaxRequest(url, result) {
  $.ajax({
    url : url,
    dataType : "jsonp",
    success: result
  });
}
