function getFarenheits(result){
  // Your code goes here
  var mappedTemps = result['hourly_forecast'].map( function(n) {
    return n['temp']['english']
  })
  return mappedTemps
//  debugger
}

function getHours(result){
  // Your code goes here
  //result['hourly_forecast'][0]['FCCTIME']['civil']
  var mappedTimes = result.hourly_forecast.map( function(n) {
    return n['FCTTIME']['hour']
  })
  return mappedTimes
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataSet = {}
  dataSet.labels = labels
  dataSet.datasets = [
    { label : 'Hourly Weather for New York',
    fillColor : 'rgba(220,220,220,0.2)',
    strokeColor : 'rgba(220,220,220,1)',
    pointColor : 'rgba(220,220,220,1)',
    pointStrokeColor : '#fff',
    pointHighlightFill : '#fff',
    pointHighlightStroke : 'rgba(220,220,220,1)',
    data: data
  }]
  return dataSet
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
    $.ajax({
      url: endpoint,
      dataType: 'jsonp',
      success: success
    })
}
