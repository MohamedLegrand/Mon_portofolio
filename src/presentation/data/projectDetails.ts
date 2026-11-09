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
  umlSvgType?: 'usecase' | 'sequence' | 'class' | 'deployment';
  /** Synthèse des livrables de modélisation, affichée sous le diagramme */
  modelingSummary?: string;
  // Specific to 'code'
  codeFilename?: string;
  codeLanguage?: 'javascript' | 'python' | 'go';
  codeContent?: string;
}

export const projectDetailsFr: Record<string, DetailedProject> = {
  "perenkap": {
    id: "perenkap",
    title: "Père Nkap",
    category: "analyse",
    subtitle: "Application Fintech Mobile de Transactions Interopérables",
    mainDescription: "Père Nkap est une application mobile fintech innovante conçue pour simplifier et démocratiser le transfert d'argent et les transactions financières du quotidien. L'objectif principal de cette modélisation est de proposer un système résilient, sécurisé et interopérable capable d'interagir avec divers fournisseurs de services financiers et opérateurs de téléphonie mobile.",
    umlDiagramName: "Diagramme de Cas d'Utilisation UML - Père Nkap",
    modelingSummary: "La modélisation de Père Nkap repose sur trois livrables destinés à guider l'équipe de développement. Le diagramme de cas d'utilisation définit les acteurs (client, système, opérateur télécom, passerelle de cartes) et leurs interactions. Le diagramme de séquence retrace la validation d'un transfert avec double vérification de la provision. Le modèle conceptuel de données Merise organise les entités Client, Portefeuille, Transaction et CarteVirtuelle avec des contraintes d'intégrité strictes.",
    umlSvgType: "usecase",
    sections: [
      {
        title: "1. Transfert d'Argent Inter-Opérateurs",
        content: "La problématique majeure résolue par Père Nkap est le cloisonnement des services de Mobile Money (MTN MoMo, Orange Money, Wave, etc.). Grâce à notre modèle d'analyse :",
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
      }
    ]
  },
  "hr-pay": {
    id: "hr-pay",
    title: "HR-Skills Pay",
    category: "analyse",
    subtitle: "Modélisation d'un Agrégateur de Paiement Multi-Passerelles",
    mainDescription: "HR-Skills Pay est une solution d'agrégation de paiement de niveau entreprise. Elle agit comme une passerelle unique centralisant plusieurs méthodes d'encaissement et de décaissement (Cartes bancaires, Mobile Money, Virements bancaires). Cette étude d'analyse et de modélisation assure la robustesse du système face à des pics de transactions et définit l'architecture de sécurité indispensable pour manipuler des données financières.",
    umlDiagramName: "Diagramme de Séquence UML - Processus de Paiement HR-Skills Pay",
    modelingSummary: "La modélisation s'appuie sur trois livrables complémentaires. Le diagramme de séquence décrit le parcours d'un paiement sécurisé, de son initiation jusqu'à la notification du marchand par webhook, en passant par la validation OTP. Le diagramme de classes structure les entités Merchant, SubAccount, Transaction, Settlement et APIKey. Enfin, le modèle logique de données Merise définit un schéma relationnel normalisé qui prévient toute incohérence de solde.",
    umlSvgType: "sequence",
    sections: [
      {
        title: "1. Passerelle API Unique & SDKs",
        content: "HR-Skills Pay simplifie la vie des développeurs de plateformes e-commerce en fournissant une API unifiée :",
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
        title: "4. Référencement SEO",
        content: "Le site est en production et son référencement naturel est soigné pour être bien visible sur Google :",
        list: [
          "Titres et méta-descriptions optimisés pour chaque page.",
          "Structure du contenu et balisage HTML pensés pour les moteurs de recherche.",
          "Chargement rapide et affichage adapté au mobile, deux critères pris en compte par Google."
        ]
      }
    ]
  },
  "mynakp": {
    id: "mynakp",
    title: "MyNkap",
    category: "analyse",
    subtitle: "Conception Technique d'une Application d'Intelligence Budgétaire",
    mainDescription: "MyNkap est un projet d'analyse pour une application de gestion intelligente des finances personnelles. L'étude se concentre sur l'ergonomie de saisie, l'automatisation de la catégorisation des dépenses et la sécurité des données financières privées des utilisateurs.",
    umlDiagramName: "Diagramme de Déploiement UML - MyNkap",
    modelingSummary: "Le diagramme de déploiement montre comment MyNkap est mis en production. Les utilisateurs accèdent au service depuis un navigateur (application React) ou un smartphone (application Flutter), en HTTPS. Sur le serveur VPS Linux, Nginx joue le rôle de reverse proxy et gère le chiffrement TLS, puis transmet les requêtes à l'API FastAPI. L'API, le module d'intelligence artificielle (analyse et prédiction) et la base PostgreSQL tournent dans des conteneurs Docker. Chaque mise à jour est déployée automatiquement par un pipeline CI/CD GitHub Actions.",
    umlSvgType: "deployment",
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
      },
      {
        title: "3. Analyse et Prédiction par l'Intelligence Artificielle",
        content: "L'intelligence artificielle analyse les habitudes financières de chaque utilisateur pour l'aider à mieux gérer son argent :",
        list: [
          "Analyse automatique des revenus et dépenses pour identifier les postes de dépense les plus importants.",
          "Prédiction des dépenses et du solde des mois à venir à partir de l'historique.",
          "Propositions personnalisées pour réduire certaines dépenses, épargner davantage et atteindre ses objectifs.",
          "Détection des dépenses inhabituelles avec alerte à l'utilisateur."
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
    title: "AfrikTech",
    category: "code",
    subtitle: "API Asynchrone de Capture de Leads avec FastAPI",
    mainDescription: "Développement d'une route backend asynchrone performante en Python à l'aide du framework FastAPI. Cette route gère l'enregistrement et la validation instantanée des formulaires de prospection commerciale pour la start-up AfrikTech.",
    codeFilename: "lead_api.py",
    codeLanguage: "python",
    codeContent: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(title="AfrikTech Lead API")

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
      },
      {
        title: "3. Référencement SEO",
        content: "Le site est en production et son référencement naturel est soigné pour être bien visible sur Google :",
        list: [
          "Titres et méta-descriptions optimisés pour chaque page.",
          "Structure du contenu et balisage HTML pensés pour les moteurs de recherche.",
          "Chargement rapide et affichage adapté au mobile, deux critères pris en compte par Google."
        ]
      }
    ]
  },
  "sagesse-africaine": {
    id: "sagesse-africaine",
    title: "Sagesse Africaine E-Book",
    category: "code",
    subtitle: "Plateforme E-Book avec API Go et Paiements Sécurisés",
    mainDescription: "Développement complet de la plateforme e-commerce Sagesse Africaine, dédiée à la vente et à la lecture de livres numériques sur la culture africaine. Le backend est écrit en Go, l'interface en ReactJS et les données sont stockées dans PostgreSQL. Les paiements sont sécurisés grâce à l'agrégateur HR-Skills Pay.",
    codeFilename: "payment_webhook.go",
    codeLanguage: "go",
    codeContent: `package payment

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"io"
	"net/http"
)

// Webhook appelé par HR-Skills Pay après chaque paiement
func (h *Handler) PaymentWebhook(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "requête invalide", http.StatusBadRequest)
		return
	}

	// Vérifie que la notification vient bien de HR-Skills Pay
	if !validSignature(body, r.Header.Get("X-Signature"), h.secret) {
		http.Error(w, "signature invalide", http.StatusUnauthorized)
		return
	}

	var event PaymentEvent
	if err := json.Unmarshal(body, &event); err != nil {
		http.Error(w, "contenu invalide", http.StatusBadRequest)
		return
	}

	// Paiement confirmé : commande payée et e-book débloqué (PostgreSQL)
	if event.Status == "SUCCESS" {
		if err := h.orders.MarkPaid(r.Context(), event.OrderID); err != nil {
			http.Error(w, "erreur serveur", http.StatusInternalServerError)
			return
		}
	}
	w.WriteHeader(http.StatusOK)
}

func validSignature(body []byte, signature, secret string) bool {
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write(body)
	expected := hex.EncodeToString(mac.Sum(nil))
	return hmac.Equal([]byte(expected), []byte(signature))
}`,
    sections: [
      {
        title: "1. Paiements Sécurisés avec HR-Skills Pay",
        content: "Les paiements sont confiés à l'agrégateur HR-Skills Pay, qui centralise plusieurs moyens de paiement :",
        list: [
          "Vérification de la signature de chaque notification de paiement (webhook) avant tout traitement.",
          "Déblocage automatique de l'e-book dès que le paiement est confirmé.",
          "Historique des transactions enregistré dans PostgreSQL pour le suivi des ventes."
        ]
      },
      {
        title: "2. Backend Go & Interface ReactJS",
        content: "L'API est développée en Go pour sa rapidité et sa fiabilité, l'interface en ReactJS pour une navigation fluide :",
        list: [
          "Catalogue, commandes et bibliothèque des lecteurs stockés dans PostgreSQL.",
          "Espace personnel permettant de retrouver et de lire les e-books achetés.",
          "Interface responsive, agréable sur ordinateur comme sur mobile."
        ]
      },
      {
        title: "3. Référencement SEO",
        content: "Le site est en production et son référencement naturel est soigné pour être bien visible sur Google :",
        list: [
          "Titres et méta-descriptions optimisés pour chaque page.",
          "Structure du contenu et balisage HTML pensés pour les moteurs de recherche.",
          "Chargement rapide et affichage adapté au mobile, deux critères pris en compte par Google."
        ]
      }
    ]
  },
  "mynkap": {
    id: "mynkap",
    title: "MyNkap",
    category: "code",
    subtitle: "Plateforme SaaS de Gestion Financière Assistée par l'IA",
    mainDescription: "MyNkap est une plateforme SaaS de gestion financière assistée par l'intelligence artificielle, que j'ai fondée et développée de bout en bout. En production sur my-nkap.com, elle a réuni une trentaine d'utilisateurs actifs dès son premier mois.",
    sections: [
      {
        title: "1. Une Plateforme SaaS Complète",
        content: "Développement fullstack de l'application, du front-end à la base de données :",
        list: [
          "Front-end React, responsive et optimisé pour le mobile.",
          "API REST avec FastAPI.",
          "Base de données PostgreSQL."
        ]
      },
      {
        title: "2. Intelligence Artificielle",
        content: "Intégration d'une API d'IA au cœur du produit :",
        list: [
          "Analyse automatique des dépenses.",
          "Prédiction des tendances financières.",
          "Conseils personnalisés pour chaque utilisateur."
        ]
      },
      {
        title: "3. DevOps & Mise en Production",
        content: "Une chaîne de déploiement professionnelle :",
        list: [
          "Conteneurisation avec Docker.",
          "Déploiement sur VPS avec Nginx et certificat SSL.",
          "Pipeline CI/CD avec GitHub Actions."
        ]
      },
      {
        title: "4. Référencement SEO",
        content: "Le site est en production et son référencement naturel est soigné pour être bien visible sur Google :",
        list: [
          "Titres et méta-descriptions optimisés pour chaque page.",
          "Structure du contenu et balisage HTML pensés pour les moteurs de recherche.",
          "Chargement rapide et affichage adapté au mobile, deux critères pris en compte par Google."
        ]
      }
    ]
  },
  "raycard": {
    id: "raycard",
    title: "RayCard",
    category: "code",
    subtitle: "Cartes Virtuelles Liées au Mobile Money",
    mainDescription: "RayCard est une application mobile, actuellement en cours de développement, qui permet de créer des cartes virtuelles à partir de comptes Mobile Money.",
    sections: [
      {
        title: "1. Architecture Technique",
        content: "Le projet s'appuie sur trois briques :",
        list: [
          "Application mobile développée avec Flutter.",
          "API REST avec FastAPI et PostgreSQL.",
          "Tableau de bord d'administration web avec React."
        ]
      }
    ]
  }
};
