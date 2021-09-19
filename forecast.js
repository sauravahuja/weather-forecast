
//https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=2ec5404b669915f3bf1a970dee8528b4
const key = "2ec5404b669915f3bf1a970dee8528b4";
const getForecast = async (city)=>{
    const base ="https://api.openweathermap.org/data/2.5/forecast";
    const query= `?q=${city}&units=metric&appid=${key}`;
    
    const response = await fetch(base+query);
    //console.log(response);
    if(!response.ok)
        throw new Error("status code:" + response.status);
    
    const data = await response.json();
    //console.log(data);
    return data;
}

getForecast('Gujrat')
.then(data=>console.log(data))
.catch(err=>console.warn(err));