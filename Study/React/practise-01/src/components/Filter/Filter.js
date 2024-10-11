import { useState } from 'react'
import style from './Filter.module.css'

const Filter = ({filtration}) => {

  const [filter, setFilter] = useState('')

  const filterHandler = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue)
    filtration(filterValue)
  }
  return (
    <div>
      <input type="text" className={style.mb} onChange={filterHandler} value={filter} />
  </div>
  )
}


export default Filter