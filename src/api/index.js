import axios from 'axios';

const url ='https://covid19.mathdro.id/api' // api


// async
export const fetchData = async ()=>{ // export
    try{
        const { data : {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        } } = await axios.get(url); // get(url)
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
