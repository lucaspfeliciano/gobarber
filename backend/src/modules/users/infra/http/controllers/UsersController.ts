import { Request, Response } from 'express';
// import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import FakeUsersRepository from '../../../repositories/fakes/FakeUsersRepository';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    // const createUser = container.resolve(CreateUserService);

    const repository = new FakeUsersRepository();
    const createUser = new CreateUserService(repository);

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}
