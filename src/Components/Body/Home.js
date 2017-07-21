import React, { Component } from 'react';
import {  Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Home.css';
import handshake from './images/team_handshake.jpg';
import Scrollspy from 'react-scrollspy'

class Home extends Component {
  render() {
    return (
      <div className='home'>

        <div className='row'>
          <div className='col-md-6'>

            <h2>Permit Development Platform</h2>
            <h3><small></small></h3>
            <h4>
              We serve a community of software developers and permit regulators.
            </h4>
            <h4>
              <small>
                Our Permit Development Platform provides:
              </small>
            </h4>

            <ul>
              <li>Project template ecosystem for getting started quickly</li>
              <li>Project management tools for documenting complete system requirements</li>
              <li>Drag & drop workflow, flow chart, and form editors</li>
              <li>Live demo of your project website</li>
              <li>Extensible plugin architecture</li>
            </ul>


            <div style={{marginTop:40}}>
              <LinkContainer to="/demo">
                <Button bsStyle="primary">Request a Demo</Button>
              </LinkContainer>
            </div>
          </div>
          <div className='col-md-6'>
            <img className="img-fluid" style={{height: 'auto', maxWidth: '100%'}} src={handshake}/>
          </div>
        </div>




      </div>

    );
  }
}

export default Home;
