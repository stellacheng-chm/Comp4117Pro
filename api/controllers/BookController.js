/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    booksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}]);
        return res.view('book/booksearch', { book: models});
    },

    bookresult: async function(req, res){
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

        return res.view('book/bookresult', {book:models});

    },

    vbooksearch: async function (req, res) {
        var models = await Book.find().sort([{id:'DESC'}])
        return res.view('book/vbooksearch', { book: models});
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

