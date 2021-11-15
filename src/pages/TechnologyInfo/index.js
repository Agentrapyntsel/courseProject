import React from 'react';
import {useState, useEffect} from 'react';

import { API } from '../../api';

import '../UnitInfo/CommonInfo.scss';


export const TechnologyInfo = (props) => {

  const path = props?.match.url

  const [technology, setData] = useState([]);
 

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

      const { name, description, expansion, build_time, age  } = technology;
    
      return (
        <div className='wrapper'>
            <h1>Technology Info - {name}</h1>
            <div className='center-wrapper'>
                <p>{description}</p>
                <ul>
                    <li>Expansion: {expansion}</li>
                    <li>Build time: {build_time}</li>
                    <li>Age: {age}</li>
                </ul>
                <button className='gradient-btn' onClick={goBack}>Go back</button><br/>
                <button className='gradient-btn' onClick={goHome}>Go home</button>
            </div>
        </div>
   );
};
 

export default TechnologyInfo;
      
              
                
                
                    
            