import axios from 'axios';

const url ='https://covid19.mathdro.id/api' // api


// async
export const fetchData = async (country)=>{ // export
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        const { data : {
            confirmed, recovered, deaths, lastUpdate
        } } = await axios.get(changeableUrl); // get(url)
        // same name with above data >> auto 
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

    }catch(error){
        console.log(error);
    }
}


export const fetchDailyData = async() =>{
    try{
        const { data } = await axios.get(`${url}/daily`); // this is not ' , it ` (next to the 1 on keyboard)

        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,
        }))
        // console.log(modifiedData)
        return modifiedData;
    }catch(error){
        console.log(error)
    }
}


export const fetchCountries = async () => {
    try{
        const { data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);
    } catch(error){
        console.log(error);
    }
}