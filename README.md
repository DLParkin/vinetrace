Vinetrace - Test App

## About

A React Express Application which winery details from json files.

When bottling wine, a winery needs to know the percentage breakdown of
so they know what they can legally claim on the wine's label.

server running on 5000
client running on 3000

## Start

go into api folder and `yarn install && yarn start`
go into client folder and run `yarn install && yarn start`
go to localhost:3000 to see it in action

## TODO

In many places we are passing the whole json object around but should probably reduce them to a
dto or similar to only pass in what is actually required, types oh need types (I can hear the groaning now).
Create a seperate folder in the client side to have all the requests.
Variety/Year is not connected up as time started to dwindle
Fix implentation of how files are merged together, it is nasty...
A fair bit of repetition in the express get requests so could do with a refactor
Spend a bit more time on styling, used reactstrap but looks like it should be material ui?
