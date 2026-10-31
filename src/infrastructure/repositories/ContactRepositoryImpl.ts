import type { IContactRepository } from '@/domain/repositories/IContactRepository';
import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';

/**
 * Envoie les messages du formulaire de contact via Formspree (https://formspree.io).
 * Formspree reçoit la requête et transfère le message par email au propriétaire du formulaire.
 *
 * L'identifiant du formulaire est lu dans la variable d'environnement VITE_FORMSPREE_FORM_ID
 * (fichier .env). Cet identifiant n'est pas secret : il est visible dans le navigateur.
 */
export class ContactRepositoryImpl implements IContactRepository {
  private readonly endpoint: string | null;

  constructor(formId: string | undefined = import.meta.env.VITE_FORMSPREE_FORM_ID) {
    this.endpoint = formId ? `https://formspree.io/f/${formId}` : null;
  }

  async send(data: ContactFormDTO): Promise<void> {
    if (!this.endpoint) {
      throw new Error('VITE_FORMSPREE_FORM_ID non configuré : le message ne peut pas être envoyé.');
    }

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        // Champs spéciaux Formspree : objet de l'email reçu et adresse de réponse
        _subject: `[Portfolio] ${data.subject}`,
        _replyto: data.email,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const detail = body?.errors?.map((e: { message: string }) => e.message).join(', ');
      throw new Error(`Formspree a refusé le message (HTTP ${response.status})${detail ? ` : ${detail}` : ''}`);
    }
  }
}
