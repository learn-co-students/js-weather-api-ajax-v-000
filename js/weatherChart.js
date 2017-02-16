function getFahrenheits(result){
  //hourly_forecast[0].temp.english
  //var hourly_result = result.hourly_forecast
  //var temp = []
  //$.each(hourly_result, function(index, hourly) {
    //temp.push(hourly.temp.english)
  //})
  //return temp
  return result.hourly_forecast.map(function(item){
    return item.temp.english
  })
}

function getHours(result){
  //hourly_forecast[0].FCTTIME.hour
  return result.hourly_forecast.map(function(item){
    return item.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  // Your code goes here
  return {
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
  return data
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success
  })
}
