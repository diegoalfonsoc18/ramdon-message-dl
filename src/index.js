const messages = [
  "Hello world",
  "Goodbye world",
  "How are you doing today?",
  "I am fine",
  "Goodbye Dev",
  "Apple Shop",
  "Hello",
];

const funnyCommit = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${randomMessage}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
