// Record <key type, value type> : used to add more properties to an object. 
const  person : Record<string , string> =  {
    username : "Codeawy",
}

person["address"] = "10 main street";

console.log(person);    //{ username: 'Codeawy', address: '10 main street' }