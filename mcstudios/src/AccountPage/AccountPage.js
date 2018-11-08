import React, { Component } from 'react';

/*
What I want to include in this page:
User's personal information stored in database
A list of already purchased movies stored in their part
A list of what they currently have in the shopping cart
  OR a message saying "you have movies in your shopping cart!" that links to the shopping cart stuff
Maybe some statistics based off the movies owned or something if I'm feeling fancy

I also need to find a way to view this page (maybe a temporary test button to be added on the main page)
*/

class AccountPage extends Component {
  render(){
    return (
    <div>
      <h1>Welcome to your page!</h1>
      <p>Here I hope to put user personal information</p>
      <p>And Here I would like to put the movies owned thing</p>
    </div>
  );
  }
}

export default AccountPage;
