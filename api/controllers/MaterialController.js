/**
 * MaterialController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    usermaterialsearch: async function (req, res) {
        var models = await Material.find().sort([{ id: 'DESC' }]);
        return res.view('material/usermaterialsearch', { material: models });
    },

    usermaterialresult: async function (req, res) {
        const qCategory = req.query.category || "";
        const qMaterialname = req.query.materialname;
        const qAmount = parseInt(req.query.amount);

        if (isNaN(qAmount)){
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    qMaterialname: { contains: qMaterialname },
                }

            }).sort([{ id: 'DESC' }]);
        }else{
            var models = await Material.find({
                where: {

                    category: { contains: qCategory },
                    qMaterialname: { contains: qMaterialname },
                    qAmount:Amount
                }

            }).sort([{ id: 'DESC' }]);}
            

        return res.view('material/usermaterialresult', { material: models });

    },


};

