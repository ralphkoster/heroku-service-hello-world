var express = require('express');
var router = express.Router();

var db = require('../queries/karmas');

/**
 * @swagger
 * definitions:
 *   Karma:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /api/karmas:
 *   get:
 *     tags:
 *       - karmas
 *     description: Returns all karmas
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of karmas
 *         schema:
 *           $ref: '#/definitions/Karma'
 */
router.get('/api/karmas', db.getAllKarmas);


module.exports = router;