jQuery(document).ready(function($) {
  var API_KEY = "1208c0297d0bc6b3";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(data) {
    var data = generateDataSet(getHours(data), getFahrenheits(data));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});
