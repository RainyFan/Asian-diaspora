var questionBank= [
    {
        question : ' At first, it was known as “___________” due to the Cantonese-speaking immigrants that came from the province of Canton — known today as Guangzhou — in southeastern China.',
        option : ['Little Canto','Little China','Little Asia','Dragon ball'],
        answer : 'Little Canto'
    },
    {
        question : 'Today there are about _______ Chinatowns in the U.S. Some of the best known are located in New York, San Francisco, Los Angeles, Washington, D.C., Honolulu, Seattle, Chicago, Philadelphia, Houston and Portland, Oregon.',
        option : ['50','20','10','30'],
        answer : '50'
    },
    {
        question : 'The story of many historic Chinatowns across the United States began in _______ when James W. Marshall found gold in Northern California. ',
        option : ['1921','1856','1892','1848'],
        answer : '1848'
    },
    {
        question : 'Chinatowns were borne out of necessity due to______',
        option : ['racial exclusion','self protection',' Informal housing restrictions','segregation against Asians', 'all of above'],
        answer : 'all of above'
    },
    {
        question : 'Overseas, in the southern region of China where people were reeling from the economic and class instability resulting from the ______',
        option : ['Xinhai Revolution(1911-1912)','Cold War(1945 - 1991)','Opium War (1839-1842) and Taiping Revolution (1850-1864)',' The Communist Revolution (1949)'],
        answer : 'Opium War (1839-1842) and Taiping Revolution (1850-1864)'
    },
    {
      question : 'Chinatowns were borne out of necessity due to "racial exclusion" and "self protection," says Min Zhou, director of UCLA Asia Pacific Center and professor of sociology and Asian American Studies.',
      option : ['True','False'],
      answer : 'True'
  },
  {
    question : 'After China became an ally to the United States during WWII, the U.S. repealed the Chinese Exclusion Act in______ and allowed Chinese immigrants to be naturalized as citizens.',
    option : ['1940','1943','1958','1954'],
    answer : '1943'
  },
  {
    question : 'One of the earliest laws against Chinese immigrants was the Page Act of______, which prohibited the entry of Chinese women.',
    option : ['1864','1903','1882','1875'],
    answer : '1875'
  }
  ]
  
  var question= document.getElementById('question');
  var quizContainer= document.getElementById('quiz-container');
  var scorecard= document.getElementById('scorecard');
  var option0= document.getElementById('option0');
  var option1= document.getElementById('option1');
  var option2= document.getElementById('option2');
  var option3= document.getElementById('option3');
  var next= document.querySelector('.next');
  var points= document.getElementById('score');
  var span= document.querySelectorAll('span');
  var i=0;
  var score= 0;
  
  //function to display questions
  function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
  }
  
  //function to calculate scores
  function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
  }
  
  //function to display next question
  function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
  }
  
  //click events to next button
  next.addEventListener('click',nextQuestion);
  
  //Back to Quiz button event
  function backToQuiz(){
    location.reload();
  }
  
  //function to check Answers
  function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
  }
  
  
  displayQuestion();