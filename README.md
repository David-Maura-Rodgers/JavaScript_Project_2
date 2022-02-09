# General Knowledge Quiz

My General Knowledge Quiz site has a simple and clear design so that the user won't feel unsure as how to navigate and run the quiz. The user will first be taken to the home page where they are greeted with a welcome message and a button they can click to be taken to the quiz page.

The first question in the question array will be displayed on this page. The questions will change dynamically when the user has selected a radio button that corresponds with the answer they wish to choose. They will then click on the Next Question button to get the next question in the array. This process repeats until they reach the reach the end of the quiz. They can then click the Restart Button to try the quiz again.

![home-page](https://user-images.githubusercontent.com/91907661/153229405-2847ed4c-6dd9-4df4-9d40-bc63d1004829.png)

![quiz-page](https://user-images.githubusercontent.com/91907661/153229560-b0364ecc-f4d3-40f4-89cf-2a9b14f65386.png)


## Features 

Below is a list of features that I have on this site which I will detail individually. There is a welcome page with a Start quiz Button that will take the user to the main quiz page. On this quiz page, there is a quiz area which contains a question display area and 4 radio buttons that the user can select from to register an answer. And below this, but still within the same containing div, the user will receive feedback on their answers. 

There is another div below which contains dynamic icons in response to user input. And finally two buttons: Next Question and Restart Quiz along with a score tracker at the bottom. 

I have also added a favicon for the site.

### Each Feature Explained

- __Question Display__

  - The question display will dynamically display every question the the array as the user progress with the quiz

![question-display](https://user-images.githubusercontent.com/91907661/153230124-c07a24f9-1ba8-4d3f-ad85-822b7b87f3c4.png)


- __Radio Buttons for Answer Selection__

  - There are four radio buttons from which the user can click to register an answer
  - Once they select an answer all other radio buttons are disabled

![radio-buttons](https://user-images.githubusercontent.com/91907661/153231223-4a24307d-f58b-4335-b540-13bf26d0acff.png)


- __Feedback: rolling and at quiz end__

  - The feedback display will display "Correct!" or "Incorrect! The correct answer . . ." each time the user chooses an answer. This always corresponds to either the correct or incorrect answer.
  - When the user reaches the last question in the array, the feedback text will turn purple and let them know their final score and that the quiz has ended

![icons-incorrect](https://user-images.githubusercontent.com/91907661/153233169-5979b88d-fb64-4af9-bb5c-97dd2ce2011d.png)

![feedback-end](https://user-images.githubusercontent.com/91907661/153234582-7a66278d-dcde-40ee-9ecb-99de9e7995fb.png)


- __Icons (Correct and Incorrect)__

  - There are two icons which respond to the user input and responds to the checkAnswer function to supply visual feedback 
  - Both screenshots below show both icon responses

![icons](https://user-images.githubusercontent.com/91907661/153232612-d5155d79-d03a-4d56-bc7c-90bc3d4a093a.png)

![icons-incorrect](https://user-images.githubusercontent.com/91907661/153233169-5979b88d-fb64-4af9-bb5c-97dd2ce2011d.png)


- __Buttons: Next Question & Restart Quiz__
- __Score Tracker__

  - The Next Question and Restart Quiz are displayed as below and will navigate the quiz accordingly
  - When the user hovers over either button, the button responds dynamically as shown below and reverts back when user moves cursor away from the button
  - If the user clicks on the next button after the last question - they will receive an alert
  - Once the user clicks OK on the alert, the next button will disappear and the user can click the Restart Button
  - (The Restart Button can be activated at any time)
  - The score tracker is below the buttons and displays a running total as evidenced below and in previous screenshots

![button-psuedo](https://user-images.githubusercontent.com/91907661/153236206-0df1e363-3f26-4892-a0d7-32f846c07b72.png)

![next-alert](https://user-images.githubusercontent.com/91907661/153237796-018157b5-eb92-4432-96e0-7efe1042281f.png)

![next-hide](https://user-images.githubusercontent.com/91907661/153238859-5478b547-7766-40f7-8ef5-19c028ade634.png)


## Lighthouse Score

Please see below for lighthouse report:

![lighthouse](https://user-images.githubusercontent.com/91907661/153240879-5e9e2a87-5121-4231-82a6-05da5c1842fa.png)

  
### Validator Testing (HTML, CSS, JavaScript)

- HTML (index page)
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FJavaScript_Project_2%2F)
- HTML (quiz page)
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FJavaScript_Project_2%2Fquiz.html%3F)

- CSS (index page)
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FJavaScript_Project_2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- CSS (quiz page)
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FJavaScript_Project_2%2Fquiz.html%3F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JavaScript
  - No errors were found using JSHint validator [(JShint) validator](https://jshint.com/)
  Screenshot is shown below: 

  ![jshint](https://user-images.githubusercontent.com/91907661/153269134-e6066486-774f-4757-a1bb-2f08d898d7a1.png)


- __Warnings__
  - I received the below from both pages when doing the CSS validator check. They just seem to be toolkit warnings for the font I am suing from Font Awesome (this doesn't affect the site anyway and I have sans serif as back up font in any case):
  - moz-osx-font-smoothing is a vendor extension
	- webkit-font-smoothing is a vendor extension
	- ms-filter is a vendor extension
	- ms-filter is a vendor extension
	- ms-filter is a vendor extension
	- ms-filter is a vendor extension
	- ms-filter is a vendor extension
	- The property clip is deprecated
	- The property clip is deprecated


### Unfixed Bugs or Other Quirks

- There doesn't appear to be any bugs with the functionality of the quiz in of itself. I have tested it several times, as can be expected during the time I was developing the script. All seems to work fine and all functions called upon appear to work with no problems.

- Font Awesome:
  - As mentioned previously above, I get warnings about vendor extensions with my use of Font Awesome, but nothing that seems to me critical or impedes the functionality of the site for the user

- However, I have put a lot of work into responsiveness  for this site and have had quite a few challenges, many of which are resolved now. My comments on this are as below:
  - I have had to take the no repeat attribute off the background img for the 1024 px media query as the image would not cover the entire screen as hoped.
  - The icons within the icon area div are generally well centered within its containing div, however on some screens, it can look a bit off kilter. With enough time in the future, I would hope to have this 100%. 
  - I have added media queries for 5 breakpoints (1440px, 1240px, 992px, 576px, 375px) to ensure as much integrity as possible. Screenshots evidence the below:

  ![1440px](https://user-images.githubusercontent.com/91907661/153282167-9ad76422-ee8f-45af-b5e4-42be52e16138.png)

  ![1024px](https://user-images.githubusercontent.com/91907661/153282524-a803ea18-33d9-4d71-a6d5-43983ab6e003.png)

  ![768px](https://user-images.githubusercontent.com/91907661/153282682-e034dc17-4bb4-4c98-9f70-b59c024e1c08.png)

  ![425px](https://user-images.githubusercontent.com/91907661/153282823-49ac5e73-b45b-454c-86cc-2ecf1f435f6e.png)

  ![320px](https://user-images.githubusercontent.com/91907661/153282999-3b5d889e-ce26-4289-b353-ef37541c3afc.png)


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://david-maura-rodgers.github.io/JavaScript_Project_2/ 


### Credits for all Content 

- __HTML Code__
  - For Start Button on index page: https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link
  - Icons come from: https://fontawesome.com/
  - Favicon comes from : https://favicon.io/

- __CSS Code__
  - None

- __JavaScript Code__
  - I looked online at W3 Schools and MDN to get a better understanding of JavaScript concepts when writing the script.
  - I had a look at stack Overflow on numerous occasions, and though I did try several snippets of code in my project, I never ended up using 
  any of it as it never worked as I needed it to for what I was doing
  - I did however, receive a lot of help in the mentor sessions and guidance on similar projects to get started, along with quite a few online tutor sessions to help me through the logic of what I was trying to achieve with my script

### Media
- The background image is from This Open Source site: https://pixabay.com/illustrations/question-mark-pile-questions-symbol-2492009/
