/**
 * ------------------
 * MongoDB connection
 * ------------------
 * 1. Create account--initial steps
 * 2.create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > view full code 
 * 5.change the  password the uri
 * -------------------------------
 * ------------------
 * CREATE-- POST
 * ------------------
 * [SERVER SIDE]
 * 
 * 1.app.post('/users',async (req,res)=>{})
 * 2.Make the function async to use await inside it
 * 3.make sure you use the express.json() middleware
 * 4.access data from the body: const user = req.body
 * 5. const result = await userCollection.insertOne(user)
 * 6.res.send(result)
 * 
 * [CLIENT SIDE]
 * 
 * 1. create fetch 
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'application/json'}
 * 5.add body JSON.Stringify(user)
 * 
 * 
 * ------------------
 * READ Many
 * ------------------
 * [SERVER SIDE]
 * 
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * [CLIENT SIDE]
 * loader used
 * 
 * 
 * ------------------
 * DELETE
 * ------------------
 * [SERVER SIDE]
 * 
 * 1. create app.delete('/users/:id', async(req,res)=>{})
 * 2. specify unique objectId to delete the right user
 * 3.const query = {_id: new objectId(id)}
 * 4.const result = await userCollection.deleteOne(query);
 * 
 * [CLIENT SIDE]
 * 1.create dynamic url with id 
 * 2. make sure the mention th DELETE method
 * 
 * 
 * MongoDB documentation access process -- mongodb.com > Resources > Drivers > Node.js Driver > Usage Example > then all the CRUD doc example are shown
 */