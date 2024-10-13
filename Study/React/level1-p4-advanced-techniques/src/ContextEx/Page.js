import React from 'react'
import Layout from './Layout'

const user = { name: 'Yahia' }
const them = { name: 'Dark-Them' }
export const UserContext = React.createContext()
export const ThemContext = React.createContext()

const Page = (props) => {
  return (
    <UserContext.Provider value={user}>
      <ThemContext.Provider value={them}>
        <Layout />
      </ThemContext.Provider>
    </UserContext.Provider>
  )
}

export default Page
