function getFarenheits(result){
  return $.map(result.hourly_forecast, function(e){return e.temp.english;});

}

function getHours(result){
 return $.map(result.hourly_forecast, function(e){return e.FCTTIME.hour;});
}

function generateDataSet(labels, data) {
 var data = {
    labels: labels,
    datasets: [{
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
    }]
  };
  return data;
}


function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success}
    );
}
