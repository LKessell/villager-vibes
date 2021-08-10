<h1 align="center">🏝 Villager Vibes 🏝</h1>

<p align="center"><img src="https://user-images.githubusercontent.com/77205456/128792545-373fb7ba-4635-4e38-b41b-ec899a1d44b9.gif"></p>

## Project Overview

  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
  
Villager Vibes is my final solo project completed during Mod 3 at the Turing School or Software and Design. This project was intended to showcase the skills that we have learned throughout the module for React, Router, and Cypress. During the planning stage, we chose a "niche audience" to cater to while building the app, which would help shape the functionality and styling. I geared my app toward "Judgemental Animal Crossing fans who love ranking villagers."

Villager Vibes allows fans of the Animal Crossing series to create a "Top 10" wishlist of their favorite villagers. On the dashboard, users can view a list of all villagers, or filter them by species. Users can click a villager to view more of their details, then add them to the wishlist if they choose. Villagers can also be removed from the wishlist by clicking a red icon.

## View the deployed app [Here on GitHub Pages](https://lkessell.github.io/villager-vibes)!

<p>
  <img height="500" alt="Mobile app dashboard" src="https://user-images.githubusercontent.com/77205456/128792908-8980f443-2cc4-453a-b1fe-3716be2c24c8.png">
  <img height="500" alt="Tablet wishlist" src="https://user-images.githubusercontent.com/77205456/128793004-996f16d5-9a74-45b1-805f-49f5cdb65393.png">
</p>

## Learning Goals
- Create a React app with a consistent, modular file strucure
- Effectively implement hooks to pass data between components
- Thoroughly test user flows using Cypress
- Handle multi-page functionality using React Router

## App Setup

In the new Terminal window, run the following commands:

`git clone git@github.com:LKessell/villager-vibes.git`  
`cd villager-vibes`  
`npm install`  
`npm start`  

Open your web browser of choice, then visit `localhost:3000` to view the app!

## Project Reflections
I wanted to keep the interface simple for this app, and mimic some of the menu styles in-game. Despite the simplicity of the app overall, managing the data for the wishlist proved to be a little tricky. After exploring the Context API in my previous project, I think it could be useful to simplify some of the props being passed. I'd like to explore this option in a future iteration!  
I also created some custom background images, which was a fun artistic experiment. There's a lot of room for future growth in this project, and I plan to continue making improvements.

## Future Additions
- Add a warning message when a user tries to add a villager and their wishlist is full
- Save wishlist data in localStorage so it will persist on page refresh
- Allow users to reorder villagers while viewing the wishlist
- Allow users to create multiple wishlists

## Credits
Inspired by Animal Crossing: New Horizons and [this island name generator](https://acnh-namegen.herokuapp.com/)  
Villager data and images from the [ACNH API](https://acnhapi.com/)  
Other icons from Freepik on [flaticon.com](https://www.flaticon.com/)
