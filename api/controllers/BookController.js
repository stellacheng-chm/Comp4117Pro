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

    vistorbooksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}])
        return res.view('book/vistorbooksearch', { book: models});
    },

    vbookresult: async function(req, res){
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

        return res.view('book/vbookresult', {book:models});

    },

    bookdetail: async function (req, res) {

        var model = await Book.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('book/bookdetail', { book: model });

    },
  

};

