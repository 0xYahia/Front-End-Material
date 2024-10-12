import style from './From.module.css'

const Button = (props) => {
  return (
    <button className={style.btn} style={props.style} onClick={props.onClick} >{props.children}</button>
   );
}

export default Button;