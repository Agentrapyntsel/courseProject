import DataList from '../../components/DataList';
import { paths, title } from '../../config';

import '../Civilizations/civilizations.scss';
import background from "../../assets/sky.jpg";

export const Units = () => {

    return (
        <>
            <img className='bgr' src={background} alt="bgr"/>
            <DataList path={paths.units} title={title.units}/>
        </>
)
}


export default Units;