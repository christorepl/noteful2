import React from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
//hitting delete should bring the user to the homepage in addition to deleting the item

class Delete extends React.Component {
    render(){
        return (
            <Link to="/">
                <button type="button" onClick={/*delete function here*/}>
                    this will bring you home
                </button>
            </Link>
        )
    }
}

export default withRouter(Delete)