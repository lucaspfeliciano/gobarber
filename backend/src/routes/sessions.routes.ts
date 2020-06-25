import { Router } from 'express';
import AthenticateUserService from '../services/AthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const autheticateUser = new AthenticateUserService();

    const { user, token } = await autheticateUser.execute({ email, password });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
