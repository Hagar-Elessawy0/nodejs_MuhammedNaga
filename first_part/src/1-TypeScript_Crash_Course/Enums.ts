// Note we do not use equal sign after the noun with eums
enum Direction {
    // enum members
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3 
}

const playerDirection = Direction.Down; 

console.log(playerDirection);

enum statusCode {
    success = 200,
    notFound = 404,
    serverError = 500
}

function handleResponse(status : statusCode) {
    switch(status) {
        case statusCode.success:
            console.log('Success: The request was successful.');
            break;
        case statusCode.notFound:
            console.log('Not Found: The request was not found.');
            break;
        case statusCode.serverError:
            console.log('Server Error: The server encountered an error.');
            break;
        default:
            console.log('Unknown status code: Unable to handle the response.');
    }
}

handleResponse(statusCode.success);
handleResponse(statusCode.notFound);
handleResponse(statusCode.serverError);
