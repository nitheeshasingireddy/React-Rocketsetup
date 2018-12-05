import React, { Component } from 'react';
import { PageHeader, Navbar, Glyphicon} from 'react-bootstrap';
import car1 from '../../Images/car1.png';
import {Button } from 'react-bootstrap';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

class Home extends Component {

      state = {
        isChecked: false,
        label: '',
      }
      start = (param )=> e => {
        e.preventDefault();
        this.props.start(param);
      };
    
      toggleCheckboxChange = () => {
        // const { handleCheckboxChange, label } = this.props;
        const { label} = this.state;
    
        this.setState(({ isChecked }) => (
          {
            isChecked: !isChecked,
          }
        ));
        console.log(label, 'is checked');
    
        // handleCheckboxChange(label);
      }
      render() {
        const { label } = "Connect devices";
        return (
          <div className = "home">
          <div className="page-header page-header-light">
            <div className="page-header-content">
              <div className="page-title d-flex justify-content-between">
                <h4></h4>
                <h4><span className="text-center left-auto">My CX727</span></h4>
                <h4><a href="##"><Glyphicon glyph="save" /></a></h4>
              </div>
            </div>
            
            </div>
            <div>
              <img className='img-fluid' alt='icon' src={car1}/>
                <h1 class="p-4 text-center mb-0 font-weight-bold">
                  Personalize your CX727
                </h1>
            </div>
  <div class="content card-group-control card-group-control-right">
  {/* <div className="card mb-2"> */}
    <div className="card-header card-title">
      <h6 className="card-title">
        <a className="collapsed"  >
          <Button onClick={this.start(4)}> Connect your smart devices </Button>            

        </a>
      </h6>
    </div>
  {/* </div> */}
</div>
<div class="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header card-title">
      {/* <h6 className="card-title"> */}
        <a className="collapsed"  >
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input"
            onChange={this.toggleCheckboxChange} />
            <label className="custom-control-label" >
            Connect to your Favorite Apps
            </label>
          </div>
        </a>
      {/* </h6> */}
    </div>
  </div>
</div>
<div class="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header card-title">
      <h6 className="card-title">
        <a className="collapsed"  >
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="p1" />
            <label className="custom-control-label" for="p1">
            Configure Voice and Audio Settings
            </label>
          </div>
        </a>
      </h6>
    </div>
  </div>
</div>
<div class="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header">
      <h6 className="card-title">
        <a className="collapsed"  >
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="p1" />
            <label className="custom-control-label" >
              Connect your smart devices
            </label>
          </div>
        </a>
      </h6>
    </div>
  </div>
</div>
<AppFooter />
</div>
        );
      }
}
export default Home;