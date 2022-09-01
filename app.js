let apiKey="4dfe49f420596abe2c47f94eca96643a";

document.addEventListener("DOMContentLoaded",function(){
    let citySearch;
    
    document.getElementById("search-form").addEventListener("submit",searchSubmit)
   
    document.querySelector(".search-bar").addEventListener("input",function(e){
        citySearch=e.target.value;
        //console.log(citySearch);
    })

    function searchSubmit(e){

    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}+&units=metric&appid=${apiKey}`)

     .then((response)=>response.json())

     .then(data=>{

   // console.log(data)

        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp, humidity} =data.main;
        const {speed}=data.wind;

    document.querySelector(".city").innerText="Weather in " + name;

    document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png"

    document.querySelector(".description").innerText=description;

    document.querySelector(".temp").innerText=temp + "°C";

    document.querySelector(".humidity").innerText="Humidity: "+ humidity + "%";

    document.querySelector(".wind").innerText="Wind speed: "+ speed + " km/h";




});


    }
})



