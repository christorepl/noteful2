import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navHeader">
                <Link to='/'>
                    <li>Noteful</li>
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
