import { useEffect, useState } from "react";
import axios from 'axios'
export default function App() {
  const [term, setTerm] = useState('react')
  const [debounceSearch, setDebounceSearch] = useState(term)
  const [result, setResult] = useState([])


  // useEffect(() => {
  //   const search = async () => {
  //     const response = await axios.get('https://www.mediawiki.org/w/api.php' , {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     })

  //     setResult(response.data.query.search)
  //   }

  //   if(!result.length) {
  //     if(term) {
  //       search()
  //     }
  //   } else {
  //     const debounce = setTimeout(() => {
  //       if (term) {
  //         search()
  //       }
  //     }, 1000)

  //     return () => {
  //       clearTimeout(debounce)
  //     }
  //   }

  // }, [term, result.length])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('first effect');
      setDebounceSearch(term)
    }, 800)

    return () => clearInterval(timeOut)
  } , [term])

  useEffect(() => {
    console.log('second effect');
      const search = async () => {
      const response = await axios.get('https://www.mediawiki.org/w/api.php' , {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceSearch
        }
      })
      setResult(response.data.query.search)
    }

    if (debounceSearch) {
      search()
    }
  }, [debounceSearch])

  const fetchResult = result.map((el, index) => {
    return (
      <tr key={el.pageid}>
        <th scope='row'>{index + 1}</th>
        <td>{el.title}</td>
        <td dangerouslySetInnerHTML={{__html: el.snippet}} />
      </tr>
    )
  })


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='my-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Search Input
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              value={term}
              onChange={(e) => setTerm( e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Desc</th>
              </tr>
            </thead>
            <tbody>
              {fetchResult}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
