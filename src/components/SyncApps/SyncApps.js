
import React, { Component } from 'react';
import Switch from 'react-switch';

import alexa from '../../Images/alexa.png';
import apps from '../../Images/apps.png';
import spotify from '../../Images/spotify.png';
import './SyncApps.css';
import AppFooter from '../AppFooter/AppFooter';

class SyncApps extends Component {
    state = {
        spotify: this.props.values.spotify,
        alexa: this.props.values.alexa,
        target: this.props.values.target,
        pandora: this.props.values.pandora,
        ihome: this.props.values.ihome,
        checked1: false
      }
      start = (param )=> e => {
        e.preventDefault();
        this.props.start(param);
      }
      handleSpotify = () => {
        this.setState({ spotify: !this.state.spotify });
        // console.log("spotify",this.state.spotify);
        this.props.handleChange('spotify', !this.state.spotify);
      }
      handleAlexa =() => {
          this.setState({ alexa: !this.state.alexa});
          this.props.handleChange('alexa', !this.state.alexa);
      }
      handleTarget = () => {
        this.setState({ target: !this.state.target });
        this.props.handleChange('target', !this.state.target);
      }
      handlePandora = () => {
        this.setState({ pandora: !this.state.pandora });
        this.props.handleChange('pandora', !this.state.pandora);
      }
      handleIHome = () => {
        this.setState({ ihome: !this.state.ihome });
        this.props.handleChange('ihome', !this.state.ihome);
      }
      handleChange1 = () => {
        this.setState({ checked1: !this.state.checked1 });
        // this.props.handleChange('ihome', !this.state.ihome);
      }

    render() { 
        const enabled = this.state.checked;
        return (
            <div className="SyncApps">

<div className="page-header-light">
  <div className="page-header-content p-0">
    <div className="page-title d-flex justify-content-between">
      <h4>
        
        <span onClick={(this.props.prev)} className="icon-arrow-left12 ml-1">Sync device </span> 
      </h4>
      <h4><span className="text-center left-auto">My CX727</span></h4>
      <h4>
        <span onClick={(this.props.next)} className="icon-arrow-left12 ml-1">Charging </span> 
      </h4>
    </div>
  </div>
</div>

<div>
  <h1 className="p-4 text-center mb-0 font-weight-bold">
    Sync Apps
  </h1>
</div>
<div className="content ">
  <div className="row">
    <div className="col-xl-3 col-md-6">
      <div className="card card-body ">
        <div className="media">
          <div className="mr-3">
            <a href="#">
              <img src={spotify} className="rounded" width="38" height="38" alt=""/>
            </a>
          </div>
          <div className="media-body">
            <h3 className="font-weight-semibold mb-0">Spotify</h3>
            <span className="text-muted">
            <Switch
                    onChange ={this.handleSpotify}
                    checked ={this.state.spotify}
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
        { this.state.spotify && (
        <div className="text-center mt-2" >
          <div className="form-group mb-1">
            <input type="text" className="form-control" placeholder="username" />
          </div>
          <div className="form-group mb-0">
            <input type="text" className="form-control" placeholder="password" />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <label className="mt-1">
              Import playlist and lorem ipsum.
            </label>
            <Switch
                    onChange ={this.handleChange1}
                    checked ={this.state.checked1}
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

          </div>
          <div className="d-flex justify-content-between mt-3">
            <label className="mt-1">
              Import playlist and lorem ipsum.
            </label>
            <Switch
                    onChange ={this.handleChange1}
                    checked ={this.state.checked1}
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
          </div>
          <div className="d-flex justify-content-between mt-3">
            <label className="mt-1">
              Import playlist and lorem ipsum.
            </label>
            <Switch
                    onChange ={this.handleChange1}
                    checked ={this.state.checked1}
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
          </div>

        </div>) }
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card card-body">
        <div className="media">
          <div className="mr-3">
            <a href="#">
              <img src={alexa} className="rounded" width="38" height="38" alt=""/>
            </a>
          </div>
          <div className="media-body">
            <h3 className="font-weight-semibold mb-0">Alexa</h3>
            <span className="text-muted">
            <Switch
                    onChange ={this.handleAlexa}
                    checked ={this.state.alexa}
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
      <div className="card card-body">
        <div className="media">
          <div className="mr-3">
            <a href="#">
              <img src={apps} className="rounded" width="38" height="38" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h3 className="font-weight-semibold mb-0">Target</h3>
            <span className="text-muted">
            <Switch
                    onChange ={this.handleTarget}
                    checked ={this.state.target}
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
      <div className="card card-body">
        <div className="media">
          <div className="mr-3">
            <a href="#">
              <img src="/assets/images/ihome.png" className="rounded" width="38" height="38" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h3 className="font-weight-semibold mb-0">iHome</h3>
            <span className="text-muted">
            <Switch
                    onChange ={this.handleIHome}
                    checked ={this.state.ihome}
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
      <div className="card card-body">
        <div className="media">
          <div className="mr-3">
            <a href="#">
              <img src="/assets/images/pandora.png" className="rounded" width="38" height="38" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h3 className="font-weight-semibold mb-0">Pandora</h3>
            <span className="text-muted">
            <Switch
                    onChange ={this.handlePandora}
                    checked ={this.state.pandora}
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
<AppFooter start = {this.start}/>
</div>
        );
    }
}
export default SyncApps;
