import React from 'react'
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const state = [
        {
          "_id": "651313bd68d89442e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "651837f5c78df909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        },{
          "_id": "651313bd68d89442e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "651837f5c78df909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        },{
          "_id": "651313bd68d89442e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "651837f5c78df909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        }
      ]
  return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
