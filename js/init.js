jQuery(document).ready(function($) {
  var API_KEY = "96fecc79325e0a25";
  var URL = "http://api.wunderground.com/api/" + "96fecc79325e0a25" + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});



