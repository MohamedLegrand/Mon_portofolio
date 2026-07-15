import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';
import { sendContactMessageUseCase } from '@/di/container';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormDTO>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Réinitialise le statut lors d'une modification
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage(null);
    }
  };

  const validate = (): boolean => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('Tous les champs sont requis.');
      setSubmitStatus('error');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Veuillez entrer une adresse email valide.');
      setSubmitStatus('error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      await sendContactMessageUseCase.execute(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err: unknown) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleChange,
    handleSubmit,
  };
}
