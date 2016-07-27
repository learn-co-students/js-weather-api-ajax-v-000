function getFarenheits(result){
  var temps = [];
  $.each(result.hourly_forecast, function(index, f){
    temps.push(f.temp.english);
  });
  return temps;
}

function getHours(result){
  var hours = [];
  $.each(result.hourly_forecast, function(index, f){
    hours.push(f.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  var data = {
    labels: labels,
    datasets: [{
        data: data,
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
    }]
  }
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType : 'jsonp',
    success: success
  });
}
