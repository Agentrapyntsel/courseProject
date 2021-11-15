import React from 'react';
import { Link } from 'react-router-dom';

import "./ListItem.scss";

export type  ListItemProps={name:string, path:string, id:number};

class ListItem extends React.PureComponent<ListItemProps> {

    render() {

        const { name, path, id } = this.props;

        return (
            <li className='listItem-li'><Link className='listItem-item' to = {`${path}/${id}`}>{name}</Link></li>
        )
    }
}

export default ListItem;