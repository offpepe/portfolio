const data = {
    name: 'Alan Albuquerque F. Lopes',
    age: '21 anos',
    nationality: 'brasileiro',
    about: `Meu nome é Alan, sou nativo de Corumbá-MS e atualmente moro em Campo Grande-MS, capital do estado.
    Gosto de programar desde os meus 16 anos, após ser inserido nesse mundo por meio de um projeto escolar que envolvia lógica de programação, e desde então venho me aprofundando no assunto.`,
    skills: {
      progl:[
          {
            name: 'JavaScript',
            icon: 'https://img.icons8.com/color/144/000000/javascript.png',
            level: '4/5',
          },
          {
            name: 'Python',
            icon: 'https://img.icons8.com/color/48/000000/python.png',
            level: '3/5',
          },
          {
            name: 'Lua',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png',
            level: '2/5'
          },
          {
            name: 'C#',
            icon: 'https://img.icons8.com/ios-filled/50/000000/c-sharp-logo.png',
            level: '2/5'
          },
        ],
      frameWorks: [
          {
              name: 'React',
              icon: 'https://img.icons8.com/office/80/000000/react.png',
              level: '4/5',
          },
          {
              name: 'Redux',
              icon: 'https://img.icons8.com/color/48/000000/redux.png',
              level: '4/5',
          },
          {
              name: 'Jest',
              icon: 'https://img.icons8.com/emoji/96/000000/joker-.png',
              level: '4/5',
          },
          {
            name: 'Bulma',
            icon: 'https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png',
            level: '5/5'
          },
      ],
      habilities: [
          'Experiência com programação orientada ao Objeto',
          'Inglês avançado',
          'Conhecimento Avançado em HTML e CSS',
          'Experiência em montagem e edição com pacote Adobe',
          'Conhecimento e experiência com TDD',
          'Conhecimento e experiência em metodologias ágeis, principalemente o método Kanban',
      ]
    },
    network: {
       github: {
          path: 'https://github.com/offpepe/',
          icon: 'https://img.icons8.com/windows/128/000000/github.png'
        },
       linkedin: {
           path: 'https://www.linkedin.com/in/alan-albuquerque-f-lopes-aa404b206/',
           icon: 'https://img.icons8.com/fluent/48/000000/linkedin.png'
       },
       twitter: {
           path: 'https://twitter.com/Offplayer_G',
           icon: 'https://img.icons8.com/color/48/000000/twitter-squared.png'
       },
       instagram: {
           path: 'https://www.instagram.com/alanalbuquerq/',
           icon: 'https://img.icons8.com/cute-clipart/64/000000/instagram-new.png'
       },
    },
    
}

export const projects = [
  {
    name: 'Lesson Learned',
    releaseDate: '23/02/2021',
    resume: `Este foi o primeiro projeto feito com o conhecimentos básicos em HTML e CSS`,
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS'],
    imagePath: 'https://jzeroblog.files.wordpress.com/2016/10/38c1b5d.jpg?w=676',
    repoLink: 'https://github.com/tryber/sd-010-a-project-lessons-learned/tree/offpepe-lessons-learned-project',
    appLink: process.env.PUBLIC_URL + '/projects/Lesson-learned/index.html', 
  },
  {
    name: 'Playground Functions',
    releaseDate: '02/03/2021',
    resume: 'Neste projeto foram resolvidos problemas utilizando javascript básico',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['JS'],
    imagePath: 'https://www.incimages.com/uploaded_files/image/1920x1080/software-computer-code-1940x900_35196.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-playground-functions/tree/offpepe-project-playground-functions',
    appLink: 'not-found',
  },
  {
    name: 'Pixel Art',
    releaseDate: '09/03/2021',
    resume: 'Foi o primeiro projeto utilizando HTML e JavaScript com o DOM',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://image.freepik.com/vecteurs-libre/pixel-art-set-papeterie-stylo-isole_150088-355.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-pixels-art/tree/offpepe-project-pixels-art',
    appLink: process.env.PUBLIC_URL + '/projects/Pixel-art/index.html',
  },
  {
    name: 'To Do List',
    releaseDate: '10/03/2021',
    resume: 'O propósito desse projeto foi testar conhecimentos em JS e lógica com o DOM e com o localStorage',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://www.wikihow.com/images_en/thumb/3/38/Make-a-To-Do-List-Step-5-Version-3.jpg/v4-460px-Make-a-To-Do-List-Step-5-Version-3.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-todo-list/tree/offpepe-todo-list-project',
    appLink: process.env.PUBLIC_URL + '/projects/ToDo-list/index.html',
  },
  {
    name: 'Meme Generator',
    releaseDate: '11/03/2021',
    resume: 'Aqui foram testados conhecimentos com HTML forms em conjunto com o DOM',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://www.memesmonkey.com/images/memesmonkey/58/583d7214c22c5a864c2c65f2e1d82988.jpeg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-meme-generator/tree/offpepe-project-meme-generator',
    appLink: process.env.PUBLIC_URL + '/projects/Meme-generator/index.html',
  },
  {
    name: 'Facebook SignUp',
    releaseDate: '22/03/2021',
    resume: 'Este foi o primeiro projeto em dupla, trabalhando a comunicação e a colaboração',
    participants: [
      {
        name: 'Getulio Gutemberg',
        gitHub: 'getuliogutemberg',
      }
    ],
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'http://www.loginsigninsignup.com/wp-content/uploads/2015/08/www.fb_.com-login-sign-in-fb-account.png',
    repoLink: 'https://github.com/tryber/sd-010-a-project-facebook-signup/tree/offpepe-facebook-project',
    appLink: process.env.PUBLIC_URL + '/projects/Facebook-signup/index.html',
  },
  {
    name: 'Unit tests',
    releaseDate: '29/03/2021',
    resume: 'Aqui foi utilizado o conhecimento adquirido com o conteúdo sobre TDD, utilizando a biblioteca assert',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['JS'],
    imagePath: 'https://miro.medium.com/max/1024/1*Y07KF-_laqG2cJ1Squ0Bag.png',
    repoLink: 'https://github.com/tryber/sd-010-a-project-js-unit-tests/tree/offpepe-project-js-unit-tests/tests',
    appLink: 'not-found',
  },
  {
    name: 'Zoo Functions',
    releaseDate: '08/04/2021',
    resume: 'Similar ao Playground Functions porém com lógicas mais complexas utilizando dados já existentes e principalmente, utilizando HOFs ',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['JS'],
    imagePath: 'https://miro.medium.com/max/812/1*-kjr_j7fmoQNIGLf8eZIgw.jpeg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-zoo-functions/tree/offpepe-zoo-function-project/test',
    appLink: 'not-found'
  },
  {
    name: 'Shopping Cart Page',
    releaseDate: '20/04/2021',
    resume: 'Aqui foi utilizado o conhecimento sobre funções assincronas e promises',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://cms-assets.tutsplus.com/uploads/users/2659/posts/26768/image/eCommerce%20website%20templates%20themeforest.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-shopping-cart/tree/offpepe-project-shopping-cart',
    appLink: process.env.PUBLIC_URL + '/projects/Shoppingcart-page/index.html',
  },
  {
    name: 'Jest',
    releaseDate: '23/04/2021',
    resume: 'Com o intuito de exercitar conhecimentos em TDD com Jest',
    module: {
      id: 'fp',
      img: 'https://img.icons8.com/dotty/80/000000/vector.png',
    },
    knowledgeUsed: ['JS', 'Jest'],
    imagePath: 'https://user-images.githubusercontent.com/2494410/26874610-2cd5a1c0-4b76-11e7-9520-00f33953592b.png',
    repoLink: 'https://github.com/tryber/sd-010-a-project-jest/tree/offpepe-project-jest',
    appLink: 'not-found',
  },
  {
    name: 'Movie Cards Library, Stateful e CRUD',
    releaseDate: '25/05/2021',
    resume: 'Separado em 3 partes, todos utilizando React, depois trabalhando com as props e o state, e por fim o React-Router-Dom',
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['JS', 'React'],
    imagePath: 'https://devporai.com.br/wp-content/uploads/2021/01/O-que-e-CRUD-740x414.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-movie-card-library-crud/tree/offpepe-project-movie-card-library-crud',
    appLink: 'not-found',
  },
  {
    name: 'FrontEnd Online Store',
    releaseDate: '14/05/2021',
    resume: 'Com as competências utilizadas no MovieCards, foi desenvolvido em grupo o frontEnd de uma loja, utilizando o método Kanban',
    participants: [
      {
        name: 'Eduardo Seije',
        gitHub: 'EduardoSeije',
      },
      {
        name: 'Luciano Amâncio',
        gitHub: 'madruga665',
      },
      {
        name: 'Lucas Machado',
        gitHub: 'lucasam1992',
      },
      {
        name: 'Jonathan Fernandes',
        gitHub: 'jonathanjf',
      },
    ],
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['React', 'JS', 'CSS'],
    imagePath: 'https://blog.delogic.com.br/wp-content/uploads/2019/07/original-bc417c88fb8ff99a8b570abef88b0a65-1024x1024.jpg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-frontend-online-store/tree/main-group-25',
    appLink: 'not-found',
  },
  {
    name: 'React Testing Library',
    releaseDate: '26/05/2021',
    resume: 'Implementação de testes utilizando a RTL com o jest, fazendo testes unitários e de integração',
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['RTL', 'Jest', 'JS'],
    imagePath: 'https://miro.medium.com/max/1146/1*xKHUYc6XXS4cUn-_NAwKOA.jpeg',
    repoLink: 'https://github.com/tryber/sd-010-a-project-react-testing-library/tree/offpepe-react-testing-library',
    appLink: 'not-found',
  },
  {
    name: 'React Chronometer',
    releaseDate: '07/06/2021',
    resume: 'Aplicação feita para marcar pequenos intervalos durante as aulas, visando trabalhar com tempo e lógica de tempo em minutos, segundos e horas',
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['React', 'JS', 'CSS'],
    imagePath: process.env.PUBLIC_URL + '/projects/React-chronometer/react-chronometer.jpg',
    repoLink: 'https://github.com/offpepe/React-chronometer',
    appLink: 'https://offpepe.github.io/React-chronometer/',
  },
  {
    name: 'Trybe Wallet',
    releaseDate: '09/06/2021',
    resume: 'Aqui foi feito a estrutura de um site de finanças, utilizando Redux para estruturar dados e o Redux-thunk para lidar com requisições assíncronas',
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['React', 'Redux', 'JS','Jest', 'CSS'],
    imagePath: process.env.PUBLIC_URL + '/projects/TryWallet/trywallet-login.png',
    repoLink: 'https://github.com/tryber/sd-010-a-project-trybewallet/tree/offpepe-project-trybewallet', 
    appLink: 'not-found',
  },
  {
    name: 'Shipit Trivia',
    releaseDate: '14/06/2021',
    resume: `Em grupo, este projeto foi feito em volta da API Open Trivia DataBase, onde foram feitas 3 requisições de API:
     Recebendo dados de Login, gerando Token e buscando imagem do Gravatar,
     recebendo categorias para as configurações de jogo,
     por fim gerando perguntas com o as informações entregues pelas configurações via requisição de API`,
    participants: [
      {
        name: 'Marcus Cesar Husemann Filho',
        gitHub: 'Marcuscps19',
      },
      {
        name: 'Mateus Alencar Alves',
        gitHub: 'mateus2a',
      },
      {
        name: 'Nilson Ribeiro da Conceição Souza',
        gitHub: 'NilsonRCS',
      },
    ],
    module: {
      id: 'df',
      img: 'https://img.icons8.com/ios-filled/50/000000/programming.png',
    },
    knowledgeUsed: ['React', 'Redux', 'JS', 'Cypress', 'CSS'],
    imagePath: process.env.PUBLIC_URL + '/projects/Shipit-trivia/shipit-login.png',
    repoLink: 'https://github.com/offpepe/shipit-trivia',
    appLink: 'https://shipit-trivia.netlify.app/',
  }
]




export default data;