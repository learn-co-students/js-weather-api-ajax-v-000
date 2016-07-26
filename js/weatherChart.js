

function getFarenheits(result){
  var degrees = []
  for (i = 0; i < result.hourly_forecast.length; i ++) {
    degrees.push(result.hourly_forecast[i].temp.english)
  }
  return degrees
  // Your code goes here
}

function getHours(result){
  var degrees = []
  for (i = 0; i < result.hourly_forecast.length; i ++) {
    degrees.push(result.hourly_forecast[i].FCTTIME.hour)
  }
  return degrees
  // Your code goes here
}

function generateDataSet(labels, data) {
  var matches = {}
  matches['labels'] = labels

  matches['datasets'] = [ {
   label : 'Hourly Weather for New York', 
   fillColor : 'rgba(220,220,220,0.2)', 
   strokeColor : 'rgba(220,220,220,1)', 
   pointColor : 'rgba(220,220,220,1)', 
   pointStrokeColor : '#fff', 
   pointHighlightFill : '#fff', 
   pointHighlightStroke : 'rgba(220,220,220,1)',
  data: data }
  ]
  return matches
  // Your code goes here
}

function makeAjaxRequest(endpoint, success) {

  $.ajax ({
    url: endpoint,  
    dataType: 'jsonp',
    success: success
  })
}
