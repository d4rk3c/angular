var app = angular.module("myApp", []);
app.controller("MyCtrl", function ($scope) {
    $scope.products = [{ names: "banana", quantity: 1000 }, { names: "paradajz", quantity: 500 }, { names: "sir", quantity: 200 }];
    $scope.array = []
    $scope.sum = 0
    for(i=0;i<$scope.products.length;i++){
        $scope.sum += $scope.products[i].quantity
        console.log($scope.sum)
    }
    $scope.dodaj = function () {
        var obj = {}
       
        $scope.errorText = " "
        
        if (!$scope.noveNamirnice || !$scope.kolicina) {
            $scope.errorText = " Niste uneli sve potrebne podatke"
            return
        }
        
            if ($scope.array.indexOf($scope.noveNamirnice) == -1) {
                $scope.array.push($scope.noveNamirnice)
                obj.names = $scope.noveNamirnice;
                obj.quantity = $scope.kolicina;
                $scope.products.push(obj);                
                $scope.sum += $scope.kolicina; 
                console.log($scope.sum);
                
    
    
            }
            else { $scope.errorText = " Uneli ste dva puta isti proizvod" }



    };
    $scope.removeProduct = function (x) {
        $scope.products.splice(x, 1)
        $scope.errorText = " "
    }


})