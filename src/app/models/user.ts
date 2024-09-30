export class User{
    name: string;
    email: string;
    password: string;
    rol: string;
    id_num: string;
    code: string;
    charge: string;
    description: string;
    skills: string[];

    constructor(
        name: string = "",
        email: string = "",
        password: string = "",
        rol: string = "",
        id_num: string = "",
        code: string = "",
        charge: string = "",
        description: string = "",
        skills: string[] = []
    ){
        this.name = name;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.id_num = id_num;
        this.code = code;
        this.charge = charge;
        this.description = description;
        this.skills = skills;
    }

}

export interface LoginUser{
    email: string,
    password: string
}