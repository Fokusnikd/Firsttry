function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

Vue.component("sup-row", {
  props: ["sup"],
  template:
    "<h1>{{ sup.fio }} {{ sup.mail }} {{ sup.birthday }} {{sup.id}}</h1>"
});

Vue.component("house-row", {
  props: ["house"],
  template:
    "<h1>{{ house.adress }} {{ house.floor }} {{ house.age }} {{house.id}}</h1>"
});

Vue.component("sup-form", {
  data: function() {
    return {
      fioValue: "",
      mailValue: "",
      birthdayValue: ""
    };
  },
  template: ` <form>
  <div class="form-group">
  <label for="exampleInputPassword1">Fio</label>
  <input type="text" v-model="fioValue" class="form-control" id="exampleInputPassword1" placeholder="Your name">
</div>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" v-model ="mailValue" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
  <label for="exampleInputAge1">Age</label>
  <input type="text" v-model="birthdayValue" class="form-control" id="exampleInputAge1" placeholder="Enter your age">
</div>
<button type="submit" @click="handlebuttonclick($event)" class="btn btn-primary">Submit</button>
</form>`,
  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();

      var formdata = {
        fio: this.fioValue,
        mail: this.mailValue,
        birthday: this.birthdayValue
      };

      this.$emit("new-sup", formdata);
    }
  }
});

Vue.component("house-form", {
  data: function() {
    return {
      adressValue: "",
      floorValue: "",
      yearValue: ""
    };
  },
  template: `<form>
  <div class="form-group">
  <label for="exampleInputAdress">Adress</label>
  <input type="text" v-model="adressValue" class="form-control" id="exampleInputAdress" placeholder="Your adress">
</div>
<div class="form-group">
    <label for="exampleInputFloor">Floor</label>
    <input type="text" v-model ="floorValue" class="form-control" id="exampleInputFloor" aria-describedby="emailHelp" placeholder="Enter floor">

  </div>
  <div class="form-group">
  <label for="exampleInputHouseYear">House Year</label>
  <input type="text" v-model="yearValue" class="form-control" id="exampleInputHouseYear" placeholder="Enter house age">
</div>
<button type="submit" @click="handlebuttonclick($event)" class="btn btn-primary">Submit</button>
</form>`,

  methods: {
    handlebuttonclick: function(e) {
      e.preventDefault();
      var housedata = {
        adress: this.adressValue,
        floor: this.floorValue,
        age: yearValue
      };
      this.$emit("new-house", housedata);
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    SupList: [],
    HouseList: []
  },
  methods: {
    newSup: function(formdata) {
      this.SupList.push({ ...formdata, id: uuidv4() });
      console.log(this.SupList);
    },
    newHouse: function(housedata) {
      this.HouseList.push({ ...housedata, id: uuidv4() });
      console.log(this.HouseList);
    }
  }
});
