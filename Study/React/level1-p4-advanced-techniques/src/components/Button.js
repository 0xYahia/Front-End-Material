import './Button.css'

const Button = ({ color, customClasses, callBackFun, children }) => {
  return (
    <div
      className={`${customClasses ? 'button ' + customClasses : 'button'}`}
      style={{ color: color }}
      onClick={() => callBackFun(children)}
    >
      {children}
    </div>
  )
}

export default Button
