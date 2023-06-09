const Subcategory = require("../models/subCategoryModel")

const getSubCategory = async (req, res) => {

}

const PostSubCategory = async (req, res) => {
    try {
        const subcategory = new Subcategory(req.body)
        await subcategory.save()
        res.status(200).send({ success: true, data: subcategory })
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
}

const PatchSubCategory = async (req, res) => {

}

const DeleteSubCategory = async (req, res) => {

}



module.exports = {
    getSubCategory,
    PostSubCategory,
    PatchSubCategory,
    DeleteSubCategory
}