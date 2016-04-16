var options = {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
      };

function getFarenheits(result){
  var far = result.hourly_forecast.map(function(hour) {
    return hour.temp.english;
  });
  return far;
}

function getHours(result){
  var hours = result.hourly_forecast.map(function(hour) {
    return hour.FCTTIME.hour;
  });
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  datas = {};
  options.data = data;
  arr = [];
  arr.push(options);
  datas.labels = labels;
  datas.datasets = arr;
  return datas;

}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
