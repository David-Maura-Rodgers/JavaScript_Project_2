# General Knowledge Quiz

My General Knowledge Quiz site has a simple and clear design so that user won't feel unsure as how to navigate and run the quiz. 

<!-- ![home-page](https://user-images.githubusercontent.com/91907661/147686839-8534ed06-a51b-471b-ae05-44b2d51e8a31.png) -->

## Features 

Below is a list of features that I have on this site which I will detail individually - there is a nav menu for each page, and there are five pages in total - Home, Sleep, Exercise, Mindfulness and a Suggestions page. The home page has an aside which also loads up a YouTube video for each section. Within the Sleep, Exercise and Mindfulness pages, there is an iframe, table and list items which link to various external sources. There is a form for the Suggestions page to record data entered by users of the site. There is also a footer which links the user to social media pages and a link which brings users back to the top of the page if they have scrolled down to the bottom.

### Each Feature Explained

- __Navigation Bar__

  - The Nav Menu bar is located on all pages and allows for seamless flow for the user to access all the content on the site

![nav-menu](https://user-images.githubusercontent.com/91907661/145723593-3abdadbc-c308-4ef7-9d8e-6ed93b71f8ff.png)

- __Social Media and Back to Top__

  - There are links to the website Social Media pages as located in the footer. These open in a new tab.
  - There is also a back to top link which can be clicked to return to Nav menu bar at any time

![back-socialmedia](https://user-images.githubusercontent.com/91907661/145724575-6b2e2cb9-8736-4a44-a0da-33ec5b712fbd.png)

- __Title Links__

  - You can click on the the Mind and Body Maintenance title and and it will take you to the home page at any time, you can also click on the title for Ideas for healthy minds and bodies, and this will take you directly to the Suggestions Page, these title links appear on all pages.

![title-links](https://user-images.githubusercontent.com/91907661/145724081-9e58f592-7c15-4f93-a281-ba0bf4365b33.png)

- __Home Page Content__

  - The content on the home page includes some introduction info and links within each section to take you directly to the page they relate to
  - There is also a video that loads up automatically that you can choose to unmute. Each video gives a good insight into what the correlating page is about

![home-page-content](https://user-images.githubusercontent.com/91907661/147687864-c196493a-aca0-4dee-8c2d-6225e774ae05.png)

- __Sleep, Exercise and Mindfulness Pages__

  - Each section will follow the same layout. Below, the Sleep page of the site is shown as an example 
  - Below the short paragraph at the top of page (not included in screenshot), an iframe will load in addition to a table of sources sectioned off in different categories: Source, Video and Article - these table cells can be clicked and the user is taken to a new tab containing the information source
  - There is also a list of more detailed studies and journals for a more in depth study which also links to new tabs
  - This section can also be updated by way of newly suggested content from myself or other users on the Suggestions page 

![sleep-exercise-mindfulness-content](https://user-images.githubusercontent.com/91907661/145724847-c3522d11-7450-41c9-ba89-ba32611bdaec.png)

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
