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
        description: 'Traditional blog platforms often tightly couple the content management system with the public-facing blog, creating security vulnerabilities and limiting flexibility. Content creators need separate, secure environments for writing and publishing content compared to reading and commenting on it, while maintaining a unified backend that serves both interfaces efficiently.',
        solutions: ['Separating concerns: Distinct frontends for content creation vs. content', 'Enhanced security: Protected admin interface isolated from public blog', 'API-first approach: Flexible backend that can serve multiple clients', 'Modern authentication: JWT-based security with role-based access control', 'Scalable architecture: Modular design allowing independent scaling of components'],
        skillsIcons: [JavaScript, React, ViteJS, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'blogApi'
      },
      {
        id: 2,
        title: 'Wine Cellar App',
        previewUrl: 'https://inventory-application-production-b054.up.railway.app/',
        githubUrl: 'https://github.com/Meltasy/inventory-application',
        description: 'Personal wine collectors face significant challenges managing their collections without proper digital infrastructure. Traditional methods like spreadsheets or paper records become unwieldly as collections grow, making it difficult to track optimal drinking windows, manage inventory levels, and efficiently locate specific wines by their characteristics. Wine enthusiasts need comprehensive tracking systems that can handle complex wine data while providing intuitive search and filtering capabilities.',
        solutions: ['Centralized inventory management: Complete digital catalog with detailed wine information and quantity tracking', 'Intelligent drinking recommendations: Automated identification of wines at peak maturity or requiring immediate consumption', 'Advanced search capabilities: Multi-criteria filtering by color, producer, region, appellation, alphabetical sorting', 'Normalized data architecture: Efficient PostgreSQL database design preventing redundancy while maintaining data integrity', 'Full lifecycle tracking: Complete CRUD operations with transaction-safe quantity updates and consumption history'],
        skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'inventoryApp'
      }
    ],
    solutionsIntro: 'This project solves these challenges by:',
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
    solutionsIntro: '',
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