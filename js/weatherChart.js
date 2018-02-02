function getFahrenheits(result){
  // Your code goes here
  const newResult = [];
  $.each(result.hourly_forecast, function(index, array) {
    newResult.push(array['temp']['english']);
  })
  return newResult;
}

function getHours(result){
  // Your code goes here
  const newResult = [];
  $.each(result.hourly_forecast, function(index, array) {
    newResult.push(array['FCTTIME']['hour']);
  })
  return newResult;
}

function generateDataSet(label, data) {
  // Your code goes here
  //debugger;
  var dataset = { labels:[], datasets:[]}
  dataset['labels'] = label;
  dataset['datasets'] = [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }];

  return dataset;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    //type: 'GET',
    dataType: 'jsonp',
    success: success
});
}
