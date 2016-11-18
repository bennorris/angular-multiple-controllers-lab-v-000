function StaffController() {
  this.name = "Randolph";
  this.email = "randolph@gmail.com";
  this.phone = "32342342432";
}


angular
  .module('app')
  .controller('StaffController', StaffController);
