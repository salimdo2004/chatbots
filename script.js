const botButton = document.getElementById("botButton");
const chatWindow = document.getElementById("chatWindow");
const closeButton = document.getElementById("closeButton");
const chatContent = document.getElementById("chatContent");
const chatInput = document.getElementById("chatInput");

const scenarios = {
    "menu_principal": {
        "message": "Bonjour et bienvenue chez Tasmim, votre partenaire digital pour des solutions innovantes ! Comment puis-je vous aider aujourd’hui ?",
        "options": [
            "Développement Application Web",
            "Création Boutique e-Commerce",
            "Développement Application Mobile",
            "Conception Site Web Vitrine",
            "Infographie & Identité Visuelle",
            "Référencement Naturel SEO",
            "cyber security",
        ],
        "next": {
            "Développement Application Web": "Developpement des sites Web", 
            "Création Boutique e-Commerce": "creation_boutique_ecommerce", 
            "Développement Application Mobile": "Developpement application mobile", 
            "Conception Site Web Vitrine": "conception_site_vitrine", 
            "Infographie & Identité Visuelle": "infographie_identite_visuelle",
            "Référencement Naturel SEO": "referencement_naturel_seo",    
            "cyber security": "cyber_security"
        }
    },
    
    "Developpement des sites Web": {
        "message": "Le développement d'une application web vous permet d'avoir une plateforme accessible en ligne. Quel type d’application souhaitez-vous développer ?",
        "options": [
            "Application de gestion",
            "Plateforme e-learning",
            "Market",
            "Application sur-mesure"
        ],
        "next": {
            "Application de gestion": "Application de gestion",
            "Plateforme e-learning": "plateforme_elearning",
            "Market": "market",
            "Application sur-mesure": "app_sur_mesure"
        }
    },
 
"creation_boutique_ecommerce": {
    "message": "La création d'une boutique e-commerce vous permet de vendre vos produits en ligne. Quel type de boutique souhaitez-vous lancer ?",
    "options": [
        "Boutique de mode",
        "Électronique",
        "Produits artisanaux",
        "Autre"
    ],
    "next": {
        "Boutique de mode": "ecommerce_mode",
        "Électronique": "ecommerce_electronique",
        "Produits artisanaux": "ecommerce_artisanat",
        "Autre": "contact_humain"
    }
},
"Developpement application mobile": {
    "message": "Le développement d'application mobile permet de créer des solutions adaptées aux smartphones et tablettes. Quel type d'application souhaitez-vous développer ?",
    "options": [
        "Application e-commerce",
        "Application de réseau social",
        "Application de gestion",
        "Autre"
    ],
    "next": {
        "Application e-commerce": "Application E-commerce",
        "Application de réseau social": "dev_app_mobile_social",
        "Application de gestion": "dev_app_mobile_gestion",
        "Autre": "contact_humain"
    }
},
"conception_site_vitrine": {
    "message": "La conception d'un site vitrine permet de présenter votre entreprise, vos produits ou services en ligne. Quel type de site vitrine souhaitez-vous créer ?",
    "options": [
        "Site pour une entreprise",
        "Site pour un portfolio",
        "Site pour un événement",
        "Autre"
    ],
    "next": {
        "Site pour une entreprise": "site_vitrine_entreprise",
        "Site pour un portfolio": "site_vitrine_portfolio",
        "Site pour un événement": "site_vitrine_evenement",
        "Autre": "contact_humain"
    }
},
"infographie_identite_visuelle": {
    "message": "L'infographie et l'identité visuelle sont essentielles pour transmettre l'image de votre marque de manière percutante. Quel type de service recherchez-vous ?",
    "options": [
        "Création de logo",
        "Charte graphique",
        "Design de supports marketing",
        "Autre"
    ],
    "next": {
        "Création de logo": "infographie_logo",
        "Charte graphique": "infographie_charte",
        "Design de supports marketing": "infographie_supports",
        "Autre": "contact_humain"
    }
},
"referencement_naturel_seo": {
    "message": "Le référencement naturel (SEO) permet d'améliorer la visibilité de votre site sur les moteurs de recherche. Quel aspect du SEO souhaitez-vous optimiser ?",
    "options": [
        "Optimisation des mots-clés",
        "Optimisation du contenu",
        "Optimisation technique",
        "Autre"
    ],
    "next": {
        "Optimisation des mots-clés": "seo mots_cles",
        "Optimisation du contenu": "seo_contenu",
        "Optimisation technique": "seo_technique",
        "Autre": "contact_humain"
    }
},
"cyber_security": {
    "message": "La cybersécurité est essentielle pour protéger vos données et systèmes contre les cyberattaques. Quel aspect de la cybersécurité souhaitez-vous renforcer ?",
    "options": [
        "Protection des données",
        "Sécurisation des réseaux",
        "Sécurité des applications",
        "Autre"
    ],
    "next": {
        "Protection des données": "cyber_securite_donnees",
        "Sécurisation des réseaux": "cyber_securite_reseaux",
        "Sécurité des applications": "cyber_securite_applications",
        "Autre": "contact_humain"
    }
},



    "Application de Gestion": {
        "message": "Les applications de gestion permettent d'optimiser vos processus internes. Quel domaine souhaitez-vous automatiser ?",
        "options": [
            "Gestion des ressources humaines",
            "Gestion des finances",
            "Gestion des stocks",
            "Autre"
        ],
        "next": {
            "Gestion des ressources humaines": "gestion_rh",
            "Gestion des finances": "gestion_finances",
            "Gestion des stocks": "gestion_stocks",
            "Autre": "contact_humain"
        }
    },
    
        "plateforme_elearning": {
            "message": "Les plateformes e-learning permettent de proposer des formations en ligne interactives. Quel type de formation souhaitez-vous créer ?",
            "options": [
                "Formation professionnelle",
                "Cours académiques",
                "Tutoriels spécialisés",
                "Autre"
            ],
            "next": {
                "Formation professionnelle": "formation_pro",
                "Cours académiques": "cours_academiques",
                "Tutoriels spécialisés": "tutoriels",
                "Autre": "contact_humain"
            }
        },
        "market": {
            "message": "Les marketplaces facilitent la mise en relation entre vendeurs et acheteurs. Quel type de marketplace souhaitez-vous développer ?",
            "options": [
                "Produits physiques",
                "Produits digitaux",
                "Services",
                "Autre"
            ],
            "next": {
                "Produits physiques": "market_produits",
                "Produits digitaux": "market_digitaux",
                "Services": "market_services",
                "Autre": "contact_humain"
            }
        },
        "app_sur_mesure": {
            "message": "Les applications sur-mesure s'adaptent à vos besoins spécifiques. Quel est votre besoin principal ?",
            "options": [
                "Application mobile",
                "Application web",
                "Logiciel de bureau",
                "Autre"
            ],
            "next": {
                "Application mobile": "app_mobile",
                "Application web": "app_web",
                "Logiciel de bureau": "app_bureau",
                "Autre": "contact_humain"
            }
        },
"gestion_rh": {
    "message": "La gestion des ressources humaines permet d'optimiser le recrutement, la paie et la formation. Quel aspect souhaitez-vous améliorer ?",
    "options": [
        "Recrutement",
        "Gestion de la paie",
        "Formation",
        "Autre"
    ],
    "next": {
        "Recrutement": "gestion_recrutement",
        "Gestion de la paie": "gestion_paie",
        "Formation": "gestion_formation",
        "Autre": "contact_humain"
    }
},
"gestion_recrutement": {
    "message": "Bienvenue dans la section Recrutement. Voici comment notre chatbot facilite chaque étape du processus.",
    "sections": [
        {
            "title": "Offres d'emploi",
            "description": "Une liste d’offres d’emploi avec titre, lieu, type de contrat, bouton \"Postuler\".",
            "image": "Image suggérée : Un tableau clair et responsive avec des icônes (🧑‍💼, 🌍, ⏱️).",
            "image_url": "image/Offres demploi.png",  // chemin vers ton image réelle
            "fonction": "Le chatbot peut publier automatiquement les nouvelles offres ici depuis l’interface RH."
          },
        {
            "title": "🖼️ Image 2 : Section \"Chatbot de présélection\"",
            "description": "Une boîte de dialogue dans un coin de l’écran où le chatbot pose des questions type : \"Quel est votre niveau d’expérience ?\", \"Êtes-vous disponible immédiatement ?\"",
            "image": "Image suggérée : Une simulation de chat avec des questions/réponses.",
            "fonction": "Le chatbot filtre automatiquement les candidatures selon les critères."
        },
        {
            "title": "🖼️ Image 3 : Section \"Candidats présélectionnés\" (admin)",
            "description": "Tableau de bord RH avec les candidats triés par score de présélection.",
            "image": "Image suggérée : Carte candidat avec nom, CV, score, bouton \"Planifier un entretien\".",
            "fonction": "Le chatbot envoie les meilleurs profils à l’admin RH, prêt à être contacté."
        },
        {
            "title": "🖼️ Image 4 : Prise de rendez-vous automatisée",
            "description": "Un calendrier interactif avec des créneaux disponibles.",
            "image": "Image suggérée : Interface fluide avec sélection de date/heure.",
            "fonction": "Le chatbot propose des plages horaires, synchronisées avec les responsables."
        }
    ],
    "dev_notes": {
        "objectif": "Développer une page Recrutement interactive avec chatbot intégré.",
        "technos": {
            "front_end": "HTML, CSS (ou Tailwind), JavaScript",
            "back_end": "PHP ou Python",
            "base_donnees": "MySQL",
            "chatbot": "Botpress ou API personnalisée",
            "ui_ux": "Responsive design, icônes claires, structure fluide"
        }
    }
},

"gestion_finances": {
    "message": "La gestion financière vous aide à optimiser vos flux de trésorerie et vos budgets. Quel domaine vous intéresse ?",
    "options": [
        "Gestion de la comptabilité",
        "Gestion des budgets",
        "Gestion des factures",
        "Autre"
    ],
    "next": {
        "Gestion de la comptabilité": "gestion_comptabilite",
        "Gestion des budgets": "gestion_budgets",
        "Gestion des factures": "gestion_factures",
        "Autre": "contact_humain"
    }
},

"gestion_stocks": {
    "message": "La gestion des stocks vous aide à suivre et optimiser vos inventaires. Quel aspect souhaitez-vous améliorer ?",
    "options": [
        "Suivi des stocks",
        "Prévisions de réapprovisionnement",
        "Optimisation des entrepôts",
        "Autre"
    ],
    "next": {
        "Suivi des stocks": "suivi_stocks",
        "Prévisions de réapprovisionnement": "previsions_reapprovisionnement",
        "Optimisation des entrepôts": "optimisation_entrepots",
        "Autre": "contact_humain"
    }
},
"formation_professionnelle": {
    "message": "Les formations professionnelles permettent d’acquérir des compétences spécifiques pour le monde du travail. Quel domaine vous intéresse ?",
    "options": [
        "Informatique",
        "Marketing",
        "Gestion d'entreprise",
        "Autre"
    ],
    "next": {
        "Informatique": "formation_informatique",
        "Marketing": "formation_marketing",
        "Gestion d'entreprise": "formation_gestion",
        "Autre": "contact_humain"
    }
},

"cours_academiques": {
    "message": "Les cours académiques sont destinés aux étudiants et enseignants. Quel niveau de cours recherchez-vous ?",
    "options": [
        "Primaire",
        "Secondaire",
        "Universitaire",
        "Autre"
    ],
    "next": {
        "Primaire": "cours_primaire",
        "Secondaire": "cours_secondaire",
        "Universitaire": "cours_universitaire",
        "Autre": "contact_humain"
    }
},

"tutoriels_specialises": {
    "message": "Les tutoriels spécialisés vous permettent d’apprendre des compétences techniques rapidement. Quel domaine vous intéresse ?",
    "options": [
        "Programmation",
        "Design graphique",
        "Montage vidéo",
        "Autre"
    ],
    "next": {
        "Programmation": "tutoriel_programmation",
        "Design graphique": "tutoriel_design",
        "Montage vidéo": "tutoriel_montage",
        "Autre": "contact_humain"
    }
},
"market_produits": {
    "message": "Les marketplaces de produits physiques permettent de vendre et acheter des articles concrets. Quel type de produits souhaitez-vous proposer ?",
    "options": [
        "Mode & Accessoires",
        "Électronique",
        "Maison & Jardin",
        "Autre"
    ],
    "next": {
        "Mode & Accessoires": "market_mode",
        "Électronique": "market_electronique",
        "Maison & Jardin": "market_maison",
        "Autre": "contact_humain"
    }
},

"market_digitaux": {
    "message": "Les marketplaces de produits digitaux permettent de vendre des fichiers et logiciels. Quel type de produit souhaitez-vous proposer ?",
    "options": [
        "E-books & Formations",
        "Logiciels & Applications",
        "Musiques & Vidéos",
        "Autre"
    ],
    "next": {
        "E-books & Formations": "market_ebooks",
        "Logiciels & Applications": "market_logiciels",
        "Musiques & Vidéos": "market_medias",
        "Autre": "contact_humain"
    }
},

"market_services": {
    "message": "Les marketplaces de services permettent de mettre en relation des prestataires et des clients. Quel type de services souhaitez-vous proposer ?",
    "options": [
        "Freelance & Consulting",
        "Services à domicile",
        "Coaching & Formation",
        "Autre"
    ],
    "next": {
        "Freelance & Consulting": "market_freelance",
        "Services à domicile": "market_domicile",
        "Coaching & Formation": "market_coaching",
        "Autre": "contact_humain"
    }
},
"app_mobile": {
    "message": "Les applications mobiles permettent d’atteindre vos utilisateurs sur smartphones et tablettes. Quel type d’application souhaitez-vous développer ?",
    "options": [
        "Application e-commerce",
        "Réseau social",
        "Gestion d'entreprise",
        "Autre"
    ],
    "next": {
        "Application e-commerce": "app_mobile_ecommerce",
        "Réseau social": "app_mobile_social",
        "Gestion d'entreprise": "app_mobile_gestion",
        "Autre": "contact_humain"
    }
},

"app_web": {
    "message": "Les applications web sont accessibles depuis un navigateur et adaptées à tous les appareils. Quel type d’application souhaitez-vous développer ?",
    "options": [
        "Plateforme e-learning",
        "Outil de gestion",
        "Site interactif",
        "Autre"
    ],
    "next": {
        "Plateforme e-learning": "app_web_elearning",
        "Outil de gestion": "app_web_gestion",
        "Site interactif": "app_web_interactif",
        "Autre": "contact_humain"
    }
},

"app_bureau": {
    "message": "Les logiciels de bureau sont installés directement sur un ordinateur. Quel type de logiciel souhaitez-vous créer ?",
    "options": [
        "Logiciel de gestion",
        "Outil de productivité",
        "Logiciel de conception",
        "Autre"
    ],
    "next": {
        "Logiciel de gestion": "app_bureau_gestion",
        "Outil de productivité": "app_bureau_productivite",
        "Logiciel de conception": "app_bureau_conception",
        "Autre": "contact_humain"
    }
},
"ecommerce_mode": {
    "message": "Une boutique de mode vous permet de vendre des vêtements et accessoires en ligne. Quel type de produits souhaitez-vous proposer ?",
    "options": [
        "Vêtements pour hommes",
        "Vêtements pour femmes",
        "Accessoires de mode",
        "Autre"
    ],
    "next": {
        "Vêtements pour hommes": "mode_hommes",
        "Vêtements pour femmes": "mode_femmes",
        "Accessoires de mode": "mode_accessoires",
        "Autre": "contact_humain"
    }
},

"ecommerce_electronique": {
    "message": "Une boutique d'électronique permet de vendre des produits technologiques. Quel type de produits souhaitez-vous proposer ?",
    "options": [
        "Smartphones & Accessoires",
        "Ordinateurs & Périphériques",
        "Électronique grand public",
        "Autre"
    ],
    "next": {
        "Smartphones & Accessoires": "electronique_smartphones",
        "Ordinateurs & Périphériques": "electronique_ordinateurs",
        "Électronique grand public": "electronique_consommateur",
        "Autre": "contact_humain"
    }
},

"ecommerce_artisanat": {
    "message": "Une boutique de produits artisanaux vous permet de vendre des créations uniques. Quel type de produits souhaitez-vous proposer ?",
    "options": [
        "Bijoux faits main",
        "Décoration artisanale",
        "Produits en cuir",
        "Autre"
    ],
    "next": {
        "Bijoux faits main": "artisanat_bijoux",
        "Décoration artisanale": "artisanat_decoration",
        "Produits en cuir": "artisanat_cuir",
        "Autre": "contact_humain"
    }
},

"Application E-commerce": {
    "message": "Une application e-commerce permet de vendre des produits et services en ligne. Quel type de boutique souhaitez-vous créer ?",
    "options": [
        "Marketplace",
        "Boutique mono-produit",
        "Boutique multi-produits",
        "Autre"
    ],
    "next": {
        "Marketplace": "app_mobile_ecommerce_marketplace",
        "Boutique mono-produit": "app_mobile_ecommerce_mono",
        "Boutique multi-produits": "app_mobile_ecommerce_multi",
        "Autre": "contact_humain"
    }
},

"dev_app_mobile_social": {
    "message": "Une application de réseau social permet de connecter des utilisateurs autour d’intérêts communs. Quel type de réseau social souhaitez-vous développer ?",
    "options": [
        "Réseau basé sur la messagerie",
        "Réseau de partage de contenu",
        "Réseau professionnel",
        "Autre"
    ],
    "next": {
        "Réseau basé sur la messagerie": "app_mobile_social_messaging",
        "Réseau de partage de contenu": "app_mobile_social_content",
        "Réseau professionnel": "app_mobile_social_pro",
        "Autre": "contact_humain"
    }
},

"dev_app_mobile_gestion": {
    "message": "Une application de gestion aide à organiser et optimiser les processus internes. Quel domaine souhaitez-vous automatiser ?",
    "options": [
        "Gestion des ressources humaines",
        "Gestion des finances",
        "Gestion des stocks",
        "Autre"
    ],
    "next": {
        "Gestion des ressources humaines": "app_mobile_gestion_rh",
        "Gestion des finances": "app_mobile_gestion_finances",
        "Gestion des stocks": "app_mobile_gestion_stocks",
        "Autre": "contact_humain"
    }
},
"site_vitrine_entreprise": {
    "message": "Un site vitrine pour une entreprise permet de mettre en avant vos services, produits, et informations clés. Quels services souhaitez-vous inclure ?",
    "options": [
        "Présentation de l'entreprise",
        "Catalogue de produits/services",
        "Témoignages clients",
        "Autre"
    ],
    "next": {
        "Présentation de l'entreprise": "site_entreprise_presentation",
        "Catalogue de produits/services": "site_entreprise_catalogue",
        "Témoignages clients": "site_entreprise_temignages",
        "Autre": "contact_humain"
    }
},

"site_vitrine_portfolio": {
    "message": "Un site vitrine pour un portfolio permet de mettre en valeur vos réalisations ou votre expertise. Quel type de contenu souhaitez-vous afficher ?",
    "options": [
        "Projets professionnels",
        "Projets personnels",
        "Compétences et certifications",
        "Autre"
    ],
    "next": {
        "Projets professionnels": "portfolio_projets_pro",
        "Projets personnels": "portfolio_projets_perso",
        "Compétences et certifications": "portfolio_competences",
        "Autre": "contact_humain"
    }
},

"site_vitrine_evenement": {
    "message": "Un site vitrine pour un événement permet de promouvoir un événement spécifique. Quel type d'événement souhaitez-vous présenter ?",
    "options": [
        "Conférence",
        "Mariage",
        "Festival",
        "Autre"
    ],
    "next": {
        "Conférence": "evenement_conference",
        "Mariage": "evenement_mariage",
        "Festival": "evenement_festival",
        "Autre": "contact_humain"
    }
},

"infographie_logo": {
    "message": "La création de logo permet de définir l'identité visuelle de votre marque. Quel style de logo souhaitez-vous ?",
    "options": [
        "Minimaliste",
        "Typographique",
        "Illustratif",
        "Autre"
    ],
    "next": {
        "Minimaliste": "logo_minimaliste",
        "Typographique": "logo_typographique",
        "Illustratif": "logo_illustratif",
        "Autre": "contact_humain"
    }
},

"infographie_charte": {
    "message": "La charte graphique définit l'ensemble des éléments visuels de votre marque. Quels éléments souhaitez-vous inclure ?",
    "options": [
        "Couleurs",
        "Typographies",
        "Icônes et illustrations",
        "Autre"
    ],
    "next": {
        "Couleurs": "charte_graphique_couleurs",
        "Typographies": "charte_graphique_typographies",
        "Icônes et illustrations": "charte_graphique_icones",
        "Autre": "contact_humain"
    }
},

"infographie_supports": {
    "message": "Le design de supports marketing permet de créer des visuels pour promouvoir votre marque. Quels supports souhaitez-vous concevoir ?",
    "options": [
        "Couleurs",
        "Typographies",
        "Icônes et illustrations",
        "Autre"
    ],
    "next": {
        "Affiches": "supports_marketing_affiches",
        "Flyers": "supports_marketing_flyers",
        "Bannières web": "supports_marketing_bannières",
        "Autre": "contact_humain"
    }
},
"seo mots cles": {
    "message": "L'optimisation des mots-clés consiste à identifier les termes les plus recherchés par votre audience. Quels types de mots-clés souhaitez-vous cibler ?",
    "options": [
        "Mots-clés généraux",
        "Mots-clés de niche",
        "Longue traîne",
        "Autre"
    ],
    "next": {
        "Mots-clés généraux": "seo_mots_cles_generaux",
        "Mots-clés de niche": "seo_mots_cles_niche",
        "Longue traîne": "seo_longue_taile",
        "Autre": "contact_humain"
    }
},

"seo_contenu": {
    "message": "L'optimisation du contenu vise à rendre vos pages plus attractives et pertinentes pour vos visiteurs et moteurs de recherche. Quel type de contenu souhaitez-vous optimiser ?",
    "options": [
        "Textes",
        "Images",
        "Vidéos",
        "Autre"
    ],
    "next": {
        "Textes": "seo_contenu_textes",
        "Images": "seo_contenu_images",
        "Vidéos": "seo_contenu_videos",
        "Autre": "contact_humain"
    }
},

"seo_technique": {
    "message": "L'optimisation technique du SEO permet d'améliorer la structure et la vitesse de votre site. Quels aspects techniques souhaitez-vous optimiser ?",
    "options": [
        "Amélioration de la vitesse de chargement",
        "Optimisation mobile",
        "Amélioration de la structure des URL",
        "Autre"
    ],
    "next": {
        "Amélioration de la vitesse de chargement": "seo_technique_vitesse",
        "Optimisation mobile": "seo_technique_mobile",
        "Amélioration de la structure des URL": "seo_technique_url",
        "Autre": "contact_humain"
    }
},
"cyber_securite_donnees": {
    "message": "La protection des données vise à sécuriser les informations sensibles contre les fuites et les vols. Quels types de données souhaitez-vous protéger ?",
    "options": [
        "Données personnelles",
        "Données financières",
        "Données d'entreprise",
        "Autre"
    ],
    "next": {
        "Données personnelles": "securite_donnees_personnelles",
        "Données financières": "securite_donnees_financieres",
        "Données d'entreprise": "securite_donnees_entreprise",
        "Autre": "contact_humain"
    }
},

"cyber_securite_reseaux": {
    "message": "La sécurisation des réseaux vise à protéger les infrastructures contre les intrusions et attaques. Quel aspect des réseaux souhaitez-vous sécuriser ?",
    "options": [
        "Pare-feu et antivirus",
        "VPN et réseaux privés",
        "Surveillance et détection d'intrusions",
        "Autre"
    ],
    "next": {
        "Pare-feu et antivirus": "securite_reseaux_parefeu",
        "VPN et réseaux privés": "securite_reseaux_vpn",
        "Surveillance et détection d'intrusions": "securite_reseaux_intrusions",
        "Autre": "contact_humain"
    }
},

"cyber_securite_applications": {
    "message": "La sécurité des applications vise à éviter les vulnérabilités dans les logiciels. Quel type d'application souhaitez-vous sécuriser ?",
    "options": [
        "Applications web",
        "Applications mobiles",
        "Applications d'entreprise",
        "Autre"
    ],
    "next": {
        "Applications web": "securite_applications_web",
        "Applications mobiles": "securite_applications_mobiles",
        "Applications d'entreprise": "securite_applications_entreprise",
        "Autre": "contact_humain"
    }
},

"ecommerce_mode": {
  "message": "👗 Pour créer une boutique de mode en ligne : 1. Choisissez une plateforme (ex: Shopify, WooCommerce).\n2. Créez des fiches produit avec des images de qualité.\n3. Mettez en place un système de tailles/classements.\n4. Ajoutez un système de paiement sécurisé (Stripe, PayPal).\n5. Proposez des options de livraison.\nSouhaitez-vous voir des exemples de plateformes ?",
  "options": ["Oui", "Non"],
  "next": {
    "Oui": "plateformes_ecommerce",
    "Non": "merci"
  }
},

"ecommerce_electronique": {
  "message": "🔌 Pour une boutique d’électronique :\n1. Identifiez votre niche (smartphones, accessoires, etc).\n2. Rédigez des descriptions techniques détaillées.\n3. Intégrez une gestion de stock précise.\n4. Protégez vos données clients.\n5. Assurez un bon service après-vente.\nSouhaitez-vous de l’aide pour choisir la plateforme ?",
  "options": ["Oui", "Non"],
  "next": {
    "Oui": "plateformes_ecommerce",
    "Non": "merci"
  }
},

"ecommerce_artisanat": {
  "message": "🎨 Pour une boutique de produits artisanaux :\n1. Mettez en valeur l’histoire derrière chaque produit.\n2. Utilisez des photos authentiques et lumineuses.\n3. Ajoutez une section blog ou 'à propos'.\n4. Offrez des produits en édition limitée.\n5. Choisissez un site simple à gérer comme Etsy ou Shopify.\nSouhaitez-vous recevoir des recommandations de plateformes ?",
  "options": ["Oui", "Non"],
  "next": {
    "Oui": "plateformes_ecommerce",
    "Non": "merci"
  }
},

"plateformes_ecommerce": {
  "message": "Voici quelques plateformes populaires :\n- Shopify : facile à utiliser, tout-en-un.\n- WooCommerce : plugin WordPress, très personnalisable.\n- Wix : simple pour les débutants.\n- Etsy : idéal pour les produits artisanaux.\nSouhaitez-vous une aide pour créer un compte sur l'une d'elles ?",
  "options": ["Oui", "Non"],
  "next": {
    "Oui": "aide_creation_compte",
    "Non": "merci"
  }
},

"aide_creation_compte": {
  "message": "Parfait ! Sur quelle plateforme souhaitez-vous de l’aide pour créer un compte ?",
  "options": ["Shopify", "WooCommerce", "Etsy", "Wix"],
  "next": {
    "Shopify": "creation_shopify",
    "WooCommerce": "creation_woocommerce",
    "Etsy": "creation_etsy",
    "Wix": "creation_wix"
  }
},

"creation_shopify": {
  "message": "🛒 Pour créer une boutique Shopify :\n1. Rendez-vous sur shopify.com et cliquez sur 'Commencer'.\n2. Entrez votre email, mot de passe et nom de boutique.\n3. Choisissez un thème.\n4. Ajoutez vos produits.\n5. Configurez les paiements et la livraison."
},

"creation_woocommerce": {
  "message": "⚙️ Pour WooCommerce :\n1. Créez un site WordPress.\n2. Installez le plugin WooCommerce.\n3. Suivez l'assistant de configuration.\n4. Ajoutez vos produits.\n5. Activez les options de paiement et de livraison."
},

"creation_etsy": {
  "message": "🧵 Pour Etsy :\n1. Créez un compte sur etsy.com.\n2. Ouvrez une boutique en cliquant sur 'Vendre sur Etsy'.\n3. Ajoutez vos articles avec des descriptions détaillées.\n4. Définissez vos frais d’expédition.\n5. Activez votre compte bancaire pour recevoir les paiements."
},

"creation_wix": {
  "message": "🌐 Pour Wix :\n1. Allez sur wix.com et inscrivez-vous.\n2. Choisissez un modèle de boutique e-commerce.\n3. Ajoutez vos produits.\n4. Connectez un moyen de paiement.\n5. Publiez votre boutique."
},

"contact_humain": {
  "message": "Pas de souci ! Un membre de notre équipe va vous aider à créer la boutique parfaite. Veuillez patienter ou laissez-nous votre email. 💬"
},

"merci": {
  "message": "Merci pour votre réponse ! N’hésitez pas à revenir si vous avez besoin d’aide. 😊"
},


    "contact_humain": {
        "message": "Un de nos experts prendra contact avec vous pour mieux comprendre vos besoins. Merci de nous laisser vos coordonnées.",
        "options": []
    }
};


// Déclaration de la variable pour suivre l'état de la conversation et l'historique de navigation
let conversationState = "menu_principal"; 
let historyState = []; // L'historique permet de revenir à l'état précédent dans la conversation

// Lors du clic sur le bouton de démarrage de la conversation
botButton.addEventListener("click", async () => {
    chatWindow.style.display = "flex"; // Afficher la fenêtre de chat
    await lancerConversation(); // Lancer la conversation
});

// Lors du clic sur le bouton de fermeture du chat
closeButton.addEventListener("click", () => {
    chatWindow.style.display = "none"; // Masquer la fenêtre de chat
    chatContent.innerHTML = ""; // Vider le contenu du chat
    chatInput.innerHTML = ""; // Vider le champ de saisie
    conversationState = "menu_principal"; // Réinitialiser l'état de la conversation
    historyState = []; // Réinitialiser l'historique de navigation
});

// Fonction pour afficher un message dans la fenêtre de chat
async function afficherMessage(message, sender) {
    const messageElement = document.createElement("div"); // Créer un élément pour le message
    messageElement.innerHTML = message; // Insérer le message
    messageElement.className = sender === "bot" ? "bot-message" : "user-message"; // Déterminer le style du message
    chatContent.appendChild(messageElement); // Ajouter le message au chat
    chatContent.scrollTop = chatContent.scrollHeight; // Faire défiler le chat vers le bas

    // Si c'est un message du bot, afficher une réponse temporaire avant de la remplacer
    if (sender === "bot") {
        messageElement.innerHTML = "Je suis en train de générer la réponse..."; // Message temporaire
        await new Promise(resolve => setTimeout(resolve, 3000)); // Attendre 3 secondes avant de remplacer le message
        messageElement.innerHTML = message; // Remplacer le message temporaire par le message réel
        chatContent.scrollTop = chatContent.scrollHeight; // Revenir à la dernière ligne du chat
    }
}

// Fonction pour afficher le champ de saisie de texte
function afficherInputField() {
    chatInput.innerHTML = `
        <input type="text" id="userInput" placeholder="Entrez ici..." class="chat-input-field">
        <button id="submitInput" class="chat-option">Envoyer</button>
        <button id="backButton" class="chat-option">Retour</button>
    `;

    // Gérer l'envoi du texte lorsque l'utilisateur clique sur "Envoyer"
    document.getElementById("submitInput").addEventListener("click", async () => {
        const inputValue = document.getElementById("userInput").value.trim(); // Récupérer la valeur saisie par l'utilisateur
        if (inputValue) {
            await afficherMessage(inputValue, "user"); // Afficher le message de l'utilisateur
            const nextState = scenarios[conversationState].next[inputValue]; // Vérifier la transition de l'état
            if (nextState) {
                historyState.push(conversationState); // Sauvegarder l'état actuel pour pouvoir revenir en arrière
                conversationState = nextState; // Passer à l'état suivant
                await afficherMessage(scenarios[nextState].message, "bot"); // Afficher la réponse du bot
                lancerConversation(); // Lancer la conversation avec l'état suivant
            } else {
                await afficherMessage("Je ne comprends pas cette option. Essayez une autre.", "bot"); // Message d'erreur si l'option n'est pas reconnue
            }
        }
    });

    // Gérer le bouton "Retour" pour revenir à l'état précédent
    document.getElementById("backButton").addEventListener("click", async () => {
        if (historyState.length > 0) {
            conversationState = historyState.pop(); // Revenir à l'état précédent
            await afficherMessage(scenarios[conversationState].message, "bot"); // Afficher le message de l'état précédent
            lancerConversation(); // Lancer la conversation avec l'état précédent
        } else {
            await afficherMessage("Il n'y a pas d'étape précédente.", "bot"); // Message si l'historique est vide
        }
    });
}

// Fonction pour afficher les options sous forme de boutons
function afficherOptions(options) {
    chatInput.innerHTML = ""; // Vider le champ de saisie

    options.forEach(option => {
        const button = document.createElement("button"); // Créer un bouton pour chaque option
        button.textContent = option; // Ajouter le texte sur le bouton
        button.className = "chat-option"; // Appliquer une classe CSS pour le style
        button.addEventListener("click", async () => {
            await afficherMessage(option, "user"); // Afficher le message de l'utilisateur
            historyState.push(conversationState); // Sauvegarder l'état actuel pour pouvoir revenir en arrière
            conversationState = scenarios[conversationState].next[option]; // Passer à l'état suivant
            lancerConversation(); // Lancer la conversation avec l'état suivant
        });
        chatInput.appendChild(button); // Ajouter le bouton au champ de saisie
    });

    // Bouton "Retour" pour revenir à l'état précédent
    const backButton = document.createElement("button");
    backButton.textContent = "Retour";
    backButton.className = "chat-option";
    backButton.addEventListener("click", async () => {
        if (historyState.length > 0) {
            conversationState = historyState.pop(); // Revenir à l'état précédent
            lancerConversation(); // Lancer la conversation avec l'état précédent
        } else {
            await afficherMessage("Il n'y a pas d'étape précédente.", "bot"); // Message si l'historique est vide
        }
    });
    
    chatInput.appendChild(backButton); // Ajouter le bouton "Retour"
}

// Fonction pour démarrer la conversation en fonction de l'état actuel
async function lancerConversation() {
    const scenario = scenarios[conversationState]; // Récupérer le scénario de l'état actuel

    await afficherMessage(scenario.message, "bot"); // Afficher le message du bot

    // Si le scénario contient des sections (comme des descriptions ou des images), les afficher
    if (scenario.sections && scenario.sections.length > 0) {
        scenario.sections.forEach(section => {
            const sectionHTML = `
<div class="chat-section">
    <h4 class="title">${section.title}</h4>
    <p><strong>Description :</strong> ${section.description}</p>
    <p><strong>Fonction :</strong> ${section.fonction}</p>
    ${section.image_url ? `<img src="${section.image_url}" alt="${section.title}" class="chat-image">` : ""}
    <hr>
</div>
            `;
            afficherMessage(sectionHTML, "bot"); // Afficher chaque section
        });
    }

    // Si le scénario contient des options à afficher, les afficher sous forme de boutons
    if (scenario.options && scenario.options.length > 0) {
        afficherOptions(scenario.options); // Afficher les options
    } else {
        afficherInputField(); // Afficher le champ de saisie si aucune option n'est définie
    }
}

// Fonction pour gérer la recherche par l'utilisateur dans le chatbot
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput"); // Récupérer le champ de recherche
    const searchButton = document.getElementById("searchButton"); // Récupérer le bouton de recherche

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", async () => {
            const searchTerm = searchInput.value.trim().toLowerCase(); // Récupérer et normaliser le terme de recherche
            if (!searchTerm) return; // Ne rien faire si le champ est vide

            let bestMatch = null;
            let highestScore = 0;

            // Comparer le terme de recherche avec les clés des scénarios pour trouver la meilleure correspondance
            for (const key of Object.keys(scenarios)) {
                const score = getSimilarity(searchTerm, key.replace(/_/g, " ").toLowerCase());
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = key;
                }
            }

            // Si la correspondance est suffisamment bonne, changer l'état de la conversation
            if (highestScore >= 0.6) { 
                conversationState = bestMatch; // Mettre à jour l'état
                historyState.push("menu_principal"); // Sauvegarder l'état de départ
                await lancerConversation(); // Lancer la conversation
            } else {
                await afficherMessage("Aucun résultat trouvé pour : " + searchTerm, "bot"); // Si aucune correspondance n'est trouvée
            }
        });
    }

    // Permettre à l'utilisateur de rechercher en appuyant sur "Enter"
    searchInput.addEventListener("keypress", async (e) => {
        if (e.key === "Enter") {
            document.getElementById("searchButton").click(); // Déclencher la recherche en appuyant sur "Enter"
        }
    });
});

// Fonction pour calculer la similarité entre deux chaînes de texte (utilisée pour la recherche)
function getSimilarity(a, b) {
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0; // Si l'une des chaînes est vide, elles sont considérées comme identiques
    return (longerLength - editDistance(longer, shorter)) / longerLength; // Retourner le score de similarité
}

// Fonction pour calculer la distance d'édition entre deux chaînes de caractères
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];

    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }

    return costs[s2.length]; // Retourner la distance d'édition finale
}
