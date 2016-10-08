import React, { PropTypes } from 'react'
import Message from './Message'

const MessagesList = ({ messages, style }) => (
  <ul className="nav nav-list" style={style} >
    {messages.map( (_message,idx) =>(
        <Message key={idx} text={_message.text} />
      )
    )}
  </ul>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
