import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isAuthenticated: false
    },
    contactInfo: {
      email: "Contact@support.com",
      phone: "+92xxxxxxxxxx",
      address: "Abc street, Xyz locality"
    },
    customers: [
      {
        id: "1",
        name: "Mujtaba Alvi",
        email: "mushti@example.com",
        phone: "+92xxxxxxxxxx"
      },
      {
        id: "2",
        name: "Shahrukh Naeem",
        email: "shahrukh@example.com",
        phone: "+92xxxxxxxxxx"
      }
    ]
  },
  mutations: {
    deleteCustomer(state, id) {
      let temp = state.customers.filter(t => t.id !== id);
      temp.forEach((customer, i) => {
        customer.id = i + 1;
      });
      state.customers = temp;
    },

    createCustomer(state, newUserObj) {
      let temp = state.customers;
      temp.unshift(newUserObj);
      temp.forEach((customer, i) => {
        customer.id = i + 1;
      });
      state.customers = temp;
    },

    loginUser(state, newAuthObj) {
      if (newAuthObj.isAuthenticated) {
        state.user = newAuthObj;
      }
    }
  },
  actions: {},
  modules: {}
});
