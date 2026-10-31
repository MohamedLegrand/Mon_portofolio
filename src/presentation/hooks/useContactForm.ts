import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormDTO } from '@/application/dto/ContactFormDTO';
import { sendContactMessageUseCase } from '@/di/container';
import { useTranslation } from 'react-i18next';

export function useContactForm() {
  const { t } = useTranslation();
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
      setErrorMessage(t('contact.errors.required'));
      setSubmitStatus('error');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(t('contact.errors.invalidEmail'));
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
      // Le détail technique va dans la console ; le visiteur voit un message clair et traduit.
      console.error('Échec de l\'envoi du formulaire de contact :', err);
      setSubmitStatus('error');
      setErrorMessage(t('contact.errors.sendFailed'));
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
