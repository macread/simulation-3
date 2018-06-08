module.exports = {
    // houses: (req, res, next)=> {
    //     const connection = req.app.get('db');
    //     connection.get_houses()
    //         .then( (houses)=> res.status(200).send(houses) )
    //         .catch( ()=> res.status(500).send() );


    // },

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


    // deleteHouse: (req, res, next)=> {
    //     const connection = req.app.get('db');
    //     connection.delete_house([req.params.id])
    //         .then( ()=> res.status(200).send() )
    //         .catch( ()=> res.status(500).send() );
    // },
}