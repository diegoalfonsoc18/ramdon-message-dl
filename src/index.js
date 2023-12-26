const message = [
  "Hello world",
  "Goodbye world",
  "How are you doing today?",
  "I am fine",
];

const funnyCommit = () => {
  const message = message[Math.floor(Math.random() * message.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
