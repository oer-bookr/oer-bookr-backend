exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          Title: "Bound for Error",
          Author: "Dennie Cornier",
          Publisher: "Carlina Blackway",
          License:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
        },
        {
          Title: "The Colossus in the Abyss",
          Author: "Natty Berridge",
          Publisher: "Dan Yellep",
          License:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        },
        {
          Title: "Paradise Bound",
          Author: "Vaclav Enderwick",
          Publisher: "Homerus Haveline",
          License:
            "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
        },
        {
          Title: "Beyond the Storm",
          Author: "Darrell Maxted",
          Publisher: "Betsy Smickle",
          License:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        },
        {
          Title: "Zenith of Pluto",
          Author: "Nolly Delmage",
          Publisher: "Viki Royle",
          License:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        },
        {
          Title: "The Damned Torch",
          Author: "Lory Iacobassi",
          Publisher: "Hector Newport",
          License:
            "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
        },
        {
          Title: "Babylon Sinking",
          Author: "Aluin Rubie",
          Publisher: "Amitie McVicar",
          License:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
        }
      ]);
    });
};
