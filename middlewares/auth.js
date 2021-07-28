const verifyUser = (req, res, next) => {
    if (req.session.user) {
        next();
    } else{
        res.render('login',{message:"necesitas loguearte"})
    }
};

const verifyAdmin = (req, res, next) => {
    if (req.session.admin) {
        next();
    }else{
        res.render('noauto')
    }
}
module.exports = {verifyUser, verifyAdmin}