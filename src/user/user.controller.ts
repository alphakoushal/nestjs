import { Controller,Post,Body } from "@nestjs/common";
import { adduserdto } from "./adduser.dto";
import { userService } from "./user.service";
@Controller({path:'user'})
export class userController{
constructor (private readonly userService:userService){}
    @Post('/register')
    Adduser(@Body() data:adduserdto){
        return this.userService.adduser(data);
    }
    @Post('/getuser')
    getuser(@Body() data)
    {
        return this.userService.getuser(data)
    }
    @Post('/uploadprofile')
    uploadprofile(@Body() data){
return this.userService.uploadprofile(data)
    }
}