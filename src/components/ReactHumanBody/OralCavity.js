import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class OralCavity extends Component {

    render() {

      const {
        show,
        fillColor,
        fillOpacity,
        tooltipTitle,
      } = this.props;
      
      return (
        <path
          id="oral_cavity"
          fill="#808080"
          fillOpacity="0.5"
          d="M242.935,83.96c0,2.6-5.368,4.707-11.994,4.707
            c-6.623,0-11.986-2.107-11.986-4.707s5.363-4.707,11.986-4.707C237.565,79.253,242.935,81.36,242.935,83.96z"/>
        )
    }
}

export default OralCavity
