let myVue = new Vue({
  el: "#app",

  data: {
    movies: [
      {
        Title: "Charlie and the Chocolate Factory",
        Genre: "Fantasy",
        Description:
          "When Willy Wonka decides to let five children into his chocolate factory, he decides to release five " +
          "golden tickets in five separate chocolate bars, causing complete mayhem. The tickets start to be found," +
          "with the fifth going to a very special boy, called Charlie Bucket. With his Grandpa, Charlie joins the " +
          "rest of the children to experience the most amazing factory ever. But not everything goes to plan within " +
          "the factory.",
        image:
          '<img src="./Images/action1.jpg" class="movieItem" alt="6 Underground">',
      },
    ],
  },

  methods: {
    moviesNames() {
      console.log("hello world");
    },
  },
});
