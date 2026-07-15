import type { IContactRepository } from '@/domain/repositories/IContactRepository';
import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';

export class SendContactMessage {
  private repository: IContactRepository;

  constructor(repository: IContactRepository) {
    this.repository = repository;
  }

  async execute(data: ContactFormDTO): Promise<void> {
    return this.repository.send(data);
  }
}
