import {
  JavaScript,
  TypeScript,
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
      copyright: ['Copyright © 2026 Melissa Vialaneix.', 'All rights reserved.'],
      linkedIn: 'Visit my LinkedIn profile',
      gitHub: 'Visit my GitHub profile',
      CV: 'Download my CV',
      CVName: '/MelissaVialaneixCVAltEnFr.pdf'
    },
    welcome: {
      summary: `Experienced digital product manager actively transitioning into software development, with 
      more than ten years of experience leading web, mobile, and interactive digital products for major 
      international publishers. Strong expertise in the product lifecycle, from roadmap planning to 
      production deployment, now complemented by hands-on technical skills in full-stack development. 
      Currently seeking an alternance with a tech company in the Lyon area, ahead of starting a BSc in 
      Information Systems & Data Management (CNAM Occitanie, September 2026).`,
      strapline: 'Get in touch if you\'re looking for a developer who constantly asks herself ... ',
      question: 'What\'s the next problem for me to solve?',
      emailMe: 'Email me'
    },
    aboutMe: {
      summary: [
        `My path into software development isn't a sudden change of direction — it's the natural next 
        step of a career spent at the intersection of technology and content. But to understand that, it 
        helps to know a little about where I come from.`,
        `I grew up with a French mother and a British father, which means I've been navigating between 
        cultures and languages my whole life. After university, I spent a year in Taiwan and six years in 
        China teaching English, immersing myself completely in those cultures and travelling throughout both 
        countries whenever I could. I often joke that I'm half British, half French, half Chinese. As Fernand 
        says in Les Tontons Flingeurs, the fractions don't have to add up.`,
        `The internet has always been a constant. I was one of those teenagers hunched over a computer in the 
        early 1990s, chatting to strangers across the globe on CompuServe, long before most people knew what 
        the internet was. My university degree, split roughly 55% Creative Writing and 45% Mass Communications 
        with a strong IT and web development thread, reflected that dual interest in language and technology 
        that has never really gone away.`,
        `After returning to the UK from China, I moved into educational publishing, first as an editor and 
        eventually as a digital product manager, leading the development of complex multi-platform products 
        at Cambridge University Press and Macmillan Education. It was at Macmillan that things shifted. My 
        managers noticed I had an unusual ability to understand both the editorial and the digital sides of a 
        project, to speak both languages one could say. I was gradually pulled away from print and given more 
        and more responsibility for digital products. I started creating guides and templates to help editors, 
        writers and content creators who were used to working with print materials understand how to work with 
        developers and digital tools. For some colleagues, I was quite literally a translator between two 
        worlds.`,
        `That experience, of standing at the boundary between content and code, and of seeing how much clearer 
        everything becomes when someone can speak both languages fluently, is what eventually made me want to 
        cross to the other side entirely. For more than six years running my own business as a digital product 
        manager, I led 1 to 3 year development cycles for multi-format digital learning products across web, 
        mobile, interactive whiteboards and apps, coordinating cross-functional teams and managing client 
        delivery. I understood the product. I understood the users. I understood what the developers were 
        building. I just wanted to be the one building it.`,
        `In 2024 I began retraining in earnest, completing The Odin Project's full-stack web development 
        curriculum, a course I chose specifically because it mirrors real-world development: reading 
        documentation, debugging independently, building real projects without hand-holding. In April 2026 I 
        completed a one-month internship at Miratlas, working remotely as part of an agile development team on 
        two different stacks, contributing to real issues and merge requests, reworking UI, and producing 
        technical architecture documentation and a user guide for a live product. It confirmed everything I'd 
        hoped: I love this work.`,
        `I'm currently looking for an alternance in the Lyon area to complement my BSc in Information Systems 
        and Data Management at CNAM Occitanie, starting September 2026.`,
        `You can browse my projects to see what I've been building, and find out a little more about what I 
        get up to outside of work on the Hobbies page, because there's more to me than git commits.`
      ]
    },
    projects: {
      subTitle: 'Features',
      button: 'Source Code',
      apps: [
        {
          id: 1,
          title: 'Chat App',
          githubUrl: 'https://github.com/Meltasy/chat-app-front',
          description: `A full-stack real-time chat app supporting direct messages and group chats, with live message 
          delivery powered by Socket.IO.`,
          solutions: [
            '💬 Real-time messaging: Instant message delivery using Socket.IO — no refresh needed',
            '📱 Responsive design: Optimized layout that adapts easily to mobile and desktop screens',
            '👥 Flexible chat types: Create direct messages with one person or group chats with multiple members',
            '🛠️ Full message lifecycle: Send, edit, and delete your own messages with live updates for all members',
            '👮 Role-based access control: Admins can rename their groups, add and remove members, and delete the chat',
            '🔒 Enhanced security: Protected routes and authenticated sessions throughout'
          ],
          skillsIcons: [TypeScript, JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'chatApp'
        },
        {
          id: 2,
          title: 'Blog App',
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
          id: 3,
          title: 'Wine App',
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
          id: 4,
          title: 'Shopping App',
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
          id: 5,
          title: 'Battleship',
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
        Iceland. The photos were taken in my former playground, around Mont Xoldo in the Basque Country. 
        Since then, I've started exploring the Grand Parc de Miribel-Jonage which, although extremely flat in 
        comparison, is a beautiful place to run.`
      },
      {
        title: 'Exploring the world',
        description: `Immersing myself in different cultures, learning various languages, getting to know 
        people from diverse backgrounds and spending time in numerous places throughout the world has opened 
        my eyes to the real world we live in. I was born in county Durham, and have lived in several places 
        in the UK, including Edinburgh, London, Anglesey, Cornwall and Cambridge. As soon as I finished my 
        studies, I moved to Taipei in Taiwan, then to China where I spent time in Shanghai and Chengdu. Since 
        then, I've lived in Montreal in Quebec, Hendaye in the Pays Basque, and I now live in Lyon, the 
        gastronomic capital of France.`
      },
      {
        title: 'Growing fruit and vegetables',
        description: `When I moved to the Pays Basque and into a house with a garden, I took up growing 
        fruit and vegetables. It really helped that the weather there swung between sunny and rainy ... 
        everything grew so quickly! Although there were limits to what could be grown due to the warmth and 
        humidity, I successfully harvested tomatoes, aubergines, a range of peppers, potatoes, sweet 
        potatoes, lettuce, okra, beetroot, cucumbers, courgettes, apples, limes, blueberries, strawberries, 
        raspberries and blackberries. Now that I live in a completely different climate, I'll need to learn 
        what grows well here ... I wonder what the next harvest will bring!`
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
      copyright: ['Copyright © 2026 Mélissa Vialaneix.', 'Tous droits réservés.'],
      linkedIn: 'Visitez mon profil LinkedIn',
      gitHub: 'Visitez mon profil GitHub',
      CV: 'Télécharger mon CV',
      CVName: '/MelissaVialaneixCVAltFrEn.pdf'
    },
    welcome: {
      summary: `Cheffe de produit digital expérimentée, en reconversion active vers le développement logiciel, avec plus 
      de dix ans d'expérience dans le pilotage de produits numériques web, mobile et interactifs pour de grands éditeurs 
      internationaux. Solide culture du cycle de vie produit, de la roadmap à la mise en production, que je complète 
      aujourd'hui par des compétences techniques concrètes en développement full-stack. Actuellement à la recherche d'une 
      alternance dans une entreprise tech de la région lyonnaise, en vue d'intégrer une Licence Professionnelle Systèmes 
      d'Information et Gestion de Données (CNAM Occitanie, septembre 2026).`,
      strapline: 'N\'hésitez pas à me contacter si vous recherchez une développeuse qui se demande constamment ... ',
      question: 'Quel est le prochain problème que je vais résoudre ?',
      emailMe: 'Écrivez-moi'
    },
    aboutMe: {
      summary: [
        `Ma reconversion vers le développement logiciel n'est pas un virage à 180 degrés — c'est la suite logique d'une 
        carrière passée à l'intersection de la technologie et du contenu. Mais pour comprendre ça, il faut savoir d'où je 
        viens.`,
        `J'ai grandi avec une mère française et un père britannique, ce qui fait que je navigue entre les cultures et les 
        langues depuis toujours. Après l'université, j'ai passé un an à Taïwan et six ans en Chine à enseigner l'anglais, en 
        m'immergeant complètement dans ces cultures et en voyageant dans les deux pays dès que j'en avais l'occasion. Je dis 
        souvent en plaisantant que je suis à moitié britannique, à moitié française, à moitié chinoise. Comme dirait Fernand 
        dans Les Tontons Flingeurs, les fractions, ça ne s'additionne pas forcément.`,
        `Internet, en revanche, a toujours été une constante. J'étais de ces ados penchées sur un ordinateur au début des 
        années 90, à discuter avec des inconnus aux quatre coins du monde sur CompuServe, bien avant que la plupart des gens 
        sachent ce qu'était internet. Ma licence, partagée à peu près entre 55% création littéraire et 45% communications de 
        masse avec un solide fil conducteur en informatique et développement web, reflétait cet intérêt double pour le 
        langage et la technologie qui ne m'a jamais vraiment quittée.`,
        `De retour au Royaume-Uni après la Chine, je me suis tournée vers l'édition éducative, d'abord comme responsable 
        d'édition, puis comme cheffe de produit digital, pilotant le développement de produits numériques multi-plateformes 
        complexes chez Cambridge University Press et Macmillan Education. C'est chez Macmillan que les choses ont basculé. 
        Mes managers ont remarqué que j'avais une capacité particulière à comprendre à la fois le côté éditorial et le côté 
        digital d'un projet, à parler les deux langages, si l'on peut dire. On m'a progressivement éloignée des produits 
        print pour me confier de plus en plus de responsabilités sur les produits numériques. J'ai commencé à créer des 
        guides et des templates pour aider les éditeurs, auteurs et créateurs de contenus habitués au print à comprendre 
        comment travailler avec des développeurs et des outils numériques. Pour certains collègues, j'étais littéralement 
        une traductrice entre deux mondes.`,
        `C'est cette expérience, d'avoir été à la frontière entre le contenu et le code, et d'avoir vu à quel point tout 
        devient plus clair quand quelqu'un parle couramment les deux langages, qui m'a finalement donné envie de franchir 
        complètement cette frontière. Pendant plus de six ans à la tête de ma propre structure en tant que cheffe de 
        produit digital, j'ai piloté des cycles de développement de 1 à 3 ans pour des produits pédagogiques numériques 
        multi-formats sur web, mobile, TNI et application, en coordonnant des équipes transverses et en gérant les 
        livraisons clients. Je comprenais le produit. Je comprenais les utilisateurs. Je comprenais ce que les développeurs 
        construisaient. Je voulais juste être celle qui construisait.`,
        `En 2024, j'ai commencé à me former sérieusement, en suivant le cursus de développement web full-stack de The Odin 
        Project, une formation que j'ai choisie précisément parce qu'elle reflète le développement en conditions réelles : 
        lire de la documentation, déboguer de manière autonome, construire de vrais projets sans filet. En avril 2026, j'ai 
        effectué un stage d'un mois chez Miratlas, en travaillant à distance au sein d'une équipe de développement agile 
        sur deux stacks différentes, en contribuant à de vraies issues et merge requests, en refondant des interfaces et en 
        rédigeant de la documentation technique et un guide utilisateur pour un produit en production. Ça a confirmé tout 
        ce que j'espérais : j'adore ce travail.`,
        `Je suis actuellement à la recherche d'une alternance dans la région lyonnaise, dans le cadre de ma Licence Pro 
        Systèmes d'Information et Gestion de Données au CNAM Occitanie, à partir de septembre 2026.`,
        `Vous pouvez parcourir mes projets pour voir ce que j'ai construit, et en apprendre un peu plus sur ce que je fais 
        en dehors du travail sur la page Loisirs, parce qu'il n'y a pas que les git commits dans la vie.`
      ]
    },
    projects: {
      subTitle: 'Caractéristiques',
      button: 'Code Source',
      apps: [
        {
          id: 1,
          title: 'Chat App',
          githubUrl: 'https://github.com/Meltasy/chat-app-front',
          description: `A full-stack real-time chat app supporting direct messages and group chats, with live message 
          delivery powered by Socket.IO.`,
          solutions: [
            '💬 Messagerie en temps réel : Envoi instantané des messages grâce à Socket.IO — sans rechargement de page',
            '📱 Design responsive : Interface optimisée pour une adaptation fluide aux écrans mobiles et desktop',
            `👥 Types de conversations flexibles : Créez des chats privés ou des conversations de groupe avec plusieurs 
            membres`,
            `🛠️ Cycle de vie complet des messages : Envoyez, modifiez et supprimez vos messages en temps réel pour tous 
            les membres`,
            `👮 Contrôle d'accès par rôles : Les admins peuvent renommer leurs groupes, ajouter ou supprimer des membres, 
            et supprimer le chat`,
            '🔒 Sécurité renforcée : Routes protégées et sessions authentifiées tout au long du processus'
          ],
          skillsIcons: [TypeScript, JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
          imageKey: 'chatApp'
        },
        {
          id: 2,
          title: 'Blog App',
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
          id: 3,
          title: 'Wine App',
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
          id: 4,
          title: 'Shopping App',
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
          id: 5,
          title: 'Battleship',
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
        Islande. Les photos ont été prises sur mon ancien terrain de jeu, autour du Mont Xoldo, au Pays basque. Depuis, 
        j'ai commencé à explorer le Grand Parc de Miribel-Jonage qui, même s'il est extrêmement plat en comparaison, est 
        un très bel endroit pour courir.`
      },
      {
        title: 'Explorer le monde',
        description: `M'immerger dans différentes cultures, apprendre diverses langues, rencontrer des personnes 
        d'horizons divers et passer du temps dans de nombreux endroits à travers le monde m'a ouvert les yeux sur le 
        monde réel dans lequel nous vivons. Je suis née dans le comté de Durham et j'ai vécu dans plusieurs endroits au 
        Royaume-Uni, notamment à Édimbourg, Londres, Anglesey, en Cornouailles et à Cambridge. Dès que j'ai terminé mes 
        études, j'ai déménagé à Taipei, à Taïwan, puis en Chine où j'ai vécu à Shanghai et Chengdu. Depuis, j'ai vécu à 
        Montréal, au Québec à Hendaye, au Pays basque, et je vis maintenant à Lyon, la capitale gastronomique de la France.`
      },
      {
        title: 'Cultiver des fruits et légumes',
        description: `Quand je vivais au Pays Basque, dans une maison avec jardin, je m'étais mise à cultiver des fruits 
        et légumes. Le climat alternant entre soleil et pluie facilitait grandement les choses ... tout poussait très 
        vite ! Bien qu'il y ait eu des limites à ce qui pouvait être cultivé, j'avais réussi à récolter des tomates, des 
        aubergines, des piments, des poivrons, des pommes de terre, des patates douces, de la laitue, du gombo, des 
        betteraves, des concombres, des courgettes, des pommes, des citrons verts, des myrtilles, des fraises, des 
        framboises et des mûres. Maintenant que je vis dans un climat complètement différent, il va falloir que j'apprenne 
        ce qui pousse bien ici ... je me demande ce que la prochaine récolte me réservera !`
      }
    ]
  }
}

export default translations