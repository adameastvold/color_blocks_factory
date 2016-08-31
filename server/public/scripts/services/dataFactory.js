colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'papayawhip', 'green'];
  var color = {name: ''};


  var addColor = function(newColor){
    colors.push(newColor);
    color.name = newColor;
  }


  return {
    colors: colors,
    color: color,
    addColor: function(name) {
      addColor(name);
    }
  };


}]);
