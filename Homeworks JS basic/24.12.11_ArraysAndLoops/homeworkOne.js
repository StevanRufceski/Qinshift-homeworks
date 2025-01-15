function tellStory(name, mood, activity){
    console.log(`This is ${name}. ${name} is ${activity} all day. Looks like, today ${name} is feeling ${mood}. The end.`)
}
let personName = prompt ("What is the name of the actor in your story?");
let personMood = prompt ("In what mood is the actor in your story?");
let personActivity = prompt ("What kind of activity is the actor performing?");
tellStory(personName, personMood, personActivity);