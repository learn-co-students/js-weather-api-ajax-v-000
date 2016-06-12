jQuery(document).ready(function($) {
  var API_KEY = "f8b02e8dc4c16451";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
  	debugger;
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
  });
});
