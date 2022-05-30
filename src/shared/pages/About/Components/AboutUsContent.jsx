import React from 'react'
import { Tab, Divider } from 'semantic-ui-react'
import OurVision from './OurVision'
import StatementOfFaith from './StatementOfFaith'
import History from './History'
import OurMission from './OurMission'
import './About.css'
import OurValues from './OurValues'

const AboutUsContent = () => (
  <div className='AboutUsContentMain'>

    <OurVision/>
  
    <OurMission />

    <OurValues />

    <StatementOfFaith />

    <History />


  </div>
)

export default AboutUsContent