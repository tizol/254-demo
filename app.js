if (Meteor.isClient) {

  Template.people.helpers({
    twitterUsers: function () {
      return Meteor.users.find(); //Returns user Cursor from Collection
    }
  });


}
