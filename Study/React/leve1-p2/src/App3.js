import { useEffect, useRef, useState } from "react";
export default function App() {
  const [term, setTerm] = useState('javascript')
  const prevTermState = useRef()

  useEffect(() => {
    prevTermState.current = term;
  })

  const prevTerm = prevTermState.current
  console.log('prevTerm', prevTerm);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="my-3">
            <label className="from-label" htmlFor="exampleFormControlInput1">
              Search Input
              <input className="from-control" type="text" id="exampleFormControlInput1"
              onChange={(e) => setTerm(e.target.value)} value={term} />
            </label>
          </div>
          <p>Current term {term}</p>
          <p>Previous term {prevTerm}</p>
        </div>
      </div>
    </div>
  );
}
