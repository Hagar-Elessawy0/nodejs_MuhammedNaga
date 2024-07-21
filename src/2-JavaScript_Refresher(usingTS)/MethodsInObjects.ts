const person1 ={
    username : "Codeawy",
    age : 22,
    
    // Methods : legacy syntax => key : value(function) = property
    eat : function(){
        return "I'm eating";
    },

    // Methods : modern syntax => methods are functions
    walk() {
        return "I'm walking";
    }
}

console.log(person1.eat());     // I'm eating
console.log(person1.walk());    // I'm walking