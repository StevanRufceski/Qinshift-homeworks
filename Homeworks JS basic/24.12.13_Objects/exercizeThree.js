let trainer = {
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects",
    getFullName: function () {
        let fullName = this.name+" "+this.lastName;
        return fullName;
    }
}
console.log(trainer);
console.log(trainer.getFullName());
console.log("After changes made .............")
delete trainer.lecture;
trainer.age = 22;
console.log(trainer);
