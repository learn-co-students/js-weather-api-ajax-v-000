jQuery(document).ready(function($) {

  var API_KEY = "APIKEY";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  // http://api.wunderground.com/api/APIKEY/hourly/q/NY/New_York.json
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  // json is what comes back from the request
  makeAjaxRequest(URL, function(json) {
  	console.log(json);
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });

});

// json comes back like
// {
// "response": {
// "version": "0.1",
// "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
// "features": {
// "hourly": 1
// }
// },
// "hourly_forecast": [
// {
// "FCTTIME": {
// "hour": "17",
// "hour_padded": "17",
// "min": "00",
// "min_unpadded": "0",
// "sec": "0",
// "year": "2017",
// "mon": "3",
// "mon_padded": "03",
// "mon_abbrev": "Mar",
// "mday": "14",
// "mday_padded": "14",
// "yday": "72",
// "isdst": "1",
// "epoch": "1489525200",
// "pretty": "5:00 PM EDT on March 14, 2017",
// "civil": "5:00 PM",
// "month_name": "March",
// "month_name_abbrev": "Mar",
// "weekday_name": "Tuesday",
// "weekday_name_night": "Tuesday Night",
// "weekday_name_abbrev": "Tue",
// "weekday_name_unlang": "Tuesday",
// "weekday_name_night_unlang": "Tuesday Night",
// "ampm": "PM",
// "tz": "",
// "age": "",
// "UTCDATE": ""
// },
// "temp": {
// "english": "31",
// "metric": "-1"
// },
// "dewpoint": {
// "english": "25",
// "metric": "-4"
// },
// "condition": "Snow Showers",
// "icon": "snow",
// "icon_url": "http://icons.wxug.com/i/c/k/snow.gif",
// "fctcode": "19",
// "sky": "100",
// "wspd": {
// "english": "18",
// "metric": "29"
// },
// "wdir": {
// "dir": "NW",
// "degrees": "327"
// },
// "wx": "Snow Showers",
// "uvi": "0",
// "humidity": "79",
// "windchill": {
// "english": "18",
// "metric": "-8"
// },
// "heatindex": {
// "english": "-9999",
// "metric": "-9999"
// },
// "feelslike": {
// "english": "18",
// "metric": "-8"
// },
// "qpf": {
// "english": "0.01",
// "metric": "0"
// },
// "snow": {
// "english": "0.1",
// "metric": "3"
// },
// "pop": "56",
// "mslp": {
// "english": "29.18",
// "metric": "988"
// }
// }, ...