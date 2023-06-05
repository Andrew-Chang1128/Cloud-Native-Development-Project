module.exports = class checkController {


    post(req, res) {
        const { postParam } = req.body;
        if (postParam){
            res.status(200).send(`receive post param ${postParam}`);
        }else{
            res.status(400)
        }
    };

    get(req, res) {
        const getParam  = req.query.getParam;
        console.log(`get param ${getParam}`)
        if (getParam){
            res.status(200).send(`receive get param ${getParam}`);
        }else{
            res.status(400)
        }

    };
}