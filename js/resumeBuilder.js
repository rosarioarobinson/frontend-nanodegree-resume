/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Rosario Robinson",
  "role": "Web Developer",
  "contacts": {
    "mobile": "1-800-555-5555",
    "email": "rosarioarobinson@gmail.com",
    "github": "rosarioarobinson",
    "location": "Washington, D.C."
  },
  "welcomeMessage": "Welcome to my Resume site.",
  "skills": [
    "HTML", "CSS", "Social Media Marketing", "Saving the universe"
  ],
  "bioPic": "images/animatedme.jpg"
};

bio.display = function() {
  //format the data
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  //append
  $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  //header details
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedbioPic);
  $("#header").append(formattedwelcomeMsg);
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  });
};

bio.display();

var work = {
  "jobs": [
    {
      "employer": "SACG",
      "title": "Social Media Manager",
      "location": "Atlanta, GA",
      "dates": "2014-2016",
      "description": "Handled and created all social media platforms from Facebook to Twitter."
    }
  ]
};

for (var i = 0; i < work.jobs.length; i ++) {
  //new element
  $("#workExperience").append(HTMLworkStart);

   //format data
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

   //append
   $(".work-entry:last").append(formattedEmployer + formattedTitle);
   $(".work-entry:last").append(formattedDates);
   $(".work-entry:last").append(formattedLocation);
   $(".work-entry:last").append(formattedDescription);


}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2017",
      "description": "Here is a description of a sample project for a FrontEnd Web Development Project.",
      "images": ["images/197x148.gif"]
    }
  ]
};

projects.display = function() {

  for (var project = 0; projects.projects[project].length; project ++) {
    $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);


  $(".project-entry:last").append(formattedTitle);
  $(".project-entry:last").append(formattedDates);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length > 0) {
    for (var j = 0; j < projects.projects[project].images.length; j++) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[j]);
      $(".project-entry:last").append(formattedImage);
    }
  }

  }
};
projects.display();


var education = {
  "schools": [
    {
      "name": "Montgomery College",
      "location": "Rockville, MD",
      "degree": "Undergraduate",
      "majors": "Computer Information Systems",
      "dates": "2017-Current",
      "url": ["http://www.montgomerycollege.edu/"]
    }
  ],
  "onlineCourses": [
    {
      "title": "FrontEnd Web Development",
      "school": "Udacity",
      "dates": "2017",
      "url": ["https://www.udacity.com/"]
    }
  ]
};

education.display = function() {
  for (var school = 0; education.schools[school].length; school ++) {
    $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

  $(".education-entry:last").append(formattedName + formattedDegree);
  $(".education-entry:last").append(formattedDates);
  $(".education-entry:last").append(formattedLocation);
  $(".education-entry:last").append(formattedMajor);

  }
  for (var onlineCourses = 0; education.onlineCourses[onlineCourses].length; onlineCourses ++) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].title);
  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].dates);
  var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);

  $(".education-entry:last").append(formattedTitle + formattedSchool);
  $(".education-entry:last").append(formattedDates);
  $(".education-entry:last").append(formattedURL);

  }
};
education.display();

$("#mapDiv").append(googleMap);
