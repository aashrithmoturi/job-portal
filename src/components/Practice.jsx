import React from 'react'

const Practice = () => {
  const name = "Aash"
  const temp = "is usually humble"
  const items = ["is", "usually", "humble"]
  const booleanVar = true;

  return (
    <>
      <div className='text-3xl'> APP </div>
      <div style={{ color : 'red', fontSize : '24px' }}> Hello {name + " " + temp} </div>
      <ul>
          {items.map((item, idx) => 
            (
              <li key={idx+1}>{item}</li>
            )
          )}
          {
            booleanVar ? <h1> you are loggedIn</h1> : <h1> please logIn </h1>
          }
          {
            booleanVar && <h1> This is from if statement you are loggedIn</h1>
          }
      </ul>
    </>
  )
}

export default Practice