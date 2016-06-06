function getFarenheits(result){

  var farenheits = [];
  $.each(result['hourly_forecast'], function (index, data) {
    farenheits.push(data.temp.english);
  })

  return farenheits;
}

function getHours(result){

  var hours = [];
  $.each(result['hourly_forecast'], function (index, data) {
    hours.push(data.FCTTIME.hour);
  })

  return hours;
}

function generateDataSet(labels, data) {

    var dataset = {
      labels: labels,
      datasets: [ {
        label: 'Hourly Weather for New York',
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      } ]
    };

  return dataset;
}

function makeAjaxRequest(endpoint, success) {

  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
