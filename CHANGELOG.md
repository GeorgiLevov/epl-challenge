# EPL Challenge Changelog

## Version 0.2.0 GOALS
- Working User Accounts, easy authentication through Email and Password
- Refactored User Data model routing to backend instead of encrypted local-storage
- Revamping of the layouts, to remain functional yet updated based on new async capabilities

- Iintroducing issues into Github so I can have appropriate merges

## Version 0.1.10
- *Not Started* User Login Refactor, 
    I may wait to refactor the form until React 19 drops into STABLE

- Football API statistics data now asynchronously arriving through Appwrite BASS and fed through a provider component

## Version 0.1.9
- ***Project revival Effort***
- Picked the most reasonable DB and created Database for project
- Created collections to store user and football data
- Created Serverless functions to re-hydrate database with newest FOOTBALL DATA from online API

- *Not Started* User Login
- *Not Started* Code refactor for async data loading

## Version 0.1.7
- General Backend Updates and code Refactoring
- Created Data Snapshot for backup and debugging purposes

- *Not Started* Update to Score page - show Bets in similar fashion to matchweek fixtures, linear gradient with red when bet lost and linear-gradient with green when bet won, 
- *Not Started* Click on bet to bring out lower-third section which shows who the bet was originally for: team name/draw 
- *Not Started* Time tracker for Weeks page (scrollbar) showing relevant weeks and having the ability to scroll through all matchweeks


## Version 0.1.6
- Matchweek, UI Overhhul
- EPL Logo component redesigned
- EPL Logo is now acting as back to Home button
- Wrapper component updated, background images updated
- Back button locations and page placement updated
- Admin panel developement was **abandoned** because the execution of admin functions would require an online save state, which is contradictory to the app gist


## Version 0.1.5
- *REMOVED* Retroactive betting data updated function
- Added Logic to show last bets instead of all bets in Scorepage
- Created Bonus Points Button
- Updated Back button and it's location for each relevant page 

- *Not Started* Admin panel for faster score input as well as stat logging 
- *Not Started* Match betting page restyling 
- *Not Started* Adding game scores into Scorepage


## Version 0.1.4
- Fixed older bets data to be compatible with newer bet object
- Resources now consolidated for better extensibility
- Bug* (Empty Signup page) FIXED

- *In progress* Creating admin panel for faster score input as well as stat tracking 
- *In progress* Updating Match Betting page styling 
- *In progress* Adding game scores into Scorepage
- *Need to remove* Retroactive betting data updated function


## Version 0.1.3
- Updated general pages layout, for better visibility (page wrapper) 
- Upgraded Score page, now users can see which teams they voted for on each bet.  

- *In progress* Resources DB upgrade


## Version 0.1.2
- Minor performance improvements for faster load time
- Back button and surrounding styling is now decoupled, sticking to bottom of page fixed

- *In progress* Create page wrapper to push content inward, for better visibility


## Version 0.1.1
- Added new main font - "Radio Canada" + a fallback font
- Updated Back button placement on multiple pages 
- Updated Logo sizing - (will probably update again once fully refactored for cross-device responsiveness)
- Minor styling touch-ups

- *In progress* updating page styling so Back button doesn't stick to bottom of page


## Version 0.1.0
- MVP fully executed
- Restructured code layout for better visibility
- Started styling overhaul, moving to styled-components instead of single-file components