/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    userindex: async function (req, res) {
        

        return res.view('item/userindex');
    },

    adminindex: async function (req, res) {
        

        return res.view('item/adminindex');
    },

    itemsearch: async function (req, res) {
        

        return res.view('item/itemsearch');
    },

    vitemsearch: async function (req, res) {
        

        return res.view('item/vitemsearch');
    },

    usernoti:async function(req,res){
        return res.view('item/usernoti');
    },

    useraccount:async function(req,res){
        return res.view('item/useraccount');
    }
  

};

