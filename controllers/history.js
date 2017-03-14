var HistoryModel = require('../models/history');

/**
 * ProtoType methods.
 */
HistoryController = {
    server: null,

    /**
     *  Handle the User Listing  Get Request here
     *  Fetch user listing from  the DB
     */
    ListByIP: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        HistoryModel.find({ user_email: req.params.user_email }).sort({view_date: 'desc'}).select().exec(function(error, users) {
            if (error) {
                //if error occures
                res.send(error);
            }
            //user collectio's json data
            res.send(users);
        });
    },

    /**
     *  Handle the Add User Post Request here
     *  save into the DB
     */
    Add: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var historyData = {
        	title: req.params.title,
            desc: req.params.desc,
            user_email: req.params.user_email,
            image_url: req.params.image_url,
            video_object: req.params.video_object,
            view_date: new Date()
        };

        var historySchema = new HistoryModel(historyData);
        historySchema.save(function(error, data) {
            if (error) {
                // Send Error Message as response.
                res.send(error.message);
                return;
            } else {
                res.send({ 'success': data });
                return;
            }
        });
    }
};

module.exports = HistoryController;
