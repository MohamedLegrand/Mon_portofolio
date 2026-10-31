import { projectDetailsFr } from './projectDetails';
import type { DetailedProject } from './projectDetails';

// Version anglaise : reprend les champs non textuels (catégorie, code source, type de diagramme)
// de la version française et ne redéfinit que les textes.
export const projectDetailsEn: Record<string, DetailedProject> = {
  "perenkap": {
    ...projectDetailsFr["perenkap"],
    subtitle: "Architecture & Modeling of an Interoperable Mobile Fintech",
    mainDescription: "Père Nkap is an innovative fintech mobile application designed to simplify and democratize money transfers and everyday financial transactions. The main goal of this modeling work is to propose a resilient, secure and interoperable system able to interact with various financial service providers and mobile network operators.",
    umlDiagramName: "UML Use Case Diagram - Père Nkap",
    sections: [
      {
        title: "1. Cross-Operator Money Transfers",
        content: "The main problem solved by Père Nkap is the fragmentation of Mobile Money services (MTN MoMo, Orange Money, Wave, etc.). Thanks to our analysis model:",
        list: [
          "A unified exchange gateway connecting the APIs of the different operators.",
          "Automatic background reconciliation of balances between operators.",
          "Transaction fees calculated dynamically and displayed before confirmation.",
          "A transactional (ACID) workflow ensuring that no transfer fails halfway without an immediate rollback."
        ]
      },
      {
        title: "2. Virtual Bank Cards",
        content: "To let users shop on international e-commerce websites (Amazon, Netflix, Google Play) without a traditional bank account:",
        list: [
          "Instant creation of temporary or reusable virtual cards.",
          "Funding system linked directly to the user's mobile wallet.",
          "Encryption of card numbers (PAN/CVV) and temporary transaction tokens.",
          "Configurable purchase and spending limits for stronger security."
        ]
      },
      {
        title: "3. Airtime and Everyday Services",
        content: "The application includes modules for instant airtime purchases and bill payments:",
        list: [
          "One-click multi-operator airtime purchase.",
          "Automated recurring payments for electricity, water and internet subscriptions.",
          "Simple balance view and consolidated history."
        ]
      },
      {
        title: "4. UML & MERISE Architecture",
        content: "The technical modeling includes several key deliverables to guide the development teams:",
        list: [
          "Use Case Diagram: definition of the actors (Customer, System, Telecom Operator, Card Gateway) and their interactions.",
          "Sequence Diagram: tracing the validation flow of a transfer with a double balance check.",
          "Conceptual Data Model (MERISE MCD): optimal structuring of the Customer, Wallet, Transaction and VirtualCard entities with strict referential integrity constraints."
        ]
      }
    ]
  },
  "hr-pay": {
    ...projectDetailsFr["hr-pay"],
    subtitle: "Modeling a Multi-Gateway Payment Aggregator",
    mainDescription: "HR-Skills Pay is an enterprise-grade payment aggregation solution. It acts as a single gateway centralizing several collection and payout methods (bank cards, Mobile Money, bank transfers). This analysis and modeling work ensures the system stays robust during transaction peaks and defines the security architecture required to handle financial data.",
    umlDiagramName: "UML Sequence Diagram - HR-Skills Pay Payment Process",
    sections: [
      {
        title: "1. Single API Gateway & SDKs",
        content: "HR-Skills Pay makes life easier for e-commerce platform developers by providing a unified API:",
        list: [
          "A single entry point to initiate, verify and refund transactions.",
          "Smart routing that picks the cheapest available gateway at any given moment.",
          "Reliable asynchronous webhooks with automatic retries when the merchant server does not respond.",
          "Complete built-in OpenAPI / Swagger documentation."
        ]
      },
      {
        title: "2. Merchant Accounts & Split Payments",
        content: "The solution handles complex merchant and marketplace structures:",
        list: [
          "Sub-accounts for individual sellers on a marketplace.",
          "Split Payment: automatic division of a customer payment (e.g. 80% for the seller, 20% commission for the platform).",
          "Real-time automatic calculation of taxes and transfer fees."
        ]
      },
      {
        title: "3. Financial Dashboard & Reconciliation",
        content: "A complete back office is modeled to give full visibility on financial activity:",
        list: [
          "Consolidated sales statistics, conversion rates and payment failure reasons.",
          "Automatic bank reconciliation module matching received transactions with actual statements.",
          "Simplified handling of disputes and partial or full refunds."
        ]
      },
      {
        title: "4. UML & MERISE Design",
        content: "The software analysis deliverables ensure the product's compliance and scalability:",
        list: [
          "Sequence Diagram: modeling of the secure payment flow (Initiation -> Redirection -> OTP Validation -> Webhook Notification).",
          "UML Class Diagram: modeling of the Merchant, SubAccount, Transaction, Settlement and APIKey entities.",
          "Logical Data Model (MERISE MLD): a highly normalized relational schema preventing any financial balance inconsistency."
        ]
      }
    ]
  },
  "mynakp": {
    ...projectDetailsFr["mynakp"],
    subtitle: "Technical Design of a Budget Intelligence Application",
    mainDescription: "MyNkap is an analysis project for a smart personal finance management application. The study focuses on input ergonomics, automatic expense categorization and the security of users' private financial data.",
    umlDiagramName: "UML Use Case Diagram - MyNkap",
    sections: [
      {
        title: "1. Automated Expense Tracking",
        content: "The model provides for the integration and smart categorization of financial transactions:",
        list: [
          "Automatic categorization algorithm based on transaction labels.",
          "Support for recurring expenses (rent, subscriptions) with forecast alerts.",
          "Fast manual input optimized for mobile interfaces."
        ]
      },
      {
        title: "2. Budget Planning & Alerts",
        content: "To help users reach their savings goals:",
        list: [
          "Monthly budget envelopes per category.",
          "Push and in-app notifications when approaching the set limit.",
          "Monthly financial health report generator."
        ]
      }
    ]
  },
  "ebook-analysis": {
    ...projectDetailsFr["ebook-analysis"],
    subtitle: "Modeling a Reading & Cultural E-Commerce Platform",
    mainDescription: "This functional analysis details the structure of an e-commerce platform dedicated to e-books. It addresses both the constraints of secure copyright distribution (DRM) and a smooth buying experience for readers.",
    umlDiagramName: "UML Class Diagram - E-Book Platform",
    sections: [
      {
        title: "1. Sales and Subscriptions",
        content: "Two business models are modeled within the same platform:",
        list: [
          "Single book purchase with invoice generation and a secure download link.",
          "Monthly subscription giving unlimited access to a catalog of selected books."
        ]
      },
      {
        title: "2. Security and Built-in Web Reader",
        content: "To protect publishers' content against piracy:",
        list: [
          "Specification of a built-in HTML5 e-book reader that prevents direct download of the source file.",
          "Dynamic watermarking of PDF/EPUB files with the buyer's name on download."
        ]
      }
    ]
  },
  "national-energy": {
    ...projectDetailsFr["national-energy"],
    subtitle: "Responsive Front-End Development of an Energy Portal",
    mainDescription: "Development of the National Energy customer interface with ReactJS. The project includes complex, dynamic and fully responsive interfaces that let users calculate their energy consumption and simulate savings on various solar equipment.",
    sections: [
      {
        title: "1. Reusable ReactJS Components",
        content: "The user interface was designed with a component-based approach, maximizing reuse and reducing code coupling:",
        list: [
          "Local state management with the useState and useEffect hooks.",
          "Smooth rendering of interactive lists of electrical equipment.",
          "Responsive user interface styled with TailwindCSS."
        ]
      },
      {
        title: "2. Web Performance and SEO",
        content: "Advanced optimizations were applied to keep loading times minimal:",
        list: [
          "Lazy loading of heavy components and code splitting.",
          "Optimized HTML markup for strong organic search ranking (technical SEO)."
        ]
      }
    ]
  },
  "afritech-sas": {
    ...projectDetailsFr["afritech-sas"],
    subtitle: "Asynchronous Lead Capture API with FastAPI",
    mainDescription: "Development of a high-performance asynchronous backend route in Python using the FastAPI framework. This route handles the registration and instant validation of sales prospecting forms for the startup AfrikTech.",
    sections: [
      {
        title: "1. Speed and Asynchrony with FastAPI",
        content: "Asynchronous Python (async/await) combined with FastAPI absorbs a heavy request load with response times under 50ms:",
        list: [
          "Strict validation of incoming data types with Pydantic.",
          "Automatic OpenAPI documentation generation.",
          "High performance thanks to the Uvicorn ASGI server."
        ]
      },
      {
        title: "2. Simple Integration",
        content: "The API exposes standardized endpoints that make asynchronous communication with the platform's React front-end straightforward."
      }
    ]
  },
  "sagesse-africaine": {
    ...projectDetailsFr["sagesse-africaine"],
    subtitle: "Django REST Framework Payment Validation API",
    mainDescription: "Development of a robust backend API with Django REST Framework (DRF) in Python. This view receives Stripe webhooks, validates security signatures and automatically unlocks purchased e-books.",
    sections: [
      {
        title: "1. Securing Transactions with Stripe",
        content: "The REST view verifies the authenticity of Stripe requests through the webhook signature before updating user order status:",
        list: [
          "Robust handling of Stripe exceptions (SignatureVerificationError).",
          "Asynchronous processing of confirmed payment events.",
          "Reliable audit logs for tracking financial transactions."
        ]
      },
      {
        title: "2. Standardized REST API with Django",
        content: "Django REST Framework provides a clear, clean and modular architecture that makes integrating e-commerce features easier."
      }
    ]
  },
  "mynkap": {
    ...projectDetailsFr["mynkap"],
    subtitle: "AI-Assisted Financial Management SaaS Platform",
    mainDescription: "MyNkap is an AI-assisted financial management SaaS platform that I founded and built end to end. Live at my-nkap.com, it gathered around thirty active users in its first month.",
    sections: [
      {
        title: "1. A Complete SaaS Platform",
        content: "Fullstack development of the application, from the front-end to the database:",
        list: [
          "React front-end, responsive and optimized for mobile.",
          "REST API with FastAPI.",
          "PostgreSQL database."
        ]
      },
      {
        title: "2. Artificial Intelligence",
        content: "An AI API at the heart of the product:",
        list: [
          "Automatic spending analysis.",
          "Financial trend prediction.",
          "Personalized advice for each user."
        ]
      },
      {
        title: "3. DevOps & Production",
        content: "A professional deployment pipeline:",
        list: [
          "Containerization with Docker.",
          "Deployment on a VPS with Nginx and an SSL certificate.",
          "CI/CD pipeline with GitHub Actions."
        ]
      }
    ]
  },
  "raycard": {
    ...projectDetailsFr["raycard"],
    subtitle: "Virtual Cards Linked to Mobile Money",
    mainDescription: "RayCard is a mobile application, currently in development, that lets users create virtual cards from Mobile Money accounts.",
    sections: [
      {
        title: "1. Technical Architecture",
        content: "The project is built on three components:",
        list: [
          "Mobile app built with Flutter.",
          "REST API with FastAPI and PostgreSQL.",
          "Web admin dashboard built with React."
        ]
      }
    ]
  }
};
