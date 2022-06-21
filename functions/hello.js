exports.handler = function(event, content, callback){
    callback(null, {
        statusCode: 200,
        body "Hello, world"
    });
}