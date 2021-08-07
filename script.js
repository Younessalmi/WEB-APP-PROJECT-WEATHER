$(function(){
    var apikey = "e554036fee6620911ec87ed0ddda28d6";
    $("#div1").hide()
    
    $("#search-btn").click(function(e){
        e.preventDefault()
        var city = $("#search-bar").val();
        var apilink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        $.get(apilink, function(data,status){
            $("#div1").show()
            $("#info-temp").text(`${data.main.temp}°`)
            $("#info-hum").text(`${data.main.humidity} %`)
            $("#info-wind").text(`${data.wind.speed} km/h`)
            $("#info-desc").text(data.weather[0].main)
            $("#info-press").text(`${data.main.pressure} mb`)
            $("#city").text(data.name)

            if (data.weather[0].main=="Clear") {
                $("#imgweather").attr("src","./image/sun.svg")
            } else if (data.weather[0].main=="Rain") {
                $("#imgweather").attr("src","./image/Rain.svg")
            } else if (data.weather[0].main=="Snow") {
                $("#imgweather").attr("src","./image/snowflake.svg")
            } else if (data.weather[0].main=="Clouds") {
                $("#imgweather").attr("src","./image/cloud.svg")
            }
        })







    })

    


})