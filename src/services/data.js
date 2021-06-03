const data = {
    name: 'Alan Albuquerque F. Lopes',
    age: '21 anos',
    nationality: 'brasileiro',
    about: `Meu nome é Alan, sou nativo de Corumbá-MS e atualmente moro em Campo Grande-MS (A capital do estado).
    Gosto de programar desde os meus 16 anos após ser inserido nesse mundo por um projeto escolar que envolvia lógica de programação, desde então venho me aprofundando no assunto.`,
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
              level: '4/5'
          },
          {
              name: 'Bulma',
              icon: 'https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png',
              level: '5/5'
          },
          {
              name: 'Jest',
              icon: 'https://img.icons8.com/emoji/96/000000/joker-.png',
              level: '4/5',
          },
      ],
      habilities: [
          'Conhecimento e experiência com lógica de programação',
          'Experiência com programação orientada ao Objeto',
          'Inglês avançado',
          'Conhecimento Avançado em HTML e CSS',
          'Experiência em montagem e edição com pacote Adobe',
          'Noção em TDD',
          'Noção em metodologias ágeis',
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
    resume: `Este foi o primeiro projeto feito com o conhecimento adquirido na Trybe`,
    knowledgeUsed: ['HTML','CSS'],
    imagePath: 'https://jzeroblog.files.wordpress.com/2016/10/38c1b5d.jpg?w=676',
  },
  {
    name: 'Playground Functions',
    releaseDate: '02/03/2021',
    resume: 'Neste projeto foram apresentados pequenos problemas com lógica de programação',
    knowledgeUsed: ['JS'],
    imagePath: 'https://www.incimages.com/uploaded_files/image/1920x1080/software-computer-code-1940x900_35196.jpg',
  },
  {
    name: 'Pixel Art',
    releaseDate: '09/03/2021',
    resume: 'Foi o primeiro projeto utilizando HTML e JavaScript com o DOM',
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://image.freepik.com/vecteurs-libre/pixel-art-set-papeterie-stylo-isole_150088-355.jpg',
  },
  {
    name: 'To Do List',
    releaseDate: '10/03/2021',
    resume: 'Outro projeto utilizando o DOM porém utilizando o localStorage',
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://www.wikihow.com/images_en/thumb/3/38/Make-a-To-Do-List-Step-5-Version-3.jpg/v4-460px-Make-a-To-Do-List-Step-5-Version-3.jpg',
  },
  {
    name: 'Meme Generator',
    releasedDate: '11/03/2021',
    resume: 'Neste projeto foram utilizadas as tags form e inputs',
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://www.memesmonkey.com/images/memesmonkey/58/583d7214c22c5a864c2c65f2e1d82988.jpeg',
  },
  {
    name: 'Facebook SignUp',
    releaseDate: '22/03/2021',
    resume: 'Este foi o primeiro projeto em dupla, trabalhando a comunicação e a colaboração',
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'http://www.loginsigninsignup.com/wp-content/uploads/2015/08/www.fb_.com-login-sign-in-fb-account.png',
  },
  {
    name: 'Unit tests',
    releaseDate: '29/03/2021',
    resume: 'Aqui foi utilizado o conhecimento adquirido com o conteúdo sobre TDD, utilizando a biblioteca assert',
    knowledgeUsed: ['JS'],
    imagePath: 'https://miro.medium.com/max/1024/1*Y07KF-_laqG2cJ1Squ0Bag.png',
  },
  {
    name: 'Zoo Functions',
    releaseDate: '08/04/2021',
    resume: 'Similar ao Playground Functions porém com lógicas mais complexas utilizando dados já existentes e principalmente, utilizando HOFs ',
    knowledgeUsed: ['JS'],
    imagePath: 'https://miro.medium.com/max/812/1*-kjr_j7fmoQNIGLf8eZIgw.jpeg',
  },
  {
    name: 'Shopping Cart Page',
    releaseDate: '20/04/2021',
    resume: 'Utilizando funções assíncronas para montar uma pagina de produtos utilizando a API do mercado livre',
    knowledgeUsed: ['HTML','CSS','JS'],
    imagePath: 'https://cms-assets.tutsplus.com/uploads/users/2659/posts/26768/image/eCommerce%20website%20templates%20themeforest.jpg',
  },
  {
    name: 'Jest',
    releaseDate: '23/04/2021',
    resume: 'Testes utilizando a framework Jest',
    knowledgeUsed: ['JS'],
    imagePath: 'https://user-images.githubusercontent.com/2494410/26874610-2cd5a1c0-4b76-11e7-9520-00f33953592b.png',
  },
  {
    name: 'Movie Cards Library, Stateful e CRUD',
    releaseDate: '25/05/2021',
    resume: 'Separado em 3 partes, todos utilizando React, depois trabalhando com as props e o state, e por fim o react-route',
    knowledgeUsed: ['JS', 'React'],
    imagePath: 'https://devporai.com.br/wp-content/uploads/2021/01/O-que-e-CRUD-740x414.jpg',
  },
  {
    name: 'FrontEnd Online Store',
    releaseDate: '14/05/2021',
    resume: 'Com as competências utilizadas no MovieCards, foi desenvolvido em grupo o frontEnd de uma loja, utilizando o método Kanban',
    knowledgeUsed: ['React', 'JS', 'CSS'],
    imagePath: 'https://blog.delogic.com.br/wp-content/uploads/2019/07/original-bc417c88fb8ff99a8b570abef88b0a65-1024x1024.jpg',
  },
  {
    name: 'React Testing Library',
    releaseDate: '26/05/2021',
    resume: 'Implementação de testes utilizando a RTL com o jest, fazendo testes unitários e de integração',
    knowledgeUsed: ['React', 'JS'],
    imagePath: 'https://miro.medium.com/max/1146/1*xKHUYc6XXS4cUn-_NAwKOA.jpeg',
  }
]

export default data;