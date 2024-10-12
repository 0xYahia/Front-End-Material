import style from './From.module.css'

const Controller = (props) => {
  console.log(props);
  return (
    <div className={style.control}>{props.children}</div>
  );
}


const From = (props) => {
  return (
    <form>{props.children}</form>
  )
}

From.Controller = Controller
export default From;