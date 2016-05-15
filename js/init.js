jQuery(document).ready(function($) {
  var API_KEY = "cc376e2f35ca52d6";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});
  });
});

//"http://api.wunderground.com/api/cc376e2f35ca52d6/hourly/q/NY/New_York.json"
