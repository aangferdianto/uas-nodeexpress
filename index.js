import 'dotenv/config';
import express from 'express';
import bukuRoutes from './bukuRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

const app = express();
app.use(express.json());
app.use('/api/buku', bukuRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Lihat dokumentasi API di http://localhost:${PORT}/api-docs`);
});
