// 7-141 Development with SAM - Creating Lambda Functions
// WTF is he doing? He hasn't said.
// I think these are Lambda functions' code to be used with SAM later


exports.handler = async (event) =>
{
// 7-142 First SAM template - log PUT'ing into S3 (as PUT is asynchronous, no response would normally be triggered)
    let eventJson = JSON.stringify(event);
    console.log(eventJson);

    return {
        statusCode: 200,
        body: eventJson
    }
}