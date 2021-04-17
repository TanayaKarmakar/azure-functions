var mongoClient = require("mongodb").MongoClient;


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const URL = process.env.MONGODB_URL;
    //'mongodb://todo-acct-89-serverless:WWbGU55bLB9JfKl9RWtBjkSTq2IZxhhsgSqIpTLU3al3Sj6oe74fq27CNlCxr9LdHcZh25ShXmB6VKJgBQkaBw%3D%3D@todo-acct-89-serverless.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@todo-acct-89-serverless@';
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    //'todo-db-89';
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;
    //'todo';
    const connection = await mongoClient.connect(URL);

    const todoCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);
    const results = await todoCollection.find({username: 'tanayak'}).toArray();

    return {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(results).replace(/_id/g, "id")
    };
}