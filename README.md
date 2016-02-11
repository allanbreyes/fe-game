# Front-end Simple Game

## Background:

This is a very primitive "game" that has a Player and Enemy that exchange hitting
(damaging) each other, and prints out each actor's health (status). The game
stops when one of the actors' health falls below 0.

## Tasks

- Refactor the JS, and optimize for re-usability, readability, composability
- Refactor HTML/CSS to get an evenly-spaced grid, with uniform height and width
- Show off :)

## Hints

- Keep .card class and make sure DOM order is maintained
- DRY out redundant code with classical or prototypical inheritance
- Add support for different names and multiple players/enemies

## Feedback

There is a basic play loop that runs and checks the output. You should still get
the following output:

```
* Monster hit Player One for 30hp!
* Player is alive! (70hp)
* Player hit Monster for 60hp!
* Monster is alive! (40hp)
* Monster hit Player One for 30hp!
* Player is alive! (40hp)
* Player hit Monster for 60hp!
* Monster has fallen!
```
