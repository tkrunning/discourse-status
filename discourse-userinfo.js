var data = null;
var currentUser = null;
// enter the url of your own discourse installation
var baseUrl = "https://forum.example.com"

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
	currentUser = JSON.parse(this.responseText).current_user;
  }
});

xhr.open("GET", baseUrl + "/session/current.json", false);

xhr.send(data);


if (currentUser) {
	console.log("logged in: ", currentUser.username);
	var loggedIn = true
	var discourseUsername = currentUser.username;
	var discourseName = currentUser.name;
	var firstName = discourseName.replace(/ .*/,'');
	var discourseUserId = currentUser.id;
	var discourseNotifications = currentUser.unread_notifications;
	var discourseMessages = currentUser.unread_private_messages;

	var profileUrl = baseUrl + "/users/" + discourseUsername + ".json";

	var data = null;
	var currentUserInfo = null;
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === this.DONE) {
		currentUserInfo = JSON.parse(this.responseText).user;
	  }
	});
	xhr.open("GET", profileUrl, false);
	xhr.send(data);	

	if (currentUserInfo) {
		discourse_email = currentUserInfo.email;
	}
}
else {
	console.log("user is logged out");
	var loggedIn = false
	var discourseUsername = null;
	var discourseName = null;
	var discourseUserId = null;
	var discourseNotifications = 0;
	var discourseMessages = 0;
}