function ContactController() {
  this.name = 'Pentti';
  this.email = 'pentti@gmail.com';
  this.phone = '+4516423421'

  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);
