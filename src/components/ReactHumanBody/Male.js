import React, { Component } from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';
import BodyLayout from './BodyLayout'
import Nasopharynx from './Nasopharynx'
import OralCavity from './OralCavity'
import Kidney from './Kidney'
import Testis from './Testis'
import Eye from './Eye'
import Lung from './Lung'
import Heart from './Heart'
import Brain from './Brain'
import Breast from './Breast'
import Thyroid from './Thyroid'
import AdrenalGland from './AdrenalGland'
import Pancreas from './Pancreas'
import Femur from './Femur'
import CirculatorySystem from './CirculatorySystem'
import Esophagus from './Esophagus'
import Stomach from './Stomach'
import SmallIntestine from './SmallIntestine'
import Appendix from './Appendix'
import Rectum from './Rectum'
import Anus from './Anus'
import Duodenum from './Duodenum'
import Liver from './Liver'
import GalBladder from './GalBladder'
import SalivaryGland from './SalivaryGland'
import Colon from './Colon'
import UrinaryBladder from './UrinaryBladder'
import Prostate from './Prostate'
import SkeletalMuscle from './SkeletalMuscle'
import Adipose from './Adipose'
import Skin from './Skin'

const DEFAULTSHOWSTATUS = true
const DEFAULTFILLCOLOR = "#808080"
const DEFAULTFILLOPACITY = "0.5"


const organMap = {
  nasopharynx : {
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Nasopharynx",
  },
  oralCavity:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Oral Cavity",
  },
  kidney:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Kidney",
  },
  testis:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Testis",
  },
  eye:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Eye",
  },
  lung:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Lung",
  },
  heart:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Heart",
  },
  brain:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Brain",
  },
  breast:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Breast",
  },
  thyroid:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Thyroid",
  },
  adrenalGland:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Adrenal Gland",
  },
  pancreas:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Pancreas",
  },
  femur:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Femur",
  },
  circulatorySystem:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Circulatory System",
  },
  esophagus:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Esophagus",
  },
  stomach:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Stomach",
  },
  smallIntestine:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Small Intestine",
  },
  appendix:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Appendix",
  },
  rectum:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Rectum",
  },
  anus:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Anus",
  },
  duodenum:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Duodenum",
  },
  liver:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Liver",
  },
  galbladder:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Gal Bladder",
  },
  salivaryGland:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Salivary Gland",
  },
  colon:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Colon",
  },
  urinaryBladder:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Urinary Bladder",
  },
  prostate:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Prostate",
  },
  skeletalMuscle:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Skeletal Muscle",
  },
  adipose:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Adipose",
  },
  skin:{
    show: true,
    fillColor: '#808080',
    fillOpacity: '0.5',
    tooltipTitle: "Skin",
  },
}

class BodyMap extends Component {

  componentDidUpdate(){
    //this.props.bodyHighlight();
  }

  componentDidMount(){
    //this.props.bodyHighlight();
  }

  getFillColor = (id) => {
    return organMap &&
           organMap[id] &&
           organMap[id]['fillColor'] ||
           DEFAULTFILLCOLOR;
  }

  getFillOpacity = (id) => {
    return organMap &&
           organMap[id] &&
           organMap[id]['fillOpacity'] ||
           DEFAULTFILLOPACITY;
  }

  onClick = (e) => {
    console.log("Hey you clicked on my", e && e.target && e.target.id);
  }

  getShowStatus = (id) => {
    return organMap &&
           organMap[id] &&
           organMap[id].hasOwnProperty('show') ?
           organMap[id]['show'] :
           DEFAULTSHOWSTATUS;
  }

  getTooltipTitle = (id) => {
    return organMap &&
           organMap[id] &&
           organMap[id]['tooltipTitle'] ||
           id.toUpperCase();
  }

  render () {

  	const { classes } = this.props;
    return (
      <svg
        version="1.1"
        id="svg3481"
        sodipodidocname="test2.svg"
        inkscapeversion="0.48.2 r9819"
        xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsdc="http://purl.org/dc/elements/1.1/"
        xmlnscc="http://creativecommons.org/ns#"
        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnssvg="http://www.w3.org/2000/svg"
        xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlnsxml="http://www.w3.org/XML/1998/namespace"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" width="250px" height="500px"
        viewBox="0 0 460 720"
        enableBackground="new 0 0 460 720"
        xmlSpace="preserve"
      >
          <BodyLayout />
          <Nasopharynx
            show={this.getShowStatus('nasopharynx')}
            fillColor={this.getFillColor('nasopharynx')}
            fillOpacity={this.getFillOpacity('nasopharynx')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('nasopharynx')}
          />
          <OralCavity
            show={this.getShowStatus('oralCavity')}
            fillColor={this.getFillColor('oralCavity')}
            fillOpacity={this.getFillOpacity('oralCavity')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('oralCavity')}
          /> 
          <Kidney
            show={this.getShowStatus('kidney')}
            fillColor={this.getFillColor('kidney')}
            fillOpacity={this.getFillOpacity('kidney')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('kidney')}
          />
          <Testis
            show={this.getShowStatus('testis')}
            fillColor={this.getFillColor('testis')}
            fillOpacity={this.getFillOpacity('testis')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('testis')}
          />
          <Eye
            show={this.getShowStatus('eye')}
            fillColor={this.getFillColor('eye')}
            fillOpacity={this.getFillOpacity('eye')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('eye')}
          />
          <Lung />
            show={this.getShowStatus('lung')}
            fillColor={this.getFillColor('lung')}
            fillOpacity={this.getFillOpacity('lung')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('lung')}
          />
          <Heart />
            show={this.getShowStatus('heart')}
            fillColor={this.getFillColor('heart')}
            fillOpacity={this.getFillOpacity('heart')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('heart')}
          />
          <Brain />
            show={this.getShowStatus('brain')}
            fillColor={this.getFillColor('brain')}
            fillOpacity={this.getFillOpacity('brain')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('brain')}
          />
          <Breast />
            show={this.getShowStatus('breast')}
            fillColor={this.getFillColor('breast')}
            fillOpacity={this.getFillOpacity('breast')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('breast')}
          />
          <Thyroid />
            show={this.getShowStatus('thyroid')}
            fillColor={this.getFillColor('thyroid')}
            fillOpacity={this.getFillOpacity('thyroid')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('thyroid')}
          />
          <AdrenalGland />
            show={this.getShowStatus('adrenalGland')}
            fillColor={this.getFillColor('adrenalGland')}
            fillOpacity={this.getFillOpacity('adrenalGland')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('adrenalGland')}
          />
          <Pancreas />
            show={this.getShowStatus('pancreas')}
            fillColor={this.getFillColor('pancreas')}
            fillOpacity={this.getFillOpacity('pancreas')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('pancreas')}
          />
          <Femur />
            show={this.getShowStatus('femur')}
            fillColor={this.getFillColor('femur')}
            fillOpacity={this.getFillOpacity('femur')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('femur')}
          />
          <CirculatorySystem />
            show={this.getShowStatus('circulatorySystem')}
            fillColor={this.getFillColor('circulatorySystem')}
            fillOpacity={this.getFillOpacity('circulatorySystem')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('circulatorySystem')}
          />
          <Esophagus />
            show={this.getShowStatus('esophagus')}
            fillColor={this.getFillColor('esophagus')}
            fillOpacity={this.getFillOpacity('esophagus')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('esophagus')}
          />
          <Stomach />
            show={this.getShowStatus('stomach')}
            fillColor={this.getFillColor('stomach')}
            fillOpacity={this.getFillOpacity('stomach')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('stomach')}
          />
          <SmallIntestine />
            show={this.getShowStatus('smallIntestine')}
            fillColor={this.getFillColor('smallIntestine')}
            fillOpacity={this.getFillOpacity('smallIntestine')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('smallIntestine')}
          />
          <Appendix />
            show={this.getShowStatus('appendix')}
            fillColor={this.getFillColor('appendix')}
            fillOpacity={this.getFillOpacity('appendix')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('appendix')}
          />
          <Rectum />
            show={this.getShowStatus('rectum')}
            fillColor={this.getFillColor('rectum')}
            fillOpacity={this.getFillOpacity('rectum')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('rectum')}
          />
          <Anus />
            show={this.getShowStatus('anus')}
            fillColor={this.getFillColor('anus')}
            fillOpacity={this.getFillOpacity('anus')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('anus')}
          />
          <Duodenum />
            show={this.getShowStatus('duodenum')}
            fillColor={this.getFillColor('duodenum')}
            fillOpacity={this.getFillOpacity('duodenum')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('duodenum')}
          />
          <Liver />
            show={this.getShowStatus('liver')}
            fillColor={this.getFillColor('liver')}
            fillOpacity={this.getFillOpacity('liver')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('liver')}
          />
          <GalBladder />
            show={this.getShowStatus('galbladder')}
            fillColor={this.getFillColor('galbladder')}
            fillOpacity={this.getFillOpacity('galbladder')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('galbladder')}
          />
          <SalivaryGland />
            show={this.getShowStatus('salivaryGland')}
            fillColor={this.getFillColor('salivaryGland')}
            fillOpacity={this.getFillOpacity('salivaryGland')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('salivaryGland')}
          />
          <Colon />
            show={this.getShowStatus('colon')}
            fillColor={this.getFillColor('colon')}
            fillOpacity={this.getFillOpacity('colon')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('colon')}
          />
          <UrinaryBladder />
            show={this.getShowStatus('urinaryBladder')}
            fillColor={this.getFillColor('urinaryBladder')}
            fillOpacity={this.getFillOpacity('urinaryBladder')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('urinaryBladder')}
          />
          <Prostate />
            show={this.getShowStatus('prostate')}
            fillColor={this.getFillColor('prostate')}
            fillOpacity={this.getFillOpacity('prostate')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('prostate')}
          />
          <SkeletalMuscle />
            show={this.getShowStatus('skeletalMuscle')}
            fillColor={this.getFillColor('skeletalMuscle')}
            fillOpacity={this.getFillOpacity('skeletalMuscle')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('skeletalMuscle')}
          />
          <Adipose />
            show={this.getShowStatus('adipose')}
            fillColor={this.getFillColor('adipose')}
            fillOpacity={this.getFillOpacity('adipose')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('adipose')}
          />
          <Skin
            show={this.getShowStatus('skin')}
            fillColor={this.getFillColor('skin')}
            fillOpacity={this.getFillOpacity('skin')}
            onClick={this.onClick}
            tooltipTitle={this.getTooltipTitle('skin')}
          />
      </svg>
    	)
  }
}

export default BodyMap
