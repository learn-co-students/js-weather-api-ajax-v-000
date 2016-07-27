jQuery(document).ready(function($) {
  var API_KEY = "6df88e8936f25d17";
  var URL = "http://api.wunderground.com/api/" + "6df88e8936f25d17" + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
  });
});
