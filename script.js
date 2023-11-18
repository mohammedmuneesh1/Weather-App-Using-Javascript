const api_key = "db81952e32455d09e7859b55479af391 ";
//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=db81952e32455d09e7859b55479af391&units=metric
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchField = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const weatherImage = document.querySelector(".weather-icon");

const cities = [
  "New York City","Paris","Tokyo","London","Beijing","Moscow","Istanbul","Cairo","Rio de Janeiro","Sydney","Rome","Berlin","Mumbai","Dubai",
  "Seoul","Cape Town","Toronto","Buenos Aires","Mexico City","Barcelona","Amsterdam","Bangkok","Singapore","Athens","Vienna",
  "Prague","Hong Kong","Stockholm","Zurich","Los Angeles","San Francisco","Chicago","Miami","Montreal","Vancouver","Johannesburg","Nairobi","Marrakech","Doha",
  "Riyadh","Delhi","Shanghai","Kyoto","Ho Chi Minh City","Melbourne","Auckland","Manila","Jakarta","St. Petersburg","Milan","Lyon","Munich","Frankfurt","Geneva","Rotterdam",
  "Brussels",
  "Budapest",
  "Warsaw",
  "Lisbon",
  "Porto",
  "Dublin",
  "Manchester",
  "Edinburgh",
  "Oslo",
  "Copenhagen",
  "Helsinki",
  "Reykjavik",
  "Edmonton",
  "Dallas",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "Seattle",
  "Denver",
  "Austin",
  "Washington, D.C.",
  "Boston",
  "Atlanta",
  "Miami Beach",
  "Las Vegas",
  "Nashville",
  "Orlando",
  "San Diego",
  "New Orleans",
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Ottawa",
  "Quebec City",
  "Halifax",
  "Winnipeg",
  "Saskatoon",
  "Regina",
  "Hamilton",
  "Auckland",
  "Wellington",
  "Christchurch",
  "Queenstown",
];
const Index = Math.floor(Math.random() * cities.length);
const value = cities[Index]


const weather = async(city)=>{
    const response = await fetch(apiUrl + city + `&appid=${api_key}`);
    var dataSet = await response.json();
    updateWeather(dataSet)
}

const updateWeather = async (data) => {

  console.log(data);

  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}  km/hr`;
  document.querySelector(
    ".max-min"
  ).innerHTML = ` Max.${data.main.temp_max}° &nbsp;&nbsp;&nbsp;&nbsp Min.${data.main.temp_min}°`;
  document.querySelector(".wind-deg").innerHTML = `${data.wind.deg} Deg`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".A-P").innerHTML = `${data.main.pressure} Pa`;
  document.querySelector(
    ".weather-description"
  ).innerHTML = `${data.weather[0].description}`;

  // console.log()

  if (data.weather[0].main === "Clear")
    return (weatherImage.src = "images/clear.png");
  if (data.weather[0].main === "Clouds")
    return (weatherImage.src = "images/clouds.png");
  if (data.weather[0].main === "Mist")
    return (weatherImage.src = "images/mist.png");
  if (data.weather[0].main === "Rain")
    return (weatherImage.src = "images/rain.png");
  if (data.weather[0].main === "Smoke")
    return (weatherImage.src = "images/smoke.png");
  if (data.weather[0].main === "Drizzle")
    return (weatherImage.src = "images/drizzle.png");
  if (data.weather[0].main === "Snow")
    return (weatherImage.src = "images/smoke.png");
};
weather(value); // it will be executed only once when the script runs initially. It won't be called indefinitely unless there are other parts of your code that explicitly call it repeatedly.

searchButton.addEventListener("click", () => {
  weather(searchField.value); 
});
