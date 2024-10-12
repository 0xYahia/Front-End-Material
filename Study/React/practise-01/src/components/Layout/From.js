import style from './From.module.css'

const Controller = (props) => {
  return (
    <div className={style.control}>{props.children}</div>
  );
}


const From = (props) => {
  return (
    <form onSubmit={props.onSubmit} >{props.children}</form>
  )
}

From.Controller = Controller
export default From;