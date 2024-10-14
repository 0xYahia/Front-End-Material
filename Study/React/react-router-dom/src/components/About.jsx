import { Outlet, useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }


  return (
    <>
      <Outlet />
      <h1>About</h1>
      <button onClick={goToHome} className="btn btn-secondary">
        Go To Home
      </button>
    </>
  );
}
