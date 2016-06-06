jQuery(document).ready(function($) {
  var API_KEY = "359e30ea50d66ac0";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");
  makeAjaxRequest(URL, function(json) {
    debugger;
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true});
  });
});
