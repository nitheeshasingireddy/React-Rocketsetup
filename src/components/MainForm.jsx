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
        step: 1,
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
            return <Home  start={this.start}/>
            case 2:
            return <SyncDevices 
                    checked={syncdevice} 
                    handleChange = {this.handleChange} 
                    next = {this.nextStep}
                    prev = {this.prevStep}/>
            case 3:
            return <SyncApps 
                    next={this.nextStep} 
                    prev = {this.prevStep}/>
            case 4: 
            return <Charging
                    next = {this.nextStep}
                    prev = {this.prevStep} />
            case 5:
            return <Success />
            
        
    }
    }
}

export default MainForm;