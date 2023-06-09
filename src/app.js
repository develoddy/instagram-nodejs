import express from 'express';
import profilesRoutes from './routes/profiles.routes.js';
import usersRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import followers from './routes/followers.routes.js';
import userfollowers from './routes/userfollowers.routes.js';

const app = express();

// Middlewares
app.use(express.json());

app.use(profilesRoutes);
app.use(usersRoutes);
app.use(postRoutes);
app.use(followers);
app.use(userfollowers);


export default app;