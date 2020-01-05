import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Heart extends Component {

    render() {
        return (
          <Tooltip
            title="Heart"
            placement="right">
              <g
                id="heart"
                className="heart"
                fill="#808080"
                fillOpacity="0.5"
                stroke="#787878"
                strokeWidth="0.5"
                transform="matrix(0.31336118,0,0,0.29719645,-101.43028,62.2168)">
                  <path id="heart1" d="M1080.015,265.88l-5.532-7.278
                      c0,0-4.653,0.871-5.525,3.496c-0.87,2.611,3.786,10.471,3.786,10.471s-4.946,4.947-5.538,8.729
                      c-0.58,3.782-1.156,10.183-1.156,10.183s-9.309-1.449-10.77,1.168c-1.455,2.619-5.818,5.818-5.525,6.984
                      c0.293,1.162,1.452,6.112,1.452,6.112l-9.019,2.041c0,0-0.29,4.365,0.876,4.945c1.159,0.583,11.35,1.456,11.35,1.456v3.205
                      l-8.153,2.036c0,0-0.29,6.404,1.745,6.989c2.038,0.577,8.146-2.042,8.146-2.042s2.038,22.403,1.745,25.901
                      c-0.29,3.493,0.29,17.752,2.328,23.572c2.038,5.819,1.166,40.451,0.293,43.065c-0.873,2.629,3.49,8.448,6.401,10.778
                      c2.914,2.331,9.898,2.911,11.64,1.746c1.748-1.163,3.026-21.414,3.026-21.414s9.779,11.806,13.563,12.971
                      c3.783,1.168,9.306,4.367,9.306,4.367s0.586,21.838,1.169,23.297c0.589,1.446,4.656,5.818,10.767,5.231
                      c6.108-0.583,9.605-4.94,9.605-4.94l1.452-18.633c0,0,12.519,2.616,18.044-0.583c5.522-3.209,24.152-18.631,21.528-51.231
                      c-2.618-32.591-22.407-71.002-23.28-71.296c-0.86-0.289,14.267,0.585,15.426-1.745c1.166-2.328-1.159-4.367-1.159-4.367
                      l-8.732-2.331c0,0,6.401-0.583,6.111-3.199c-0.29-2.617-2.328-4.37-2.328-4.37s-6.987,5.535-9.022,5.824
                      c-2.035,0.289-13.965-0.585-15.417-1.165c-1.455-0.583,15.417-5.53,17.458-7.858c2.038-2.33-0.879-13.093-2.905-13.678
                      c-2.041-0.583-25.617,6.986-25.617,6.986s-5.239-8.149-8.726-10.771c-3.49-2.612-8.439-4.947-8.439-4.947s2.917-5.813,1.748-7.267
                      c-1.166-1.459-4.659-1.459-4.659-1.459l-3.49,7.272h-3.204c0,0,3.204-7.272,1.455-8.438c-1.748-1.17-3.497-0.582-3.497-0.582
                      l-3.783,9.6C1084.957,264.714,1081.467,264.423,1080.015,265.88L1080.015,265.88z"/>
              </g>
          </Tooltip>
        )
    }
}

export default Heart
