![CF](http://i.imgur.com/7v5ASc8.png) LAB - Socket.io
=====================================================

Today, we begin the construction of a Twitter-like application called "Yakker"

## Before you begin
* Open this [Starter Sandbox](https://codesandbox.io/s/5zzpv6zlon) and Fork it
* Create a new repository in your github account called `yakker-server`
* Copy the starter code from this reppository into yours, run an `npm install` and start it up with `nodemon`

## Assignment
Extend the functionality of the base **Yakker** application

### Requirements - Client
* Add message history to the display, not just the last one
    * How many do you want to show?
        * 15 at a time or ONLY the last 15?
    * Do you delete old ones or paginate?
    * Bounce to reload?
    * Can a user bookmark or save good ones?
    * What can we do with likes and un-likes?
* STYLING
* Animate incoming messages

### Requirements - Server
* Modularize the server so that you can test it
    * Test your units (functions), not the event wiring.
* Add support for additional events
    * What else should you consider supporting?
        * Flag? Like? Delete?
    * Hold onto history
        * Up to 1000?
        * Persist on server stop, Load on start

### Testing
* Write tests around all of your units
* Test event handlers (not events themselves)

###  Documentation
Complete the README.md file included in the lab folder
