import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';

import { fetchData } from './api'; // index file is automactically added even if it's not specified

import coronaImg from './images/image.png'

class App extends React.Component{
    //constructor is not necessary
    state ={
        data :{},
        country :'',
    }
    async componentDidMount(){ // async componenetDidMount() >> is special built in grammer
        /*
        const data = await fetchData();
        this.setState({data})

            >> this is same with below. 
            normarlly {data : data} like this. but can be use like {data} 
            since it has same name, react can recognize
        */
        const fetchedData = await fetchData(); // this is from import fetchData
        // console.log(fetchedData)
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country : country })
        //fetch the data
        //set the state
    }

    render(){
        const { data, country } = this.state; // this is better way
        return(
            // don't have any interappearence
            <div className={ styles.container } > 
                <img className={styles.image} src={coronaImg}></img>
                <Cards data = { data }/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data = { data } country = {country} />
            </div>
        )
    }
}

export default App;