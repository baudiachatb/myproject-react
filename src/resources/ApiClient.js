import axios from 'axios'

const host = "http://localhost:9000";
const ApiClient = {
    getById: (id, path) => {
        return axios.get(host + path, {
            params: [{id: id}]
        })
    },

    getByField:(param, path) => {
      return axios.get(host+path, {
          params: [param],
          headers: [{
              Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODY0NDkxN…vNCJ9.XN1xU5zZ7tIAvI4iV1FfXNiU9ekpEHsxVf0gfMDmuCU'
          }]
      })
    },

    getAll: (path) => {
        return axios.get(host + path)
    },

    put: (path, entity) => {
        return axios.put(host + path, entity)
    },
    post: (path, entity) => {
        return axios.post(host + path, entity);
    }
};

export default ApiClient;