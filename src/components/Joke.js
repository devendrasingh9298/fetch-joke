import axios from "axios";
import { useEffect, useState } from "react";


function Joke(){

    const [type, setType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response)=> setItems(response.data))
    },[type])

    return(
        <>
        <div>
            <button onClick={()=>setType('posts')}>Posts</button>
            <button onClick={()=>setType('users')}>Users</button>
            <button onClick={()=>setType('comments')}>Comments</button>

            <p>{type}</p>
        </div>
        <div>
        <p>
            {items.map((item)=><pre>{JSON.stringify(item)}</pre>)}
        </p>
        </div>
        </>
    );
}

export default Joke;