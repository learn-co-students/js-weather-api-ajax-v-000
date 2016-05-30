jQuery(document).ready(function($) {
  var API_KEY = "3ccf9c79037fb14e";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    debugger;
    var tempChart = new Chart(ctx, {type: 'line', data: data, options: { bezierCurve: true}});
  });
});
