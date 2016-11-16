jQuery(document).ready(function($) {
  var API_KEY = "b41b1233d35aa647";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  // var ctx = $("#NYCWeatherChart").getContext("2d");
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d");
  
  makeAjaxRequest(URL, function(json) { // json is the object from the ajax call and this anonymous function is the succes function
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});

  });
});
