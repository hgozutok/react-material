import React from 'react'
import ResponsiveAppBar from './Navigation'

function Layout(props) {
    return (
        <>
            <ResponsiveAppBar/>
            {props.children}
        </>
    )
}

export default Layout
  