import React, { Component } from 'react';
import Switch from 'react-switch';
import spotify from '../../Images/spotify.png';
import placeholder from '../../Images/placeholder.jpg';
import topcar from '../../Images/top_car.png';
import AppFooter from '../AppFooter/AppFooter';

class VoiceAudio extends Component {
  state = {
    disabled: true,
    show1: true,
    show2: false,
    show3: false,
    show4: false,
  }
  tab = (trigger, index) => {
    console.log(trigger);

    this.state.show1 = true;
    this.state.show2 = false;
    this.state.show3 = false;
    this.state.show4 = false;
    // if (index === 4) {
    //   setTimeout(() => {
    //     this.renderSlider();
    //   }, 100);
    // }
  }
  changeApp = () => {
    this.setState({
      show2: false
    })
    this.setState({
      show3: false
    })
    this.setState({
      show4: false
    })
    this.setState({
      show1: true
    })
  }
  changeSirius = () => {
    this.setState({
      show1: false
    })
    this.setState({
      show3: false
    })
    this.setState({
      show4: false
    })
    this.setState({
      show2: true
    })
  }
  changeRadio = () => {
    this.setState({
      show2: false
    })
    this.setState({
      show1: false
    })
    this.setState({
      show4: false
    })
    this.setState({
      show3: true
    })
  }
  start = (param) => e => {
    e.preventDefault();
    this.props.start(param);
  };
  render() {
    return (
      <div className="VoiceAudio" >
        <div className="page-header page-header-light">
          <div className="page-header-content p-0">
            <div className="page-title d-flex justify-content-between">
              <h4>
                <span onClick={(this.props.prev)} className="icon-arrow-left12 ml-1">Charging</span>
              </h4>
              <h4><span className="text-center left-auto">My CX727</span></h4>
              <h4>
                <span onClick={(this.props.next)} className="icon-arrow-left12 ml-1">Comfort </span>
              </h4>
            </div>
          </div>
        </div>

        <div>
          <h1 className="p-4 text-center mb-0 font-weight-bold">
            Audio
  </h1>
        </div>
        <div className="content">
          <ul className="nav nav-tabs-solid bg-slate border-0 nav-justified rounded" style ={{backgroundColor:'#607D8B'}}>
            <li className="nav-item"><a onClick={this.changeApp} className="nav-link" >App</a></li>
            <li className="nav-item"><a onClick={this.changeSirius} className="nav-link">Sirius</a></li>
            <li className="nav-item">
              <a onClick={this.changeRadio} className="nav-link">Radio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link rounded-right">Radio check</a>
            </li>
          </ul>
          {this.state.show1 && (
            <div className="row" >
              <div className="col-xl-3 col-md-6">
                <div className="card card-body ">
                  <div className="media">
                    <div className="mr-3">
                      <a href="#">
                        <img src={spotify} className="rounded" width="38" height="38" alt="" />
                      </a>
                    </div>
                    <div className="media-body">
                      <h3 className="font-weight-semibold mb-0">Spotify</h3>
                      <span className="text-muted  font-size-sm">
                        <span className="font-weight-bold ">Road Trip</span> is set as your default playlist.
            </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card card-body mb-0 border-top-0">
                  <div className="media">
                    <div className="mr-3">
                      <a href="#">
                        <img src={placeholder} className="rounded" width="38" height="38" alt="" />
                      </a>
                    </div>
                    <div className="media-body">
                      <h3 className="font-weight-semibold mb-0">Add More Apps</h3>
                      <span className="font-weight-bold font-size-sm">
                        More music? Listen to an Audiobook?
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.state.show2 && (
            <div className="show2">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <div className="card-img-actions m-1">
                      <img className="card-img img-fluid" src={placeholder} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.state.show3 && (
            <div className="show3">
              <div className="row">
                <div className="col">
                  <div className="card bg-green-400">
                    <div className="card-body m-1 text-center">
                      <h3>88.1</h3>
                      <h3>WW1</h3>
                      <i className="position-absolute black icon-check2 icon-3x" style={{ top: "66%", right: "0" }}></i>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-green-400">
                    <div className="card-body m-1 text-center">
                      <h3>88.2</h3>
                      <h3>WW2</h3>
                      <i className="position-absolute black icon-check2 icon-3x" style={{ top: "66%", right: "0;" }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card bg-green-400">
                    <div className="card-body m-1 text-center">
                      <h3>88.3</h3>
                      <h3>WW3</h3>
                      <i className="position-absolute black icon-check2 icon-3x" style={{ top: "66%", right: "0;" }}></i>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-green-400">
                    <div className="card-body m-1 text-center">
                      <h3>88.4</h3>
                      <h3>WW4</h3>
                      <i className="position-absolute black icon-check2 icon-3x" style={{ top: "66%", right: "0;" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {this.state.show4 && (
            <div className="position-relative overflow-hidden" style={{ height: "55vh" }}>
              <img src={topcar} className="rotate-90 position-absolute" style={{ width: "152%", left: "-90px", top: "100px" }} />
              <div id="slider_db" className=" position-absolute" style={{ right: "10px", top: "50px", height: "50vh" }}></div>
            </div>
          )}
        </div>
        <AppFooter start={this.start} />
      </div>
    );
  }
}
export default VoiceAudio;
