import React from 'react';
import Aux from '../../hoc/auxiliary'

const Layout = (props) =>(
    <Aux>
        <div>Navigation, Side Drawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout;