/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    userbooksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}]);
        return res.view('book/userbooksearch', { book: models});
    },

    userbookresult: async function(req, res){
        const qCatrgory=req.query.category || "";
        const qBookname = req.query.bookname;
        const qAuthor = req.query.author;
        const qPublisher = req.query.publisher;
        const qISBN = req.query.ISBN;

        var models = await Book.find({
            where:{
            
            category:{contains:qCatrgory},
            bookname:{contains:qBookname},
            author:{contains:qAuthor},
            publisher:{contains:qPublisher},
            ISBN:{contains:qISBN},
            }
            
        }).sort([{id:'DESC'}]);

        return res.view('book/userbookresult', {book:models});

    },

    userbookdetail: async function (req, res) {

        var model = await Book.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('book/userbookdetail', { book: model });

    },

    vistorbooksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}])
        return res.view('book/vistorbooksearch', { book: models});
    },

    vistorbookresult: async function(req, res){
        const qCatrgory=req.query.category || "";
        const qBookname = req.query.bookname;
        const qAuthor = req.query.author;
        const qPublisher = req.query.publisher;
        const qISBN = req.query.ISBN;

        var models = await Book.find({
            where:{
            
            category:{contains:qCatrgory},
            bookname:{contains:qBookname},
            author:{contains:qAuthor},
            publisher:{contains:qPublisher},
            ISBN:{contains:qISBN},
            }
            
        }).sort([{id:'DESC'}]);

        return res.view('book/vistorbookresult', {book:models});

    },

    vistorbookdetail: async function (req, res) {

        var model = await Book.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('book/vistorbookdetail', { book: model });

    },

    adminbooksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}]);
        return res.view('book/adminbooksearch', { book: models});
    },

    adminbookresult: async function(req, res){
        const qCatrgory=req.query.category || "";
        const qBookname = req.query.bookname;
        const qAuthor = req.query.author;
        const qPublisher = req.query.publisher;
        const qISBN = req.query.ISBN;

        var models = await Book.find({
            where:{
            
            category:{contains:qCatrgory},
            bookname:{contains:qBookname},
            author:{contains:qAuthor},
            publisher:{contains:qPublisher},
            ISBN:{contains:qISBN},
            }
            
        }).sort([{id:'DESC'}]);

        return res.view('book/adminbookresult', {book:models});

    },

    adminbookdetail: async function (req, res) {

        var model = await Book.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('book/adminbookdetail', { book: model });

    },

    
  

};

