var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const playerDirection = Direction.Down;
console.log(playerDirection);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["notFound"] = 404] = "notFound";
    statusCode[statusCode["serverError"] = 500] = "serverError";
})(statusCode || (statusCode = {}));
function handleResponse(status) {
    switch (status) {
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
