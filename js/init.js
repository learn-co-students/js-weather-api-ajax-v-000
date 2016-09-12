jQuery(document).ready(function($) {
  var API_KEY = "68fe0e8aa854dbce";
  var URL = "http://api.wunderground.com/api/" + "68fe0e8aa854dbce" + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
   var tempChart = new Chart(ctx).Line(data, {bezierCurve: true});
  });
});
