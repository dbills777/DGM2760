


window.addEventListener("load", () => {
  let long; //initialize variables for lat & long to hold loccation
  let lat;
  const temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const temperatureDegree = document.querySelector(".temperature-degree");
  const locationTimezone = document.querySelector(".location-timezone");
  const temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");

  function GetCity(location) {
    let city = location.split("/");
    console.log(city[1]);
    locationTimezone.textContent= "Nearest Reported City " + city[1]
    return city
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude; //create variable for longitude
      lat = position.coords.latitude; // crease variable for lattitued

      const proxy = "https://cors-anywhere.herokuapp.com/"; // used proxy to allow api access on local host for building

      const api = `${proxy}https://api.darksky.net/forecast/ff487ff02150ce9085ea99eed5741216/${lat},${long}`; //edit default api url to include my variables for lat & long

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          //set DOM elemnts from the API
          temperatureDegree.textContent =
            temperature.toFixed(1) + " click to change unit";
          temperatureDescription.textContent = summary;
          GetCity(data.timezone);
          let celsius = (temperature - 32) * (5 / 9);
          //Set Icon
          setIcons(icon, document.querySelector(".icon"));

          // change temperature F to C
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = celsius.toFixed(1) + " C";
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature + " F";
            }
          });
        });
    });
  } else {
    h1.textContent = "Please Enable Location To View Weather";
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
