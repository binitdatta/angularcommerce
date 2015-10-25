	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('TakeTestCtrl', function ($scope, Auth, TakeATestSvc) {


	$scope.exam_questions = [];
  	$scope.dependentquestions = [];
	$scope.dependentquestions.answers = [];

	$scope.answers = [];
	$scope.dependentanswers = [];

	TakeATestSvc.fetch().success(function (exam_questions) {
					$scope.exam_questions = exam_questions;
					$scope.basicfact = exam_questions[0].basicfact;
					$scope.part = exam_questions[0].part;
					$scope.problem = exam_questions[0].problem;
					$scope._questionid = exam_questions[0]._id;
					$scope.explanation = exam_questions[0].explanation;
					$scope.questiontext = exam_questions[0].basicfact+':' + exam_questions[0].problem;

	  var 	currentuser = Auth.getCurrentUser()._id;
	  var username = Auth.getCurrentUser().name;
	  var useremail = Auth.getCurrentUser().email;
	  var userid = Auth.getCurrentUser()._id;
	  var grade = Auth.getCurrentUser().grade;

	  console.log('in fetch currentuser :'+currentuser);
				  console.log(' in fetch name :'+Auth.getCurrentUser().name);
			  console.log(' in fetch email :'+Auth.getCurrentUser().email);
			  console.log('in fetch Auth.getCurrentUser() :'+Auth.getCurrentUser());
			  console.log('in fetch Auth.getCurrentUser() userid :'+Auth.getCurrentUser()._id);

			console.log('in fetch $scope._questionid :'+$scope._questionid);

					$scope.question_array_index = 0;
					$scope.userid = userid;
					$scope.username = username;
					$scope.useremail = useremail;
		//			console.log('grade in fetch :'+grade);
					$scope.grade = grade;

		//			console.log('answer 1 :'+exam_questions[0].answer[0].answer);
		//			console.log('answer 2 :'+exam_questions[0].answer[1].answer);
		//			console.log('answer 3 :'+exam_questions[0].answer[2].answer);
		//			console.log('answer 4 :'+exam_questions[0].answer[3].answer);

					$scope.answerA = exam_questions[0].answer[0].answer;
					$scope.answertypeA = exam_questions[0].answer[0].answertype;
					console.log('answertypeA in fetch 4 answerid :'+ exam_questions[0].answer[0].answerid);
					console.log('answertypeA in fetch 4:'+ exam_questions[0].answer[0].answertype);


					$scope.answerB = exam_questions[0].answer[1].answer;
					$scope.answertypeB = exam_questions[0].answer[1].answertype;
					console.log('answertypeB in fetch 4 answerid :'+ exam_questions[0].answer[1].answerid);
					console.log('answertypeB in fetch 4:'+ exam_questions[0].answer[1].answertype);


					$scope.answerC = exam_questions[0].answer[2].answer;
					$scope.answertypeC = exam_questions[0].answer[2].answertype;
					console.log('answertypeC in fetch 4 answerid :'+ exam_questions[0].answer[2].answerid);
					console.log('answertypeC in fetch 4:'+ exam_questions[0].answer[2].answertype);


					$scope.answerD = exam_questions[0].answer[3].answer;
					$scope.answertypeD = exam_questions[0].answer[3].answertype;
					console.log('answertypeD in fetch 4 answerid :'+ exam_questions[0].answer[4].answerid);
					console.log('answertypeD in fetch 4:'+ exam_questions[0].answer[3].answertype);


					$scope.dependentquestionpart = exam_questions[0].dependentquestion[0].part;
					$scope.dependentquestionproblem = exam_questions[0].dependentquestion[0].problem;
					$scope.dependentexplanation = exam_questions[0].dependentquestion[0].problem;

					$scope.dependentAnswerA = exam_questions[0].dependentquestion[0].answer[0].answer;
					$scope.dependentAnswertypeA = exam_questions[0].dependentquestion[0].answer[0].answertype;
					console.log('dependentAnswertypeA in fetch 4:'+ exam_questions[0].dependentquestion[0].answer[0].answertype);


					$scope.dependentAnswerB = exam_questions[0].dependentquestion[0].answer[1].answer;
					$scope.dependentAnswertypeB = exam_questions[0].dependentquestion[0].answer[1].answertype;
			   		console.log('dependentAnswertypeB in fetch 4:'+ exam_questions[0].dependentquestion[0].answer[1].answertype);


					$scope.dependentAnswerC = exam_questions[0].dependentquestion[0].answer[2].answer;
					$scope.dependentAnswertypeC = exam_questions[0].dependentquestion[0].answer[2].answertype;
					console.log('dependentAnswertypeC in fetch 4:'+ exam_questions[0].dependentquestion[0].answer[2].answertype);

					$scope.dependentAnswerD = exam_questions[0].dependentquestion[0].answer[3].answer;
					$scope.dependentAnswertypeD = exam_questions[0].dependentquestion[0].answer[3].answertype;
					console.log('dependentAnswertypeD in fetch 4:'+ exam_questions[0].dependentquestion[0].answer[3].answertype);


					$scope.index = 0;

				});

		  $scope.next = function() {
			  console.log('Next $scope._questionid :'+$scope._questionid);
			  console.log('Next question_array_index :'+$scope.question_array_index);

			  var currentIndex = $scope.question_array_index;

			  var nextIndex = currentIndex +1;

			  if (nextIndex === $scope.exam_questions.length)
			  {
				  return;
			  }

			  		$scope.basicfact = $scope.exam_questions[nextIndex].basicfact;
					$scope.part = $scope.exam_questions[nextIndex].part;
					$scope.problem = $scope.exam_questions[nextIndex].problem;
					$scope._questionid = $scope.exam_questions[nextIndex]._id;
					$scope.explanation = $scope.exam_questions[nextIndex].explanation;
					$scope.questiontext = exam_questions[nextIndex].basicfact+':' + exam_questions[nextIndex].problem;


					 var 	currentuser = Auth.getCurrentUser()._id;
					 var username = Auth.getCurrentUser().name;
					 var useremail = Auth.getCurrentUser().email;
					 var userid = Auth.getCurrentUser()._id;
					 var grade = Auth.getCurrentUser().grade;
					var current_index = $scope.question_array_index + 1;
					$scope.question_array_index = current_index;
					$scope.userid = userid;
					$scope.username = username;
					$scope.useremail = useremail;
					console.log('grade in fetch :'+grade);
					$scope.grade = grade;

					console.log('answer 1 :'+$scope.exam_questions[current_index].answer[0].answer);
					console.log('answer 2 :'+$scope.exam_questions[current_index].answer[1].answer);
					console.log('answer 3 :'+$scope.exam_questions[current_index].answer[2].answer);
					console.log('answer 4 :'+$scope.exam_questions[current_index].answer[3].answer);

					$scope.answerA = $scope.exam_questions[current_index].answer[0].answer;
					$scope.answertypeA = $scope.exam_questions[current_index].answer[0].answertype;
					console.log('answertypeA in next 4:'+ $scope.exam_questions[current_index].answer[0].answertype);


					$scope.answerB = $scope.exam_questions[current_index].answer[1].answer;
					$scope.answertypeB = $scope.exam_questions[current_index].answer[1].answertype;
					console.log('answertypeB in next 4:'+ $scope.exam_questions[current_index].answer[1].answertype);

					$scope.answerC = $scope.exam_questions[current_index].answer[2].answer;
					$scope.answertypeC = $scope.exam_questions[current_index].answer[2].answertype;
					console.log('answertypeC in next 4:'+ $scope.exam_questions[current_index].answer[2].answertype);

					$scope.answerD = $scope.exam_questions[current_index].answer[3].answer;
					$scope.answertypeD = $scope.exam_questions[current_index].answer[3].answertype;
					console.log('answertypeD in next 4:'+ $scope.exam_questions[current_index].answer[3].answertype);

					$scope.dependentquestionpart = $scope.exam_questions[current_index].dependentquestion[0].part;
					$scope.dependentquestionproblem = $scope.exam_questions[current_index].dependentquestion[0].problem;
					$scope.dependentexplanation = $scope.exam_questions[current_index].dependentquestion[0].problem;

					$scope.dependentAnswerA = $scope.exam_questions[current_index].dependentquestion[0].answer[0].answer;
					$scope.dependentAnswertypeA = $scope.exam_questions[current_index].dependentquestion[0].answer[0].answertype;
					console.log('dependentAnswertypeA in next 4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[0].answertype);


					$scope.dependentAnswerB = $scope.exam_questions[current_index].dependentquestion[0].answer[1].answer;
					$scope.dependentAnswertypeB = $scope.exam_questions[current_index].dependentquestion[0].answer[1].answertype;
					console.log('dependentAnswertypeB in next 4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[1].answertype);

					$scope.dependentAnswerC = $scope.exam_questions[current_index].dependentquestion[0].answer[2].answer;
					$scope.dependentAnswertypeC = $scope.exam_questions[current_index].dependentquestion[0].answer[2].answertype;
					console.log('dependentAnswertypeC in next 4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[2].answertype);

					$scope.dependentAnswerD = $scope.exam_questions[current_index].dependentquestion[0].answer[3].answer;
					$scope.dependentAnswertypeD = $scope.exam_questions[current_index].dependentquestion[0].answer[3].answertype;
					console.log('dependentAnswertypeD in next 4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[3].answertype);

					$scope.index = current_index;
			  
		  };
		
		 $scope.previous = function() {
				  console.log('Next $scope._questionid :'+$scope._questionid);
			  console.log('Next question_array_index :'+$scope.question_array_index);

			  var currentIndex = $scope.question_array_index;

			  var nextIndex = currentIndex - 1;

			  if (nextIndex === 0)
			  {
				  return;
			  }

			  		$scope.basicfact = $scope.exam_questions[nextIndex].basicfact;
					$scope.part = $scope.exam_questions[nextIndex].part;
					$scope.problem = $scope.exam_questions[nextIndex].problem;
					$scope._questionid = $scope.exam_questions[nextIndex]._id;
					$scope.explanation = $scope.exam_questions[nextIndex].explanation;
					$scope.questiontext = exam_questions[nextIndex].basicfact+':' + exam_questions[nextIndex].problem;


					 var 	currentuser = Auth.getCurrentUser()._id;
					 var username = Auth.getCurrentUser().name;
					 var useremail = Auth.getCurrentUser().email;
					 var userid = Auth.getCurrentUser()._id;
					 var grade = Auth.getCurrentUser().grade;
					var current_index = $scope.question_array_index - 1;
					$scope.question_array_index = current_index;
					$scope.userid = userid;
					$scope.username = username;
					$scope.useremail = useremail;
					console.log('grade in fetch :'+grade);
					$scope.grade = grade;

					console.log('answer 1 :'+$scope.exam_questions[current_index].answer[0].answer);
					console.log('answer 2 :'+$scope.exam_questions[current_index].answer[1].answer);
					console.log('answer 3 :'+$scope.exam_questions[current_index].answer[2].answer);
					console.log('answer 4 :'+$scope.exam_questions[current_index].answer[3].answer);

					$scope.answerA = $scope.exam_questions[current_index].answer[0].answer;
					$scope.answertypeA = $scope.exam_questions[current_index].answer[0].answertype;
					console.log('answertypeA in previous 4:'+ $scope.exam_questions[current_index].answer[0].answertype);


					$scope.answerB = $scope.exam_questions[current_index].answer[1].answer;
					$scope.answertypeB = $scope.exam_questions[current_index].answer[1].answertype;
					console.log('answertypeB in previous  4:'+ $scope.exam_questions[current_index].answer[1].answertype);

					$scope.answerC = $scope.exam_questions[current_index].answer[2].answer;
					$scope.answertypeC = $scope.exam_questions[current_index].answer[2].answertype;
					console.log('answertypeC  in previous 4:'+ $scope.exam_questions[current_index].answer[2].answertype);

					$scope.answerD = $scope.exam_questions[current_index].answer[3].answer;
					$scope.answertypeD = $scope.exam_questions[current_index].answer[3].answertype;
					console.log('answertypeD in previous  4:'+ $scope.exam_questions[current_index].answer[3].answertype);

					$scope.dependentquestionpart = $scope.exam_questions[current_index].dependentquestion[0].part;
					$scope.dependentquestionproblem = $scope.exam_questions[current_index].dependentquestion[0].problem;
					$scope.dependentexplanation = $scope.exam_questions[current_index].dependentquestion[0].problem;

					$scope.dependentAnswerA = $scope.exam_questions[current_index].dependentquestion[0].answer[0].answer;
					$scope.dependentAnswertypeA = $scope.exam_questions[current_index].dependentquestion[0].answer[0].answertype;
					console.log('dependentAnswertypeA in previous  4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[0].answertype);


					$scope.dependentAnswerB = $scope.exam_questions[current_index].dependentquestion[0].answer[1].answer;
					$scope.dependentAnswertypeB = $scope.exam_questions[current_index].dependentquestion[0].answer[1].answertype;
					console.log('dependentAnswertypeB in previous  4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[1].answertype);

					
					$scope.dependentAnswerC = $scope.exam_questions[current_index].dependentquestion[0].answer[2].answer;
					$scope.dependentAnswertypeC = $scope.exam_questions[current_index].dependentquestion[0].answer[2].answertype;
					console.log('dependentAnswertypeC in previous  4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[2].answertype);

					$scope.dependentAnswerD = $scope.exam_questions[current_index].dependentquestion[0].answer[3].answer;
					$scope.dependentAnswertypeD = $scope.exam_questions[current_index].dependentquestion[0].answer[3].answertype;
					console.log('dependentAnswertypeD in previous  4:'+ $scope.exam_questions[current_index].dependentquestion[0].answer[3].answertype);

					$scope.index = current_index;
			  

		  };

		  $scope.submit = function(Auth) {

			var examquestion;
			var question;


			/* var 	currentuser = Auth.getCurrentUser()._id;
				 console.log('currentuser :'+currentuser);
				  console.log('name :'+Auth.getCurrentUser().name);
				  console.log('email :'+Auth.getCurrentUser().email);
				  console.log('Auth.getCurrentUser() :'+Auth.getCurrentUser()); */
				console.log('$scope._questionid :'+$scope._questionid);
				console.log('$scope.dependentanswer :'+$scope.dependentanswer);
				console.log('$scope.answer :'+$scope.answer);
  				console.log('$scope.grade :'+$scope.grade);
				console.log('$scope.explanation :'+$scope.explanation);

		  /*TakeATestSvc.fetchquestion($scope._id).success(function (exam_question) {

			  examquestion =  exam_question;
		   } */
			     var l_primarycorrectanswer = '';
				 var l_dependentcorrectanswer = '';
				 var l_primaryevaluatedresult = '';
 				 var l_dependentevaluatedresult = '';

				 if ($scope.answertypeA  === 'correct')
				 {
					 l_primarycorrectanswer =  $scope.answertypeA;
					 console.log('l_primarycorrectanswer =  $scope.answertypeA;');
				 }
				 else if ($scope.answertypeB  === 'correct')
				 {		
 					 l_primarycorrectanswer =  $scope.answertypeB;
 					 console.log('l_primarycorrectanswer =  $scope.answertypeB;');
				 }
				 else if ($scope.answertypeC  === 'correct')
				 {		
 					 l_primarycorrectanswer =  $scope.answertypeC;
					 console.log('l_primarycorrectanswer =  $scope.answertypeC;');
				 }
				  else if ($scope.answertypeD  === 'correct')
				 {		
 					 l_primarycorrectanswer =  $scope.answertypeD;
					 console.log('l_primarycorrectanswer =  $scope.answertypeD;');
				 }

				  if ($scope.dependentAnswertypeA  === 'correct')
				 {
					 l_dependentcorrectanswer =  $scope.dependentAnswertypeA;
 					 console.log('l_dependentcorrectanswer =  $scope.dependentAnswertypeA');
				 }
				 else if ($scope.dependentAnswertypeB  === 'correct')
				 {		
 					 l_dependentcorrectanswer =  $scope.dependentAnswertypeB;
 					 console.log('l_dependentcorrectanswer =  $scope.dependentAnswertypeB');
				 }
				 else if ($scope.dependentAnswertypeC  === 'correct')
				 {		
 					 l_dependentcorrectanswer =  $scope.dependentAnswertypeC;
 					 console.log('l_dependentcorrectanswer =  $scope.dependentAnswertypeC');
				 }
				  else if ($scope.dependentAnswertypeD  === 'correct')
				 {		
 					 l_dependentcorrectanswer =  $scope.dependentAnswertypeD;
 					 console.log('l_dependentcorrectanswer =  $scope.dependentAnswertypeD');
				 }

				 if ($scope.answer === l_primarycorrectanswer)
				 {
					 l_primaryevaluatedresult = 'C';
 					 console.log('l_primaryevaluatedresult = C');
				 }else {
					 l_primaryevaluatedresult = 'I';
 					 console.log('l_primaryevaluatedresult = I');
				 }

				 if ($scope.dependentanswer === l_dependentcorrectanswer)
				 {
					 l_dependentevaluatedresult = 'C';
 					 console.log('l_dependentevaluatedresult = C');
				 }else {
					 l_dependentevaluatedresult = 'I';
 					 console.log('l_dependentevaluatedresult = I');
				 }
				 
				 TakeATestSvc.fetchquestion($scope._questionid)
					  .success(function (exam_question) {
							console.log('Take a test CKD success :'+exam_question);	
							question = exam_question.basicfact+':'+exam_question.problem;
							console.log('Take a test CKD success question :'+question);	

					  });

				 TakeATestSvc.create({
						_questionid: $scope._questionid,
						examquestiontext:$scope.questiontext,
						primaryanswer:$scope.answer,
						primarycorrectanswer:l_primarycorrectanswer,
						dependentanswer:$scope.dependentanswer,
						dependentcorrectanswer:l_dependentcorrectanswer,
						primaryevaluatedresult:	l_primaryevaluatedresult,
						dependentevaluatedresult:  l_dependentevaluatedresult,
						grade:$scope.grade,
						userid:$scope.userid,
						username:$scope.username,
						useremail:$scope.useremail,
						primaryexplanation:$scope.explanation
					  })
					  .success(function (exam_question) {
							console.log('Take a test success');						
					  });
			  
					
		  };	//top addQuestions
	  });


	  angular.module('mathsgymnasiamApp').service('TakeATestSvc', function ($http) {
		  this.fetch = function (takeatest) {
			 // $scope.exam_questions = takeatest;
			return $http.get('/api/examquestionss');
		  };

		 this.create = function (takeatest) {
			 console.log('In Create');
 			 console.log(takeatest);

			return $http.post('/api/takeatest', takeatest);
		  }; 

		
		  this.fetchquestion = function (id) {
			console.log('fetchquestion CKD :'+id);	
			return $http.get('/api/examquestionss/'+id);
		  }
	});