import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AboutUsContent extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        Our Vision
Our vision is to be a healthy, growing and prayerful church which is led by the Holy Spirit and where the Bible is studied and applied and we want to see the TRANSFORMATION of Manchester and the surrounding area by the POWER OF THE HOLY SPIRIT, Who is active to SAVE, HEAL and DELIVER.

Our Values

We have four Values that really motivate us

1. Love : for every individual

2. Faith : that impacts daily life

3. Service : that shows God’s love

4. Commitment : to the Lord & His Church

 

Our Mission
Connecting People to Christ
We, Mahanaim Pentecostal Church aims to bring Jesus into the lives of all those in our immediate area – but we sincerely believe we have been called to spread the message of Jesus love throughout the world and we can’t just confine our activities to our postcode!
The word of Jesus is known as the Good News and if you have good news you want to share it. This is very much at the heart of what we believe and we action our beliefs by setting 50% of our income to spread the gospel and practical help and support all around the world, as well as helping many people in need locally rest 50% for ministries day by day worklly rest 50% for ministries day by day work
      
      
Our Statement of Faith
This statement describes the fundamental beliefs held by the Church and its members have a set of doctrines which reflect our faith as Christians.
Each person of the Trinity, the Father, Son and Holy Spirit being co-equal, co-eternal and in perfect unity in the one Godhead and that there is no other true or living God.
The sovereignty of God in Creation, Providence, Redemption and His Righteousness in Final judgment.
The divine inspiration and entire infallibility of the Bible (both the Old and New Testaments) as originally given and its supreme authority in all matters of faith and conduct. Sinfulness and guilt of human nature since the fall, rendering man subject to God’s righteous anger and judgment.
The forgiveness of sins and freedom from the guilt penalty and power of sin solely through the sacrificial death of our Lord Jesus Christ in our place, and the gift of eternal life to all who believe in him.
The incarnation and the Virgin Birth of our Lord Jesus Christ, His sinless life, His miraculous ministry, His resurrection from the dead, His ascension into heaven to be our mediator and the certainty of His visible and personal return with great glory.
The necessity of the work of the Holy Spirit to make the death of our Lord Jesus Christ effective to the individual sinner, giving new spiritual birth without which no-one can enter the Kingdom of God.
The Life of the Holy Spirit within believers, to make them holy and more like our Lord Jesus Christ and to enable them to act and live as true children of God. The one Universal Church which is the Body of Christ and to which all true believers belong.
Baptism for believers as the only baptism commanded by our Lord Jesus Christ practiced by the apostles and taught in the New Testament.
Each local church being a part of the Body of Christ; made up of a group of believers who have a personal faith in our Lord Jesus Christ and who have gathered together in fellowship for worship and service. Each local Church being free under the guidance and control of the Holy Spirit to interpret and to act on the Bible’s teaching which is sufficient to order its life and for it to obey our Lord Jesus Christ.
The outpouring of the Holy Spirit as promised by our risen Lord Jesus Christ and the availability of this Baptism in the Spirit to all believers giving them the power to be witnesses and equipping them with spiritual gifts for service.



1 Corinthians 3:6 Apostle Paul says, “I planted the seed, Apollos watered it, but God made it grow. So neither he who plants nor he who waters is anything, but only God who makes things grow.”
Mahanaim Pentecostal Church is a bilingual Malayalam and English Church located in Manchester. We are a Bible believing Malayalam Pentecostal Church, worshipping God in Spirit and in truth. We find church as an instrument to proclaim THE GOOD NEWS of Jesus Christ to the lost world. Evangelization of the lost world and Edification of its members are the main purposes of the church.
Mahanaim Pentecostal Church had a humble beginning in one of our church member’s residents in the year 2005. Since then, God’s hand is building the church in the midst of powers of this dark world and devil’s schemes. In January 2017, Pastor Biju Cherian (Founder of Merseyside Revival Ministries) took over the charge of the church and is being ministering with the grace and strength God provides.

      
      </div>
    )
  }
}
