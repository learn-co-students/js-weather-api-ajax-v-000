function getFarenheits(result){
  var temps = [];
  $.each(result.hourly_forecast, function(index, obj){
    temps.push(obj.temp.english);
  });
  return temps;
}

function getHours(result){
  var hours = [];
  $.each(result.hourly_forecast, function(index, obj){
    hours.push(obj.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  var dataObj = {};
  dataObj.labels = labels;
  dataObj.datasets = [
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
  ];
  return dataObj;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({ 
    url : endpoint, 
    dataType : "jsonp", 
    success: success});
  /*
  $.ajax({
    url: endpoint,
    dataType : "jsonp",
    success: function(response) {
      console.log(response);
      success(response);
    }
  });
  */
}
