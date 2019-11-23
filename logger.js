// 7-141 Development with SAM - Creating Lambda Functions
// WTF is he doing? He hasn't said.
// I think these are Lambda funcions' code to be used with SAM later
exports.handler = async (event) =>
{
    return {
        statusCode: 200,
        body: JSON.stringify(event)
    }
}