import type { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'PGS Job Cell API Docs',
            version: '1.0.0'
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    schema: 'bearer',
                    bearerFromat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: [],
            }
        ]
    },
    apis: ['./src/routes/*/*.routes.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log(`API docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;