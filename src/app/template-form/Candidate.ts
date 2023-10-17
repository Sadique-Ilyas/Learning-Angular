export class Candidate {
    name?: string;
    email?: string;
    phoneNumber?: string;
    country?: string;
    gender?: string;
    techStack?: string[];
    terms?: boolean;


	constructor(name?:string, email?:string, phoneNumber?:string, country?:string, gender?:string, techStack?:string[], terms?:boolean) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.gender = gender;
        this.techStack = techStack;
        this.terms = terms;
	}
}