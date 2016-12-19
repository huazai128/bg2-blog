//
exports.getBox = function(userId,callback){
    db.User.findOne({_id:userId},function(err,user){     //获取用户
        async.each(user.lists,function(list){

        })
    })
}
