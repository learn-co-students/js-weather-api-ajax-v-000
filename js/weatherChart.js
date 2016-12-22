function getFahrenheits(result){
  // Your code goes here
  var a = [];
  var hourlyData = result.hourly_forecast;
  $.each(hourlyData, function(index, hour) {
    a.push(hour.temp.english);
  })
  return a;

}

function getHours(result){
  // Your code goes here
  var a = [];
  var hourlyData = result.hourly_forecast;
  $.each(hourlyData, function(index, hour) {
    a.push(hour.FCTTIME.hour);
  })
  return a;
}

function generateDataSet(labels, inputData) {
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
        data: inputData,
      }]
  };
  return data;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  console.log("Running AJAX request")
	$.ajax({
	url: endpoint,
  dataType: 'jsonp',
	success: success
  	})
}
