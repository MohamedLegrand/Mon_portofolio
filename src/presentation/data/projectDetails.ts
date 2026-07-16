export interface ProjectSection {
  title: string;
  content: string;
  list?: string[];
}

export interface DetailedProject {
  id: string;
  title: string;
  subtitle: string;
  mainDescription: string;
  sections: ProjectSection[];
  category: 'analyse' | 'code';
  // Specific to 'analyse'
  umlDiagramName?: string;
  umlSvgType?: 'usecase' | 'sequence' | 'class';
  // Specific to 'code'
  codeFilename?: string;
  codeLanguage?: 'javascript' | 'python';
  codeContent?: string;
}

export const projectDetails: Record<string, DetailedProject> = {
  "perenkap": {
    id: "perenkap",
    title: "Perenkap",
    category: "analyse",
    subtitle: "Architecture & Modélisation d'une Fintech Mobile Interopérable",
    mainDescription: "Perenkap est une application mobile fintech innovante conçue pour simplifier et démocratiser le transfert d'argent et les transactions financières du quotidien. L'objectif principal de cette modélisation est de proposer un système résilient, sécurisé et interopérable capable d'interagir avec divers fournisseurs de services financiers et opérateurs de téléphonie mobile.",
    umlDiagramName: "Diagramme de Cas d'Utilisation UML - Perenkap",
    umlSvgType: "usecase",
    sections: [
      {
        title: "1. Transfert d'Argent Inter-Opérateurs",
        content: "La problématique majeure résolue par Perenkap est le cloisonnement des services de Mobile Money (MTN MoMo, Orange Money, Wave, etc.). Grâce à notre modèle d'analyse :",
        list: [
          "Passerelle d'échange unifiée reliant les API des différents opérateurs.",
          "Rapprochement automatique des soldes entre opérateurs en arrière-plan.",
          "Frais de transaction calculés dynamiquement et affichés avant validation.",
          "Workflow de transaction transactionnel (ACID) assurant qu'aucun transfert n'échoue à mi-chemin sans rollback immédiat."
        ]
      },
      {
        title: "2. Cartes Bancaires Virtuelles",
        content: "Pour permettre aux utilisateurs d'effectuer des achats sur des sites e-commerce internationaux (Amazon, Netflix, Google Play) sans compte bancaire classique :",
        list: [
          "Création instantanée de cartes virtuelles temporaires ou réutilisables.",
          "Système de provisionnement rattaché directement au portefeuille mobile de l'utilisateur.",
          "Chiffrement des numéros de carte (PAN/CVV) et tokens de transaction temporaires.",
          "Limites de d'achats et dépenses configurables pour une sécurité renforcée."
        ]
      },
      {
        title: "3. Achat de Crédit et Services du Quotidien",
        content: "L'application intègre des modules pour l'achat instantané de crédit de communication et le paiement de factures :",
        list: [
          "Achat de crédit téléphonique multi-opérateur en un clic.",
          "Paiement récurrent automatisé pour les abonnements électricité, eau et internet.",
          "Interface simple de consultation de solde et historique consolidé."
        ]
      },
      {
        title: "4. Architecture UML & Merise Modélisée",
        content: "La modélisation technique comprend plusieurs livrables clés pour guider les équipes de développement :",
        list: [
          "Diagramme de Cas d'Utilisation : Définition des acteurs (Client, Système, Opérateur Télécom, Passerelle de Cartes) et de leurs interactions.",
          "Diagramme de Séquence : Traçage de la cinématique de validation d'un transfert avec double vérification de provision.",
          "Modèle Conceptuel de Données (MCD Merise) : Structuration optimale des entités Client, Portefeuille, Transaction, et CarteVirtuelle avec contraintes d'intégrité référentielle strictes."
        ]
      }
    ]
  },
  "hr-pay": {
    id: "hr-pay",
    title: "HR-PAY",
    category: "analyse",
    subtitle: "Modélisation d'un Agrégateur de Paiement Multi-Passerelles",
    mainDescription: "HR-PAY est une solution d'agrégation de paiement de niveau entreprise. Elle agit comme une passerelle unique centralisant plusieurs méthodes d'encaissement et de décaissement (Cartes bancaires, Mobile Money, Virements bancaires). Cette étude d'analyse et de modélisation assure la robustesse du système face à des pics de transactions et définit l'architecture de sécurité indispensable pour manipuler des données financières.",
    umlDiagramName: "Diagramme de Séquence UML - Processus de Paiement HR-PAY",
    umlSvgType: "sequence",
    sections: [
      {
        title: "1. Passerelle API Unique & SDKs",
        content: "HR-PAY simplifie la vie des développeurs de plateformes e-commerce en fournissant une API unifiée :",
        list: [
          "Point d'entrée unique pour initier, vérifier et rembourser des transactions.",
          "Système de routage intelligent qui choisit la passerelle la plus économique et disponible à l'instant T.",
          "Webhooks asynchrones fiables avec système de retry automatique en cas de non-réponse du serveur marchand.",
          "Documentation complète OpenAPI / Swagger intégrée."
        ]
      },
      {
        title: "2. Gestion des Comptes Marchands & Split Payments",
        content: "La solution permet de gérer des structures complexes de marchands et de marketplaces :",
        list: [
          "Création de sous-comptes pour les vendeurs individuels sur une marketplace.",
          "Fonctionnalité de Split Payment : division automatique d'un paiement client (ex: 80% pour le vendeur, 20% de commission pour la plateforme).",
          "Calcul automatique des taxes et commissions de transfert en temps réel."
        ]
      },
      {
        title: "3. Tableau de Bord Financier & Rapprochement",
        content: "Un espace d'administration complet est modélisé pour donner une visibilité totale sur l'activité financière :",
        list: [
          "Statistiques de ventes consolidées, taux de conversion et motifs d'échec des paiements.",
          "Module de rapprochement bancaire automatique pour faire correspondre les transactions reçues avec les relevés réels.",
          "Gestion simplifiée des litiges et remboursements partiels ou totaux."
        ]
      },
      {
        title: "4. Conception UML & Merise",
        content: "Les livrables d'analyse logicielle réalisés garantissent la conformité et la scalabilité du produit :",
        list: [
          "Diagramme de Séquence : Modélisation du flux de paiement sécurisé (Initiation -> Redirection -> Validation OTP -> Notification Webhook).",
          "Diagramme de Classes UML : Modélisation des entités complexes Merchant, SubAccount, Transaction, Settlement et APIKey.",
          "Modèle Logique de Données (MLD Merise) : Schéma relationnel hautement normalisé pour prévenir toute incohérence de solde financier."
        ]
      }
    ]
  },
  "mynakp": {
    id: "mynakp",
    title: "Mynakp",
    category: "analyse",
    subtitle: "Conception Technique d'une Application d'Intelligence Budgétaire",
    mainDescription: "Mynakp est un projet d'analyse pour une application de gestion intelligente des finances personnelles. L'étude se concentre sur l'ergonomie de saisie, l'automatisation de la catégorisation des dépenses et la sécurité des données financières privées des utilisateurs.",
    umlDiagramName: "Diagramme de Cas d'Utilisation UML - Mynakp",
    umlSvgType: "usecase",
    sections: [
      {
        title: "1. Suivi Automatisé des Dépenses",
        content: "La modélisation prévoit l'intégration et la catégorisation intelligente des opérations financières :",
        list: [
          "Algorithme de catégorisation automatique basé sur les libellés de transaction.",
          "Prise en charge des dépenses récurrentes (loyers, abonnements) avec alertes prévisionnelles.",
          "Saisie rapide manuelle optimisée pour les interfaces mobiles."
        ]
      },
      {
        title: "2. Planification Budgétaire & Alertes",
        content: "Pour aider les utilisateurs à atteindre leurs objectifs d'épargne :",
        list: [
          "Création d'enveloppes budgétaires mensuelles par catégorie.",
          "Système de notifications push et in-app en cas d'approche de la limite fixée.",
          "Générateur de rapports mensuels d'analyse de santé financière."
        ]
      }
    ]
  },
  "ebook-analysis": {
    id: "ebook-analysis",
    title: "E-Book Platform",
    category: "analyse",
    subtitle: "Modélisation d'une Plateforme de Lecture & E-Commerce Culturel",
    mainDescription: "Cette étude d'analyse fonctionnelle détaille la structure d'une plateforme de commerce électronique dédiée aux livres numériques. Elle aborde à la fois les contraintes de distribution sécurisée des droits d'auteur (DRM) et l'expérience d'achat fluide pour les lecteurs.",
    umlDiagramName: "Diagramme de Classes UML - E-Book Platform",
    umlSvgType: "class",
    sections: [
      {
        title: "1. Gestion de la Vente et Abonnements",
        content: "Deux modèles économiques sont modélisés au sein de la même plateforme :",
        list: [
          "Achat de livres à l'unité avec génération de facture et lien de téléchargement sécurisé.",
          "Formule d'abonnement mensuel donnant un accès illimité à un catalogue de livres sélectionnés."
        ]
      },
      {
        title: "2. Sécurisation et Lecteur Intégré (Web Reader)",
        content: "Pour protéger le contenu des éditeurs contre le piratage :",
        list: [
          "Spécification d'un lecteur d'e-books intégré en HTML5 interdisant le téléchargement direct du fichier source.",
          "Filigranage dynamique des fichiers PDF/EPUB au nom de l'acheteur lors du téléchargement."
        ]
      }
    ]
  },
  "national-energy": {
    id: "national-energy",
    title: "National Energy",
    category: "code",
    subtitle: "Développement Front-End Réactif d'un Portail d'Énergie",
    mainDescription: "Développement de l'interface client de National Energy avec ReactJS. Ce projet intègre des interfaces complexes, dynamiques et 100% responsives permettant aux utilisateurs de calculer leur consommation d'énergie et de simuler des économies sur divers équipements solaires.",
    codeFilename: "EnergyEstimator.tsx",
    codeLanguage: "javascript",
    codeContent: `import React, { useState, useEffect } from 'react';

// Composant ReactJS pour simuler et estimer la consommation d'énergie
export function EnergyEstimator() {
  const [equipments, setEquipments] = useState([
    { id: 1, name: 'Climatiseur', powerWatts: 1500, hoursPerDay: 6 },
    { id: 2, name: 'Éclairage LED', powerWatts: 120, hoursPerDay: 12 }
  ]);
  const [totalKWh, setTotalKWh] = useState(0);

  useEffect(() => {
    const dailyKWh = equipments.reduce((sum, eq) => {
      return sum + (eq.powerWatts * eq.hoursPerDay) / 1000;
    }, 0);
    setTotalKWh(dailyKWh * 30); // Consommation mensuelle estimée
  }, [equipments]);

  const updateHours = (id, hours) => {
    setEquipments(prev =>
      prev.map(eq => (eq.id === id ? { ...eq, hoursPerDay: hours } : eq))
    );
  };

  return (
    <div className="energy-card bg-zinc-950 p-6 rounded-xl border border-zinc-900">
      <h4 className="text-white font-bold mb-4">Simulateur de Consommation</h4>
      {equipments.map(eq => (
        <div key={eq.id} className="flex justify-between items-center mb-3">
          <span className="text-zinc-400 text-xs">{eq.name} ({eq.powerWatts}W)</span>
          <input
            type="number"
            value={eq.hoursPerDay}
            onChange={(e) => updateHours(eq.id, Number(e.target.value))}
            className="w-16 bg-black border border-zinc-800 text-white text-xs px-2 py-1 rounded"
          />
        </div>
      ))}
      <div className="border-t border-zinc-900 pt-3 mt-4 text-right">
        <span className="text-red-500 font-bold text-sm">Total : {totalKWh.toFixed(2)} kWh / mois</span>
      </div>
    </div>
  );
}`,
    sections: [
      {
        title: "1. Composants Réutilisables en ReactJS",
        content: "L'interface utilisateur a été conçue selon une approche orientée composants, optimisant la réutilisation et réduisant le couplage de code :",
        list: [
          "Gestion d'état locale avec les hooks useState et useEffect.",
          "Rendu fluide des listes d'équipements électriques interactifs.",
          "Interface utilisateur adaptative stylisée avec TailwindCSS."
        ]
      },
      {
        title: "2. Performance Web et SEO",
        content: "Des optimisations poussées ont été appliquées pour garantir un temps de chargement minime :",
        list: [
          "Lazy loading des composants lourds et découpage de code (Code Splitting).",
          "Optimisation du balisage HTML pour un excellent référencement naturel (SEO technique)."
        ]
      }
    ]
  },
  "afritech-sas": {
    id: "afritech-sas",
    title: "AFRITECH SAS",
    category: "code",
    subtitle: "API Asynchrone de Capture de Leads avec FastAPI",
    mainDescription: "Développement d'une route backend asynchrone performante en Python à l'aide du framework FastAPI. Cette route gère l'enregistrement et la validation instantanée des formulaires de prospection commerciale pour la start-up AFRITECH SAS.",
    codeFilename: "lead_api.py",
    codeLanguage: "python",
    codeContent: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(title="Afritech Lead API")

# Schéma Pydantic de validation de données prospect
class LeadCreate(BaseModel):
    fullname: str
    email: EmailStr
    company: Optional[str] = None
    message: str

@app.post("/leads", status_code=status.HTTP_201_CREATED)
async def create_lead(lead: LeadCreate):
    try:
        # Traitement asynchrone du lead (ex: Enregistrement DB ou envoi mail)
        # Simulation d'insertion en base de données
        db_lead = {
            "id": 101,
            "fullname": lead.fullname,
            "email": lead.email,
            "company": lead.company,
            "status": "pending_contact"
        }
        return {"success": True, "data": db_lead, "message": "Lead enregistré avec succès"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erreur interne lors de l'enregistrement : {str(e)}"
        )
`,
    sections: [
      {
        title: "1. Vitesse et Asynchronisme avec FastAPI",
        content: "L'utilisation de Python asynchrone (async/await) couplée à FastAPI permet d'absorber une charge importante de requêtes avec des temps de réponse sous la barre des 50ms :",
        list: [
          "Validation stricte des types de données entrantes via Pydantic.",
          "Génération automatique de la documentation OpenAPI.",
          "Haute performance grâce au serveur ASGI Uvicorn."
        ]
      },
      {
        title: "2. Intégration Simplifiée",
        content: "L'API expose des endpoints standardisés facilitant la communication asynchrone avec le front-end ReactJS/Next.js de la plateforme."
      }
    ]
  },
  "sagesse-africaine": {
    id: "sagesse-africaine",
    title: "Sagesse Africaine E-Book",
    category: "code",
    subtitle: "API Django REST Framework de Validation de Paiement",
    mainDescription: "Développement d'une API backend robuste avec Django REST Framework (DRF) en Python. Cette vue prend en charge la réception des webhooks Stripe, la validation des signatures de sécurité et la libération automatique des e-books achetés.",
    codeFilename: "payment_views.py",
    codeLanguage: "python",
    codeContent: `from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import stripe
import logging

logger = logging.getLogger(__name__)

class StripeWebhookView(APIView):
    """
    Vue Django REST Framework pour intercepter et valider les webhooks Stripe
    """
    def post(self, request, *args, **kwargs):
        payload = request.body
        sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
        event = None

        try:
            # Validation de la signature pour s'assurer que la requête vient bien de Stripe
            event = stripe.Webhook.construct_event(
                payload, sig_header, "whsec_mock_key_sagesse_africaine"
            )
        except ValueError as e:
            return Response({"error": "Payload invalide"}, status=status.HTTP_400_BAD_REQUEST)
        except stripe.error.SignatureVerificationError as e:
            return Response({"error": "Signature invalide"}, status=status.HTTP_400_BAD_REQUEST)

        # Traitement de l'événement validé
        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            customer_email = session.get('customer_details', {}).get('email')
            # Logique d'activation de l'accès au livre pour le compte client correspondant
            logger.info(f"Paiement validé pour le client : {customer_email}")

        return Response({"success": True}, status=status.HTTP_200_OK)
`,
    sections: [
      {
        title: "1. Sécurisation des Transactions avec Stripe",
        content: "La vue REST vérifie l'authenticité des requêtes Stripe via la signature du webhook avant de modifier le statut des commandes utilisateur :",
        list: [
          "Gestion robuste des exceptions Stripe (SignatureVerificationError).",
          "Traitement asynchrone des événements de paiement validé.",
          "Logs d'audit fiables pour le suivi des transactions financières."
        ]
      },
      {
        title: "2. API REST standardisée avec Django",
        content: "L'utilisation de Django REST Framework assure une architecture claire, propre et modulaire, facilitant l'intégration des fonctionnalités e-commerce."
      }
    ]
  }
};
