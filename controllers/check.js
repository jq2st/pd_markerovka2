const Query = require("../models/queries")
const History = require("../models/history")

module.exports.checkImg = async function(req, res) {
    const size = req.body.size
    potentialFound = await History.findOne({size: size})
    if (!potentialFound) {
        newQuery = new Query({date: Date(), linkImg: req.file.path, type: 'none', result: false})
    } else {
        newQuery = new Query({date: Date(), linkImg: req.file.path, type: potentialFound.type, result: true})
    }
    newQuery.save()
        .then((result) => {
            res.status(200).json(result)
        })
}