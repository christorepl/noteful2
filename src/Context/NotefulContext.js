import React from 'react'

export default React.createContext({
    notes: [],
    folders: [],
    noteName: {
        value: '',
        touched: false
    },
    err: '',
    addNewFolder: () => {},
    deleteNote: () => {},
    addNewNote: () => {},
    validateNoteName: () => {}
})