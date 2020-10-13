import React from 'react'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'
import FoldersErrors from '../ErrorBoundaries/FoldersErrors'

class AddNewFolder extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        addNewFolder: () => {},
    }

    render() {
        return (
            <FoldersErrors>
                <form className="form" onSubmit={(e) => this.context.addNewFolder(e)}>
                <label htmlFor="folderName">New Folder Name: </label> <br/>
                    <input type="text" className="folderName" name="folderName" id="folderName" required/> <br/>
                    <button type="submit" className="submit">
                        Add folder
                    </button>
                </form>
            </FoldersErrors>
        )
    }
}

export default withRouter(AddNewFolder)