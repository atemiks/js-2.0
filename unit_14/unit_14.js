fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.4333&lon=30.5167&exclude=current&lang=ua&appid=c17a4de12faec7bd61f37d5252361ac7')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);

        document.querySelector('.weather-block .weather-title').textContent = data.name;
        document.querySelector('.weather-block .weather-value').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather-block .weather-icon').setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
        document.querySelector('.weather-block .weather-description').textContent = data.weather[0].description;
    })

