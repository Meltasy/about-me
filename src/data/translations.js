import {
  JavaScript,
  // TypseScript,
  Html,
  Css,
  Express,
  NodeJS,
  PostgreSQL,
  PrismaORM,
  React,
  ViteJS,
  Webpack
} from '../components/icons/index'

const translations = {
  en: {
    errors: {
      titles: {
        notFound: '404 Not Found',
        unexpected: 'Oops!'
      },
      messages: {
        notFound: 'Sorry, page not found.',
        unexpected: 'Sorry, an unexpected error has occurred.'
      },
      homeLink: 'Back to home page'
    },
    pages: {
      aboutMe: 'About Me',
      projects: 'Projects',
      freeTime: 'Hobbies'
    },
    header: {
      name: 'Melissa Vialaneix',
      title: 'Developer',
      title1: 'Front End',
      title2: 'Back End',
      title3: 'Full Stack'
    },
    footer: {
      copyright: ['Copyright © 2025 Melissa Vialaneix.', 'All rights reserved.'],
      linkedIn: 'Visit my LinkedIn profile',
      gitHub: 'Visit my GitHub profile',
      CV: 'Download my CV',
      CVName: '/MelissaVialaneixCVDevEnFr.pdf'
    },
    welcome: {
      summary: `I'm looking for a position as a Full Stack Developer with a team who will benefit from my 
      skills and experience gained from previous roles and offer me a place where I can learn and grow as 
      a junior developer. I bring several years' experience working as a Learning Designer, Product Manager, 
      Writer and Editor, and several years' experience teaching English in China and Taiwan.`,
      strapline: 'Get in touch if you\'re looking for a developer who constantly asks herself ... ',
      question: 'What\'s the next problem for me to solve?',
      emailMe: 'Email me'
    },
    aboutMe: {
      summary: [
        `I'm looking for a position as a Full Stack Developer within a company where I can work with a team 
        of developers of differing experiences, bringing with me a range of skills and experience from my 
        previous roles. As a junior developer, I'd love to work with developers from whom I can learn from 
        and grow within this new role. My love of learning and curiosity in the ever-evolving world of web 
        development continue to drive me, with the same question always on the tip of my tongue ... What's 
        the next problem for me to solve?`,
        `Having worked alongside software engineers in the educational publishing industry, with a growing 
        fascination in their work, I decided to retrain as a Full Stack Developer. My passion in this field 
        started during my university days when I studied web development and created a website in Dreamweaver 
        MX using Flash for animations! Being able to compare the strides we've made in web development since 
        then has driven my desire to continue my learning journey.`,
        `I chose to study full-stack web development with The Odin Project because it mirrors real-world 
        development - it required me to read documentation, debug independently, and build projects without 
        instructor hand-holding. Completing this self-paced course demonstrates I can take ownership of my 
        learning, troubleshoot problems without immediate guidance, and push through challenges with no clear 
        solution. These skills translate directly: the curiosity to explore unfamiliar tools, the grit to 
        debug stubborn errors, and the self-direction to adapt as technology evolves.`
      ]
    },
    projects: {
      subTitle: 'Features',
      buttons: ['Preview', 'Source Code'],
      apps: [
        {
          id: 1,
          title: 'Blog App',
          previewUrl: 'https://blog-api-view.netlify.app/',
          githubUrl: 'https://github.com/Meltasy/blog-api',
          description: `A blog platform with a backend API supporting a public site for readers and a private 
          dashboard for authors.`,
          solutions: [
            '🎎 Dual-purpose design: Clean Separation between content creation dashboard and public blog',
            '🔐 Smart access control: Role-based permissions keep admin functions secure from readers',
            '📝 Full content lifecycle: Draft, edit, publish and manage posts with complete workflow control',
            '💬 Engaging comment system: User accounts, threaded discussions, and self-managed comments',
            '🧩 Scalable architecture: Modular components that grow independently as needed',
            '📢 Live updates: Real-time content sync keeps everything fresh and responsive',
            '🔒 Enhanced security: Protected routes and authenticated sessions throughout'
          ],
          skillsIcons: [JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'blogApi'
        },
        {
          id: 2,
          title: 'Wine App',
          previewUrl: 'https://inventory-application-production-b054.up.railway.app/',
          githubUrl: 'https://github.com/Meltasy/inventory-application',
          description: `An inventory management system to catalog, track and manage the wine in a cellar, 
          with a dynamic dashboard.`,
          solutions: [
            '📊 Smart inventory management: Digital wine catalog with real-time quantity tracking',
            '💡 Intelligent drinking recommendations: Automated identification for wines at peak maturity',
            `🔎 Advanced search and filtering: Find wines instantly by name, color, producer, region or 
            appellation`,
            '🍾 Complete wine lifecycle: Track every bottle from cellar to consumption',
            '🍷 Visual Status Indicators: At-a-glance inventory health and drinking recommendations',
            '💫 Seamless user experience: Responsive design with dynamic forms and real-time updates',
            '🔒 Data integrity assurance: Validated inputs and redundancy-free database architecture'
          ],
          skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'inventoryApp'
        },
        {
          id: 3,
          title: 'Shopping App',
          previewUrl: 'https://meltasy-shopping-cart.netlify.app/',
          githubUrl: 'https://github.com/Meltasy/shopping-cart',
          description: `A modern e-commerce app that allows shoppers to browse products with detailed 
          information, manage quantities, and track their cart in real-time.`,
          solutions: [
            '💶 Dynamic product catalog: Browse through a collection of products with prices and details',
            `🧸 Product details: View comprehensive information about each product including images and 
            descriptions`,
            '🛒 Smart cart management: Add, remove and update items effortlessly, with real-time cart updates',
            '🧮 Intuitive quantity controls: Adjust quantities with increment / decrement buttons or manual entry',
            `🧭 Seamless navigation: Smooth transitions between home, shop and cart pages for a relaxing 
            experience`,
            '📱 Responsive design: Optimized layout that adapts easily to mobile and desktop screens',
            '🔬 Comprehensive testing: Rigorous test coverage ensuring reliable functionality'
          ],
          skillsIcons: [Html, Css, JavaScript, React, ViteJS],
          imageKey: 'shoppingCart'
        },
        {
          id: 4,
          title: 'Battleship',
          previewUrl: 'https://meltasy.github.io/battleship/',
          githubUrl: 'https://github.com/Meltasy/battleship',
          description: `A modern web version of the classic Battleship strategy game featuring an intelligent AI 
          opponent and nostalgic 80s-inspired design.`,
          solutions: [
            '🚢 Intuitive Gameplay: Streamlined controls for ship placement and strategic combat',
            '🎯 AI Opponent: Intelligent computer player with adaptive targeting algorithms',
            '💻 Retro Aesthetic: Nostalgic 80s-inspired interface honoring the classic board game',
            '🔬 Comprehensive Testing: Built using Test Driven Development (TDD) methodology ensuring robust functionality'
          ],
          skillsIcons: [Html, Css, JavaScript, Webpack],
          imageKey: 'battleship'
        }
      ]
    },
    hobbies: [
      {
        title: 'Trail running',
        description: `Running in the countryside helps me to relax and clear my mind, especially when I'm 
        trying to find the solution to a tricky problem. It's also enabled me to explore some incredible 
        places and provided me with life-changing experiences, like the time I met a brown bear in the middle 
        of the woods in Quebec, or the time I crested a hill in time to watch the sunset over a glacier in 
        Iceland. The photos are taken in my current playground in and around Mont Xoldo, in the Pays Basque.`
      },
      {
        title: 'Exploring the world',
        description: `Immersing myself in different cultures, learning various languages, getting to know 
        people from diverse backgrounds and spending time in numerous places throughout the world has opened 
        my eyes to the real world we live in. I was born in county Durham, and have lived in several places 
        in the UK, including Edinburgh, London, Anglesey, Cornwall and Cambridge. As soon as I finished my 
        studies, I moved to Taiwan, then to China where I spent time in Shanghai and Chengdu. Since then, 
        I've lived in Montreal and now in the Pays Basque. I'm looking forward to moving again soon ... 
        somewhere in France, but it'll depend on the best career opportunity!`
      },
      {
        title: 'Growing fruit and vegetables',
        description: `Since moving to the Pays Basque and into a house with a garden, I've taken up growing 
        fruit and vegetables. It really helps that the weather here swings between sunny and rainy ... 
        everything grows so quickly! Although there are limits to what can be grown due to the warmth and 
        humidity, I've successfully harvested tomatoes, aubergines, a range of peppers, potatoes, sweet 
        potatoes, lettuce, okra, beetroot, cucumbers, courgettes, apples, limes, blueberries, strawberries, 
        raspberries and blackberries. I'm looking forward to seeing what the next harvest will bring!`
      }
    ]
  },
  fr: {
    errors: {
      titles: {
        notFound: '404 Introuvable',
        unexpected: 'Oups!'
      },
      messages: {
        notFound: 'Désolé, page introuvable.',
        unexpected: 'Désolé, une erreur inattendue s\'est produite.'
      },
      homeLink: 'Retour à la page d\'accueil'
    },
    pages: {
      aboutMe: 'À Propos',
      projects: 'Projets',
      freeTime: 'Loisirs'
    },
    header: {
      name: 'Mélissa Vialaneix',
      title: 'Développeur',
      title1: 'Front End',
      title2: 'Back End',
      title3: 'Full Stack'
    },
    footer: {
      copyright: ['Copyright © 2025 Mélissa Vialaneix.', 'Tous droits réservés.'],
      linkedIn: 'Visitez mon profil LinkedIn',
      gitHub: 'Visitez mon profil GitHub',
      CV: 'Télécharger mon CV',
      CVName: '/MelissaVialaneixCVDevFrEn.pdf'
    },
    welcome: {
      summary: `Je recherche un poste de développeuse full stack au sein d'une équipe qui pourra bénéficier de mes 
      compétences et de l'expérience que j'apporte de mes fonctions précédentes, et qui m'offrira un environnement où je 
      pourrai apprendre et évoluer en tant que développeuse junior. J'apporte plusieurs années d'expérience en tant que 
      chef de produit, conceptrice pédagogique, écrivain et responsable d'édition, ainsi que plusieurs années d'expérience 
      dans l'enseignement de l'anglais en Chine et à Taïwan.`,
      strapline: 'N\'hésitez pas à me contacter si vous recherchez une développeuse qui se demande constamment ... ',
      question: 'Quel est le prochain problème que je vais résoudre ?',
      emailMe: 'Écrivez-moi'
    },
    aboutMe: {
      summary: [
        `Je recherche un poste de développeuse full stack au sein d'une entreprise où je pourrais travailler avec une équipe 
        de développeurs aux expériences variées, en apportant avec moi un éventail de compétences et d'expérience issues de 
        mes fonctions précédentes. En tant que développeuse junior, j'aimerais travailler avec des développeurs auprès 
        desquels je pourrai apprendre et évoluer dans ce nouveau rôle. Mon goût pour l'apprentissage et ma curiosité dans le 
        monde en constante évolution du développement web continuent de me motiver, avec la même question toujours sur le 
        bout de la langue ... Quel est le prochain problème que je vais résoudre ?`,
        `Après avoir travaillé aux côtés d'ingénieurs logiciels dans le secteur de l'édition éducative, et de plus en plus 
        fasciné par leur travail, j'ai décidé de me reconvertir en développeuse full stack. Ma passion pour ce domaine 
        remonte à mes années universitaires, lorsque j'ai étudié le développement web et créé un site web avec Dreamweaver 
        MX en utilisant Flash pour les animations ! Pouvoir constater les progrès considérables réalisés dans le 
        développement web depuis cette époque a alimenté mon désir de poursuivre mon parcours d'apprentissage.`,
        `J'ai choisi d'étudier le développement web full stack avec The Odin Project car cette formation reflète le 
        développement en conditions réelles : elle m'a amenée à lire de la documentation, déboguer de manière autonome et 
        construire des projets sans l'aide d'un instructeur. Avoir mené à bien cette formation en autodidacte démontre ma 
        capacité à prendre en main mon apprentissage, à résoudre des problèmes sans assistance immédiate, et à relever des 
        défis sans solution évidente. Ces compétences se transposent directement : la curiosité pour explorer de nouveaux 
        outils, la persévérance pour déboguer les erreurs les plus tenaces, et l'autonomie nécessaire pour s'adapter à 
        l'évolution constante des technologies.`
      ]
    },
    projects: {
      subTitle: 'Caractéristiques',
      buttons: ['Aperçu', 'Code Source'],
      apps: [
        {
          id: 1,
          title: 'Blog App',
          previewUrl: 'https://blog-api-view.netlify.app/',
          githubUrl: 'https://github.com/Meltasy/blog-api',
          description: `Une plateforme de blog avec une API backend prenant en charge un site public pour 
          les lecteurs et un tableau de bord privé pour les auteurs.`,
          solutions: [
            `🎎 Conception à double usage : Séparation claire entre le tableau de bord de création de contenu 
            et le blog public`,
            `🔐 Contrôle d'accès intelligent : Permissions basées sur les rôles pour sécuriser les fonctions 
            d'administration face aux lecteurs`,
            `📝 Cycle de vie complet du contenu : Rédigez, modifiez, publiez et gérez des articles avec contrôle 
            intégral du workflow`,
            `💬 Système de commentaires engageant : Comptes utilisateurs, fils de discussions et commentaires 
            auto-gérés`,
            '🧩 Architecture évolutive : Composants modulaires qui évoluent indépendamment selon les besoins',
            `📢 Mises à jour en temps réel : Synchronisation de contenu en direct pour maintenir la fraîcheur et 
            la réactivité`,
            '🔒 Sécurité renforcée : Routes protégées et sessions authentifiées tout au long du processus'
          ],
          skillsIcons: [JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'blogApi'
        },
        {
          id: 2,
          title: 'Wine App',
          previewUrl: 'https://inventory-application-production-b054.up.railway.app/',
          githubUrl: 'https://github.com/Meltasy/inventory-application',
          description: `Un système de gestion d'inventaire pour cataloguer, suivre et gérer les vins d'une 
          cave, avec un tableau de bord dynamique.`,
          solutions: [
            `📊 Gestion intelligente d'inventaire : Catalogue numérique de vins avec suivi des quantités en temps 
            réel`,
            `💡 Recommandations de dégustation intelligentes : Identification automatisée des vins à maturité 
            optimale`,
            `🔎 Recherche et filtrage avancés : Trouvez instantanément les vins par nom, couleur, producteur, région 
            ou appellation`,
            '🍾 Cycle de vie complet du vin : Suivi de chaque bouteille de la cave à la consommation',
            `🍷 Indicateurs d'état visuels : Visualiser d'un coup d'œil l'état de l'inventaire et recommandations de 
            dégustation`,
            `💫 Expérience utilisateur fluide : Design responsive avec formulaires dynamiques et mises à jour en temps 
            réel`,
            `🔒 Assurance d'intégrité des données : Validation des entrées et architecture de base de données sans 
            redondance`
          ],
          skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'inventoryApp'
        },
        {
          id: 3,
          title: 'Shopping App',
          previewUrl: 'https://meltasy-shopping-cart.netlify.app/',
          githubUrl: 'https://github.com/Meltasy/shopping-cart',
          description: `Une application e-commerce moderne qui permet aux acheteurs de parcourir les produits 
          avec des informations détaillées, de gérer les quantités et de suivre leur panier en temps réel.`,
          solutions: [
            '💶 Catalogue produits dynamique : Parcourez une collection de produits avec prix et détails',
            `🧸 Détails produits : Consultez les informations complètes sur chaque produit incluant images et 
            descriptions`,
            `🛒 Gestion intelligente du panier : Ajoutez, supprimez et mettez à jour les articles sans effort, 
            avec mises à jour du panier en temps réel`,
            `🧮 Contrôles de quantité intuitifs : Ajustez les quantités avec boutons d'incrémentation / 
            décrémentation ou saisie manuelle`,
            `🧭 Navigation fluide : Transitions harmonieuses entre les pages d'accueil, boutique et panier pour une 
            expérience relaxante`,
            '📱 Design responsive : Interface optimisée pour une adaptation fluide aux écrans mobiles et desktop',
            '🔬 Tests exhaustifs : Couverture de tests rigoureuse garantissant une fonctionnalité fiable'
          ],
          skillsIcons: [Html, Css, JavaScript, React, ViteJS],
          imageKey: 'shoppingCart'
        },
        {
          id: 4,
          title: 'Battleship',
          previewUrl: 'https://meltasy.github.io/battleship/',
          githubUrl: 'https://github.com/Meltasy/battleship',
          description: `Une version web moderne du jeu de stratégie classique Battleship, avec un adversaire IA 
          intelligent et un design nostalgique inspiré des années 80.`,
          solutions: [
            '🚢 Gameplay intuitif : commandes simplifiées pour le placement des navires et les combats stratégiques',
            '🎯 Adversaire IA : joueur informatique intelligent avec des algorithmes de ciblage adaptatifs',
            '💻 Esthétique rétro : interface nostalgique inspirée des années 80 rendant hommage au jeu de société classique',
            `🔬 Tests complets : développé à l'aide de la méthodologie TDD (Test Driven Development) garantissant une 
            fonctionnalité robuste`
          ],
          skillsIcons: [Html, Css, JavaScript, Webpack],
          imageKey: 'battleship'
        }
      ]
    },
    hobbies: [
      {
        title: 'Course de trail',
        description: `La course à pied en pleine nature m'aide à me détendre et à clarifier mes idées, surtout lorsque 
        je cherche à résoudre un problème complexe. Cela m'a également permis d'explorer des lieux incroyables et de 
        vivre des expériences marquantes : comme le jour où j'ai croisé un ours brun en pleine forêt au Québec, ou 
        celui où j'ai atteint le sommet d'une colline juste à temps pour admirer le coucher de soleil sur un glacier en 
        Islande. Les photos ont été prises dans mon terrain de jeu actuel, autour du Mont Xoldo, au Pays basque.`
      },
      {
        title: 'Explorer le monde',
        description: `M'immerger dans différentes cultures, apprendre diverses langues, rencontrer des personnes 
        d'horizons divers et passer du temps dans de nombreux endroits à travers le monde m'a ouvert les yeux sur le 
        monde réel dans lequel nous vivons. Je suis née dans le comté de Durham et j'ai vécu dans plusieurs endroits au 
        Royaume-Uni, notamment à Édimbourg, Londres, Anglesey, en Cornouailles et à Cambridge. Dès que j'ai terminé mes 
        études, j'ai déménagé à Taïwan, puis en Chine où j'ai vécu à Shanghai et Chengdu. Depuis, j'ai vécu à Montréal et 
        maintenant au Pays basque. J'ai hâte de déménager à nouveau bientôt ... quelque part en France, mais cela dépendra 
        de la meilleure opportunité professionnelle !`
      },
      {
        title: 'Cultiver des fruits et légumes',
        description: `Depuis mon installation au Pays Basque, dans une maison avec jardin, je me suis mise à cultiver des 
        fruits et légumes. Le climat alternant entre soleil et pluie facilite grandement les choses ... tout pousse très 
        vite ! Bien qu'il y ait des limites à ce qui peut être cultivé, j'ai réussi à récolter des tomates, des aubergines, 
        des piments, des poivrons, des pommes de terre, des patates douces, de la laitue, du gombo, des betteraves, des 
        concombres, des courgettes, des pommes, des citrons verts, des myrtilles, des fraises, des framboises et des mûres. 
        J'ai hâte de voir ce que la prochaine récolte apportera !`
      }
    ]
  }
}

export default translations