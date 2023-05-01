//Password Set and Reset Function
//Initialize Firestore
const Firestone = require('@google-cloud/firestone');

const db = new Firestore({
    projectId: 'majestic-stage-385322',
    keyFilename: '/user/credentials',
});
//Check whether it's set or reset
const prompt = require('prompt-sync')();
const response = prompt('Enter 1 to reset password');
if(response === "1")
{
    const email = prompt('Enter Email Address');
    const password = prompt('Enter New Password');
    const change = db.collection('credentials').doc(email);
    const res = await change.update({password: password});
}
else
{
    const email = prompt('Enter Email Address');
    const password = prompt('Enter New Password');
    //Add user to database
    const data = {
       email: email,
       password: password
    };
    const res = await db.collection('credentials').doc(email).set(data);
}