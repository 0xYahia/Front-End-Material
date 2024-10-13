import { useContext } from 'react'
import { ThemContext, UserContext } from './Page'

const User = ({ username }) => {
  const user = useContext(UserContext)
  const them = useContext(ThemContext)
  return (
    <h1>
      {user.name} | {them.name}
    </h1>
  )
}

export default User
