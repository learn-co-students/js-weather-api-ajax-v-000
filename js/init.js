jQuery(document).ready(function($) {
  //Step 1: set your key to the var API_KEY
  var API_KEY = "754c71dc017572ae";
  //Step 2: set the API url to the var URL
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  //Step 3: get the context for your chart
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  //Step 4: use the function "makeAjaxRequest" and submit two params to make Ajax request
  makeAjaxRequest(URL, function(json) {
    //provides our chart data with two params "hours" and "temps"
    //Step 9: set var "data" equal to returned dataset
    var data = generateDataSet(getHours(json), getFarenheits(json));
    //Step 10: instantiate the Chart class and Chart.js takes care of rest
    //var tempChart = new Chart.Line(ctx, {data: data, options: { bezierCurve: true}});

    var tempChart = new Chart(ctx, {
      type: 'line',
      data: data, 
      options: { bezierCurve: true}
    });
  
  });
});
