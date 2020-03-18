/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  ItemController:
  {
    userindex:"isUser",
    usersearch:"isUser",
    usernoti:"isUser",
    useraccount:"isUser",
  },

  BookController:
  {
    userbooksearch:"isUser",
    userbookresult:"isUser",
    userbookdetail:"isUser",
  },

  GameController:
  {
    usergamesearch:"isUser",
    usergameresult:"isUser",
  },

  GiftController:
  {
    usergiftsearch:"isUser",
    usergiftresult:"isUser",
  },

  MaterialContoller:
  {
    usermaterialsearch:"isUser",
    usermaterialresult:"isUser",
  }

};
