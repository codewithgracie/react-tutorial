import React from 'react'
import UserCard from './components/UserCard'

function App() {
  return (
    <div>
      <UserCard name={"Jennifer Shale"} bio={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, pariatur?"} isOnline={true}  />
    </div>
  )
}

export default App