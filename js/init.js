jQuery(document).ready(function($) {
  var API_KEY = mySecret();
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var parsedJson = json["hourly_forecast"]
    var data = generateDataSet(getHours(parsedJson), getFarenheits(parsedJson));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true})
  });
});
