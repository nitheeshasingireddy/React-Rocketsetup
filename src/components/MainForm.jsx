import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Success from './Success';
import Home from './Home/Home';
import ToggleSwitchList from './ToggleSwitchList/ToggleSwitchList';
import Switchbar from './Switchbar';
import SyncDevices from './SyncDevices/SyncDevices';
import SyncApps from './SyncApps/SyncApps';
import Charging from './Charging/Charging';

class MainForm extends Component {
    state = {
        step: 8,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: '',
        syncdevice:false
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    start = (value) => {
        this.setState({
            step : value
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        const syncdevice = this.state.syncdevice;
        switch(step) {
        case 1:
            return <Home 
                    start={this.start}
                    />
        case 2:
            return <UserDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Success 
                    />
        case 4:
            return <ToggleSwitchList/>

            case 5:
            return <SyncDevices checked={syncdevice} handleChange = {this.handleChange}/>
            case 6:
            return <Switchbar />
            case 7:
            return <SyncApps next={this.nextStep} />
            case 8: 
            return <Charging />
        }
    }
}

export default MainForm;