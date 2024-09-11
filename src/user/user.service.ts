import { Injectable } from "@nestjs/common";
@Injectable()
export class userService{
    adduser(data)
    {
        return data;
    }
    getuser(data)
    {
        return data.data[data.data.findIndex(item=>item.id=='13')]['name']
    }
    uploadprofile(data)
    {
        return data;
    }
}