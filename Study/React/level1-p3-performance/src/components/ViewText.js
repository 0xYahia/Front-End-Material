import React from 'react';
import '../App.css'
import Text from './Text'

const ViewText = ({text, ageHandler}) => {

  console.log('view text component');


  const apiConnect = () => {
    for (let i =0; i <= 500000000; i++) {}
    console.log('view text component');
  }

  apiConnect()


  return (
    <div className="viewText">
      <button onClick={ageHandler}>age</button>
      <p>the included text:</p>
      <Text>{text.name}</Text>
    </div>
  )
}

export default React.memo(ViewText)
