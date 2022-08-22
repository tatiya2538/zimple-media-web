import React from 'react'
import { Card } from 'antd'
import { CardStyle } from './CardStyle'
import { IconNew } from '../icons/Icon.jsx'

function CardNew(props) {
    let dropIcon
    // const [show, setShow] = useState(true)
  return (
    <CardStyle>
        <Card
          title={
            <>
              {props.icon ? (
                <span className="card-title-icon">
                  <IconNew icon={props.icon} />
                </span>
              ) : (
                ''
              )}
              <span className="card-title-text" style={props.topiccolor ? { color: props.topiccolor } : null}>
                {props.topic}
              </span>
            </>
          }
          
          extra={props.buttontopright ? dropIcon : ''}
          bordered={props.bordered}
          style={props.style}
        //   className={`CardNew ${show ? 'show' : 'hide'}`}
        >
          {props.children}
        </Card>
    </CardStyle>
  )
}

export default CardNew