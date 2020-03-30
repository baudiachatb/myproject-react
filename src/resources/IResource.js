import ApiClient from "./ApiClient";

class IResouce {
    entityResult;

    constructor(entity) {
        this.entityResult = entity;
    }

    getById = (id, path) => {

        return this.entityResult(ApiClient.getById(id, path))
    };

    getAll = (path) => {
        const resultList = ApiClient.getAll(path);

        return resultList.map(entity => {
            return {
                count: resultList.length,
                data: this.entityResult(entity)
            }
        })
    };

    put = (path, entity) => {
        return this.entityResult(ApiClient.put(path, entity));
    };

    post = (path, entity) => {
        return this.entityResult(ApiClient.post(path, entity));
    };

    login = (username, pass) => {
        return ApiClient.post('/login', {
            username: username,
            password: pass
        })
    }
}

export default IResouce;