const Category = require("../models/categoryModel")

const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).send({ data: category })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PostCategory = async (req, res) => {
    try {
        const category = new Category(req.body)
        await category.save()
        res.status(200).send({ success: true, data: category })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}


const PatchCategory = async (req, res) => {

}

const Deletecategory = async (req, res) => {

}



module.exports = {
    getCategory,
    PostCategory,
    PatchCategory,
    Deletecategory
}