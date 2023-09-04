import { UserIProps } from "../../types";


async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache"
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getUsers();

  return (
    <main>
      <h2>All Users</h2>
      <ul>
        {
          data?.users.map((user: UserIProps) => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </main>
  )
}
