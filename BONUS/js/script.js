Vue.config.devtools = true;

const root = new Vue({
  name: "Email Lists",
  el: "#root",
  data: {
    emailNumber: 10,
    emailLists: [],
  },
  created() {
    for (let i = 1; i <= this.emailNumber; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
        console.log("Email nr. " + i + " : " + res.data.response);
        this.emailLists.push(res.data.response);
      });
    }
  },
  methods: {
    controlEmailLists() {
      if (this.emailLists.length === this.emailNumber) return true;
      else return false;
    },
  },
});
