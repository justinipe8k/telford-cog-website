import React from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const LeaderItem = ({ image, name, designation, decription,socialMedia, fb, wa }) => (
    <Card
    // image={image}
    // header={name}
    // meta={designation}
    // description={decription}
    >
        <Card.Content>
            <Image
                src={image}
            />
            <Card.Header style={{ marginTop: '5px' }}>{name}</Card.Header>
            <Card.Meta>{designation}</Card.Meta>
            <Card.Description>
                {decription}
            </Card.Description>
        </Card.Content>
        {(socialMedia)?(
        <Card.Content extra>
            <div className='ui two buttons'>                
                    <Button basic color='grey'>
                    <a href={fb}>
                        <Icon name='facebook' />
                        </a>
                    </Button>           
               
                <Button basic color='grey'>
                <a href={wa}>
                    <Icon name='whatsapp' />
                    </a>
                </Button>              
            </div>
        </Card.Content>):<></>}
    </Card>

)

export default LeaderItem