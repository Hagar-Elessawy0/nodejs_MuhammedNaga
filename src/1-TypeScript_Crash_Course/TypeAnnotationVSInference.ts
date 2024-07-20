// Type Annotation
const username = "codeawy";

// Type Inference
const apiResponse = {
    id : 1,
    name : "Hagar",
    birthDate : "2003-02-10"
}

const userProfile1 : {
    id : number,
    name : string,
    birthDate : string
} = apiResponse;

/* 
const { id , name , birthDate} : {
    id : number,
    name : string,
    birthDate : string
} = apiResponse;
*/ 