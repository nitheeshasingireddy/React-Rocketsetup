import React, { Component } from 'react';
import { Glyphicon} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import car1 from '../../Images/car1.png';
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
      }
      render() {
        return (
          <div className = "home">
          <div className="page-header-light">
            <div className="page-header-content">
              <div className="page-title d-flex justify-content-between">
                <h4></h4>
                <h4><span className="text-center left-auto">My CX727</span></h4>
                <h4><Button onClick={this.props.save}><Glyphicon glyph="save" /></Button></h4>
              </div>
            </div>
            
            </div>
            <div>
              <img className='img-fluid' alt='icon' src={car1}/>
                <h1 className="p-4 text-center mb-0 font-weight-bold">
                  Personalize your CX727
                </h1>
            </div>
<div className="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header card-title">
      <h4 className="card-title">
        <div onClick={this.start(2)}> Connect to your Favorite Apps </div>
      </h4>
    </div>
  </div>
</div>
<div className="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header card-title">
    <h4 className="card-title">
      <div onClick={this.start(4)}> Connect your smart charging </div>
      </h4>
    </div>
  </div>
</div>
<div className="content card-group-control card-group-control-right">
  <div className="card mb-2">
    <div className="card-header">
      <h4 className="card-title">
       
      <div onClick={this.start(3)}> Sync phone </div>
      </h4>
    </div>
  </div>
 </div>
<AppFooter />

</div>
        );
      }
}
export default Home;