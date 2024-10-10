import React, {useState} from 'react'

function UserStateBasic() {
  const [count, updatedCount] = useState(0)
  const desc = () => {
    updatedCount(count - 1);
  }
  const insc = () => {
    updatedCount(count + 1);
  }

  
  return (
    <div>
      <button onClick={desc}>-</button>
      <span>{count}</span>
      <button onClick={insc}>+</button>
    </div>
  )
}

export default UserStateBasic