/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		create : function(req,res,next){ //req requirement res response next =access error eg 404.ejs
			var obj = {
				name : req.param('name'),
				result : req.param('result')
			}
			User.create(obj, function(err,user){
				if(err) return next(err);
				return res.redirect('/');
			});
		},
		update : function(req,res,next){
			User.findOne({'id':req.param('id')}, function(err,user){
				if(err) return next(err);
				if(!user) return res.send('ID doesn\'t exist');
				User.update({'id':user.id},{'result':req.param('result')},function(err,user1){
					if(err) return next(err);
					return res.redirect('/');
				});
			})
		},
		destroy : function(req,res,next){
			User.findOne({'id':req.param('idUser')}, function(err,user){
				if(err) return next(err);
				if(!user) return res.send('ID doesn\'t exist');
				User.destroy({'id':user.id},function(err,user1){
					if(err) return next(err);
					return res.redirect('/');
				});
			})
		},
		list : function(req,res,next) {
			User.find(function(err,users){
				if(err) return next(err);
				return res.view({users : users})
			})
		}
};
