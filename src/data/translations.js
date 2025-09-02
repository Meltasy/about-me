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
    summary: 'I am transitioning to a career as a full stack web developer after several years\' experience working as a Learning Designer, Product Manager, Writer and Editor, and several years\' experience teaching English in China and Taiwan. My decision to change career came from years of working alongside software engineers in the educational publishing industry, with a growing fascination in their work.',
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
        description: 'An inventory management app for my wine cellar.',
        solutions: [],
        skillsIcons: [JavaScript, NodeJS, Express, PostgreSQL, PrismaORM],
        imageKey: 'blogApi'
      }
    ],
    hobbies: ['Trail running', 'Growing fruit and vegetables', 'Learning languages']
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
    summary: 'Je suis en train de passer à une carrière de développeur web full stack après plusieurs années d\'expérience en tant que chef de produit, conceptrice pédagogique, écrivain et responsable d\'édition, et plusieurs années d\'expérience dans l\'enseignement de l\'anglais en Chine et à Taïwan. J\'ai décidé de changer de carrière après avoir travaillé pendant des années aux côtés d\'ingénieurs en logiciel dans le secteur de l\'édition scolaire et avoir été de plus en plus fascinée par leur travail.',
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
        imageKey: 'blogApi'
      }
    ],
    hobbies: ['Course de trail', 'Cultiver de fruits et légumes', 'Apprentissage des langues']
  }
}

export default translations