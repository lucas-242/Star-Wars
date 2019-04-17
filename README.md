# Star Wars

## Description

This is a challenge proposed by B2W that consists of an application that serves as the basis for a game, whose objective is to guess a planet of the Star Wars universe through some information as name, climate, population, terrain and quantity of films in which it appeared.

## Rules and Functioning

The rules of the game are up to the players. For example, players who are trying to guess may ask 2 of the features before trying to guess the name of the planet.

Players can generate a random planet by clicking the random button or they can search for a planet by entering their name or ID number (according to the API there are 61 planets until today, so the ID goes from 1 to 61).

A search by name may return more than 1 result, showing other buttons by which the player will navigate through the results, they are: next, previous, and page numbers. After a search if the player clicks the random button, search results will be lost and a random planet will appear on the screen.

## How was it done

This project was developing using:

- Angular 7 to create the components and to consume the API.
- The SASS preprocessor.
- Bootstrap 4.
- The SWAPI API, which has a database with Star Wars planets, vehicles, ships, species and characters.