jQuery(document).ready(function($) {
  var API_KEY = "6df88e8936f25d17";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
    new Chart(ctx).Bar(data)
  });
});
