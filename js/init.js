jQuery(document).ready(function($) {
	//get key from https://www.wunderground.com/weather/api/d/e9917004f1527124/edit.html?api_action=changesubscription&api_history=undefined&api_usage=0&api_package=a
  var API_KEY = "e9917004f1527124";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true})
   // var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
  });
});
