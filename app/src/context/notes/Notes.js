import React,{ useState } from 'react'
import Context from './Context'
const Notes = (props) => {
    const notes = [{
        " ld": "61312f19553781a8ca8d0e06",
        "user": "6131dc5e3e4037cd4734a066",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "personal"
    },
    {
        "ld": "61322f19553781a8ca8d0e08",
         "user": "6131dc5e3e4037cd4734a066",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": " personal"
    }]

    const [note, setNotes] = useState(notes)
    return (
        <Context.Provider value={{note,setNotes}}>
            {props.childern}
        </Context.Provider>
    )

}

export default Notes