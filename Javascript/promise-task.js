const longitudevalue=document.getElementById('longitude');
const latitudevalue=document.getElementById('latitude');
const city=document.getElementById('city');
const cloud=document.getElementById('cloud');
const temperature=document.getElementById('temperature');
const feelslike=document.getElementById('feelslike');
const humidity=document.getElementById('humidity')
const min_temp=document.getElementById('min-temp')
const max_temp=document.getElementById('max-temp')
const wind_speed=document.getElementById('wind-speed')
const wind_degree=document.getElementById('wind-degree')
const sunrise=document.getElementById('sunrise')
const sunset=document.getElementById('sunset')
const display=document.querySelector('.display')

let latitude;
let longitude;

// const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}


function showPosition(position) {
//   console.log("Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude);
//   console.log(`Latitude:${position.coords.latitude}, Longitude:${position.coords.longitude}`)
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
    // console.log(latitude,longitude)
    fetchdata()
    fetchweather()
    fetchforecast()
}
getLocation()



async function fetchdata() {
    try{
        const baseurl = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
        // console.log(latitude,longitude)  
        const url = `${baseurl}?latitude=${latitude}&longitude=${longitude}`;

        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        latitudevalue.textContent=data.latitude;
        longitudevalue.textContent=data.longitude;
        city.textContent=data.city;
        // console.log(latitude,longitude)
    }catch(error){
        console.log(error);
    }
}



async function fetchweather() {
    try{
        const apikey='uI92Hp2VOdXDRSGRtA3vLtdt7IS1CVJf6xWsugdK';
        const baseurl='https://api.api-ninjas.com/v1/weather';
        // console.log(latitude,longitude)
        const url=`${baseurl}?lat=${latitude}&lon=${longitude}&x-Api-Key=${apikey}`;

        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data=await response.json();
        cloud.textContent=`${data.cloud_pct}`;
        temperature.textContent=`${data.temp}C`;
        feelslike.textContent=`${data.feels_like}C`;
        humidity.textContent=`${data.humidity}%`;
        min_temp.textContent=`${data.min_temp}C`;
        max_temp.textContent=`${data.max_temp}C`;
        wind_speed.textContent=`${data.wind_speed}km/h`;
        wind_degree.textContent=`${data.wind_degrees}`;

        // sunrise.textContent=data.sunrise;
        // sunset.textContent=data.sunset;

        // console.log(sunrise.textContent,sunset.textContent)
        let a=data.sunrise;
        let b=data.sunset;

        let date1=new Date(a*1000);
        let hours1=date1.getHours();
        let minutes1=date1.getMinutes();

        let date2=new Date(b*1000);
        let hours2=date2.getHours();
        let minutes2=date2.getMinutes();

        sunrise.textContent=`${hours1}:${minutes1}AM`;
        sunset.textContent=`${hours2}:${minutes2}PM`
        // console.log(data);
    }catch(error){
        console.log(error);
    }
}



async function fetchforecast() {
    try{
        const apikey='uI92Hp2VOdXDRSGRtA3vLtdt7IS1CVJf6xWsugdK';
        const baseurl='https://api.api-ninjas.com/v1/weatherforecast';
        // console.log(latitude,longitude)
        const url=`${baseurl}?lat=${latitude}&lon=${longitude}&x-Api-Key=${apikey}`;

        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data=await response.json();
        // console.log(data[0].timestamp)
        // let a=data[0].timestamp;
        // let date=new Date(a*1000);
        // let day=date.getDate()
        // let month=date.getMonth()+1
        // let year=date.getFullYear()

        // let res=`${day}-${month}-${year}`
        // console.log(res)
        
        // data.map(d => {
        //     // console.log(d.timestamp)
        //     let a=d.timestamp;
        //     let date=new Date(a*1000);
        //     let day=date.getDate()
        //     let month=date.getMonth()+1
        //     let year=date.getFullYear()

        //     let res=`${day}-${month}-${year}`
        //     console.log(res)
        // });

        // function mycallback(d){
        //     let a=d.timestamp;
        //     let date=new Date(a*1000);
        //     let day=date.getDate()
        //     let month=date.getMonth()+1
        //     let year=date.getFullYear()

        //     let res=`${day}-${month}-${year}`
        //     console.log(res)
        // }

        // let group=Object.groupBy(data,mycallback)
        // // console.log(group)

        const groupdata=data.reduce((acc,d)=>{
            const date=new Date(d.timestamp*1000).toLocaleDateString();
            if(!acc[date]){
                acc[date]=[];
            }
            acc[date].push(d);
            return acc;
        },{});
        console.log(groupdata)
        
        const getgroup=Object.keys(groupdata).slice(1);
        console.log(getgroup)

        display.innerHTML=getgroup.map((date) =>{
            const d=groupdata[date][0];
            return`
                <tr>
                    <td>${new Date(d.timestamp*1000).toLocaleDateString("en-IN")}</td>
                    <td>${d.temp}C</td>
                    <td>${d.feels_like}C</td>
                    <td>${d.humidity}%</td>
                    <td>${d.min_temp}C</td>
                    <td>${d.max_temp}C</td>
                    <td>${d.weather}</td>
                    <td>${d.cloud_pct}</td>
                    <td>${d.wind_speed}km/h</td>
                    <td>${d.wind_degrees}</td>
                </tr>`
            
    }).join('')
        // console.log(data)
    }catch(error){
        console.log(error);
    }

    
}