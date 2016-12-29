jQuery(document).ready(function($) {
  var API_KEY = "ed2ef6913b5e7428";
  var URL = "http://api.wunderground.com/api/ed2ef6913b5e7428/hourly/q/UT/Park_City.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});
