/**
*Author: Michael Kelly
*Date: July 4, 2018
*Time-To-Completion: 2-hour time limit
*
*Read Me:  
*	Commenting in HTML is not ignored in parsing
*	for AngularJS.  
*
*	Users can SORT the list of doctors by name, specialty, or rating
*	by clicking the column-header
*
*	Users can also click an individual doctor for specific information, 
*	like rating and specialty.
*
*	Similar Specialists will be displayed based on the User's choice.
**/

angular.module('app-root', []).controller('doctorCtrl', function($scope) {
	$scope.doctors = [
		{firstname: 'Doogie', lastname: 'Howser', specialty: 'Surgeon', rating: 4, yearsOfExperience: 2},
		{firstname: 'Christopher', lastname:'Turk', specialty: 'Physician', rating: 5, yearsOfExperience: 18},
		{firstname: 'Henry', lastname:'Jekyll', specialty: 'Surgeon', rating: 3, yearsOfExperience: 25},
		{firstname: 'Michaela', lastname:'Quinn',specialty: 'Physician', rating: 5, yearsOfExperience: 10},
		{firstname: 'Alice', lastname:'Hamilton', specialty: 'Physician', rating: 5, yearsOfExperience: 8},
		{firstname: 'Daniel', lastname: 'Kelly', specialty: 'Radiologist', rating: 5, yearsOfExperience: 2},
		{firstname: 'Hong', lastname:'Chang', specialty: 'Opthamologist', rating: 5, yearsOfExperience: 12},
		{firstname: 'Peter', lastname:'Blach', specialty: 'Surgeon', rating: 3, yearsOfExperience: 15},
		{firstname: 'Wendy', lastname:'Carr',specialty: 'Psychiatrist', rating: 5, yearsOfExperience: 11}


	];
	$scope.orderByUser = function(x) {
		$scope.userOrder = x;
	};

	$scope.userDoctor = function(x) {
		$scope.userDoc = x;
	};


});	