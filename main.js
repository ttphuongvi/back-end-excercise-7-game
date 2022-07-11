const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        req.body.updatedAt = Date.now();
    } else if (req.method === 'PATCH') {
        req.body.updatedAt = Date.now();
    }

    // Continue to JSON Server router
    next();
});

// Custom output for LIST with pagination
router.render = (req, res) => {
    // Check GET with pagination
    // If yes, custom output
    const headers = res.getHeaders();

    const totalCountHeader = headers['x-total-count'];
    if (req.method === 'GET' && totalCountHeader) {

        const result = {
            data: res.locals.data,
        };

        return res.jsonp(result);
    }

    // Otherwise, keep default behavior
    res.jsonp(res.locals.data);
};

// Use default router
server.use('/', router);

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log('JSON Server is running');
});