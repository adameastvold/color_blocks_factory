colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.dataFactory = DataFactory;
  $scope.colors = $scope.dataFactory.colors;
  $scope.color = $scope.dataFactory.color;


  $scope.acceptableColors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine',
  'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet',
  'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral',
  'Cornflower', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan',
  'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki',
  'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed',
  'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGreen', 'DarkSlateBlue',
  'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink',
  'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite',
  'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod',
  'Gray', 'Grey', 'Greem', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed',
  'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen',
  'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan',
  'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink',
  'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray',
  'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen',
  'Linen', 'Magenta', 'Maroon', 'MediumAquaMarin', 'MediumBlue']

  $scope.selectedColor = $scope.colors[0];
  $scope.selectedColorsArray = [];

    $scope.addColor = function(){
      console.log('this is the color you selected:', $scope.selectedColor);
      $scope.dataFactory.addColor($scope.selectedColor);
      $scope.dataFactory.color.name = $scope.selectedColor;

      var colorObject = {};

      colorObject.selectedColor = $scope.selectedColor;

      $scope.selectedColorsArray.push(colorObject);
      console.log('These are the colors you have chosen:', $scope.selectedColorsArray);
      // $scope.formName = '';
    };

    $scope.deleteColor = function(color){
      $scope.selectedColorsArray.pop(color);
    };

}]);
