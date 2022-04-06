import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ email, name }: IRequest): User {
    const emailExists = this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new Error("User not found");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
