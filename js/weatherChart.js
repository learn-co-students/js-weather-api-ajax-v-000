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
    fillColor: "rgba(158,178,208,0.2)",
    strokeColor: "rgba(184,141,74, 1)",
    pointColor: "rgba(71,112,170,1)",
    pointStrokeColor: "#rgba(71,158,206,1)",
    pointHighlightFill: "#rgba(71,158,206,1)",
    pointHighlightStroke: "rgba(71,158,206,1)",
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
