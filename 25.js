var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    readingStatus: true,
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false,
  },
];

library.map((x) => {
  if (x.readingStatus === true) {
    console.log(`Already read '${x.title}' by ${x.author}.`);
  } else console.log(`You still need to read '${x.title}' by ${x.author}.`);
});
