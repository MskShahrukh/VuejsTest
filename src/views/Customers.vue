<style>
@import "../styles/customers.css";
</style>

<template>
  <div id="customers-page">
    <h1>This is customers page</h1>
    <router-link to="/customers/create">
      <button class="create-user-btn" @click="createUser()">
        + Create Customer
      </button>
    </router-link>

    <!-- Div table -->

    <div class="divTable">
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="divTableCell">ID</div>
          <div class="divTableCell">Name</div>
          <div class="divTableCell">Email</div>
          <div class="divTableCell">Phone</div>
          <div class="divTableCell">&nbsp;</div>
          <div class="divTableCell">&nbsp;</div>
        </div>
        <div
          class="divTableRow"
          v-for="customer in customers"
          :key="customer.email + customer.id"
        >
          <div class="divTableCell">{{ customer.id }}</div>
          <div class="divTableCell">{{ customer.name }}</div>
          <div class="divTableCell">{{ customer.email }}</div>
          <div class="divTableCell">{{ customer.phone }}</div>
          <div class="divTableCell">
            <router-link :to="'/customers/' + customer.id">
              <button @click="viewCustomer(customer)">View</button>
            </router-link>
          </div>
          <div class="divTableCell">
            <button @click="deleteCustomer(customer)">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <modal name="customer-info-modal">
      <div v-if="selectedCustomer && selectedCustomer.name">
        <h2>{{ selectedCustomer.name }}</h2>

        <p>
          <b>ID</b>
          - {{ selectedCustomer.id }}
          <br />
          <b>Name</b>
          - {{ selectedCustomer.name }}
          <br />
          <b>Email</b>
          - {{ selectedCustomer.email }}
          <br />
          <b>Phone</b>
          - {{ selectedCustomer.phone }}
          <br />
        </p>
      </div>
    </modal>

    <modal name="create-customer-modal">
      <div>
        <h2>Create New customer</h2>

        <p>
          <input type="text" placeholder="Name" v-model="newCustomer.name" />
          <br />
          <input type="text" placeholder="Email" v-model="newCustomer.email" />
          <br />
          <input type="text" placeholder="Phone" v-model="newCustomer.phone" />
          <br />
        </p>

        <button
          @click="addCustomer()"
          :disabled="
            newCustomer.name && newCustomer.email && newCustomer.phone
              ? false
              : true
          "
        >
          Add customer
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "customers-page",
  data() {
    return {
      customers: this.$store.state.customers,

      selectedCustomer: {
        id: "",
        name: "",
        email: "",
        phone: ""
      },

      newCustomer: {
        id: "",
        name: "",
        email: "",
        phone: ""
      },

      routeChanged: false
    };
  },

  mounted() {
    if (this.$route.params.customerID) {
      if (this.customers && this.customers.length) {
        this.selectedCustomer = this.customers.find(
          c => c.id === this.$route.params.customerID
        );

        this.selectedCustomer && this.$modal.show("customer-info-modal");

        if (this.$route.params.customerID === "create") {
          this.$modal.show("create-customer-modal");
        }
      }
    }
  },

  methods: {
    viewCustomer(customer) {
      this.selectedCustomer = this.$store.state.customers.find(
        c => c.id === customer.id
      );
      this.selectedCustomer && this.$modal.show("customer-info-modal");
    },
    deleteCustomer(customer) {
      this.$store.commit("deleteCustomer", customer.id);
      this.customers = this.$store.state.customers;

      if (this.$route.fullPath !== "/customers") {
        router.push("/customers");
      }
    },
    createUser() {
      this.$modal.show("create-customer-modal");
    },

    addCustomer() {
      this.$store.commit("createCustomer", this.newCustomer);
      this.customers = this.$store.state.customers;
      this.$modal.hide("create-customer-modal");
      this.newCustomer = {
        id: "",
        name: "",
        email: "",
        phone: ""
      };
      router.push("/customers");
    }
  }
  // watch: {
  //   $route(to, from) {
  //     if (to.params.customerID) {
  //       // alert("modal for customer : " + to.params.id);
  //       // if (this.$store.state.customers && this.$store.state.customers.length) {
  //       //   this.selectedCustomer = this.$store.state.customers.find(
  //       //     c => c.id === to.params.customerID
  //       //   );
  //       //   console.log(
  //       //     "route change selected customer >>> ",
  //       //     this.selectedCustomer
  //       //   );
  //       //
  //       //   this.selectedCustomer && this.$modal.show("customer-info-modal");
  //       //   if (to.params.customerID === "create") {
  //       //     this.$modal.show("create-customer-modal");
  //       //   }
  //       // }
  //     }
  //   }
  // }
};
</script>
