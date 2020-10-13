import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import NotefulContext from '../Context/NotefulContext'
import AddNewFolder from './AddNewFolder'
import AddNewNote from './AddNewNote'

class Folder extends React.Component {
    static contextType = NotefulContext
    render(){

        let folderID = this.props.match.params.folderId

        const folderNames = this.context.folders.map(folder => {
            return (
                <div key={folder.id}>
                <Link to={`/folder/${folder.id}`}>
                    <p className={`navBarTile ${folder.id === folderID ? 'highlight' : null}`}>
                    {folder.name}
                    </p>
                </Link>
                </div>
            )
        })

    return(
        <div>
            {folderNames}
            <AddNewFolder />
            <AddNewNote />
        </div>
    )
    }
}

Folder.propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
}

export default withRouter(Folder)