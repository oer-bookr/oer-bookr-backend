exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          book_id: 1,
          reviewer: "Remus Life",
          review:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          rating: 5
        },
        {
          book_id: 1,
          reviewer: "Aubert Frape",
          review:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          rating: 3
        },
        {
          book_id: 2,
          reviewer: "Nil Pavlov",
          review:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          rating: 4
        },
        {
          book_id: 3,
          reviewer: "Cally Heinz",
          review:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
          rating: 2
        },
        {
          book_id: 4,
          reviewer: "Thaxter Chiese",
          review:
            "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          rating: 5
        },
        {
          book_id: 5,
          reviewer: "Martie Dungate",
          review:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          rating: 3
        },
        {
          book_id: 6,
          reviewer: "Aldwin Bloschke",
          review:
            "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          rating: 2
        },
        {
          book_id: 7,
          reviewer: "Clementine Dreger",
          review:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          rating: 2
        },
        {
          book_id: 8,
          reviewer: "Romonda Wyne",
          review:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          rating: 4
        },
        {
          book_id: 9,
          reviewer: "Baird McSporon",
          review: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
          rating: 3
        },
        {
          book_id: 10,
          reviewer: "Jared Dugald",
          review:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          rating: 1
        },
        {
          book_id: 11,
          reviewer: "Holli McMeekan",
          review:
            "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          rating: 5
        },
        {
          book_id: 3,
          reviewer: "Ivor Picheford",
          review:
            "uspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          rating: 3
        },
        {
          book_id: 2,
          reviewer: "Gusti Kerans",
          review:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          rating: 3
        },
        {
          book_id: 1,
          reviewer: "Elizabeth Langan",
          review:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          rating: 4
        },
        {
          book_id: 5,
          reviewer: "Maria Gartrell",
          review:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          rating: 2
        },
        {
          book_id: 5,
          reviewer: "Marcelia Goolden",
          review:
            "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          rating: 3
        },
        {
          book_id: 8,
          reviewer: "Silvio Hlavac",
          review:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis..",
          rating: 5
        }
      ]);
    });
};
