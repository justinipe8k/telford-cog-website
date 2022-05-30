import React from 'react'
import { Tab, Divider } from 'semantic-ui-react'
import OurVision from './OurVision'
import StatementOfFaith from './StatementOfFaith'
import History from './History'
import OurMission from './OurMission'
import './About.css'
import OurValues from './OurValues'

const panes = [
  { menuItem: 'Vision & Mission', render: () => <Tab.Pane><OurVision /><Divider /><OurMission /></Tab.Pane> },
  { menuItem: 'Our Values', render: () => <Tab.Pane><OurValues /></Tab.Pane> },
  { menuItem: 'Statement of Faith', render: () => <Tab.Pane><StatementOfFaith /></Tab.Pane> },
  { menuItem: 'History', render: () => <Tab.Pane><History /></Tab.Pane> },
]

const AboutUsContent = () => (
  <div className='AboutUsContentMain'>
    {/* <Tab
      menu={{ borderless: true, attached: false, tabular: false }}
      panes={panes}
      style={{width:'100%'}}
    /> */}
    <OurVision/>
  
    <OurMission />

    <OurValues />

    <StatementOfFaith />

    <History />


  </div>
)

export default AboutUsContent