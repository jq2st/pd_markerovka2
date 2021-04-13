const Query = require("../models/queries")
const History = require("../models/history")

module.exports.checkImg = async function(req, res) {
    console.log(req.file)
    potentialFound = await History.findOne({linkImgAfter: req.body.img})
    if (!potentialFound) {
        newQuery = new Query({date: Date(), linkImg: req.file.path, type: 'none', result: false})
    } else {
        newQuery = new Query({date: Date(), linkImg: req.file.path, type: potentialFound.type, result: true})
    }
    newQuery.save()

    res.status(200).json({result: 'checked'})
}