const API_KEY = 'fb4da0da4903b01bb075e8211d32bce2';
const search = () => {
    const searchText = document.getElementById('serach-text').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY }&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}

const display = temperature => {
    console.log(temperature);
    setInnerText('city',temperature.name);
    setInnerText('DisplayTemperature', temperature.main.temp);
    setInnerText('presentCondition', temperature.weather[0].main);
    // set weather icon
    const iconUrl = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src',iconUrl);
}
