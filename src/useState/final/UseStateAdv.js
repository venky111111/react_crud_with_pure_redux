import React, {useState} from 'react'
const obj = {name:"Syam", last: "Venky"}

function UseStateAdv() {
  const [fname, lname] = useState(obj)

  const nameChnage = () => {
    lname({ ...fname, name: "Kiran"})
  }
  const nameChanage = () => {
    lname({...fname , last:"vantakula"})
  }
  return (
    <>
    {fname.name},
    {fname.last}
    <button onClick={nameChnage}>Change Name</button>
    <button onClick={nameChanage}>Change LName</button>

    </>
  )
}

export default UseStateAdv