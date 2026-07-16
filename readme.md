# Football Match Simulator
 
 
A TypeScript-based football match simulator designed with strict adherence to **Object-Oriented Programming (OOP)** and **SOLID principles**. The project follows an emit/subscribe model where all the actions are emitted to the observers and observers decide the next action. Match Event Bus stores an array of observers which can be subscribed and published. Each Match has its own Match Event Bus which allows us to have multiple matches simultaneously without two matches interrupting or clashing with each other. Commentary and Scoreboard are observers that receive information of every event occuring in their match through the match bus. Functions like Run, Shoot, Goal etc publish the events to the bus and Observers like Commentary, Scoreboard receive it.
 
## Key Features
 
* **Role-Based Players:** Supports distinct player types including Strikers, Midfielders, Defenders, and Goalkeepers.
 
* **Unique Abilities:** Players perform common actions (Run, Pass) and role-specific actions (Shoot, Tackle, Through Ball, Save).
  
* **Dynamic Commentary:** We have a language registry and Language Packs (EnglishPack, HindiPack, SpanishPack). Language registries store the language names and language packs in a map so accessing a language and adding new language packs is easy.
 
 
## How to Run
 
 
1. **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) and TypeScript installed.
 
  ```bash
 
  npm install -g typescript ts-node

2. Run 

  ``` bash
  npm run dev