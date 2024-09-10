

var questions = [
  {
    type: "text",
    question:
      "Which of the following statements accurately describes a higher-order function?",
    answers: [
      {
        text: "A higher-order function is a function that takes another function as an argument or returns a function as a result.",
        answer: true,
      },
      {
        text: "A higher-order function is a function that can only operate on numbers.",
        answer: false,
      },
      {
        text: "A higher-order function is a function with a fixed number of parameters.",
        answer: false,
      },
      {
        text: "A higher-order function is a function that executes a loop internally.",
        answer: false,
      },
      {
        text: "A higher-order function is a function that performs input/output operations.",
        answer: false,
      },
    ],
  },
  {
    type: "image",
    question: "chose the correct image",

    options: [
      { src: "../imagescoll/imagemap1.png", answer: true },
      { src: "../imagescoll/imagemap2.png", answer: false },
      { src: "../imagescoll/imagemap3.png", answer: false },
    ],
  },
  {
    type: "text",
    question: "Which of the following are common elements in data modeling?",
    answers: [
      { text: "Entities", answer: true },
      { text: "Attributes", answer: true },
      { text: "Relationships", answer: true },
      { text: "Transactions", answer: false },
      { text: "Indexes", answer: false },
    ],
  },
  {
    type: "image",
    question: "chose the correct image",
    // image: "path/to/france-image.jpg",
    options: [
      { src: "../imagescoll/imageodd1.png", answer: true },
      { src: "../imagescoll/imageodd2.png", answer: false },
      { src: "../imagescoll/imageodd3.png", answer: false },
    ],
  },
  {
    type: "text",
    question: "Which of the following statements about recursion is true?",
    answers: [
      { text: "Recursion involves a function calling itself.", answer: true },
      { text: "Recursion is the same as iteration.", answer: false },
      {
        text: "Recursion can only be used in functional programming.",
        answer: false,
      },
      { text: "Recursion always leads to infinite loops.", answer: false },
      {
        text: "Recursion can only be used for sorting algorithms.",
        answer: false,
      },
    ],
  },
  {
    type: "image",
    question: "chose the correct image",
    options: [
      { src: "../imagescoll/imagereduce1.png", answer: true },
      { src: "../imagescoll/imagereduce1.png", answer: false },
      { src: "../imagescoll/imagereduce1.png", answer: false },
    ],
  },
  {
    type: "text",
    question:
      "Which of the following concepts are part of Object-Oriented Programming?",
    answers: [
      { text: "Encapsulation", answer: true },
      { text: "Inheritance", answer: true },
      { text: "Polymorphism", answer: true },
      { text: "Recursion", answer: false },
      { text: "SQL", answer: false },
    ],
  },

  {
    type: "text",
    question: "Which of the following statements about variables is true?",
    answers: [
      { text: "Variables are used to store data values.", answer: true },
      { text: "Variables can only hold integer values.", answer: false },
      {
        text: "Variables are automatically immutable in all programming languages.",
        answer: false,
      },
      {
        text: "Variables must be declared with a specific type in all programming languages.",
        answer: false,
      },
      {
        text: "Variables can only be used within the function they are declared in.",
        answer: false,
      },
    ],
  },
];



function showandhide() {
  $('#welcome-page').show()
  $('#quiz-page').hide() 

  $('#start-button').on('click', function() {
      $('#welcome-page').hide() 
      $('#quiz-page').show() 
      nextquestion() 
     
  })
}


showandhide();



/// to find true one by loopingg at the array 


function affiche(element) {
    var $questionDiv = $('<div class="mydiv"></div>').appendTo('#quiz-page');
    $questionDiv.append('<h2>' + element.question + '</h2>')

    if (element.type === "text") {
        $.each(element.answers, function(i, answer) {
            var $answerP = $('<p class="answer">' + answer.text + '</p>').appendTo($questionDiv)
            if (answer.answer === true) {
                $answerP.attr('data-answer', 'true')
            }
        });
    } else if (element.type === "image") {
        $.each(element.options, function(i, option) {
            var $imgOption = $('<img src="' + option.src + '" class="image-option" alt="Option ' + (i+1) + '">').appendTo($questionDiv)
            if (option.answer === true) {
                $imgOption.attr('data-answer', 'true')
            }
        });
    }
}
////data-answer: is a custom HTML attribute for storing extra information. It marks whether an answer is correct

////$.each: is a jQuery method for looping through arrays and objects. It simplifies applying functions to each item.
 
///var $anything :allows you to easily manipulate

var indexquestion = 0;  
function nextquestion() {
    $('#quiz-page').empty() 
    if (indexquestion < questions.length) {
        affiche(questions[indexquestion])
        indexquestion++
    } else {
        finalmessage() 
    }
}


///$('#quiz-page').empty() removes all child elements and content from #quiz-page.


var trueAnswers = 0; 

function finalmessage() {
  var message = ''
  
  if (trueAnswers >= questions.length / 2) {
      message = '<h1>Congratulations! You won!</h1>'
  } else {
      message = '<h1>Sorry, you lost.</h1>'
  }
  message += '<p>You got ' + trueAnswers + ' out of ' + questions.length + ' correct.</p>'
  $('#quiz-page').html(message)
}




    $(document).on('click', '.answer, .image-option', function() {
        var $clicked = $(this)
        var $questionDiv = $clicked.closest('.mydiv')
        
        if ($clicked.attr('data-answer') === 'true') {
            $clicked.css({"color": "green"})
            trueAnswers++ 
        } else {
            $clicked.css({"color": "red"})
            $questionDiv.find('[data-answer="true"]').css({"color": "green"})
        }


        setTimeout(nextquestion, 1000) 
    })
