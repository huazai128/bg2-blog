//
exports.getBox = function(userId,callback){
    db.User.findOne({_id:userId},function(err,user){     //��ȡ�û�
        async.each(user.lists,function(list){

        })
    })
}
