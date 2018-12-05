import React, { Component } from 'react';
import { PageHeader, Navbar, Glyphicon} from 'react-bootstrap';
import placeholder from '../../Images/placeholder.jpg';
import {Button } from 'react-bootstrap';

import snakeCase from 'lodash/snakeCase';

import Switch from '../ToggleSwitch/index';

// List of activities that can trigger notifications
const ACTIVITIES = [
    'News Feeds', 'Likes and Comments', 'Live Stream', 'Upcoming Events',
    'Friend Requests', 'Nearby Friends', 'Birthdays', 'Account Sign-In'
  ];
class SyncDevices extends Component {

      // Initialize app state, all activities are enabled by default
  state = { enabled: false, only: ACTIVITIES.map(snakeCase) }

  toggleNotifications = ({ enabled }) => {
    const { only } = this.state;
    this.setState({ enabled, only: enabled ? only : ACTIVITIES.map(snakeCase) });
  }
      saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
      render() {

      return (
          <div className = "syncdevices">
<div className="page-header page-header-light">
  <div className="page-header-content p-0">
    <div className="page-title d-flex justify-content-between">
      <h4>
      <Button onClick={(this.saveAndContinue)} className="icon-arrow-left12 ml-1"> Connect your smart devices </Button>   
        Menu
      </h4>
      <h4><span className="text-center left-auto">My CX727</span></h4>
      <h4>
        Apps
        <Button onClick={(this.saveAndContinue)} className="icon-arrow-right13 mr-1"> </Button>
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
            theme="default"
            onChange={this.toggleNotifications}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
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
    export default SyncDevices;
