
function getFarenheits(result){
  return result.hourly_forecast.map(function(obj){return obj.temp.english})
}

function getHours(result){
  return result.hourly_forecast.map(function(obj){return obj.FCTTIME.hour})
}

function generateDataSet(labels, data) {
var dataset = {
        labels: labels,
        datasets: [{ label: 'Hourly Weather for New York',
        fillColor : 'rgba(220,220,220,0.2)',
        strokeColor : 'rgba(220,220,220,1)',
        pointColor : 'rgba(220,220,220,1)',
        pointStrokeColor : '#fff',
        pointHighlightFill : '#fff',
        pointHighlightStroke : 'rgba(220,220,220,1)',
        data: data }]
        }
    return dataset;
}

function makeAjaxRequest(endpoint, success) {
  var thing = $.ajax({url: endpoint, dataType: 'jsonp', success: success})
}
