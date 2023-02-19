import { fetchData2 } from "../../apis";


type Props = {
    params: {
        id: number;
    }
}

export default async function BlogContent({params: {id}}: Props)  {
    const author = await fetchData2(id)
    return <div><h1>{`ThisPost is ${author.name}`}</h1></div>
}