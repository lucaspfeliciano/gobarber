import { Router } from 'express';
import AthenticateUserService from '@modules/users/services/AthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autheticateUser = new AthenticateUserService();

  const { user, token } = await autheticateUser.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
