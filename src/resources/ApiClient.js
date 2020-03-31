import {ajax} from 'rxjs/ajax';

const host = "http://localhost:9000";
const headers = {
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('b-app-user-token')
};
const serialize = function (obj) {
    let str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
const ApiClient = {
    getById: (id, path) => {
        return ajax({
            url: host + path,
            method: 'GET',
            headers: headers,
        })
    },

    getByField: (param, path) => {
        return ajax({
            url: host + path + serialize(param),
            method: 'GET',
            headers: headers
        })
    },

    getAll: (path) => {
        return ajax({
            url: host + path,
            method: 'GET',
            headers: headers
        });
    },

    put: (path, entity) => {
        return ajax({
            url: host + path,
            method: 'PUT',
            headers: headers,
            body: entity
        });
    },
    post: (path, entity) => {
        return ajax({
            url: host + path,
            method: 'POST',
            headers: headers,
            body: entity
        });
    }
};

export default ApiClient;