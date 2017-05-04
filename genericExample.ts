// generic class with property name
console.log("Exam_First");
class GenericExample <T>
{
	private arg : T;
	
	public setName(arg:T)
	{
		this.arg = arg;  //Generic class and different type objects. 
	}
	public getName():T
	{
		return this.arg;
	}
}
let g1 = new GenericExample<string>();
g1.setName("Santy");
console.log(g1.getName());

let g2 = new GenericExample<number>();
g2.setName(1786);
console.log(g2.getName());    

console.log("===============================================================");
console.log("Exam_Second");

interface IUser
{
	name: string;	
}
class User<T extends IUser>  // Interface Exmaple Generic Constraint.
{

	public getName(arg:T):T
	{
		return arg;
	}
}
let l = new User<IUser>();
console.log(l.getName({name:"APEX"}));   //display message in console.