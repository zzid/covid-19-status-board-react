import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'; // index file is automactically added even if it's not specified

class App extends React.Component{
    state ={
        data :{},
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }
    render(){
        const { data } = this.state;
        return(
            // don't have any interappearence
            <div className={styles.container} > 
                <Cards data = {data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;