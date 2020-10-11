import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import Noteful from './API/Noteful'
import NotefulContext from './Context/NotefulContext'
import Folder from './Components/Folder'
import Header from './Components/Header'
import Main from './Components/Main'
import MainNote from './Components/MainNote'
import GoBackButton from './Components/GoBackButton'
import AppErrors from './ErrorBoundaries/AppErrors'
import './App.css'

class App extends React.Component{
    static contextType = NotefulContext

    state = {
        notes: [],
        folders: [],
        err: '',
        noteName: {
            value: '',
            touched: false
        }    
    }

    async componentDidMount () {
        const notesResponse = await axios.get(`${Noteful.URL}/notes`)
            this.setState({notes: notesResponse.data })
        const foldersResponse = await axios.get(`${Noteful.URL}/folders`)
            this.setState({folders: foldersResponse.data })
    }

    deleteNote = (noteId) => {
        axios.delete(`${Noteful.URL}/notes/${noteId}`)
        const notes = this.state.notes.filter(note => note.id !== noteId)
        this.setState({ notes })
    }

    addNewFolder = (e) => {
        e.preventDefault();
        let folderName = e.target.folderName.value
        axios({
            method: 'post',
            url: `${Noteful.URL}/folders/`,
            headers: {'Content-Type': 'application/json'},
            data: {
                name: `${folderName}`
            }
        }).then(res => {
            let newFolder = {}
            newFolder.id = res.data.id
            newFolder.name = res.data.name
            this.setState({folders: [...this.state.folders, newFolder]})
        })
    }

    clearError = () => {
        this.setState({err: ''})
    }

    validateNoteName = (e) => {
        e.preventDefault();
        const noteName =  e.target.noteName.value.trim();
        if (noteName.length === 0) {
            this.setState({err: 'Validation Error: You must provide a name for your new note.'})
        } else {
            this.clearError()
            this.addNewNote(e)
            this.setState({noteName: {value: noteName, touched: true}})
        }
    }

    addNewNote = (e) => {
        let folder = e.target.noteFolder.value
        let content = e.target.noteContent.value
        let name = e.target.noteName.value
        let curTime = new Date().toLocaleString()
        axios({
            method: 'post',
            url: `${Noteful.URL}/notes/`,
            headers: {'Content-Type': 'application/json'},
            data: {
                folderId: `${folder}`,
                content: `${content}`,
                name: `${name}`,
                modified: `${curTime}`
            }
        }).then(res => {
            let newNote = {}
            newNote.id = res.data.id
            newNote.name = res.data.name
            newNote.content = res.data.content
            newNote.modified = res.data.modified
            newNote.folderId = res.data.folderId
            this.setState({notes: [...this.state.notes, newNote]})
        })
    }

    render(){
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
            noteName: this.state.noteName,
            err: this.state.err,
            deleteNote: this.deleteNote,
            addNewFolder: this.addNewFolder,
            addNewNote: this.addNewNote,
            validateNoteName: this.validateNoteName
        }

        return(
            <div className="App">
                <AppErrors>
                    <Route path="/" component={Header}/>
                    <NotefulContext.Provider value={value}>
                        <div className="navFlex">
                            <Route
                                exact path="/"
                                component={Folder}/>
                            <Route
                                exact path="/"
                                component={Main}
                            />
                            <Route 
                                exact path="/folder/:folderId"
                                component={Folder}
                            />
                            <Route
                                exact path="/folder/:folderId"
                                component={Main}
                            />
                            <Route
                                exact path="/note/:noteId"
                                component={GoBackButton}
                            />
                            <Route
                                exact path="/note/:noteId"
                                component={MainNote}
                            />
                        </div>
                    </NotefulContext.Provider>
                </AppErrors>
            </div>
        )
    }
}

export default withRouter(App) 