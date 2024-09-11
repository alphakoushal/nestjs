import { IsInt } from "class-validator";
export class adduserdto{
    @IsInt()
    readonly name:Number;
    @IsInt()
    readonly description:String;
}