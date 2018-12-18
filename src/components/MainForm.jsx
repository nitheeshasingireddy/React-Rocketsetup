import React, { Component } from 'react';
import Success from './Success';
import Home from './Home/Home';
import SyncDevices from './SyncDevices/SyncDevices';
import SyncApps from './SyncApps/SyncApps';
import Charging from './Charging/Charging';
import VoiceAudio from './Voice_Audio/VoiceAudio';

class MainForm extends Component {
    state = {
        step: this.props.setStep ,
        preference: { 
        spotify: true,
        alexa: false,
        target: false,
        pandora: false,
        ihome: false,
        syncdevice:false,
        }
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

    handleChange = (input,value)=> {
        let preference = {...this.state.preference}; 
        preference[input] = value;                  
        this.setState({preference});
        // console.log(input,": ",value);
        
    }
    save = () =>
    {
        console.log(this.state);
    }
    
    render(){
        const {step} = this.state;
        const syncdevice = this.state.preference.syncdevice;
        const { spotify, alexa, target, pandora, ihome } = this.state.preference;
        const values = { spotify, alexa, target, pandora, ihome };
        
        
        switch(step) {
        case 1:
            return <Home  start={this.start} save={this.save}/>
            case 2:
            return <SyncDevices 
                    checked={syncdevice} 
                    handleChange = {this.handleChange} 
                    next = {this.nextStep}
                    prev = {this.prevStep}
                    start = {this.start}/>
            case 3:
            return <SyncApps 
                    next={this.nextStep} 
                    handleChange = {this.handleChange} 
                    prev = {this.prevStep}
                    values = {values}
                    start = {this.start} />
            case 4: 
            return <Charging
                    next = {this.nextStep}
                    prev = {this.prevStep}
                    start = {this.start} />
            case 5:
            return <VoiceAudio
                    next = {this.nextStep}
                    prev = {this.prevStep}
                    start = {this.start} />
            case 6:
            return <Success />
            default:
                return <Home start = {this.start} />
            
        
    }
    }
}

export default MainForm;