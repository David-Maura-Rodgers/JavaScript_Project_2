# General Knowledge Quiz

My General Knowledge Quiz site has a simple and clear design so that the user won't feel unsure as how to navigate and run the quiz. The user will first be taken to the home page where they are greeted with a welcome message and a button they can click to be taken quiz page.

The first question in the question array will be displayed on this page. The questions will change dynamically when the user has selected a radio button that corresponds with the answer they wish to choose. They will then click on Next Question button to get the next question in the array. This process repeats until they reach the reach the end of the quiz. They can then click the Restart Button to try the quiz again.

![home-page](https://user-images.githubusercontent.com/91907661/153229405-2847ed4c-6dd9-4df4-9d40-bc63d1004829.png)

![quiz-page](https://user-images.githubusercontent.com/91907661/153229560-b0364ecc-f4d3-40f4-89cf-2a9b14f65386.png)


## Features 

Below is a list of features that I have on this site which I will detail individually. There is a welcome page with a Start quiz Button that will take the user to main quiz page. On this quiz page, there is a quiz area which contains a question display area and 4 radio buttons that the user can select from to register an answer. And below this, but still within the same containing div, the user will receive feed back on their answers. 

There is a another div below which contains dynamic icons in response to user input. And finally two buttons: Next Question and Restart Quiz along with a score tracker at the bottom. 

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

  - The feedback display will display "Correct!" or "Incorrect! The correct answer . . ." each time the user chooses an answer. This always corresponds to either the correct or incorrect answer is.
  - When the user reaches the last question in the array, the feedback text will turn purple and let them know their final score and that the quiz has ended

![icons-incorrect](https://user-images.githubusercontent.com/91907661/153233169-5979b88d-fb64-4af9-bb5c-97dd2ce2011d.png)

![feedback-end](https://user-images.githubusercontent.com/91907661/153234582-7a66278d-dcde-40ee-9ecb-99de9e7995fb.png)


- __Icons (Correct and Incorrect)__

  - There are two icons which respond to the user input and responds to the checkAnswer function to supply visual feedback 
  - Both sreenshots below show both icon responses

![icons](https://user-images.githubusercontent.com/91907661/153232612-d5155d79-d03a-4d56-bc7c-90bc3d4a093a.png)

![icons-incorrect](https://user-images.githubusercontent.com/91907661/153233169-5979b88d-fb64-4af9-bb5c-97dd2ce2011d.png)


- __Buttons: Next Question & Restart Quiz__

  - The Next Question and Restart Quiz are displayed as below and will navigate the quiz accordingly
  - When the user hovers over either button, the button responds dynamically as shown below and reverts back when user moves cursor away from the button
  - 

![button-psuedo](https://user-images.githubusercontent.com/91907661/153236206-0df1e363-3f26-4892-a0d7-32f846c07b72.png)

![next-alert](https://user-images.githubusercontent.com/91907661/153237796-018157b5-eb92-4432-96e0-7efe1042281f.png)


- __Suggestions Page__

  - This page will allow the user to enter some basic info on the form - drop down for age group, text input for name and email address. There will be some radio button questions in there as well. All in all, it takes no time to complete and all these questions are required to be able to submit the form
  - There is a text box area for the user to enter suggestions and additional content for the site, which I can implement and give credit to the person suggesting it, if they want me to do so.

![suggestions-form](https://user-images.githubusercontent.com/91907661/145725027-bcb0b194-2261-4241-b489-1f37b94047a6.png)  

- __Suggestions Page Validation__
 - There is validation as shown below to ensure that the user is entering all the required data, be it text: text and email format, and a requirement for the radio button options to also be clicked to submit the data on the form. An error message is displayed to the user 'Please fill out this field'.

![suggestions-validation](https://user-images.githubusercontent.com/91907661/147268935-7a029374-4aea-4c2f-ad31-58739c534a2a.png)


## Testing and Lighthouse

![lighthouse](https://user-images.githubusercontent.com/91907661/146009134-118f8408-eefe-43b9-83e8-c9c7e1adab0d.png)

I have included the following errors and warnings I received from Validation testing and how and if they needed fixing:

- __Errors__
- The frameborder attribute on the iframe element is obsolete. Use CSS instead.
  - I have removed the obsolete attribute from all instances of this element 
- Bad value assets/images/woman meditating 2.jpg for attribute src on element img: Illegal character in path segment: space is not allowed.  
  - This has now been changed to the proper format  
  
- __Warnings__
- The name attribute is obsolete (for the back to top function). Consider putting an id attribute on the nearest container instead.
  - Removed name as suggested and feature still works
- Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
  - I have used flex with CCS on my section which contains the image, paragraph, aside and Youtube Video. A header for these sections didn't fit with my plan for layout
- Value Error : padding-left Too many values or values are not recognized: 0 10px 0 10px
  - Have changed to 0 10px and removed obsolete values  
  
### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FDavid.Rodgers-html-css-Port.Proj.%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavid-maura-rodgers.github.io%2FDavid.Rodgers-html-css-Port.Proj.%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

A very small, but noticeable difference in the size of the sleeping woman image and the 2 images below (two people exercising and woman meditating) This is likely due to the content being ina a flex layout. I have tried everything I know, looked at resources online and there seems to be no error or difference in the html or CSS controlling them.

I then had to create the code below, which takes the first image and it's container to be unique - I changed the width of the viewport to 36 as opposed to 30 for the two images below it. Not ideal, but it does fix the issue.

#circle-images-sleep {
    position: relative;
    width: 36vw;
    height: 22vw;
    overflow: hidden;
    margin-left: 30px;
}

#sleep-circle {
    height: 300px;
    width: 300px; 
    border-radius: 50%;
    border: navy solid 5px;
    width: 90%;
    height: 60%;
    object-fit: cover;
}

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://david-maura-rodgers.github.io/David.Rodgers-html-css-Port.Proj./

### Credits for all Content 

- __HTML Code__
  - For back to top page link: https://www.computerhope.com/issues/ch001475.htm
  - Fonts come from: https://fontawesome.com/
  - For links in table cells: https://stackoverflow.com/questions/10070232/how-to-make-a-cell-of-table-hyperlink
  - To ensure that all radio buttons are required before table is submitted: https://stackoverflow.com/questions/49798482/why-can-i-check-multiple-radio-buttons/49798515

- __CSS Code__
  - For skew function on Submit button: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew()
  - For blended colors on nav menu and form: https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/
  - To ensure that loaded videos loaded on page to a set height: https://css-tricks.com/fluid-width-video

- __Info and Sources (links to articles, videos and journals)__
  - https://www.ft.com/content/e6ccdcac-133d-11e9-a581-4ff78404524e
  - https://sleepmatters.ie/
  - https://www.foundmyfitness.com/
  - https://www.materprivate.ie/dublin/centre-services/all-services/sleep-disorders-clinic/
  - https://www.youtube.com/watch?v=TUdYMpitk8Y
  - https://www.youtube.com/watch?v=oZ-Ng0RXHLc
  - https://www.youtube.com/watch?v=qvNLNl7oJnM
  
  - https://www.hybridcalisthenics.com/
  - https://scoobysworkshop.com/
  - https://www.healthline.com/
  - https://www2.hse.ie/wellbeing/exercising-indoors/indoor-exercises-for-older-people.html
  - https://www.youtube.com/watch?v=U1oARCOjzKM
  - https://www.youtube.com/watch?v=5eV33roibqc
  - https://www.youtube.com/watch?v=8CE4ijWlQ18

  - https://www.youtube.com/watch?v=TUdYMpitk8Y
  - https://www.youtube.com/watch?v=zsXDIk5ur2U
  - https://www.youtube.com/watch?v=Ko51JVPUtAI&t=39s
  - https://self-compassion.org/
  - https://jackkornfield.com/
  - https://alastaircampbell.org/blog/category/mental-health-2/ 

  - https://www.mayo.edu/research/clinical-trials/diseases-conditions/sleep-disorders/
  - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6281147/
  - https://www.sleepmedres.org/journal/view.php?number=175
  - https://www.sleepmedres.org/journal/view.php?number=176
  - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1402378/
  - https://www.bmj.com/content/371/bmj.m3485
  - https://med.stanford.edu/news/all-news/2020/05/stanford-medicine-study-details-molecular-effects-of-exercise.html
  - https://www.frontiersin.org/articles/10.3389/fmed.2019.00236/full
  - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1828319/
  - https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2395346/
  - https://www.jmir.org/2020/7/e18723/
  - https://alastaircampbell.org/blog/category/mental-health-2/

### Media
- The photos and videos used on the home, sleep, exercise, mindfulness are from This Open Source site: https://pixabay.com/
- The YouTube Videos that load on Home page are as listed below:
  - https://www.youtube.com/watch?v=KGfdR7TSJo4&t=1s
  - https://www.youtube.com/watch?v=WDz4PRXlrVg&t=26s
  - https://www.youtube.com/watch?v=mOo1x8S2Dxc&t=39s
