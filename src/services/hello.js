
exports.main = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify('hello from lambda!')
    }
}