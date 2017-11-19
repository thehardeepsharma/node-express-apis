/**
 *  Branches Routes
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/
var _ = require('underscore');
var express = require('express');
var caminte = require('caminte');
var boom = require('boom');
var router = express.Router({mergeParams: true});
var middleware;

/* params router level */
router.param('branch_id', function (req, res, next, branch_id) {
   if (/^\d+$/.test(branch_id)) {
      next();
   } else {
      next('route');
   }
});

/* middleware router level */
if (middleware) {
   router.use(middleware);
}

/**
* Index action, returns a list either
* Default mapping to GET '~/branches'
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function list(req, res) {
    var Branches = caminte.model('Branches');
    var query = req.query;
    var skip = query.skip ? parseInt(query.skip) - 1 : 0;
    var limit = query.limit ? parseInt(query.limit) : 20;

    var opts = {
        skip: skip,
        limit: limit,
        where: {}
    };

    delete query.skip;
    delete query.limit;
    // TODO: it needs implementation for search
    _.extend(opts.where, query);

    Branches.all(opts, function (err, branches) {
        if (err) {
           res.status(400);
           return res.json(boom.badRequest(err.message || err).output.payload);
        }
        res.status(200);
        res.json(branches);
    });
};

router.get('/', list);

/**
 * Count items action, returns amount of branch
 * Default mapping to GET '~/branches/count'
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 **/
function count(req, res) {
    var Branches = caminte.model('Branches');
    var query = req.query;

    var opts = {
        where: {}
    };

    // TODO: it needs implementation
    _.extend(opts.where, query);

    Branches.count(opts.where, function (err, count) {
        if (err) {
           res.status(400);
           return res.json(boom.badRequest(err.message || err).output.payload);
        }
        res.status( 200 );
        res.json( {
           count: count
        });
   });
}

router.get('/count', count);

/**
* New action, returns new a single branch
* Default mapping to GET '~/branches/new'
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function empty(req, res) {
    var Branches = caminte.model('Branches');
    var branch = new Branches(req.query);
    res.status(200);
    res.json(branch.toObject());
}

router.get('/new', empty);

/**
* Show action, returns shows a single branch
* Default mapping to GET '~/branches/:id'
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function show(req, res) {
    var Branches = caminte.model('Branches');
    Branches.findById(req.params.branch_id, function (err, branch) {
        if (err) {
            res.status(400);
            return res.json(boom.badRequest(err.message || err).output.payload);
        }
        if (branch) {
            res.status(200);
            res.json(branch.toObject());
        } else {
            res.status(404);
            res.json(boom.notFound('branch not found').output.payload);
        }
    });
}

router.get('/:branch_id', show);

/**
* Update action, updates a single branch
* Default mapping to PUT '~/branches/:id', no GET mapping
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function update(req, res) {
    var query = req.body;
    var Branches = caminte.model('Branches');
    Branches.findById(req.params.branch_id, function (err, branch) {
        if (err) {
            res.status(400);
            return res.json(boom.badRequest(err.message || err).output.payload);
        }
        if (branch) {

            _.extend(branch, query);

            branch.isValid(function (isValid) {
                if(isValid) {
                    branch.updateAttributes(req.body, function (err) {
                        if (err) {
                            res.status(400);
                            return res.json(boom.badRequest(err.message || err).output.payload);
                        }
                        res.status(200);
                        res.json(branch.toObject());
                    });
                } else {
                    res.status(422);
                    var error = boom.badData('data is bad you should fix it').output.payload;
                    error.attributes = branch.errors;
                    return res.json(error);
                }
            });
        } else {
            res.status(404);
            res.json(boom.notFound('branch not found').output.payload);
        }
    });
}

router.put('/:branch_id', update);

/**
* Create action, creates a single branch
* Default mapping to POST '~/branches', no GET mapping
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function create(req, res) {
    var Branches = caminte.model('Branches');
    var branch = new Branches(req.body);
    branch.isValid(function (isValid) {
        if (!isValid) {
           res.status(422);
           var error = boom.badData('data is bad you should fix it').output.payload;
           error.attributes = branch.errors;
           return res.json(error);
        }
        branch.save(function (err) {
            if (err) {
               res.status(400);
               return res.json(boom.badRequest(err.message || err).output.payload);
            }
            res.status(201);
            res.json(branch.toObject());
        });
   });
}

router.post('/', create);

/**
* Delete action, deletes a single branch
* Default mapping to DEL '~/branches/:id', no GET mapping
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function destroy(req, res) {
    var Branches = caminte.model('Branches');
    Branches.findById(req.params.branch_id, function (err, branch) {
        if (err) {
            res.status(400);
            return res.json(boom.badRequest(err.message || err).output.payload);
        }
        if (!branch) {
            res.status(404);
            return res.json(boom.notFound('branch not found').output.payload);
        }
        branch.destroy(function (err) {
            if (err) {
               res.status(400);
               return res.json(boom.badRequest(err.message || err).output.payload);
            } else {
               res.status(204);
               res.json({
                  message: 'branches deleted!'
               });
            }
        });
    });
}

router.delete('/:branch_id', destroy);

/**
* Delete action, deletes a all branchs
* Default mapping to DEL '~/branches', no GET mapping
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
**/
function truncate(req, res) {
    var Branches = caminte.model('Branches');
    Branches.destroyAll(function (err) {
        if (err) {
          res.status(400);
          return res.json(boom.badRequest(err.message || err).output.payload);
        } else {
          res.status(204);
          res.json({
            statusCode: 204,
            message: 'All branches deleted'
          });
        }
    });
}

router.delete('/truncate', truncate);

module.exports = router;
