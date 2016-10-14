function getFahrenheits(result){
  var fahrenheits = [];
  $.each(result["hourly_forecast"], function(index, hash) {
    fahrenheits.push(hash.temp.english);
  });
  return fahrenheits;
}

function getHours(result){
  var hours = [];
  $.each(result["hourly_forecast"], function(index, hash) {
    hours.push(hash.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
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
  // Your code goes here
  $.ajax({url: endpoint, dataType : 'jsonp', success: success});
}
