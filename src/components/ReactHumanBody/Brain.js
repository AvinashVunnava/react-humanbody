import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Brain extends Component {

    render() {
        return (
          <Tooltip
            title="Brain"
            placement="right">
            <g
              id="brain"
              className="brain"
              fill="#808080"
              fillOpacity="0.5"
              stroke="#787878"
              strokeWidth="0.5"
              transform="matrix(0.3314252,0,0,0.35151969,-111.15609,36.515709)">
                <path id="brain1" d="M1103.798-22.87
                    c0.53-3.182-3.713-10.086-3.713-10.086s-6.376-4.777-6.901-8.49c-0.527-3.717-7.965-6.38-7.965-6.38s-5.834-4.777-11.147-7.43
                    c-3.044-1.518-7.434-1.06-7.434-1.06s-9.771-1.95-11.677-2.122c-5.84-0.531-11.686,2.657-11.686,2.657l-6.833,4.695l-6.836-4.695
                    c0,0-5.84-3.188-11.686-2.657c-1.906,0.174-11.677,2.122-11.677,2.122s-4.396-0.454-7.437,1.06
                    c-5.31,2.653-11.147,7.43-11.147,7.43s-7.434,2.656-7.962,6.38c-0.53,3.713-6.901,8.49-6.901,8.49s-4.249,6.904-3.716,10.086
                    c0.53,3.184-5.31,7.968-4.249,15.395c0.274,1.896,4.249,9.026,7.437,10.09c3.182,1.06,10.614,0,10.614,0s7.434,5.305,11.683,5.305
                    c4.249,0,9.559-3.186,9.559-3.186l7.434,1.064c0,0,4.246,1.06,7.431,2.653c3.182,1.589,11.15,5.837,11.15,5.837l6.306-0.739
                    l6.3,0.739c0,0,7.968-4.248,11.15-5.837c3.188-1.593,7.431-2.653,7.431-2.653l7.437-1.064c0,0,5.31,3.186,9.559,3.186
                    s11.68-5.305,11.68-5.305s7.437,1.06,10.619,0c3.182-1.064,7.16-8.194,7.428-10.09C1109.108-14.905,1103.268-19.689,1103.798-22.87
                    z"/>
            </g>
          </Tooltip>
        )
    }
}

export default Brain
