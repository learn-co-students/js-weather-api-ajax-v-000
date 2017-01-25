jQuery(document).ready(function($) {
  var API_KEY = "c7c6939494f0b7f8";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    // var ctx = $("#NYCWeatherChart").get(0).getContext("2d");
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});
