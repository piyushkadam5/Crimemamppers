export class Complaint {
    constructor(
        public user_id : string,
        public category : string,
        public name : string,
        public phone : string,
        public desc : string,
        public location : {
            latitude : number,
            longitude : number
        }
    ){}
}
