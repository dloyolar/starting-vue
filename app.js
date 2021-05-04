const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Build amazing Vue app!',
      vueLink: 'https://vuejs.org',
      curseGoalC: 'Finish Vue and Learn React',
    };
  },
  methods: {
    randomGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
