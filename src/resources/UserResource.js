import IResouce from "./IResource";
import ApiClient from "./ApiClient";


class UserResource extends IResouce{
    getUserByUserName = (username) => {
        return ApiClient.getByField(null, `/v1/user/get`, {username: username})
    }
}

export default UserResource;