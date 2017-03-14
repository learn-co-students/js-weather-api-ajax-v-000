// the result object sent back by the API contains .hourly_forecast and .response

// function 1 finds the necessary info from the JSON
function getFahrenheits(result){
  // puts as an array of temperatures (temp.english = Degree Fahrenheits)
	return result.hourly_forecast.map(function(item){
		return item.temp.english
	})
}

// function 2 finds the necessary info from the JSON
function getHours(result){
	return result.hourly_forecast.map(function(item){
		return item.FCTTIME.hour + "h";
	})  
}

			// FROM DOCUMENTATION An example data object using these attributes is shown below.
			// http://www.chartjs.org/docs/#line-chart-example-usage

			// var data = {
			//     labels: ["January", "February", "March", "April", "May", "June", "July"],
			//     datasets: [
			//         {
			//             label: "My First dataset",
			//             fill: false,
			//             lineTension: 0.1,
			//             backgroundColor: "rgba(75,192,192,0.4)",
			//             borderColor: "rgba(75,192,192,1)",
			//             borderCapStyle: 'butt',
			//             borderDash: [],
			//             borderDashOffset: 0.0,
			//             borderJoinStyle: 'miter',
			//             pointBorderColor: "rgba(75,192,192,1)",
			//             pointBackgroundColor: "#fff",
			//             pointBorderWidth: 1,
			//             pointHoverRadius: 5,
			//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
			//             pointHoverBorderColor: "rgba(220,220,220,1)",
			//             pointHoverBorderWidth: 2,
			//             pointRadius: 1,
			//             pointHitRadius: 10,
			//             data: [65, 59, 80, 81, 56, 55, 40],
			//             spanGaps: false,
			//         }
			//     ]
			// };

// generateDataSet(getHours(json), getFahrenheits(json)); Uses Function 1 and Function 2
// labels are hours, data is temperature
function generateDataSet(labels, data) {
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
}

// success is the callback to execute once request comes back with data
function makeAjaxRequest(endpoint, success) {
  $.ajax({
  	url: endpoint,
  	dataType: 'jsonp',
  	success: success
  })
}
