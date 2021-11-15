export const baseUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

export const defaultConfig = {
    headers: {
        Accept: 'application/json',
            }
}

export const API = {
    request(url:string, config = {}) {
        return fetch(url, {
            ...defaultConfig,
            ...config,
        });
    },
    get(path:string, config = {}) {
        return this.request(`${baseUrl}${path}`, config);
    },
    post(path:string, config = {}) {},
    put(path:string, config = {}) {},
    patch(path:string, config = {}) {},
    delete(path:string, config = {}) {},
};



