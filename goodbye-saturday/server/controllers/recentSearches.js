let recent = []

module.exports = {
    read: (req, res) => {
        res.status(200).send(recent)
    },

    create: (req, res) => {
        let {place} = req.body
        let newPlace = place
        recent.push(newPlace)
        res.status(200).send(recent)
    },

    delete: (req, res) => {
        recent.shift()
        res.status(200).send(recent)
    }
} 