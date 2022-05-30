import React from 'react'
import { Container } from 'semantic-ui-react'


const SermonsVideos = (link) => (
    <div className='parent_div'>
        <div>
            <div><h4>Message by Rev. Dr. Joe Kurian</h4></div>
        <iframe className='youtube_frame' src="https://www.youtube.com/embed/tbqpn4LgzLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='description'>
            This message was given at the church on his Apostolic visit in 2022. 
        </div>
        </div>
    </div>
)

export default SermonsVideos