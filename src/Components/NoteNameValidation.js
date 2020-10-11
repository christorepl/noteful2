import React from 'react'
import PropTypes from 'prop-types'
import NotefulContext from '../Context/NotefulContext'

export default class NoteNameValidation extends React.Component {
    static contextType = NotefulContext

    render(){
        const err = this.context.err
        return(
            <div className="errorMessage">
                {err}
            </div>
        )
    }
}

NoteNameValidation.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}
