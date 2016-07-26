jQuery(document).ready(function($) {
  var API_KEY = "ea9534a37d8f2394";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");
  var json = makeAjaxRequest(url, success)

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    new Chart(ctx, {type: 'line', data: data, options: { bezierCurve: true}});
  });
});
