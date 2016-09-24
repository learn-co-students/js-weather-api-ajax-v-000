function getFarenheits(result){
  var temps = [];
  for (i = 0;i < result.hourly_forecast.length; i++)
  {
    temps.push(result.hourly_forecast[i].temp.english)
  }
  return temps;
}

function getHours(result){
  var hours = [];
  for (i = 0;i < result.hourly_forecast.length; i++)
  {
    hours.push(result.hourly_forecast[i].FCTTIME.hour_padded)
  }
  return hours;
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

function makeAjaxRequest(endpoint, success) {
  $.ajax({url: endpoint, dataType: 'jsonp', success: success})
}
