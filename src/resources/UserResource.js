import IResouce from "./IResource";
import ApplicationUser from "../entities/ApplicationUser";
import ApiClient from "./ApiClient";


class UserResource extends IResouce{
    constructor(ApplicationUser) {
        super(ApplicationUser);
    }

    getUserByUserName = (username) => {
        return ApiClient.getByField(null, `/v1/user/get`, {username: username})
    }
}

export default UserResource;