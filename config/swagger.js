import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Perpustakaan',
            version: '1.0.0',
            description: 'Dokumentasi CRUD Buku dengan Node.js, Express, dan MySQL',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./bukuRoutes.js'], // path ke file yang ada anotasi Swagger
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
