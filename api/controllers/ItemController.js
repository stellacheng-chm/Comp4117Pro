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

    usersearch: async function (req, res) {
        

        return res.view('item/usersearch');
    },

    vistorsearch: async function (req, res) {
        

        return res.view('item/vistorsearch');
    },

    adminsearch: async function (req, res) {
        

        return res.view('item/adminsearch');
    },

    usernoti:async function(req,res){
        return res.view('item/usernoti');
    },

    useraccount:async function(req,res){
        return res.view('item/useraccount');
    },

    vistornotlogin:async function(req,res){
        return res.view('item/vistornotlogin');
    },

    adminnoti: async function (req, res) {
        

        return res.view('item/adminnoti');
    },

    adminaccount: async function (req, res) {
        

        return res.view('item/adminaccount');
    },
  

};

