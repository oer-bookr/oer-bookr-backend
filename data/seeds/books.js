exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          title: "Bound for Error",
          author: "Dennie Cornier",
          publisher: "Carlina Blackway",
          license:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          subject: "Math"
        },
        {
          title: "The Colossus in the Abyss",
          author: "Natty Berridge",
          publisher: "Dan Yellep",
          license:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          subject: "History"
        },
        {
          title: "Paradise Bound",
          author: "Vaclav Enderwick",
          publisher: "Homerus Haveline",
          license:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          subject: "English"
        },
        {
          title: "Beyond the Storm",
          author: "Darrell Maxted",
          publisher: "Betsy Smickle",
          license:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          subject: "Science"
        },
        {
          title: "Zenith of Pluto",
          author: "Nolly Delmage",
          publisher: "Viki Royle",
          license:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          subject: "History"
        },
        {
          title: "The Damned Torch",
          author: "Lory Iacobassi",
          publisher: "Hector Newport",
          license:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          subject: "English"
        },
        {
          title: "Babylon Sinking",
          author: "Aluin Rubie",
          publisher: "Amitie McVicar",
          license:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          subject: "History"
        },
        {
          title: "Alpha Sinking",
          author: "Anthea McSorley",
          publisher: "Noelle McSaul",
          license:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          subject: "English"
        },
        {
          title: "The Amethyst Island",
          author: "Paige Philippet",
          publisher: "Emerson Joseph",
          license: "Fusce consequat. Nulla nisl. Nunc nisl.",
          subject: "History"
        },
        {
          title: "Crimson Pandemic",
          author: "Leta Redhouse",
          publisher: "Gasper Rubinovici",
          license:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          subject: "Science"
        },
        {
          title: "Crimson Lace",
          author: "Tedda Saunders",
          publisher: "Lanni Upwood",
          license:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          subject: "Math"
        }
      ]);
    });
};
