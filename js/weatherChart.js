function getFahrenheits(result){
  var temp = [];
  $(result.hourly_forecast).each(function(index, el) {
    temp.push(el.temp.english);
  });
  return temp;
}

function getHours(result){
  var hour = [];
  $(result.hourly_forecast).each(function(index, el) {
     hour.push(el.FCTTIME.hour);
  });
  return hour;
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
  $.ajax({
    url: endpoint,
    type: 'get',
    dataType: 'json',
    success: success
  })
}
