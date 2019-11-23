const MongoClient = require('mongodb').MongoClient
const { MG_URL, MG_DB } = process.env

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    const username = event.queryStringParameters.username

    try {
        const client = new MongoClient(MG_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await client.connect()
        console.log("Connected correctly to db")

        const db = client.db(MG_DB)
        const Item = db.collection('items')

        const items = await Item.find({ username: { $ne: username } })
            .sort({ index: 1 })
            .toArray()
        client.close()

        const othersLists = {}
        items.forEach(item => {
            if (!othersLists[item.username]) {
                othersLists[item.username] = []
            }
            othersLists[item.username].push(item)
        })

        console.log("status: ", 200)
        return {
            statusCode: 200,
            body: JSON.stringify({ found: true, othersLists: othersLists })
        }
    }
    catch (err) {
        console.log("status: ", 400)
        return {
            statusCode: 400,
            body: JSON.stringify({ found: false, err })
        }
    }
}