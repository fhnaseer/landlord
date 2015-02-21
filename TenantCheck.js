User = new Mongo.Collection("user");

if (Meteor.isClient) {

    Session.setDefault('showResult', 0);

    Template.body.helpers({
        "response": {
            "personal": {
                "name": "Asim Tenny",
                "dateOfBirth": "1978-12-30T00:00:00.000Z",
                "cnic": 3740506159771,
                "currentAddress": "173 Street 34, F-10/1",
                "permanentAddress": "56 Nust, H-12/2"
            },
            "basic": {
                "riskIndex": 90
            },
            "evictions": [
                {
                    "case": 234535,
                    "filing": "2005-11-26T00:00:00.000Z",
                    "judge": "Abdul Rub Khan",
                    "order": "evict house immediately and pay 10000"
                },
                {
                    "case": 234535,
                    "filing": "2005-11-26T00:00:00.000Z",
                    "judge": "Abdul Rub Khan",
                    "order": "evict house immediately and pay 10000"
                }
            ]
        }
    });

    Template.body.events({
        "submit .cnic-search": function (event) {
            // This function is called when the new task form is submitted

            var text = event.target.text.value;

            //User.find({
            //    cnic: text
            //});

            Session.set("showResult", 1);

            // Clear form
            event.target.text.value = "";

            // Prevent default form submit
            return false;
        }
    });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
