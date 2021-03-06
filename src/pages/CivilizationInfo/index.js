import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getNameForFetch } from '../../helpers';
import { API } from '../../api';

import '../UnitInfo/CommonInfo.scss';


export const CivilizationInfo = (props) => {

   const path = props?.match.url;

  const [civilization, setData] = useState([]);
 
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


     const { name, expansion, army_type, unique_unit='default', unique_tech='default', team_bonus, civilization_bonus } = civilization;
    //  const { name, expansion, army_type, unique_unit='default', unique_tech='default', team_bonus, civilization_bonus }:
    //      { name:string, expansion:string, army_type:string, unique_unit:string, unique_tech:string, team_bonus:string, civilization_bonus:string }
    //      = civilization;

        return (

          <div>  
                <div className='wrapper'>
                    <div className='center-wrapper'>
                        <h1>Civilization Info - {name}</h1>
                        <p>Expansion: {expansion}</p>
                        <p>Army type: {army_type}</p>
                        <p>Team bonus: {team_bonus}</p>

                        <ul>
                            <h2>Civilization bonus</h2>

                            {Boolean(civilization_bonus) && civilization_bonus.map((bonus, index) =>
                                    <li key={index}>
                                        {bonus}
                                    </li>
                                )
                            }
                        </ul>

                        <div>
                            {Boolean(unique_unit.length > 0) &&
                            <div>
                                <Link to={`/unit/${getNameForFetch(unique_unit[0])}`}><p>Unique unit</p></Link>
                            </div>
                            }

                            {Boolean(unique_tech.length > 0) &&
                            <div>
                                <Link to={`/technology/${getNameForFetch(unique_tech[0])}`}><p>Unique technology</p>
                                </Link>
                            </div>
                            }
                        </div>

                        <div>
                            <button className='gradient-btn' onClick={goBack}>Go back</button>
                            <button className='gradient-btn' onClick={goHome}>Go home</button>
                        </div>
                    </div>

                </div>
          </div>
        )
  };
 

export default CivilizationInfo;
      
              
                
                
                    
            