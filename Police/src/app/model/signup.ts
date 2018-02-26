export class Signup {
    constructor(
       public area : string,
        public phone : string,
       public  password : string,
       public location : {latitude : number , longitude : number}
    ){}
}
