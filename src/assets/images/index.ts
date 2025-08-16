// Configuração centralizada de imagens
// Importe suas imagens aqui e exporte para uso no App.tsx

// Exemplo de como importar imagens (descomente quando adicionar suas imagens)
// export const images = {
//   profile: {
//     main: '/src/assets/images/profile/profile.jpg',
//     alt: '/src/assets/images/profile/profile-2.jpg',
//   },
//   backgrounds: {
//     header: '/src/assets/images/backgrounds/header-bg.jpg',
//     hero: '/src/assets/images/backgrounds/hero-bg.jpg',
//   },
//   projects: {
//     votoSintese: '/src/assets/images/projects/voto-sintese.jpg',
//     ecommerce: '/src/assets/images/projects/ecommerce-desire.jpg',
//     bot: '/src/assets/images/projects/finance-bot.jpg',
//   },
// };

// Placeholder para quando não há imagens
export const placeholderImages = {
  profile: 'https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=JA',
  header: 'https://via.placeholder.com/1920x1080/1E40AF/FFFFFF?text=Header+Background',
  project: 'https://via.placeholder.com/800x600/6B7280/FFFFFF?text=Project+Image',
};

// Configurações de imagens
export const imageConfig = {
  profile: {
    width: 320,
    height: 320,
    alt: 'James Almeida - Desenvolvedor Fullstack',
  },
  header: {
    width: 1920,
    height: 1080,
    alt: 'Background do header',
  },
  projects: {
    width: 800,
    height: 600,
    alt: 'Imagem do projeto',
  },
};
