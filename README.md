# summary on this applicaiton
This is a single page applicaiton; it allows the user to get the 
information of star war movies including actors, tools, files, etc.  

# files structure
## db.json
-- keep the json data that reveived from remote API, it can be also used for rendering the webpage. 
## index.html
-- this is the place where to set the structure of the elements on the web page
## style.css
-- this is to set the style of html elements

## index.js
-- this is the main javaScript file to communicate with server to either send or receive the data for satisfying the client's requests. 
-- this file contain the code for enabling the webpage to communicate with clients via some events such as: click, form submit, and etc. 

# funcitons summary:
## formDataHandler()
-- the function to use the data input by user to get the data from server accordinging, then diplay on the feedback pool. 
## the functions init automatically get the pre-start data. 
### getPeople()
### getFilms()
### renderPeople()
### renderFilms()
### init()
-- it is the place to keep all functions that get the pre-start data ready from server to be displayed on page