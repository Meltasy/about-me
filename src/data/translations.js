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
    header: {
      name: 'Melissa Vialaneix',
      title: 'Full Stack Developer',
      stack: 'PERN - PostgreSQL, Express, React, NodeJS'
    },
    pages: {
      aboutMe: 'Welcome',
      projects: 'Projects',
      freeTime: 'Hobbies'
    },
    projects: [
      {
        id: 1,
        title: 'Blog App',
        description: 'A blog with two user interfaces with an API to access the backend.'
      },
      {
        id: 2,
        title: 'Wine Cellar App',
        description: 'An inventory management app for my wine cellar.'
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
    header: {
      name: 'Mélissa Vialaneix',
      title: 'Développeur Full Stack',
      stack: 'PERN - PostgreSQL, Express, React, NodeJS'
    },
    pages: {
      aboutMe: 'Accueil',
      projects: 'Projets',
      freeTime: 'Loisirs'
    },
    projects: [
      {
        id: 1,
        title: 'App Blog',
        description: 'Un blog avec deux interfaces utilisateur avec une API pour accéder au backend.'
      },
      {
        id: 2,
        title: 'App Cave à Vin',
        description: 'Une application de gestion des stocks pour ma cave à vin.'
      }
    ],
    hobbies: ['Course de trail', 'Cultiver de fruits et légumes', 'Apprentissage des langues']
  }
}

export default translations