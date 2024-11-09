const { Router } = require('express');
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Sulaiman",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Rabiu",
      added: new Date()
    },
    {
      text: "How are you doing",
      user: "Aliyu",
      added: new Date()
    },
   
];

indexRouter.get('/', (req, res) => res.render('index', {title: 'Mini Message Board', messages: messages}));
indexRouter.post('/new', (req, res) => {
  const name = req.body.name;
  const messageText = req.body.messageText;
  messages.push({text: messageText, user: name, added: new Date()});

  res.redirect('/');
});

module.exports = indexRouter;

  