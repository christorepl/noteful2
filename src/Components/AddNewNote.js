import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import NotefulContext from '../Context/NotefulContext'
import '../ErrorBoundaries/NotesErrors'
import NotesErrors from '../ErrorBoundaries/NotesErrors'
import NoteNameValidation from './NoteNameValidation'

class AddNewNote extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        addNewNote: () => {},
    }

    render() {
        const folderSelection = this.context.folders.map(folder => {
            return (
                <div key={`${folder.id}`}>
                    <input type="radio" id={`${folder.id}`} name='noteFolder' value={`${folder.id}`} required/>
                    <label htmlFor={`${folder.id}`}>{`${folder.name}`}</label>
                </div>
            )
        })

        return (
            <NotesErrors>
                <form className="form" onSubmit={(e) => this.context.validateNoteName(e)}>
                    <label htmlFor="noteName">New Note Name: </label> <br/>
                        <input type="text" className="noteName" name="noteName" id="noteName"/> <br/>
                    <label htmlFor="noteContent">Content of Note: </label>
                        <input type="text" className="noteContent" name="noteContent" id="noteContent" required/> <br/>
                    <label htmlFor="noteFolder">Select the folder you will add your note to:</label>
                        {folderSelection}
                    <br />
                    <button type="submit" className="submit">
                        Add Note
                    </button>
                    <NoteNameValidation/>
                </form>
            </NotesErrors>
        )
    }
}

AddNewNote.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}


export default withRouter(AddNewNote)