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
  },

  BookController:
  {
    booksearch:"isUser",
    bookresult:"isUser",
  },

  GameController:
  {
    gamesearch:"isUser",
    gameresult:"isUser",
  },

  GiftController:
  {
    giftsearch:"isUser",
    giftresult:"isUser",
  }

};
