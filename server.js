const express = require('express')
const app = express()
const mongoose = require('mongoose')
const BusInfoModel = require('./models/busDataModel')

const port = 7000
app.use(express.json())

//DB Connect
mongoose.connect('mongodb+srv://root:root@webapi.fgpmolr.mongodb.net/web-api-project?retryWrites=true&w=majority&appName=WEBAPI')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(process.env.PORT || port, () => console.log(`Listning on port ${port}`))
}).catch((error) => {
    console.log(error)
})

//<<<-------------------- Bus Api's -------------------->>>

//Insert Bus Information
app.post("/buses", async(req, res) => {
    try 
    {
        const busInfos = await BusInfoModel.create(req.body)
        res.status(200).json(busInfos);
        console.log(busInfos)
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({message: error.message});
    }
  })

//   //Get Bus Information
// app.get("/buses", async (req, res) => {
//     try 
//     {
//         const busInfos = await BusInfoModel.find({});
//         console.log(busInfos);
//         res.send(busInfos);
//     } 
//     catch (err) 
//     {
//         res.status(500).json({ error: err.message });
//     }
//   });