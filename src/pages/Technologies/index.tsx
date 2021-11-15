import DataList from '../../components/DataList'
import { paths, title } from '../../config'

import '../Civilizations/civilizations.scss';
import background from "../../assets/sky.jpg";

export const Technologies = () => {

    return (
        <>
            <img className='bgr' src={background} alt="bgr"/>
            <DataList path={paths.technologies} title={title.technologies}/>
        </>
    )
}


export default Technologies;