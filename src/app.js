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
  },
  methods: {},
});
