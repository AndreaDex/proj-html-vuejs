const app = new Vue({
  el: "#app",
  data: {
    menuLinks: ["home", "mission", "causes", "journal", "donate"],
    liveStats: [
      {
        icon: "far fa-heart",
        stat: 2032,
        desc: "Volunteers Worldeide",
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
  },
  methods: {},
});
