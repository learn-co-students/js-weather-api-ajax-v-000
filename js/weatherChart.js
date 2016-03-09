function getFarenheits(result){
  // Your code goes here
  // result['hourly_forecast'][0].temp.english
  var farenheits = [];
  $.each(result['hourly_forecast'], function (index, data) {
    farenheits.push(data.temp.english);
  })

  return farenheits;
}

function getHours(result){
  // Your code goes here
  var hours = [];
  $.each(result['hourly_forecast'], function (index, data) {
    hours.push(data.FCTTIME.hour);
  })

  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  //var datasets = [];
  //debugger;
  //$.each(labels, function (index, label) {
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
  //});

  return dataset;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
