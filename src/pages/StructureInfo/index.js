import React from 'react';
import {useState, useEffect} from 'react';

import { API } from '../../api';

import '../UnitInfo/CommonInfo.scss';

export const StructureInfo = (props) => {

    const path = props?.match.url

  const [structure, setData] = useState([]);
 

    useEffect(()=>{
        (async () => {
            const result = await API.get(path);
            const data = await result.json();
            setData(data);
        })();
    }, [path]);
    
    const goBack = () => {
        const { history } = props;
        history.goBack();
      }

    const goHome = () => {
        const { history } = props;
        history.push('/');
      }

    const { name, description, expansion, build_time, hit_points } = structure;
    
    return (
        
            <div className='wrapper'>
                <h1>Structure Info - {name}</h1>
                <div className='center-wrapper'><p>{description}</p>
                    <ul>
                        <li>Expansion: {expansion}</li>
                        <li>Build time: {build_time}</li>
                        <li>Hit point: {hit_points}</li>
                    </ul>
                    <button className='gradient-btn' onClick={goBack}>Go back</button><br/>
                    <button className='gradient-btn' onClick={goHome}>Go home</button>
                </div>
            </div>
    )
};
 

export default StructureInfo;
      
              
                
                
                    
            