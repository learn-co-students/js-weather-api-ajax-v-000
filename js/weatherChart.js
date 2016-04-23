function getFarenheits(result){
  // Your code goes here
  degrees = $.map(result.hourly_forecast, function(hour, index){
    return hour['temp']['english'];
  })
  return degrees;
}

function getHours(result){
  // Your code goes here
  hours = $.map(result.hourly_forecast, function(hour, index){
    return hour['FCTTIME']['hour'];
  })
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here

  var dataToChart = {
    labels: labels,
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };
  return dataToChart;

}

function makeAjaxRequest(endpoint, success) {

  // $.getJSON(endpoint + '?callback=?', function(response) {
  //   success(response);
  // })
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: function (data){
      success(data);
    }
  })

  
}
