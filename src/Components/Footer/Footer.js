import React, { Component } from 'react';
import './Style.css';

class Header extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 copyright'>
              &copy; Copyright { new Date().getFullYear()} Permiteer.com
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
