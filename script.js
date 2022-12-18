

let result = document.getElementById("result");

let searchBtn = document.getElementById("search-btn");
let cityRef= document.getElementById("city");

let getWeather = () => {

    let cityValue = cityRef.value;
    if(cityValue.length == 0){
        result.innerHTML = `<h3 class="msg">Please enter a city name.</h3>`;
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=imperial`;
        cityRef.value = "";
        fetch(url)
        .then((resp) => resp.json())
        
        .then((data) => {

            changewall(data.weather[0].main)
            function changewall(url){
                if(url=='Clear')
                document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')`;
                
                else if(url=='Clouds')
                document.body.style.backgroundImage= `url('https://thumbs.dreamstime.com/b/white-fluffy-thick-clouds-against-blue-sky-natural-background-wallpaper-concept-clean-air-ecology-white-fluffy-165897187.jpg ')`;
                
                else if(url=='Snow')
                document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412__340.jpg')`;
               
                else if(url=='Haze' || 'Mist' || 'Smoke' || 'Fog')
                document.body.style.backgroundImage=`url('https://external-preview.redd.it/uXph-aQl65LEMx6tzW_11oo3sUkJ5keWzhNx6VKuO_s.jpg?auto=webp&s=af33259ad0da522f2165033965cfd4dc99da07c1 ')`;
                
                else if(url=='Thunderstorm' || 'Squall' || 'Tornado')
                document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2016/01/22/23/06/flash-1156822__340.jpg')`;
            
            
                else if(url=='Rain' || 'Drizzle')
                document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2018/03/11/12/14/raindrops-3216607__340.jpg')`;
            
                else if(url=='Sand' || 'Dust' || 'Ash')
                document.body.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2019/09/15/13/53/monument-valley-4478323_960_720.jpg')`;
            
            
            };
            var date = new Date(data.sys.sunrise * 1000)
            var sunrise = date.toLocaleTimeString('en-US')
            var date = new Date(data.sys.sunset * 1000)
            var sunset = date.toLocaleTimeString('en-US')
            console.log(date);
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <div class="shape shape-3">
                <img class="sunrise" src="/sunrise.png">
                <div class="temp-container">
                <h4 class="temp">${sunrise}</h4>
                </div>
            </div>
            <div class="shape shape-4">
                <img class="sunrise" src="/sunset.png">
                <div class="temp-container">
                <h4 class="temp">${sunset}</h4>
                </div>
            </div>
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${parseInt(data.main.temp)} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${parseInt(data.main.temp_min)} &#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${parseInt(data.main.temp_max)} &#176;</h4>
                </div>
            </div>
            `;


        })
        .catch(()=>{
            result.innerHTML = `<h3 class="msg">City not found.</h3>`
        })
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);


  



