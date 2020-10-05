## Description:
- This is a project on a Password Generator. This code features Variable Arrays that are called upon by functions. The Variable Arrays contain strings of all of the characters that the user can choose from. E.g. if they wanted special characters, uppercase or lowercase, and numbers. 
![Image of Global Variables](https://i.imgur.com/zKps8i5.png)
- Inside of a getInfo function, the user is prompted with a series of questions that asks what characters they'd like in their password.
![Image of Prompts](https://i.imgur.com/mAnLG2g.png)
- The info is then stored inside of an object, to later be called by a generatePassword function.
![Image of Object](https://i.imgur.com/egX7Nnm.png)
- The generatePassword function runs when the Generate Password button is clicked. The function grabs the info from the getInfo button, and when the user selects their options for the password, the global arrays of strings are then concatenated into an allChars empty array.
![Image of generatePassword](https://i.imgur.com/PQeOdXl.png)
- A for loop is created to write random characters into the password.
![Image of for loop](https://i.imgur.com/AUUFmW8.png)