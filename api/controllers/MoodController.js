/**
 * TweetsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * Action blueprints:
   *    `/mood/index`
   *    `/mood`
   */
   index: function (req, res) {
    res.view();
  },

  ok: function (req, res) {
    res.view();
  },

  /**
   * Action blueprints:
   *    `/mood/store`
   */
   store: function (req, res) {

    var data = {
      body: req.param('body'),
      //authorId: req.session.User.id,
      authorId: 1, // TODO DEBUG
      mood: req.param('mood'),
      latitude: "-",
      longitude: "-"
    }

    Mood.create(data, function (err, mood) {
      if (err) return res.send('An error occured', 500);

      Mood.create(inputs, function (err, mood) {
        if (err) return res.send('An error occured', 500);
        callback(null, mood);
        });
    });

    return res.redirect('/mood/ok');
  },

  subscribe: function(req, res) {
    Mood.subscribe(req.socket);
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TweetsController)
   */
  _config: {}


};
