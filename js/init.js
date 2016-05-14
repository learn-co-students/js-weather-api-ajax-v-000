jQuery(document).ready(function($) {
  var API_KEY = "39d9b590ae0ee2b2";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/MX/Merida.json";
  var ctx = $("#MeridaWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
  });
});
