import { useState, useEffect } from 'react'

type TUser = {
  id: number
  name: string
}

export const Users = () => {
  const [users, setUser] = useState<TUser[]>()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: TUser[]) => setUser(users))
  }, [])

  return (
    <>
      {users?.map(({ id, name }) => (
        <div key={id} data-testid="user">
          <div>name: {name}</div>
        </div>
      ))}
    </>
  )
}
