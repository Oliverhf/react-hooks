import axios from 'axios'
import React, { useState, useEffect, useMemo} from 'react'
import CommentsItem from './CommentsItem'

const UseMemo = () => {

const [data, setData] = useState(null)
const [toggle, setToggle] = useState(false)
const [newComment, setNewComment] = useState('')

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data);
        })
    }, [])


    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log("This was computed")

        return longestName
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    // const getLongestName = findLongestName(data)


  return (
    <div>
        <input onChange={({target}) => setNewComment(target.value)} value={newComment} />
        <CommentsItem getLongestName={getLongestName} />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>toggle</h1>}
        <p>{getLongestName}</p>
    </div>
  )
}

export default UseMemo