## 1. SPA vs. MPA 📄
Before getting into Angular, I mostly interacted with traditional websites.
* **MPA (Multi-Page Application):** Every time I click a link to go to a new page, the browser asks the server for a new page, and the entire screen goes blank for a split second to reload. It fetches an entirely new HTML document every time.
* **SPA (Single-Page Application):** This is what Angular builds, and it's awesome! The browser only loads a single HTML page initially. As I click around, Angular steps in and dynamically rewrites the current page with new data instead of asking the server for a whole new HTML page. It feels much faster and smoother, almost like a desktop or phone app.

## 2. MVC vs. MVVM in Angular 🏗️
I've learned about architectural patterns, and here is how they fit into Angular:
* **MVC (Model-View-Controller):** You have a Model (the data), a View (the user interface), and a Controller (the logic that handles input and updates the Model/View).
* **MVVM (Model-View-ViewModel):** Angular is actually closer to MVVM! 
  * **Model:** My data structures and backend services.
  * **View:** My HTML templates (what the user sees).
  * **ViewModel:** My `.ts` component class. It acts as the glue that holds the state and logic specifically for that View. Because of Angular's data binding, when the ViewModel changes, the View updates automatically, and vice versa!

## 3. The Component Files 🧩
When I create a new component in Angular, it gives me a folder with four specific files. Here is what I use each one for:
* **`.ts` (TypeScript):** The "brain" of the component. This is the ViewModel. Here is where I declare my variables, arrays, and write functions to handle button clicks.
* **`.html` (Template):** The "skeleton" or "face". This holds the HTML markup and dictates how the component is structured visually on the screen.
* **`.css` (Styles):** The "makeup". This is for my CSS styling. The coolest part is that styles written here are scoped *only* to this component, meaning I don't have to worry about accidentally messing up styles on another page!
* **`.spec.ts` (Testing):** The "exam paper". This file is generated for writing automated unit tests to ensure my component's logic is working exactly as expected.

## 4. Interpolation `{{ }}` ✨
This is one of the first and most fun features I learned! 
Interpolation is a form of one-way data binding. It allows me to take a variable or piece of data from my TypeScript file (`.ts`) and easily display it in my HTML file (`.html`). 

All I have to do is wrap the variable in double curly braces, like this: `{{ studentName }}`. Angular evaluates whatever is inside the braces and injects it right into the DOM as text.
