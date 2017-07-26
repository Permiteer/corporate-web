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

            <h3><small>What We Do</small></h3>
            <p>
              Permiteer is a platform for government agencies to develop online permiting workflow applications.
            </p>


            <h3><small>How We Do It</small></h3>
            <p>
              Our approach is different. Instead of starting with complete systems that are
              expensive to modifiy (COTS), we provide tools and automate practices that have
              proven successful in developing permit applicaions.
            </p>

            <h3><small>Why</small></h3>
            <p>
              Permit regulation is the mechanism we use to protect our environment and public safety.
              We believe that helping government agencies become more effective will
              lead to a safer environment and stronger economy.
            </p>



            <p>
              Request a demo to see how we do it
            </p>
            <LinkContainer to="/demo">
              <Button bsStyle="primary">Request a Demo</Button>
            </LinkContainer>

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
