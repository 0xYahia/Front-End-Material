import { useState } from 'react'
import style from './FilterInput.module.css'

const FilterInput = ({filtration}) => {

  const [filter, setFilter] = useState('')

  const filterHandler = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue)
    filtration(filterValue)
  }
  return (
    <div>
      <input type="text" className={style.mb} onChange={filterHandler} value={filter} placeholder='Search' />
  </div>
  )
}


export default FilterInput