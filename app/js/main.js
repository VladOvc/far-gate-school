let anchors = document.querySelectorAll('.anchors a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorID = this.getAttribute('href');
      console.log(anchorID)
      document.querySelector(anchorID).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  }
}

$(function() {

	$('input[type="radio"], select').styler();

	$(".form-class").submit(function (e) {
		e.preventDefault();
		$('.thanks-page').addClass('dispaly-none')
		$('.header-test').addClass('dispaly-none')
		$('.loupe_btn_box').addClass('dispaly-none')
		$('.test__title').addClass('dispaly-none')
		$('.test-question-page').removeClass('dispaly-none')
		$('.test-page').removeClass('dispaly-none')
		});
});

function check(){
	//answer counting function
	
	var t1q1=document.mytest.t1q1;
	var t1q2=document.mytest.t1q2;
	var t1q3=document.mytest.t1q3;
	var t1q4=document.mytest.t1q4;
	var t1q5=document.mytest.t1q5;
	var t1q6=document.mytest.t1q6;
	var t1q7=document.mytest.t1q7;
	var t1q8=document.mytest.t1q8;
	var t1q9=document.mytest.t1q9;
	var t1q10=document.mytest.t1q10;

	var t2q1=document.mytest.t2q1;
	var t2q2=document.mytest.t2q2;
	var t2q3=document.mytest.t2q3;

	var t3q1=document.mytest.t3q1;
	var t3q2=document.mytest.t3q2;
	var t3q3=document.mytest.t3q3;
	var t3q4=document.mytest.t3q4;
	var t3q5=document.mytest.t3q5;
	var t3q6=document.mytest.t3q6;

	var t4q1=document.mytest.t4q1;
	var t4q2=document.mytest.t4q2;
	var t4q3=document.mytest.t4q3;
	var t4q4=document.mytest.t4q4;
	var t4q5=document.mytest.t4q5;
	var t4q6=document.mytest.t4q6;
	var count=0;
	var countQ=0;
	let counterValueEI = document.querySelector('.test-question__correctly');
	let counterValueAll = document.querySelector('.test-question__all');
	
	
	function checkAnswersAll(oneAsnwersCheckInput){
		if(oneAsnwersCheckInput.value == "a"){
			document.querySelector('.jq-radio__div').style.background = "green"
			count++; 
			countQ++; 
			// console.log(document.getElementById('rightAnswer-styler'));
			
		}else{
			countQ++;
			document.querySelectorAll('.jq-radio.checked').forEach(function (bd) {
				bd.style.border="1px solid red"
			})
			document.querySelectorAll('.jq-radio.checked').forEach(function (chd) {
				chd.querySelector('.jq-radio__div').style.background = "red"
			})
			// t1q.querySelector('input').setAttribute('disabled', '')
			for (let i = 0; i < t1q1.length; i++){
				console.log(t1q1[i].disabled = true)
			}
		}
	};

	checkAnswersAll(t1q1);
	checkAnswersAll(t1q2);
	checkAnswersAll(t1q3);
	checkAnswersAll(t1q4);
	checkAnswersAll(t1q5);
	checkAnswersAll(t1q6);
	checkAnswersAll(t1q7);
	checkAnswersAll(t1q8);
	checkAnswersAll(t1q9);
	checkAnswersAll(t1q10);

	checkAnswersAll(t2q1);
	checkAnswersAll(t2q2);
	checkAnswersAll(t2q3);

	checkAnswersAll(t3q1);
	checkAnswersAll(t3q2);
	checkAnswersAll(t3q3);
	checkAnswersAll(t3q4);
	checkAnswersAll(t3q5);
	checkAnswersAll(t3q6);

	checkAnswersAll(t4q1);
	checkAnswersAll(t4q2);
	checkAnswersAll(t4q3);
	checkAnswersAll(t4q4);
	checkAnswersAll(t4q5);
	checkAnswersAll(t4q6);
		
	counterValueEI.innerHTML = count;
	counterValueAll.innerHTML = countQ;

	document.querySelectorAll('input').forEach(function (inp) {
  if ((inp.value == 'a') == true){
   for (let i = 1; i <= 25; i++){
    console.log(i)
    console.log(inp.style.border="1px solid green")
    document.getElementById('rightAnswer'+i+'-styler').querySelectorAll('.jq-radio__div').forEach(function (div) {
     div.style.background = "green";
    })
    document.getElementById('rightAnswer'+i+'-styler').style.border="1px solid green";
    document.getElementById('rightAnswer'+i+'-styler').classList.add('checked')
   }
  }
 })



	let elementThanks = document.querySelector('.thanks-page');
	let elementTest = document.querySelector('.test-page');
	elementThanks.classList.remove("dispaly-none");
	elementTest.classList.add("dispaly-none");
		
};

function testBusinesseEnglish(){
	//answer counting function
	
	var t1q1=document.mytest.t1q1;
	var t1q2=document.mytest.t1q2;
	var t1q3=document.mytest.t1q3;
	var t1q4=document.mytest.t1q4;
	var t1q5=document.mytest.t1q5;
	var t1q6=document.mytest.t1q6;
	var t1q7=document.mytest.t1q7;
	var t1q8=document.mytest.t1q8;
	var t1q9=document.mytest.t1q9;
	var t1q10=document.mytest.t1q10;
	
	var t2q1=document.mytest.t2q1;
	var t2q2=document.mytest.t2q2;
	var t2q3=document.mytest.t2q3;
	var t2q4=document.mytest.t2q4;
	var t2q5=document.mytest.t2q5;
	var t2q6=document.mytest.t2q6;
	var t2q7=document.mytest.t2q7;
	var t2q8=document.mytest.t2q8;
	var t2q9=document.mytest.t2q9;
	var t2q10=document.mytest.t2q10;
	
	var t3q1=document.mytest.t3q1;
	var t3q2=document.mytest.t3q2;
	var t3q3=document.mytest.t3q3;
	var t3q4=document.mytest.t3q4;
	var t3q5=document.mytest.t3q5;
	var t3q6=document.mytest.t3q6;
	var t3q7=document.mytest.t3q7;
	var t3q8=document.mytest.t3q8;
	var t3q9=document.mytest.t3q9;
	var t3q10=document.mytest.t3q10;
	var count=0;
	var countQ=0;
	let counterValueEI = document.querySelector('.test-question__correctly');
	let counterValueAll = document.querySelector('.test-question__all');

	function checkAnswersAll(oneAsnwersCheckInput){
		if(oneAsnwersCheckInput.value == "a"){
			document.querySelector('.jq-radio__div').style.background = "green"
			count++; 
			countQ++; 
			// console.log(document.getElementById('rightAnswer-styler'));
			
		}else{
			countQ++;
			document.querySelectorAll('.jq-radio.checked').forEach(function (bd) {
				bd.style.border="1px solid red"
			})
			document.querySelectorAll('.jq-radio.checked').forEach(function (chd) {
				chd.querySelector('.jq-radio__div').style.background = "red"
			})
			// t1q.querySelector('input').setAttribute('disabled', '')
			for (let i = 0; i < t1q1.length; i++){
				console.log(t1q1[i].disabled = true)
			}
		}
	};

	let rightCount = 0;
	let failedCount = 0;

	function checkTestAnswer(){

		let testArr = $('.test__item_questions').toArray();
		testArr.forEach(function(item,index){
			let answer = $(item).find('.jq-radio.checked [value]').val();
			let input = $(item).find('.jq-radio.checked');
			if(answer == 'a'){
				input.style.background = "green";
				rightCount++;
			}
			else{
				failedCount++;
			}
		});
		console.log(rightCount);
		console.log(failedCount);
	};

	checkAnswersAll(t1q1);
	checkAnswersAll(t1q2);
	checkAnswersAll(t1q3);
	checkAnswersAll(t1q4);
	checkAnswersAll(t1q5);
	checkAnswersAll(t1q6);
	checkAnswersAll(t1q7);
	checkAnswersAll(t1q8);
	checkAnswersAll(t1q9);
	checkAnswersAll(t1q10);

	checkAnswersAll(t2q1);
	checkAnswersAll(t2q2);
	checkAnswersAll(t2q3);
	checkAnswersAll(t2q4);
	checkAnswersAll(t2q5);
	checkAnswersAll(t2q6);
	checkAnswersAll(t2q7);
	checkAnswersAll(t2q8);
	checkAnswersAll(t2q9);
	checkAnswersAll(t2q10);

	checkAnswersAll(t3q1);
	checkAnswersAll(t3q2);
	checkAnswersAll(t3q3);
	checkAnswersAll(t3q4);
	checkAnswersAll(t3q5);
	checkAnswersAll(t3q6);
	checkAnswersAll(t3q7);
	checkAnswersAll(t3q8);
	checkAnswersAll(t3q9);
	checkAnswersAll(t3q10);


	counterValueEI.innerHTML = count;
	counterValueAll.innerHTML = countQ;

	document.querySelectorAll('input').forEach(function (inp) {
  if ((inp.value == 'a') == true){
   for (let i = 1; i <= 30; i++){
    console.log(i)
    console.log(inp.style.border="1px solid green")
    document.getElementById('rightAnswer'+i+'-styler').querySelectorAll('.jq-radio__div').forEach(function (div) {
     div.style.background = "green";
    })
    document.getElementById('rightAnswer'+i+'-styler').style.border="1px solid green";
    document.getElementById('rightAnswer'+i+'-styler').classList.add('checked')
   }
  }
 })

	let elementThanks = document.querySelector('.thanks-page');
	let elementTest = document.querySelector('.test-page');
	elementThanks.classList.remove("dispaly-none");
	elementTest.classList.add("dispaly-none");
};

function testPrimeryPlecement(){
	//answer counting function
	
	var t1q1=document.mytest.t1q1;
	var t1q2=document.mytest.t1q2;
	var t1q3=document.mytest.t1q3;
	var t1q4=document.mytest.t1q4;
	
	var t2q1=document.mytest.t2q1;
	var t2q2=document.mytest.t2q2;
	var t2q3=document.mytest.t2q3;
	var t2q4=document.mytest.t2q4;
	
	var t3q1=document.mytest.t3q1;
	var t3q2=document.mytest.t3q2;
	var t3q3=document.mytest.t3q3;
	var t3q4=document.mytest.t3q4;
	
	var t4q1=document.mytest.t4q1;
	var t4q2=document.mytest.t4q2;
	var t4q3=document.mytest.t4q3;
	var t4q4=document.mytest.t4q4;
	var t4q5=document.mytest.t4q5;
	var t4q6=document.mytest.t4q6;
	var t4q7=document.mytest.t4q7;
	var t4q8=document.mytest.t4q8;
	var count=0;
	var countQ=0;
	let counterValueEI = document.querySelector('.test-question__correctly');
	let counterValueAll = document.querySelector('.test-question__all');

	function checkAnswersAll(oneAsnwersCheckInput){
		if(oneAsnwersCheckInput.value == "a"){
			document.querySelector('.jq-radio__div').style.background = "green"
			count++; 
			countQ++; 
			// console.log(document.getElementById('rightAnswer-styler'));
			
		}else{
			countQ++;
			document.querySelectorAll('.jq-radio.checked').forEach(function (bd) {
				bd.style.border="1px solid red"
			})
			document.querySelectorAll('.jq-radio.checked').forEach(function (chd) {
				chd.querySelector('.jq-radio__div').style.background = "red"
			})
			// t1q.querySelector('input').setAttribute('disabled', '')
			for (let i = 0; i < t1q1.length; i++){
				console.log(t1q1[i].disabled = true)
			}
		}
	};

	checkAnswersAll(t1q1);
	checkAnswersAll(t1q2);
	checkAnswersAll(t1q3);
	checkAnswersAll(t1q4);

	checkAnswersAll(t2q1);
	checkAnswersAll(t2q2);
	checkAnswersAll(t2q3);
	checkAnswersAll(t2q4);

	checkAnswersAll(t3q1);
	checkAnswersAll(t3q2);
	checkAnswersAll(t3q3);
	checkAnswersAll(t3q4);

	checkAnswersAll(t4q1);
	checkAnswersAll(t4q2);
	checkAnswersAll(t4q3);
	checkAnswersAll(t4q4);
	checkAnswersAll(t4q5);
	checkAnswersAll(t4q6);
	checkAnswersAll(t4q7);
	checkAnswersAll(t4q8);


	counterValueEI.innerHTML = count;
	counterValueAll.innerHTML = countQ;

	document.querySelectorAll('input').forEach(function (inp) {
  if ((inp.value == 'a') == true){
   for (let i = 1; i <= 20; i++){
    console.log(i)
    console.log(inp.style.border="1px solid green")
    document.getElementById('rightAnswer'+i+'-styler').querySelectorAll('.jq-radio__div').forEach(function (div) {
     div.style.background = "green";
    })
    document.getElementById('rightAnswer'+i+'-styler').style.border="1px solid green";
    document.getElementById('rightAnswer'+i+'-styler').classList.add('checked')
   }
  }
 })

	let elementThanks = document.querySelector('.thanks-page');
	let elementTest = document.querySelector('.test-page');
	elementThanks.classList.remove("dispaly-none");
	elementTest.classList.add("dispaly-none");
};

function testGeneralLevel(){
		//answer counting function
	
		var t1q1=document.mytest.t1q1;
		var t1q2=document.mytest.t1q2;
		var t1q3=document.mytest.t1q3;
		var t1q4=document.mytest.t1q4;
		var t1q5=document.mytest.t1q5;
		var t1q6=document.mytest.t1q6;
		var t1q7=document.mytest.t1q7;
		var t1q8=document.mytest.t1q8;
		var t1q9=document.mytest.t1q9;
		var t1q10=document.mytest.t1q10;
		var t1q11=document.mytest.t1q11;
		var t1q12=document.mytest.t1q12;
		var t1q13=document.mytest.t1q13;
		var t1q14=document.mytest.t1q14;
		var t1q15=document.mytest.t1q15;
		var t1q16=document.mytest.t1q16;
		var t1q17=document.mytest.t1q17;
		var t1q18=document.mytest.t1q18;
		var t1q19=document.mytest.t1q19;
		var t1q20=document.mytest.t1q20;
		var t1q21=document.mytest.t1q21;
		var t1q22=document.mytest.t1q22;
		var t1q23=document.mytest.t1q23;
		var t1q24=document.mytest.t1q24;
		var t1q25=document.mytest.t1q25;
		var t1q26=document.mytest.t1q26;
		var t1q27=document.mytest.t1q27;
		var t1q28=document.mytest.t1q28;
		var t1q29=document.mytest.t1q29;
		var t1q30=document.mytest.t1q30;
		var t1q31=document.mytest.t1q31;
		var t1q32=document.mytest.t1q32;
		var t1q33=document.mytest.t1q33;
		var t1q34=document.mytest.t1q34;
		var t1q35=document.mytest.t1q35;
		var count=0;
		var countQ=0;
		let counterValueEI = document.querySelector('.test-question__correctly');
		let counterValueAll = document.querySelector('.test-question__all');

		function checkAnswersAll(oneAsnwersCheckInput){
			if(oneAsnwersCheckInput.value == "a"){
				document.querySelector('.jq-radio__div').style.background = "green"
				count++; 
				countQ++; 
				// console.log(document.getElementById('rightAnswer-styler'));
				
			}else{
				countQ++;
				document.querySelectorAll('.jq-radio.checked').forEach(function (bd) {
					bd.style.border="1px solid red"
				})
				document.querySelectorAll('.jq-radio.checked').forEach(function (chd) {
					chd.querySelector('.jq-radio__div').style.background = "red"
				})
				// t1q.querySelector('input').setAttribute('disabled', '')
				for (let i = 0; i < t1q1.length; i++){
					console.log(t1q1[i].disabled = true)
				}
			}
		};

		checkAnswersAll(t1q1);
		checkAnswersAll(t1q2);
		checkAnswersAll(t1q3);
		checkAnswersAll(t1q4);
		checkAnswersAll(t1q5);
		checkAnswersAll(t1q6);
		checkAnswersAll(t1q7);
		checkAnswersAll(t1q8);
		checkAnswersAll(t1q9);

		checkAnswersAll(t1q10);
		checkAnswersAll(t1q11);
		checkAnswersAll(t1q12);
		checkAnswersAll(t1q13);
		checkAnswersAll(t1q14);
		checkAnswersAll(t1q15);
		checkAnswersAll(t1q16);
		checkAnswersAll(t1q17);
		checkAnswersAll(t1q18);
		checkAnswersAll(t1q19);

		checkAnswersAll(t1q20);
		checkAnswersAll(t1q21);
		checkAnswersAll(t1q22);
		checkAnswersAll(t1q23);
		checkAnswersAll(t1q24);
		checkAnswersAll(t1q25);
		checkAnswersAll(t1q26);
		checkAnswersAll(t1q27);
		checkAnswersAll(t1q28);
		checkAnswersAll(t1q29);

		checkAnswersAll(t1q30);
		checkAnswersAll(t1q31);
		checkAnswersAll(t1q32);
		checkAnswersAll(t1q33);
		checkAnswersAll(t1q34);
		checkAnswersAll(t1q35);


		counterValueEI.innerHTML = count;
		counterValueAll.innerHTML = countQ;

		document.querySelectorAll('input').forEach(function (inp) {
			if ((inp.value == 'a') == true){
				for (let i = 1; i <= 35; i++){
					console.log(i)
					console.log(inp.style.border="1px solid green")
					document.getElementById('rightAnswer'+i+'-styler').querySelectorAll('.jq-radio__div').forEach(function (div) {
						div.style.background = "green";
					})
					document.getElementById('rightAnswer'+i+'-styler').style.border="1px solid green";
					document.getElementById('rightAnswer'+i+'-styler').classList.add('checked')
				}
			}
		})
	
		let elementThanks = document.querySelector('.thanks-page');
		let elementTest = document.querySelector('.test-page');
		elementThanks.classList.remove("dispaly-none");
		elementTest.classList.add("dispaly-none");
};

function testPlacement(){
	//answer counting function
	
	var t1q1=document.mytest.t1q1;
	var t1q2=document.mytest.t1q2;
	var t1q3=document.mytest.t1q3;
	var t1q4=document.mytest.t1q4;
	var t1q5=document.mytest.t1q5;
	var t1q6=document.mytest.t1q6;
	var t1q7=document.mytest.t1q7;
	var t1q8=document.mytest.t1q8;

	var t2q1=document.mytest.t2q1;
	var t2q2=document.mytest.t2q2;
	var t2q3=document.mytest.t2q3;
	var t2q4=document.mytest.t2q4;
	var t2q5=document.mytest.t2q5;
	var t2q6=document.mytest.t2q6;
	var t2q7=document.mytest.t2q7;
	var t2q8=document.mytest.t2q8;
	var t2q9=document.mytest.t2q9;
	var t2q10=document.mytest.t2q10;
	var count=0;
	var countQ=0;
	let counterValueEI = document.querySelector('.test-question__correctly');
	let counterValueAll = document.querySelector('.test-question__all');

	function checkAnswersAll(oneAsnwersCheckInput){
		if(oneAsnwersCheckInput.value == "a"){
			document.querySelector('.jq-radio__div').style.background = "green"
			count++; 
			countQ++; 
			// console.log(document.getElementById('rightAnswer-styler'));
			
		}else{
			countQ++;
			document.querySelectorAll('.jq-radio.checked').forEach(function (bd) {
				bd.style.border="1px solid red"
			})
			document.querySelectorAll('.jq-radio.checked').forEach(function (chd) {
				chd.querySelector('.jq-radio__div').style.background = "red"
			})
			// t1q.querySelector('input').setAttribute('disabled', '')
			for (let i = 0; i < t1q1.length; i++){
				console.log(t1q1[i].disabled = true)
			}
		}
	};

	checkAnswersAll(t1q1);
	checkAnswersAll(t1q2);
	checkAnswersAll(t1q3);
	checkAnswersAll(t1q4);
	checkAnswersAll(t1q5);
	checkAnswersAll(t1q6);
	checkAnswersAll(t1q7);
	checkAnswersAll(t1q8);

	checkAnswersAll(t2q1);
	checkAnswersAll(t2q2);
	checkAnswersAll(t2q3);
	checkAnswersAll(t2q4);
	checkAnswersAll(t2q5);
	checkAnswersAll(t2q6);
	checkAnswersAll(t2q7);
	checkAnswersAll(t2q8);
	checkAnswersAll(t2q9);
	checkAnswersAll(t2q10);

		counterValueEI.innerHTML = count;
		counterValueAll.innerHTML = countQ;

		document.querySelectorAll('input').forEach(function (inp) {
			if ((inp.value == 'a') == true){
				for (let i = 1; i <= 18; i++){
					console.log(i)
					console.log(inp.style.border="1px solid green")
					document.getElementById('rightAnswer'+i+'-styler').querySelectorAll('.jq-radio__div').forEach(function (div) {
						div.style.background = "green";
					})
					document.getElementById('rightAnswer'+i+'-styler').style.border="1px solid green";
					document.getElementById('rightAnswer'+i+'-styler').classList.add('checked')
				}
			}
		})
	
		let elementThanks = document.querySelector('.thanks-page');
		let elementTest = document.querySelector('.test-page');
		elementThanks.classList.remove("dispaly-none");
		elementTest.classList.add("dispaly-none");
};



function answer(){
	let elementThanks = document.querySelector('.thanks-page');
	let elementTestQ = document.querySelector('.test-question-page');
	elementThanks.classList.add("dispaly-none");
	elementTestQ.classList.remove("dispaly-none");
};


function checkTest(){
	var test1 = document.checkTestInput.test1;
	var test2 = document.checkTestInput.test2;
	var test3 = document.checkTestInput.test3;
	var firstName = document.getElementById('first-name');
	var age = document.getElementById('age');

	valid = true

	if(firstName.value == ""){
		firstName.style.border="1px solid red";
		valid = false
	}else{
		console.log(firstName.value);
		firstName.style.border="1px solid green";
	}

	if(age.value == ""){
		age.style.border="1px solid red";
		valid = false
	}else{
		console.log(age.value);
		age.style.border="1px solid green";
	}
	

	if(test1.value == ""){
		checkInputRadio('.loupe__items');
		valid = false
	}else{
		console.log(test1.value);
	}

	if(test2.value == ""){
		checkInputRadio('.loupe__questions_list_box-left');
		valid = false
	}else{
		console.log(test2.value);
	}

	if(test3.value == ""){
		checkInputRadio('.loupe__questions_list_box-right');
		valid = false
		console.log(test3.value);
	}else{
		console.log(test3.value);
	}

	if(valid == false){
		return valid;
	}else{
		checkInRequired();
	}
	
	
	function checkInputRadio(loupeQuestionsLstBox){
		document.querySelectorAll(loupeQuestionsLstBox).forEach(function (bd) {
			bd.style.border="1px solid red"
			})
			setTimeout(function() {
				document.querySelectorAll(loupeQuestionsLstBox).forEach(function (bd) {
					bd.style.border="1px solid transparent"
					})
			}.bind(this),2000);
	};
	
		function checkInRequired(){
		if (test1.value == "a"){
			document.location.href = "test-placement.html";
		}
		if (test1.value == "b"){
			document.location.href = "test-general-level.html";
		}
		if (test1.value == "c"){
			document.location.href = "test-business-english.html";
		}
		if (test1.value == "d"){
			document.location.href = "test-primery-plecement.html";
		}
	}
}


// $(function() {

// 	$('input[type="text"], select').styler();

// 	$(".js-form-validate").submit(function (f) {
// 	f.preventDefaultInput();
// 	document.location.href = "http://vlad-hosting.ru//far_gate/index.html";
// 		});
// });

