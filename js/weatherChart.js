function getFarenheits(result){
  var f = [];
  $.each(result['hourly_forecast'], function(i, v){
      f.push(v['temp']['english']);
  });
  return f;
}

function getHours(result){
  var hours = [];
  $.each(result['hourly_forecast'], function(i, v){
    hours.push(v['FCTTIME']['hour']);
  });
  return hours
}

function generateDataSet(labels, data) {
  var dataForChart = {
    labels: labels,
    datasets: [
    { 
      label : 'Hourly Weather for New York', 
      fillColor : 'rgba(220,220,220,0.2)', 
      strokeColor : 'rgba(220,220,220,1)', 
      pointColor : 'rgba(220,220,220,1)', 
      pointStrokeColor : '#fff', 
      pointHighlightFill : '#fff', 
      pointHighlightStroke : 'rgba(220,220,220,1)',
      data : data      
    }
    ]
  }
  return dataForChart
}

// { labels : [ 'label1', 'label2' ], datasets : [ { label : 'Hourly Weather for New York', fillColor : 'rgba(220,220,220,0.2)', strokeColor : 'rgba(220,220,220,1)', pointColor : 'rgba(220,220,220,1)', pointStrokeColor : '#fff', pointHighlightFill : '#fff', pointHighlightStroke : 'rgba(220,220,220,1)', data : [ 'data1', 'data2' ] } ] }.


function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
