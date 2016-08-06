function getFarenheits(result){
  // Your code goes here
  var temps = [];
     result = result.hourly_forecast;
  $.each(result, function(index) {
    temps.push(result[index].temp.english);
  })
  return temps;
}

function getHours(result){
  // Your code goes here
  var hours = [];
     result = result.hourly_forecast;
  $.each(result, function(index) {
    hours.push(result[index].FCTTIME.hour);
  })
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var result = {
    labels: labels,
      datasets: [
        {
          label: "NY Weather Dataset",
          label: "Hourly Weather for New York",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data,
        }
      ]
    };
    return result;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}

