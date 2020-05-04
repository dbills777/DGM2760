//set the company name
document.querySelector("#companyName").textContent = "Las Vegas Hotels";
//set the company slogan
document.querySelector("#companySlogan").textContent = "Welcome to Las Vegas";
// **********************************************
//fetch API implementation here
async function getHotelData() {
  try {
    const response = await fetch("hotel.json");
    return await response.json(); //returns the JSON OBJECT!!
  } catch (error) {
    console.error(error);
  }
}

let hotelData = {};

getHotelData().then(data => (hotelData = data));
// target each button I did not use anchor tags for the hotel names
document.querySelector("#aria").addEventListener("click", hotelInfo);
document.querySelector("#wynn").addEventListener("click", hotelInfo);
document.querySelector("#cosmopolitan").addEventListener("click", hotelInfo);

function hotelInfo(event) {
  let userChoice = hotelData.hotels.find(hotel => {
    return event.target.id == hotel.name.toLowerCase();
  });
  document.querySelector(
    "#address"
  ).textContent = `Address: ${userChoice.address}`;
  document.querySelector("#rooms").textContent = userChoice.rooms;
  document.querySelector("#gym").textContent = userChoice.gym;
  document.querySelector("#roomTypes").textContent = userChoice.roomTypes;
  document.querySelector("#picture").src = userChoice.picture;
}
