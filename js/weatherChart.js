
function getFarenheits(result){
  
  var tempArray = $.map(result["hourly_forecast"], function(temp, index) {
    return temp.temp.english
  })
  return tempArray
}

function getHours(result){

  var hoursArray = $.map(result["hourly_forecast"], function(hour, index) {
    return hour.FCTTIME.hour 
  })
  return hoursArray
}

function generateDataSet(labels, data) {

  var dataSet = {
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
          data: data,
        }
      ]
    }
  return dataSet  
};


function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint, 
    dataType: 'jsonp', 
    success: success, 
  })
}
