# Ecommerce Filters

---

Smart reusable filters picker

## Live Application URL

---

**https://eccommerce-filters.netlify.app/**

## Technologies Used

---

HTML

CSS

JavaScript

TypeScript

React

## Features

---

Renders given filters data and its options

Select any number of options user wants

Cancel all selected filter options or only few options

Responsive and supports mobile view

## Steps

---

Clone the project into local.

Install all the NPM packages.

Go into the project folder and type the following command to install all NPM packages

`yarn`

In order to run the application Type the following command

`yarn start`

The Application Runs on localhost:3000

In order to test the application Type the following command

`yarn test`

## Application Design

---

### Info

Application has two main components Home page and FiltersBar component, FiltersBar is responsible for rendering filters and handling user interactions with filters and return data to Home page so that we can deal with returned data as we want.
We can show this data or we can send it in request to get filtered data from a server.

Every component has a spec test file.

Filters data exists in mockStore.ts file.

Data types exists in data-model folder.

### Pages

**Home**: Renders filters menu component and selected filters

### Components

**FiltersBar**: Receives filters data, selected-values and action to perform on selecting filter options, it's the main component responsible for rendering filters on large-screen and mobile.

**FilterWrapper**: Receives filter title, dynamic content and selectedFilterOptionsCount, its main job is to show a popover with content when user clicks on filter button.

**FilterOptionsForm**: Receives filter title, options, selectedOptionsValue, onApply method and afterApply method, content , its main job is to render options form and enable user to select any option, it has also two buttons apply and cancel button.
when user clicks apply, selected options are applied and when user clicks cancel selected options are cancelled.

**FiltersAccordion**: Responsible for wrapping FilterOptionsForm in accordion items.

**FiltersAccordionItem**: Wraps FilterOptionsForm.

**OptionsList**: Renders selected filter options with clear all button

## Resources

---

**create-react-app** : The following link has all the commands that can be used with create-react-app https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
