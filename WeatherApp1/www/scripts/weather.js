onmessage = function (event) {
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?";
    var openWeatherApiKey = "cc27158389a82b0e55bd0b208191db09";
    var openWeatherDefaultCountry = ",uk";

    function getWeatherWithCity() {
        var city = $("city").val();
        var queryString;
        var re = /,/;
        if (re.test(city)) {
            queryString = http://api.openweathermap.org/data/2.5/weather?q=swansea,uk&appid=cc27158389a82b0e55bd0b208191db09&units=metric;
        }
        else {
            queryString = http://api.openweathermap.org/data/2.5/weather?&appid=cc27158389a82b0e55bd0b208191db09;
        }
        $.getJSON(queryString, function (results) {
            showWeatherData
        }).fail(function (jqXHR) {
            error-msg.removeClass().show("Error")
        })
    }
    
    function showWeatherData(results) {
        //Check if the returned results contains weather data
        if (results.weather != null && results.weather.length > 0) {
            $("#title").text(results.name);
            $("#sunrise").text(sunriseDate.toLocaleTimeString());
        } else {

        }
    }

    function getWeatherWithGeoLocation(){
        navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError, { enableHighAccuracy: true });
        $("#error-msg").show();
        $("#error-msg").text("Determing your current location ...");

        $("#get-weather-btn").prop("disabled", true);
    }

    function onGetLocationSuccess(position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

        $("get-weather-btn").prop("disabled", false);
        $.getJSON(queryString, function (results) {
            showWeatherData
        }).fail(function (jqXHR) {
            error - msg.removeClass().show("Error")
        })
    }

    function onGetLocationError(error) {
        error - msg("Error getting location");
        $("get-weather-btn").prop("disabled", false);
    }
};
