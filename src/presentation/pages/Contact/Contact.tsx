import { useContactForm } from '@/presentation/hooks/useContactForm';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/presentation/hooks/usePageMeta';

export function Contact() {
  const { t } = useTranslation();
  usePageMeta({ title: t('seo.contactTitle'), description: t('seo.contactDescription') });
  const {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Colonne de Gauche : Infos */}
        <div className="lg:col-span-5 text-left flex flex-col gap-8">
          <div>
            {/* Petit indicateur rouge */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              {t('common.available')}
            </div>

            <h1 className="font-bebas text-4xl xs:text-5xl sm:text-7xl text-zinc-900 dark:text-white leading-none">
              {t('contact.titleLine1')}<br />
              <span className="text-red-600">{t('contact.titleLine2')}</span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm">
              {t('contact.intro')}
            </p>
          </div>

          {/* Liste d'infos */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-500">{t('contact.email')}</span>
                <a href="mailto:legrandmohamed67@gmail.com" className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors">
                  legrandmohamed67@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-500">GitHub</span>
                <a href="https://github.com/MohamedLegrand" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors">
                  github.com/MohamedLegrand
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-500">LinkedIn</span>
                <a href="https://www.linkedin.com/in/mohamed-legrand-366411344" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors">
                  linkedin.com/in/mohamed-legrand-366411344
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-500">{t('contact.whatsapp')}</span>
                <a href="https://wa.me/237677246900" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors">
                  +237 677 24 69 00
                </a>
                <a href="https://wa.me/237641212750" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors">
                  +237 641 21 27 50
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-500">{t('contact.location')}</span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {t('common.location')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de Droite : Formulaire */}
        <div className="lg:col-span-7 bg-zinc-100/60 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 backdrop-blur-sm">
          {/* Message de succès */}
          {submitStatus === 'success' && (
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/5 p-4 text-emerald-700 dark:text-emerald-400 text-left">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">{t('contact.successTitle')}</h4>
                <p className="mt-1 text-xs text-emerald-700/80 dark:text-emerald-400/80">
                  {t('contact.successText')}
                </p>
              </div>
            </div>
          )}

          {/* Message d'erreur / validation */}
          {submitStatus === 'error' && errorMessage && (
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 p-4 text-red-700 dark:text-red-400 text-left">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">{t('contact.errorTitle')}</h4>
                <p className="mt-1 text-xs text-red-700/80 dark:text-red-400/80">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {t('contact.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-zinc-300 dark:border-zinc-900 bg-white dark:bg-black px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600/30 disabled:opacity-50"
                placeholder={t('contact.namePlaceholder')}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-zinc-300 dark:border-zinc-900 bg-white dark:bg-black px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600/30 disabled:opacity-50"
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>

            {/* Sujet */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {t('contact.subjectLabel')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-zinc-300 dark:border-zinc-900 bg-white dark:bg-black px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600/30 disabled:opacity-50"
                placeholder={t('contact.subjectPlaceholder')}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-zinc-300 dark:border-zinc-900 bg-white dark:bg-black px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600/30 disabled:opacity-50 resize-y min-h-[120px]"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/10 transition-all hover:bg-red-500 hover:shadow-red-500/20 disabled:opacity-50 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  {t('contact.sending')}
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                </>
              ) : (
                <>
                  {t('contact.send')}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
