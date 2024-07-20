/* without index signature
interface IcityDictionary {
    Cairo : string,
    London : string,
    Moscow : string,
    Berlin : string,
    Paris : string,
    Tokyo : string
    //... rest of world cities
}
*/

// using index signature
interface IcityDictionary {
    [key : string] : string
}

const cityDictionary : IcityDictionary = {
    Cairo : "Egypt",
    Seoul : "Korea",
}

// ways to access the dictionary
console.log(cityDictionary.Cairo);      //Egypt
console.log(cityDictionary["Cairo"]);   //Egypt

// add new key and value
cityDictionary["Riyadh"] = "Saudi Arabia";
console.log(cityDictionary);            //{ Cairo: 'Egypt', Seoul: 'Korea', Riyadh: 'Saudi Arabia' }