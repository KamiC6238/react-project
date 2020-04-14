import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const theme = useContext(ThemeContext)
  const style = {
    color: theme.color,
    background: theme.background
  }
  useEffect(() => {
    document.title = `点击了${like}次`
  }, [])
  return (
    <div>
      <button style={style} onClick={() => setLike(like + 1)}>
        {like}
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default LikeButton