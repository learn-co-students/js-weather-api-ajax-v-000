function getFarenheits(result){
  var farenheits = []
  for (index = 0; index < result["hourly_forecast"].length; index++) {
    farenheits.push(result["hourly_forecast"][index]["temp"]["english"]);
  };
  // console.log(farenheits)
  return farenheits;
}

function getHours(result){
  var hours = []
  for (index = 0; index < result["hourly_forecast"].length; index++) {
    hours.push(result["hourly_forecast"][index]["FCTTIME"]["hour"]);
  };
  // console.log(hours)
  return hours;
}

function generateDataSet(labels, data) {
  var data = {
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
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
