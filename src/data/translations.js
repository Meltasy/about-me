import { JavaScript, Html, Css, Express, NodeJS, PostgreSQL, PrismaORM, React, ViteJS, Webpack } from '../components/icons/index'

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
      title: 'Web Developer',
      title1: 'Front End',
      title2: 'Back End',
      title3: 'Full Stack'
    },
    summary: 'Hello, I\'m Melissa. I\'ve recently changed direction in my career and have trained as a full stack web developer after working as a Learning Designer, Product Manager, Writer and Editor in educational publishing for over a decade. I\'m looking for a position within a company where I can work within a team of web developers of differing experiences, bringing with me a range of skills and experience from my previous roles. As a junior developer, I\'d love to work with more experienced developers, so that I can learn from them and grow within this new role. My love of learning and curiosity in the ever-evolving world of web development continue to drive me, with the same question always on the tip of my tongue ... What\'s the next problem for me to solve?',
    projects: [
      {
        id: 1,
        title: 'Blog App',
        previewUrl: 'https://blog-api-view.netlify.app/',
        githubUrl: 'https://github.com/Meltasy/blog-api',
        description: 'A blog platform with a backend API supporting a public site for readers and a private dashboard for authors.',
        solutions: ['🎎 Dual-purpose design: Clean Separation between content creation dashboard and public blog', '🔐 Smart access control: Role-based permissions keep admin functions secure from readers', '📝 Full content lifecycle: Draft, edit, publish and manage posts with complete workflow control', '💬 Engaging comment system: User accounts, threaded discussions, and self-managed comments', '🧩 Scalable architecture: Modular components that grow independently as needed', '📢 Live updates: Real-time content sync keeps everything fresh and responsive', '🔒 Enhanced security: Protected routes and authenticated sessions throughout'],
        skillsIcons: [JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'blogApi'
      },
      {
        id: 2,
        title: 'Wine Cellar App',
        previewUrl: 'https://inventory-application-production-b054.up.railway.app/',
        githubUrl: 'https://github.com/Meltasy/inventory-application',
        description: 'An inventory management system to catalog, track and manage the wine in my cellar, and to remind me when each bottle is ready for enjoying.',
        solutions: ['📊 Smart inventory management: Digital wine catalog with real-time quantity tracking', '💡 Intelligent drinking recommendations: Automated identification for wines at peak maturity', '🔎 Advanced search and filtering: Find wines instantly by name, color, producer, region or appellation', '🍾 Complete wine lifecycle: Track every bottle from cellar to consumption', '🍷 Visual Status Indicators: At-a-glance inventory health and drinking recommendations', '💫 Seamless user experience: Responsive design with dynamic forms and real-time updates', '🔒 Data integrity assurance: Validated inputs and redundancy-free database architecture'],
        skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'inventoryApp'
      }
    ],
    subTitle: 'Features',
    hobbies: [
      {
        title: 'Trail running',
        description: 'Running in the countryside helps me to relax and clear my mind, especially when I\'m working through a tricky problem. It\'s also enabled me to explore some incredible places and provided me with life-changing experiences, like the time I met a brown bear in the middle of the woods. The photos are taken in my current playground in and around Xoldokogaina, in the Pays Basque.',
        racesIntro: 'Some of the most memorable races I\'ve taken part in are:',
        races: ['Les Templiers: La Monna Lisa 30km, Millau', 'La Chute de Diable 50km, Québec', 'Ultra-Trail Harricana 42km, Québec']
      },
      {
        title: 'Exploring the world',
        description: 'Immersing myself in different cultures, learning various languages, getting to know people from different backgrounds and spending time in various places throughout the world has opened my eyes to the real world we live in. I was born in country Durham, and spent my childhood in various places throughout the UK, including Edinburgh, London, Anglesey, Cornwall and Cambridge. As soon as I finished my studies, I moved to Taiwan, then to China where I spent time in Shanghai and Chengdu. I\'ve also lived in Montreal and now I live in the Pays Basque. I\'m looking forward to moving again soon ... somewhere in France, but I\'ve yet to make my decision!'
      },
      {
        title: 'Growing fruit and vegetables',
        description: ''
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
      title: 'Développeur Web',
      title1: 'Front End',
      title2: 'Back End',
      title3: 'Full Stack'
    },
    summary: '',
    projects: [
      {
        id: 1,
        title: 'App Blog',
        previewUrl: 'https://blog-api-view.netlify.app/',
        githubUrl: 'https://github.com/Meltasy/blog-api',
        description: 'Un blog avec deux interfaces utilisateur avec une API pour accéder au backend.',
        solutions: [],
        skillsIcons: [JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'blogApi'
      },
      {
        id: 2,
        title: 'App Cave à Vin',
        previewUrl: 'https://inventory-application-production-b054.up.railway.app/',
        githubUrl: 'https://github.com/Meltasy/inventory-application',        description: 'Une application de gestion des stocks pour ma cave à vin.',
        solutions: [],
        skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'inventoryApp'
      }
    ],
    subTitle: '',
    hobbies: [
      {
        title: 'Course de trail',
        description: '',
        races: []
      },
      {
        title: 'Explorer le monde',
        description: ''
      },
      {
        title: 'Cultiver de fruits et légumes',
        description: ''
      }
    ]
  }
}

export default translations