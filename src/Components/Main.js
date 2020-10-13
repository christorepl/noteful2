import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import NotefulContext from '../Context/NotefulContext'

class Main extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        onDeleteNote: () => {},
    }

   render() { 
    const folderID = this.props.match.params.folderId

    let notes = []

    if (folderID === undefined){
        notes = this.context.notes
    } else {
        notes = this.context.notes.filter(note => {
            return (folderID === note.folderId)
        })
    }

    const note = notes.map(note => {
        return (
            <ul className="noteSelection" key={note.id}>
                    <li>
                        <Link to={`/note/${note.id}`}>
                            <h1>{note.name}</h1>
                        </Link>
                        <p>Last modified: {note.modified}</p>
                        <button type="button" onClick={() => this.context.deleteNote(note.id)}>Delete</button>
                    </li>
            </ul>
        )
    })

    return(
        <div>
        {note}
        </div>
    )
}
}

Main.propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
}


export default withRouter(Main)