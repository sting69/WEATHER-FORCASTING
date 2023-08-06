const API_key = '10862075663a4e70929100200222005'

window.onload = function () {

    var temp = function (pos) {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${pos.coords.latitude}, ${pos.coords.longitude}&days=3`)
        .then((data) => data.json())
        .then((jsonData) => (
            console.log(jsonData),
            document.getElementById("cityName").innerHTML=jsonData.location.name,
            document.getElementById("State").innerHTML=jsonData.location.region,
            document.getElementById("Today").innerHTML=jsonData.forecast.forecastday[0].date,
            document.getElementById("temp_val").innerHTML=jsonData.forecast.forecastday[0].day.avgtemp_c,
            document.getElementById("weather_desc").innerHTML=jsonData.forecast.forecastday[0].day.condition.text,
            document.getElementById("forecast0").innerHTML=jsonData.forecast.forecastday[0].date.substring(5),
            document.getElementById("forecast1").innerHTML=jsonData.forecast.forecastday[1].date.substring(5),
            document.getElementById("forecast2").innerHTML=jsonData.forecast.forecastday[2].date.substring(5),
            document.getElementById("forecast0_temp").innerHTML=jsonData.forecast.forecastday[0].day.avgtemp_c,
            document.getElementById("forecast1_temp").innerHTML=jsonData.forecast.forecastday[1].day.avgtemp_c,
            document.getElementById("forecast2_temp").innerHTML=jsonData.forecast.forecastday[2].day.avgtemp_c,
            document.getElementById("forecast0_max").innerHTML=Math.round(jsonData.forecast.forecastday[0].day.maxtemp_c),
            document.getElementById("forecast0_min").innerHTML=Math.round(jsonData.forecast.forecastday[0].day.mintemp_c),
            document.getElementById("forecast1_max").innerHTML=Math.round(jsonData.forecast.forecastday[1].day.maxtemp_c),
            document.getElementById("forecast1_min").innerHTML=Math.round(jsonData.forecast.forecastday[1].day.mintemp_c),
            document.getElementById("forecast2_max").innerHTML=Math.round(jsonData.forecast.forecastday[2].day.maxtemp_c),
            document.getElementById("forecast2_min").innerHTML=Math.round(jsonData.forecast.forecastday[2].day.mintemp_c)
        ))
    };
    navigator.geolocation.getCurrentPosition(temp);
}
