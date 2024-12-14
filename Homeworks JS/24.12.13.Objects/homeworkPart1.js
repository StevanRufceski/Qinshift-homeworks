let dog = {
    name:"Tosho",
    kind:"bulldog",
    speakingDog: true,
    speak: function(){
        dogSays = prompt("What do you want the dog to say?")
        if (dogSays !== null) {
            alert (`This dog says "${dogSays}" to you.`)
        }else{
            return;
        }
    }
}
alert (`This dog is named ${dog.name}. ${dog.name} is a speaking kind of ${dog.kind}.`)
dog.speak();

