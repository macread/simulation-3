module.exports = {
    addUser: (req, res, next)=> {
        const connection = req.app.get('db');
        const { userName, password} = req.body;
        connection.add_user([userName, password])
            .then( (user)=> res.status(200).send(req.body) )
            .catch( (err)=> res.status(500).send() );
    },

    login: (req, res, next)=> {
        const connection = req.app.get('db');
        const { userName, password} = req.body;
        connection.get_user_up([userName, password])
            .then( (user)=> res.status(200).send(req.body) )
            .catch( (err)=> res.status(500).send() );
    },

    getPosts: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.get_posts_not_user([req.query.userid])
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