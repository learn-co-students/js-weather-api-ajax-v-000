function getFarenheits(result){
  // debugger;
  // Your code goes here
  var tempArray = $.map(result, function(temp, index) {
    return temp.temp.english
  })
  return tempArray
}

function getHours(result){
  // Your code goes here
  var hoursArray = $.map(result, function(hour, index) {
    return hour.FCTTIME.hour 
  })
  return hoursArray
}

function generateDataSet(labels, data) {
  // Your code goes here
  var data = {
    labels: labels,
    datasets: [
        {
            label: "NYC hourly forecast",
            fillColor: 'rgba(220,220,220,0.5)',
            strokeColor: 'rgba(220,220,220,0.8)',
            highlightFill: 'rgba(220,220,220,0.75)',
            highlightStroke: 'rgba(220,220,220,1)',
            data: data,
        }
      ]
    }
  return data  
};


function makeAjaxRequest(endpoint, success) {
  $.get(endpoint, success)
}
