import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';

export interface IContactRepository {
  send(data: ContactFormDTO): Promise<void>;
}
