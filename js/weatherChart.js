//Yay Done!

//Step 7: parse the temp from JSON and put in array
function getFarenheits(result){
  // Your code goes here
  temps = [];
  for (var i=0; i<result.hourly_forecast.length; i++) {
    temps.push(result.hourly_forecast[i].temp.english);
  }
  return temps;
}

//Step 6: parse the hours from JSON and put in array
function getHours(result){
  // Your code goes here
  hours = [];
  for (var i = 0; i < result.hourly_forecast.length; i++) {
    hours.push(result.hourly_forecast[i].FCTTIME.hour);
  }
  return hours;
}


//Step 8: use the "hours" and "temps" for the chart "data"
function generateDataSet(labels, data) {
  // Your code goes here
    var data = {
    labels: labels, //these are the "hours"
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data //these are the "temps"
      }
    ]
  };
  return data;
}

//Step 5: Step 4 leads here
function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    //endpoint holds the value of our URL
    url: endpoint,
    dataType: "jsonp",
    //success holds the value of our function in Step 4
    success: success,
  });
}
