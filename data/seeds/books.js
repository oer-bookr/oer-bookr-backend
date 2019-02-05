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
          image: "https://tinyurl.com/ydyk477d",
          link: "https://tinyurl.com/y7gzabdm"
        },
        {
          title: "The History of Our Tribe: Hominini",
          author: "Barbara Welker",
          publisher: "Open SUNY",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y7y364ft",
          link: "https://tinyurl.com/yd4ar6s9"
        },
        {
          title: "A Theory of Literate Action: Literate Action Volume 2",
          author: "Charles Bazerman",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/y96dte8z",
          link: "https://tinyurl.com/y6vjfczs"
        },
        {
          title: "Cells: Molecules and Mechanisms",
          author: "Eric Wong",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Science",
          image: "https://tinyurl.com/y8yxdh6k",
          link: "https://tinyurl.com/y8kdgues"
        },
        {
          title: "World Regional Geography",
          author: "Caitlin Finlayson",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y89s6agk",
          link: "https://tinyurl.com/yd44kvn2"
        },
        {
          title: "A Rhetoric of Literate Action: Literate Action Volume 1",
          author: "Charles Bazerman",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/yc77unjv",
          link: "https://tinyurl.com/y987hbwd"
        },
        {
          title: "Native Peoples of North America",
          author: "Susan Stebbins",
          publisher: "Open SUNY",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/y79lmzz2",
          link: "https://tinyurl.com/y8q3rsra"
        },
        {
          title: "Copy(write): Intellectual Property in the Writing Classroom",
          author: "Martine Rife",
          publisher: "WAC Clearinghouse",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "English",
          image: "https://tinyurl.com/ybv62g8n",
          link: "https://tinyurl.com/y9s8wc8w"
        },
        {
          title: "American Government",
          author: "Glen Krutz",
          publisher: "OpenStax CNX",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "History",
          image: "https://tinyurl.com/yayg2zoq",
          link: "https://tinyurl.com/yacyftvv"
        },
        {
          title: "Advanced Waterworks Mathematics",
          author: "Michael Alvord",
          publisher: "Independent",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Science",
          image: "https://tinyurl.com/y8jkzycj",
          link: "https://tinyurl.com/y9o8blae"
        },
        {
          title: "A First Course in Linear Algebra",
          author: "Ken Kuttler",
          publisher: "Lyryx",
          license: "Attribution 4.0 International (CC BY 4.0)",
          subject: "Math",
          image: "https://tinyurl.com/yacruok6",
          link: "https://tinyurl.com/yckhh7z6"
        }
      ]);
    });
};
