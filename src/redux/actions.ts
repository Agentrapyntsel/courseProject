export const GET_DATA = 'GET_DATA';

 interface IGetData {
    type:'GET_DATA',
     path: string
}

export const getData=(path: string): IGetData =>{
    return {
        type: GET_DATA,
        path
    }
}

