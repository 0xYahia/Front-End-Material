import React from 'react'

const ButtonGroup = ({ children }) => {
  // const cloneElement = React.cloneElement(
  //   children,
  //   {
  //     color: 'red',
  //     customClasses: 'group',
  //     callBackFun,
  //   },
  //   text
  // )

  const cloneElements = React.Children.map(children, (child) => {
    const text = child.props.children
    return React.cloneElement(
      child,
      {
        color: 'red',
        customClasses: 'group',
        callBackFun: child.props.callBackFun,
      },
      text
    )
  })

  return <div>{cloneElements}</div>
}

export default ButtonGroup
