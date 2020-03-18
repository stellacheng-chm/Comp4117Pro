/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //Homepage
  '/': 'UserController.login',

  //Login/Logout
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  //Usermainpage
  '    /item/userindex': 'ItemController.userindex',
  '    /item/usernoti': 'ItemController.usernoti',
  '    /item/useraccount': 'ItemController.useraccount',
  '    /item/usersearch': 'ItemController.usersearch',

  //Vistormainpage
  '    /item/vistorsearch': 'ItemController.vistorsearch',
  '    /item/vistornotlogin': 'ItemController.vistornotlogin',

  //Adminmainpage
  '    /item/adminindex': 'ItemController.adminindex',

  //UserBookpage
  '   /book/userbooksearch': 'BookController.userbooksearch',
  'GET /book/userbookresult': 'BookController.userbookresult',
  '   /book/userbookdetail/:id': 'BookController.userbookdetail',

  //UserGamepage
  '   /game/usergamesearch': 'GameController.usergamesearch',
  'GET /game/usergameresult': 'GameController.usergameresult',
  '   /game/usergamedetail/:id': 'GameController.usergamedetail',

  //UserGiftpage
  '   /gift/usergiftsearch': 'GiftController.usergiftsearch',
  'GET /gift/usergiftresult': 'GiftController.usergiftresult',
  '   /gift/usergiftdetail/:id': 'GiftController.usergiftdetail',

  //UserMaterialpage
  '   /material/usermaterialsearch': 'MaterialController.usermaterialsearch',
  'GET /material/usermamterialresult': 'MaterialController.usermaterialresult',

  //VistorBookpage
  '    /book/vistorbooksearch': 'BookController.vistorbooksearch',
  'GET /book/vistorbookresult': 'BookController.vistorbookresult',

  //VistorGamepage
  '   /game/vistorgamesearch': 'GameController.vistorgamesearch',
  'GET /game/vistorgameresult': 'GameController.vistorgameresult',
  
  //VistorGiftpage
  '   /gift/vgiftsearch': 'GiftController.vgiftsearch',
  'GET /gift/vgiftresult': 'GiftController.vgiftresult',

  //VistorMaterialpage
  '   /material/vmaterialsearch': 'MaterialController.vmaterialsearch',
  'GET /material/vmaterialresult': 'MaterialController.vmaterialresult',


  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
