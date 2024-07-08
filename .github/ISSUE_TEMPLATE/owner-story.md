---
name: Owner Story
about: Make the lab content detail page
title: ''
labels: ''
assignees: ''

---

**As a** Owner 
 **I need** my portofolio can show the details content of my labs page
 **So that** people can see my detail content (looks like a blog content)
   
 ### Details and Assumptions

 * We Create a new Component for rendering dynamic unique content
 * The data is fetched trough the Inferno API
   
 ### Acceptance Criteria  
   
 ```gherkin
 Given the user has landed to the "My Lab" page
 When user click some content
 Then the user will see the details of the content
 ```
