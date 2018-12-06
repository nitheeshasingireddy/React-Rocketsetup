import React, { Component } from 'react';
import Switch from 'react-switch';
import charging from '../../Images/charging.jpeg';
const imgStyle = {
    top: '0px',
    left: '0px'
}

class Charging extends Component {
    state = {
        chargeChecked: false,
        destChecked: false,
        walletChecked: false,
        stationChecked: false

      }
      smartCharge = () => {
        this.setState({ chargeChecked: !this.state.chargeChecked });
        //this.props.handleChange('syncdevice');
      }
      destination = () => {
        this.setState({ destChecked: !this.state.destChecked });
      }
      wallet = () => {
        this.setState({ walletChecked: !this.state.walletChecked });
      }
      chargeStation = () => {
          this.setState({ stationChecked: !this.state.stationChecked });
      }

    render () {
        return ( 
            <div className = "charging" >

<div class="page-header page-header-light">
  <div class="page-header-content p-0">
    <div class="page-title d-flex justify-content-between">
      <h4>
      <span onClick={(this.props.prev)} className="icon-arrow-left12 ml-1">Apps </span> 
      </h4>
      <h4><span class="text-center left-auto">My CX727</span></h4>
      <h4>
        <span className="icon-arrow-left12 ml-1">VoiceAudio </span> 
      </h4>
    </div>
  </div>
</div>

<div>
  <h1 class="p-4 text-center mb-0 font-weight-bold">
    Charging Settings
  </h1>
</div>
<div class="content ">
  <div class="row">
    <div class="col-xl-3 col-md-6">
      <div class="card card-body ">
        <div class="media position-relative">
          <div class="mr-3">
              <img src={charging} class="rounded position-absolute shadow-lg"   width="60" height="60" alt=""/>
          </div>
          <div class="media-body" >
            <h3 class="font-weight-bold mb-0">Smart Charging</h3>
            <span class="text-muted">
            <Switch
                    onChange ={this.smartCharge}
                    checked ={this.state.chargeChecked}
                    className="react-switch"
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2
                        }}
                      >
                      </div>
                    }
                    checkedIcon={
                      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                      </svg>
                    }
                  />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-body">
        <div class="media">
          <div class="media-body">
            <h3 class="font-weight-semibold mb-0">Destinations</h3>
            <p>We found several common destinations. Would you like to add o Smart Charging?</p>
            <span class="text-muted mt-2">
            <Switch
                    onChange ={this.destination}
                    checked ={this.state.destChecked}
                    className="react-switch"
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2
                        }}
                      >
                      </div>
                    }
                    checkedIcon={
                      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                      </svg>
                    }
                  />
            </span>
          </div>
        </div>
        <div class="media">
          <div class="media-body">
            <h3 class="font-weight-semibold mb-0">Charge Stations</h3>
            <p>Based on these destination, would you like to learn about charge stations during your trips?</p>
            <span class="text-muted mt-2">
            <Switch
                    onChange ={this.chargeStation}
                    checked ={this.state.stationChecked}
                    className="react-switch"
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2
                        }}
                      >
                      </div>
                    }
                    checkedIcon={
                      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                      </svg>
                    }
                  />
            </span>
          </div>
        </div>
        <div class="media">
          <div class="media-body">
            <h3 class="font-weight-semibold mb-0">FordWallet, Pay, etc. </h3>
            <p>What payment method do you prefer for your smart charging needs?</p>
            <span class="text-muted mt-2">
            <Switch
                    onChange ={this.wallet}
                    checked ={this.state.walletChecked}
                    className="react-switch"
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2
                        }}
                      >
                      </div>
                    }
                    checkedIcon={
                      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                      </svg>
                    }
                  />
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div> 
</div>
); 
}
}
export default Charging;
