module.exports = {
    addUser: (req, res, next)=> {
        const connection = req.app.get('db');
        const { userName, password} = req.body;
        connection.add_user([userName, password])
            .then( (user)=> {
                req.session.userid = user.id
                res.status(200).send(user)})
            .catch( (err)=> res.status(500).send() );
    },

    login: (req, res, next)=> {
        const connection = req.app.get('db');
        const { userName, password} = req.body;
        connection.get_user_up([userName, password])
            .then( (user)=> {
                req.session.userid = user.id
                res.status(200).send(user)})
            .catch( (err)=> res.status(500).send() );
    },

    logout: (req, res, next)=> { req.logOut() },

    getPosts: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.get_posts_by_title([`%${req.query.searchText}%`])
            .then( (posts)=> res.status(200).send(posts) )
            .catch( ()=> res.status(500).send() );

    },

    // deleteHouse: (req, res, next)=> {
    //     const connection = req.app.get('db');
    //     connection.delete_house([req.params.id])
    //         .then( ()=> res.status(200).send() )
    //         .catch( ()=> res.status(500).send() );
    // },
}