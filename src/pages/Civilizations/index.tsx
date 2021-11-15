import React from 'react';
import DataList from '../../components/DataList';
import { paths, title } from '../../config';

import background from './../../assets/sky.jpg';

import './civilizations.scss';


export const Civilizations:React.FC = () => {

    return(
        <div >
            <img className='bgr' src={background} alt="bgr"/>
                <DataList  path  = {paths.civilizations} title = {title.civilizations}/>
        </div>
        )
}

export default Civilizations;