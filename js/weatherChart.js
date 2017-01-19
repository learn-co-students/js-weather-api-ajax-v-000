function getFahrenheits(result){
  // Your code goes here

  var anArray = [];
  var item;

//alert(result.hourly_forecast.length)
  for (var i=0; i < result.hourly_forecast.length; i++) {
    item = result.hourly_forecast[i].temp.english;
    anArray.push(item);
  }
//  alert(anArray)
  return anArray;
}

function getHours(result){
  // Your code goes here
  var anArray = [];
  var item;
  var t;

for (var i=0; i < result.hourly_forecast.length; i++) {

    item = result.hourly_forecast[i].FCTTIME.hour;
    anArray.push(item);
  };

  return anArray;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var aData = {
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
  }
  return aData;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
