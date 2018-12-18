import React, { Component } from 'react';
import placeholder from '../../Images/placeholder.jpg';
import Switch from "react-switch";
import './SyncDevices.css';

import AppFooter from '../AppFooter/AppFooter';

class SyncDevices extends Component {
  state = {
    checked: this.props.checked,
    checked1: false,
    checked2: false,
    checked3: false
  }
  start = (param )=> e => {
    e.preventDefault();
    this.props.start(param);
  };
  handleChange = e => {
    // e.preventDefault();
    console.log("sync devices");
    this.setState({ checked: !this.state.checked });
    this.props.handleChange('syncdevice',!this.state.checked);
  }
  handleChange1 = () => {
    this.setState({ checked1: !this.state.checked1});
  }
  handleChange2 = () => {
    this.setState({ checked2: !this.state.checked2});
  }
  toggleNotifications = ({ enabled }) => {
    this.setState({ enabled: !this.state.enabled });
  }
  
  render() {
    return (
    <div className = "syncdevices">
      <div className="page-header-light">
        <div className="page-header-content p-0">
          <div className="page-title d-flex justify-content-between">
            <h4>
            <span onClick={(this.props.prev)} className="icon-arrow-left12 ml-1">Menu </span>   
            </h4>
            <h4><span className="text-center left-auto">My CX727</span></h4>
            <h4>
              <span onClick = {(this.props.next)} className="icon-arrow-right13 mr-1"> Apps</span>
            </h4>
          </div>
        </div>
      </div>

      <div>
        <h1 className="p-4 text-center mb-0 font-weight-bold">
          Sync Device
        </h1>
      </div>
      <div className="content ">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card card-body ">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img src={placeholder} className="rounded" width="38" height="38" alt="icon" />
                  </a>
                </div>
                <div className="media-body">
                  <h3 className="font-weight-semibold mb-0">iPhone XS Max</h3>
                  <span className="text-muted">
                  <Switch
                    onChange ={this.handleChange}
                    checked ={this.state.checked}
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
          <div className="col-xl-3 col-md-6">
            <div className="card card-body mb-0 border-bottom-0">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img src={placeholder} className="rounded" width="38" height="38" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h3 className="font-weight-semibold mb-0">Calendar</h3>
                  <span className="text-muted">
                  <Switch
                    checked= {this.state.checked1}
                    onChange = {this.handleChange1}
                    disabled = {!this.state.checked}
                    className="react-switch"
                    id="normal-switch"
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
          <div className="col-xl-3 col-md-6">
            <div className="card card-body mb-0 border-top-0 border-bottom-0">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img src={placeholder} className="rounded" width="38" height="38" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h3 className="font-weight-semibold mb-0">Contacts</h3>
                  <span className="text-muted">
                  <Switch
                    checked= {this.state.checked2}
                    onChange = {this.handleChange2}
                    disabled = {!this.state.checked}
                    className="react-switch"
                    id="normal-switch"
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
          <div className="col-xl-3 col-md-6">
            <div className="card card-body mb-0 border-top-0 border-bottom-0">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img src={placeholder} className="rounded" width="38" height="38" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <h3 className="font-weight-semibold mb-0">Contacts</h3>
                  <span className="text-muted">
                  <Switch
                    checked= {this.state.checked2}
                    onChange = {this.handleChange2}
                    disabled = {!this.state.checked}
                    className="react-switch"
                    id="normal-switch"
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
      <AppFooter start = {this.start}/>
      </div>
    );
  }
}
export default SyncDevices;
