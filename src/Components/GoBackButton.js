import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'


class GoBackButton extends React.Component {
    static contextType = NotefulContext

    render(){
        let noteID = this.props.match.params.noteId
        const selectedNote = this.context.notes.find(note => note.id === noteID)
        const selectedFolder = this.context.folders.find(folder => folder.id === selectedNote.folderId)
        const selectedFolderName = selectedFolder.name

        return(
            <div>
                <button className="navBarTile" onClick={() => this.props.history.goBack()}>Go Back</button>
                <p>{selectedFolderName}</p>
            </div>
        )
    }
}

GoBackButton.propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
}

export default withRouter(GoBackButton)