const app = new Vue({
  el: "#app",
  data: {
    menuLinks: ["home", "mission", "causes", "journal", "donate"],
    liveStats: [
      {
        icon: "far fa-heart",
        stat: 2032,
        desc: "Volunteers Worldwide",
      },
      {
        icon: "fas fa-globe",
        stat: 132,
        desc: "Active projects",
      },
      {
        icon: "fas fa-dollar-sign",
        stat: "3.8M",
        desc: "Donated",
      },
    ],
    values: [
      {
        icon: "fas fa-tint",
        title: "Clean Water",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
      },
      {
        icon: "fas fa-stethoscope",
        title: "Vaccinations",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Education",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
      },
      {
        icon: "fab fa-pagelines",
        title: "Farming",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quidem ratione minus ipsa iste voluptate.",
      },
    ],

    articles: [
      /*  {
        image: "./dist/img/photo-1444213007800-cff19e1677ac.jpg",
        title: "Understanding community complexities",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
      }, */
      {
        image: "./dist/img/photo-1444664597500-035db93e2323-177x142.jpg",
        title: "The human story of uniqueness",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
      },
      {
        image: "./dist/img/photo-1447430617419-95715602278e-177x142.jpg",
        title: "Sustainable trade tactis",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
      },
      {
        image: "./dist/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
        title: "Farmers making a difference",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
      },
      {
        image: "./dist/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
        title: "Meeting remote tribes in Perù",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum. Minima quos sunt fugit",
      },
    ],
    socialLinks: [
      {
        path: "#",
        icon: "fab fa-facebook-f",
      },
      {
        path: "#",
        icon: "fab fa-instagram",
      },
      {
        path: "#",
        icon: "fab fa-twitter",
      },
      {
        path: "#",
        icon: "fab fa-youtube",
      },
    ],
  },
  methods: {},
  computed: {},
  mounted() {},
});
