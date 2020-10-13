import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navHeader">
                <Link to='/'>
                    <h2>Noteful</h2>
                </Link>
            </nav>
        )
    }
}

Header.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}
