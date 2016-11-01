function getFahrenheits(result){
  return result.hourly_forecast.map(function(item) {
    return item.temp.english;
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(item) {
    return item.FCTTIME.hour;
  })
}

function generateDataSet(labels, data) {
 var generateData = {

  labels: labels,
  datasets: [{
    label: 'Hourly Weather for New York',

    // these fill colors make the test pass but are boring

    // fillColor: "rgba(220,220,220,0.2)",
    //     strokeColor: "rgba(220,220,220,1)",
    //     pointColor: "rgba(220,220,220,1)",
    //     pointStrokeColor: "#fff",
    //     pointHighlightFill: "#fff",
    //     pointHighlightStroke: "rgba(220,220,220,1)",


    // these below fill colors are MUCH more fun, but dont pass the test specs
    
    fillColor: dynamicColors(),
    strokeColor: dynamicColors(),
    pointColor: dynamicColors(),
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
  }]
};
  return generateData;
}

var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({ url : endpoint, dataType : "jsonp", success: success})
}