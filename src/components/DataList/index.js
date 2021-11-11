import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import ListItem from '../ListItem';
import Preloader from '../Preloader/Preloader'

class DataList extends React.Component {


    fetchData() {
        const { listPath: path } = this.props.path;
        this.props.getDataAction(path);
    }
    
    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { title, path } = this.props;
        const { infoPath } = path;

        const { data } = this.props[title];
        const dataForRender = data[title]; 
        
        return (
            <>
                <h1>{title.toUpperCase()}</h1>

                {Boolean(!dataForRender)?<Preloader/> :
                <ul className = 'list'>
                    {dataForRender.map(
                        item => <ListItem key = {item.id} name = {item.name} path = {infoPath} id = {item.id}/>)}
                </ul>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        civilizations: state.civilizations,
        units: state.units,
        structures: state.structures,
        technologies: state.technologies,
    })
};

const mapDispatchToProps = dispatch => ({
    getDataAction: path => dispatch(getData(path)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DataList);
