function getFahrenheits(result){
  var temps = [];
  $.each(result.hourly_forecast, function(index,value) {
      temps.push(value.temp['english']);
  });
  return temps;
}

function getHours(result){
  var hours = [];
  $.each(result.hourly_forecast, function(index, value) {
    hours.push(value.FCTTIME['hour']);
  })
  return hours;
}

function generateDataSet(labels, data) {
  var data = {
      labels: labels,
      datasets: [{
        label: 'Hourly Weather for New York',
        data: data,
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
      }]
    };
    return data;
  };

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
 });
}
