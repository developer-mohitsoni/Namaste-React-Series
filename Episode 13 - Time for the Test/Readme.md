# Namaste React 🚀

<p align="center">Episode 13 - Time for the Test</p>

# Food Ordering Webiste 😋

<ul>
    <li>Header</li>
    <ul>
        <li>Logo</li>
        <li>Nav Items</li>
    </ul>
    <li>Body</li>
    <ul>
        <li>Search</li>
        <li>Restaurant Container</li>
        <ul>
            <li>Image</li>
            <li>Name of Restaurant, Rating, Crusines, Price, Locality</li>
        </ul>
    </ul>
    <li>Footer</li>
    <ul>
        <li>Copyright</li>
        <li>Links</li>
        <li>Address</li>
        <li>Contact</li>
    </ul>
</ul>

<h2>Two types of Export/Import</h2>

- Default Export/Import

  export default Component;
  import Component from "path";

- Named Export/Import

  export const Componenet;
  import {Component} from "path";

## React Hooks

<p>Normal JS utility Functions</p>

- useState() -Superpowerful State Variables in React
- useEffect()

## 2 Types of Routing in Web Apps 😎

- Client Side Routing
- Server Side Routing

## Redux Tookit

- Install @reduxjs/tookit and react-redux
- Build our store
- Connect our store to our App
- Slice (cartSlice)
- dispatch(action)
- reducer
- Redux Store
- Selector

## Types of Testing:-

- _Manual Testing:-_

  Testing is done by the developer manually. It involves testing an application through manual inspection, without using the use of automated tools.

  Manual testing is the process of manually testing software for defects. It requires a tester to play the role of an end user where by they use most of the application's features to ensure correct behaviour.

  ### Writing the Test Cases using:-

  - Unit Testing:-

       Unit testing is a software development process that involves testing the smallest parts of an application, called units, to determine if the code works as intended. Unit testing is an important step in the development process because it can help detect early flaws in code.

       It's a way where you break down your code into smaller pieces and test each piece individually.

       You test your react component in isolation.

       Example: If I am writing an add function, I will test it with different inputs to make sure it's working as expected.

       Example:- Suppose if i want to test my Header Component, I will only do Unit Testing of my Header Component.

  - Integration Testing:-
  
       Integration testing is a software testing process that involves testing the integration of different components or systems to ensure that they work together as expected. Integration testing is an important step in the development process because it can help detect issues that arise when different components are combined.
    
       It's a way where you test how different components work together.

       Suppose There are multiple components and they are talking to each other and we will develop a flow of an action in a React Application that we will test.
    
       Example: If I am writing a login page, I will test how the login page interacts with the backend API.
    
       Example:- Suppose if i want to test my Header Component and Footer Component, I will do Integration Testing of my Header and Footer Component.





  - End to End Testing (e2e Testing):-

       Basically e2e Testing will start from user landing on to the page, clicking on to the login button, You entering the Username and Password basically simulating on the website.

       End-to-end testing is a software testing process that involves testing an application from start to finish to ensure that it works as expected. End-to-end testing is an important step in the development process because it can help detect issues that arise when different components are combined.

       It's a way where you test your application as a whole.

       Example: If I am writing a shopping cart application, I will test the entire application from the user's perspective to ensure that it works as expected.

       Example:- Suppose if i want to test my Header Component, Footer Component and Cart Component, I will do End to End Testing of my Header, Footer and Cart Component.
