var makeWeapon = function(top, left){
  //starts at location of airplane
  var weapon = {};
  weapon.top = top;
  weapon.left = left;
  weapon.$node = $('<span class="weapon"></span>')
  weapon.$node.css({
    top: weapon.top,
    left: weapon.left,
  });
  $('body').append(weapon.$node);



  weapon.move = function(speed){
    for(var i = 0; i < window.planes.length; i++){
      if(checkCollision(this, window.planes[i])){
        window.planes[i].destroy();
        this.$node.remove();
        return;
      }
    }
    if(this.left < $(window).width()){
      this.left += speed;
      this.$node.css({left: this.left});
      setTimeout(this.move.bind(this, speed), 20);
    } else {
      this.$node.remove();
    }
  };

  return weapon;
};

var makeEnemyWeapon = function( top, left ){
  if(checkCollision(this, user.$node)){
    user.$node.destroy();
  }
  var weapon = makeWeapon(top, left);
  weapon.$node.addClass("enemyWeapon");
  weapon.move = function(speed){
    if(this.left < $(window).width()){
      this.left -= speed;
      this.$node.css({left: this.left});
      setTimeout(this.move.bind(this, speed), 20);
    } else {
      this.$node.remove();
    }
  };

  return weapon;
}
