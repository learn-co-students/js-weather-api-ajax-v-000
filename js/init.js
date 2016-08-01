jQuery(document).ready(function($) {
  var API_KEY = "bc856654ae5cc661";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/CO/Denver.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true});
  });
});
