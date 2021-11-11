import React from 'react';

import "./ListItem.scss";

import { Link } from 'react-router-dom'

class ListItem extends React.PureComponent {

    render() {

        const { name, path, id } = this.props;

        return (
            <li className='listItem-li'><Link className='listItem-item' to = {`${path}/${id}`}>{name}</Link></li>
        )
    }
}

export default ListItem;