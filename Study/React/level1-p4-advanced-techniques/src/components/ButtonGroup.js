import React from 'react'

const ButtonGroup = ({ children }) => {
  const text = children.props.children
  const callBackFun = () => {
    console.log('click')
  }
  const cloneElement = React.cloneElement(
    children,
    {
      color: 'red',
      customClasses: 'group',
      callBackFun,
    },
    text
  )

  return <div>{cloneElement}</div>
}

export default ButtonGroup
