import style from './Layout.module.css'

const Controller = (props) => {
  console.log(props);
  return (
    <div className={style.control}>{props.children}</div>
  );
}

export default Controller;