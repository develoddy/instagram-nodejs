import express from 'express';
import profilesRoutes from './routes/profiles.routes.js';
import usersRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';

const app = express();

// Middlewares
app.use(express.json());

app.use(profilesRoutes);
app.use(usersRoutes);
app.use(postRoutes);

export default app;