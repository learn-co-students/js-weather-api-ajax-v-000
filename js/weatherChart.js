function getFarenheits(result){
  return result.hourly_forecast.map(function(fahr){
    return fahr.temp['english']
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(time){
    return time.FCTTIME.hour
  })
}


function generateDataSet(labels, dataI) {
  var data = {};
   data.labels = labels;
   data.datasets = [
     {
       label: "Hourly Weather for New York",
       fillColor: "rgba(220,220,220,0.2)",
       strokeColor: "rgba(220,220,220,1)",
       pointColor: "rgba(220,220,220,1)",
       pointStrokeColor: "#fff",
       pointHighlightFill: "#fff",
       pointHighlightStroke: "rgba(220,220,220,1)",
       data: dataI
     }
   ]
   return data;
}



function makeAjaxRequest(endpoint, success) {
  $.ajax({ url: endpoint, dataType : "jsonp", success: success})
}
