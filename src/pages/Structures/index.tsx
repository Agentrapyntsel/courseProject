import DataList from '../../components/DataList'
import { paths, title } from '../../config'
import background from "../../assets/sky.jpg";

import '../Civilizations/civilizations.scss';

export const Structures = () => {

    return (
        <>
            <img className='bgr' src={background} alt="bgr"/>
            <DataList path={paths.structures} title={title.structures}/>
        </>
    )
}


export default Structures;