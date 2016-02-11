(function($) {

  /* START */
  var Enemy = function() {
    this.damage = 30;
    this.health = 100;
    this.hit    = function(player) {
      var damage = this.damage;
      player.health -= damage;
      $('ul').append('<li class="card">Monster hit Player for ' + damage + 'hp!</li>');
    };
    this.isAlive = function() {
      return this.health > 0;
    };
    this.status = function() {
      if (this.isAlive()) {
        $('ul').append('<li class="card">Monster is alive! (' + this.health + 'hp)</li>');
      } else {
        $('ul').append('<li class="card">Monster has fallen!</li>');
      }
    };
  };

  var Player = function() {
    this.health = 100;
    this.damage = 60;
    this.hit    = function(monster) {
      var damage = this.damage;
      monster.health -= damage;
      $('ul').append('<li class="card">Player hit Monster for ' + damage + 'hp!</li>');
    };
    this.isAlive = function() {
      return this.health > 0;
    };
    this.status = function() {
      if (this.isAlive()) {
        $('ul').append('<li class="card">Player is alive! (' + this.health + 'hp)</li>');
      } else {
        $('ul').append('<li class="card">Player has fallen!</li>');
      }
    };
  };
  /* END */

  /* NOTE: declare `enemy` and `player`, especially if you add extra args */

  var enemy  = new Enemy('your custom args');
  var player = new Player('more custom args!');

  /* NOTE: Don't change anything below this! */

  function play(enemy, player) {
    // this is the main "game" loop
    while (player.isAlive() && enemy.isAlive()) {
      enemy.hit(player);
      player.status();
      player.hit(enemy);
      enemy.status();
    }

    // expected output on the .card boxes (and in order)
    var expectations = [
      'Monster hit Player for 30hp!',
      'Player is alive! (70hp)',
      'Player hit Monster for 60hp!',
      'Monster is alive! (40hp)',
      'Monster hit Player for 30hp!',
      'Player is alive! (40hp)',
      'Player hit Monster for 60hp!',
      'Monster has fallen!'
    ];

    // grabs the output on the .card boxes (in order)
    function observe() {
    	var observed = [];
      $('.card').each(function(index, element) {
      	observed.push($(element).text());
      });
      return observed;
    }

    // compares arrays strings for equality
    function compare(observed, expected) {
      if (observed === expected) return true;
      if (observed == null || expected == null) return false;
      if (observed.length != expected.length) return false;

      for (var i = 0; i < observed.length; ++i) {
        if (observed[i] !== expected[i]) return false;
      }
      return true;
    }

    // run test result
    if (compare(observe(), expectations)) {
      $('#test-result').append('<div class="alert alert-success" role="alert">SUCCESS: output matches!</div>');
    } else {
      $('#test-result').append('<div class="alert alert-danger" role="alert">FAILURE: output does not match!</div>');
    }
  }

  $(function() {
    play(enemy, player);
  });

})(jQuery);
