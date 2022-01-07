import { useState, React } from 'react'
import PropTypes from 'prop-types'

const ChatInput = () => {
  const propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  const [message, setMesssage] = useState('')


    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          onSubmitMessage(message)
          setMesssage('')
        }}
      >
          <input
          type="text"
          placeholder={'Enter message...'}
          value={message}
          onChange={e => setMesssage(e.target.value)}
        />
        <input type="submit" value={'Send'} />
      </form>
    )
  
}

export default ChatInput

