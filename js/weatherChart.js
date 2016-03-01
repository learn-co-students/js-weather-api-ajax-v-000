function getFarenheits(result){
  var temps=[];
  for (var key in result["hourly_forecast"]) {
    temps.push(result['hourly_forecast'][key]['temp']['english'])
  }
  return temps;
}

function getHours(result){
  var hours = [];
  for (var hour in result["hourly_forecast"]) {
    hours.push(result["hourly_forecast"][hour]['FCTTIME']['hour'])
  }
  return hours;
}

function generateDataSet(labels, data) {
  var dataset = {
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
      },
    ]
  };
  return dataset;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({url: endpoint, dataType: 'jsonp', success: success});
}
