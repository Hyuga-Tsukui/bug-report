import Link from 'next/link'
import { fetchData1 } from '../apis'


export default async function BlogIndex() {
  const dumyIds = await fetchData1()
  return (
    <main>
      <ul>
        {dumyIds.map((id) => (
         <li key={id}>
          <Link  href={`/blogs/${id}`}>{`MyPost "${id}`}</Link>
         </li> 
        ))}
      </ul>
    </main>
  )
}
