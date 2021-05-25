import axios from "axios";
import {User} from "./interfaces";
export const add = (a:number, b:number):number => a+b;
export const iSnULL = ():null => null;
export const createUser = () => {
    const user: {[key:string]:string} = {
        firstName: 'Klaud'
    };
    user['lastName'] = 'Fraj';
    return user;
};
export const fetchUser = async () => {
    const {data} = await axios.get<User>('https://jsonplaceholder.typicode.com/users/1');
    return data;
}
