/**
 * GiftController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    usergiftsearch: async function (req, res) {
        var models = await Gift.find().sort([{ id: 'DESC' }]);
        return res.view('gift/usergiftsearch', { gift: models });
    },

    usergiftresult: async function (req, res) {
        const qCatrgory = req.query.category || "";
        const qGiftname = req.query.giftname;
        const qAmount = parseInt(req.query.amount);
        const qValue = parseInt(req.query.value);
        const qDontator = req.query.donator;

        if (isNaN(qAmount) && isNaN(qValue)) {
            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        } else if (isNaN(qAmount)) {

            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    value: qValue,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }
        else if (isNaN(qValue)) {

            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    amount: qAmount,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }
        else {
            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    amount: qAmount,
                    value: qValue,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }

        return res.view('gift/usergiftresult', { gift: models });

    },

    vgiftsearch: async function (req, res) {
        var models = await Gift.find().sort([{ id: 'DESC' }]);
        return res.view('gift/vgiftsearch', { gift: models });
    },

    vgiftresult: async function (req, res) {
        const qCatrgory = req.query.category || "";
        const qGiftname = req.query.giftname;
        const qAmount = parseInt(req.query.amount);
        const qValue = parseInt(req.query.value);
        const qDontator = req.query.donator;

        if (isNaN(qAmount) && isNaN(qValue)) {
            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        } else if (isNaN(qAmount)) {

            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    value: qValue,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }
        else if (isNaN(qValue)) {

            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    amount: qAmount,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }
        else {
            var models = await Gift.find({
                where: {

                    category: { contains: qCatrgory },
                    giftname: { contains: qGiftname },
                    amount: qAmount,
                    value: qValue,
                    donator: { contains: qDontator },
                }

            }).sort([{ id: 'DESC' }]);
        }

        return res.view('gift/vgiftresult', { gift: models });

    },




};

