const mongoose = require('mongoose')

const busInfoSchema = mongoose.Schema(
    {
        id: {
            type: String
        },
        time: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        speed: {
            type: String
        },
    })

const BusInfoModel = mongoose.model('busInfos', busInfoSchema);

module.exports = BusInfoModel;