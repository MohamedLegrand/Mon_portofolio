import type { IContactRepository } from '@/domain/repositories/IContactRepository';
import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';

export class ContactRepositoryImpl implements IContactRepository {
  async send(data: ContactFormDTO): Promise<void> {
    // Simulation d'un délai d'envoi réseau (1,5 seconde)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Enregistrement des données dans la console pour débogage
        console.log('--- ENVOI DE MESSAGE DE CONTACT (SIMULATION) ---');
        console.log(`Nom : ${data.name}`);
        console.log(`Email : ${data.email}`);
        console.log(`Sujet : ${data.subject}`);
        console.log(`Message : ${data.message}`);
        console.log('-------------------------------------------------');
        
        // TODO: Remplacer plus tard par un vrai appel API (ex: EmailJS, Formspree ou API Custom)
        resolve();
      }, 1500);
    });
  }
}
