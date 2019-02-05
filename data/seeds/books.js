exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          title: "Algebra and Trigonometry",
          author: "Jay Abramson",
          publisher: "OpenStax",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Math",
          image: "https://tinyurl.com/ydyk477d"
        },
        {
          title: "The History of Our Tribe: Hominini",
          author: "Barbara Welker",
          publisher: "Open SUNY",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y7y364ft"
        },
        {
          title: "A Theory of Literate Action: Literate Action Volume 2",
          author: "Charles Bazerman",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/y96dte8z"
        },
        {
          title: "Cells: Molecules and Mechanisms",
          author: "Eric Wong",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Science",
          image: "https://tinyurl.com/y8yxdh6k"
        },
        {
          title: "World Regional Geography",
          author: "Caitlin Finlayson",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y89s6agk"
        },
        {
          title: "A Rhetoric of Literate Action: Literate Action Volume 1",
          author: "Charles Bazerman",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/yc77unjv"
        },
        {
          title: "Native Peoples of North America",
          author: "Susan Stebbins",
          publisher: "Open SUNY",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y79lmzz2"
        },
        {
          title: "Copy(write): Intellectual Property in the Writing Classroom",
          author: "Martine Rife",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/ybv62g8n"
        },
        {
          title: "American Government",
          author: "Glen Krutz",
          publisher: "OpenStax CNX",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/yayg2zoq"
        },
        {
          title: "Advanced Waterworks Mathematics",
          author: "Michael Alvord",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Science",
          image: "https://tinyurl.com/y8jkzycj"
        },
        {
          title: "A First Course in Linear Algebra",
          author: "Ken Kuttler",
          publisher: "Lyryx",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Math",
          image: "https://tinyurl.com/yacruok6"
        }
      ]);
    });
};
