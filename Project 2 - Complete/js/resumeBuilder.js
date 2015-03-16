// Object definition section

//BIO OBJECT GROUP
var bio = {
    "name" : "John Mulligan",
    "role" : "Web Developer Extraordinaire",
    "contacts" : {
        "mobile" : "+852-9835-8012",
        "email" : "jmulliganhk@gmail.com",
        "github" : "jm-hk",
        "twitter" : "jmulliganhk",
        "location" : "Shatin, Hong Kong"
    },
    "WelcomeMsg" : "In search of new challenges of Galactic Proportions",
    "skills" : [
        "Scuba Diving with Mantas",
        "Zeal for New Tech",
        "Awesomeness",
        "Teaching, Mentoring",
        "International Business",
        "JS, PHP, MySQL"
    ],
    "bioPic" : "images/Albert.png",
    "display" : function() {}
};

//WORK OBJECT GROUP
var work = {
    "jobs" : [
        {
            "employer": "AT&T Hong Kong",
            "title": "Director - Global Engineering",
            "location" : "Taikoo Shing, Hong Kong",
            "dates": "2002-present",
            "description": "An exciting position of directing the team building global network enhancements in 70+ countries."
        },
        {
            "employer": "Concert",
            "title": "CTO - AT&T Global Clearinghouse",
            "location" : "Causeway Bay, Hong Kong",
            "dates": "1999-2002",
            "description": "Lead the team that developed and launched VoIP technologies and SIP/XML based transaction control and settlements between 150+ carriers and ISPs."
        },
        {
            "employer": "AT&T On-Line Services",
            "title": "CTO",
            "location" : "Causeway Bay, Hong Kong",
            "dates": "1994-1999",
            "description": "Leading the development technologies for a fledgling Internet businesses, including the first international VoIP service, Transit IP services for ISPs, and early security appliance services."
        }
    ],
    "display" : function() {}
};

//PROJECTS OBJECT GROUP
var projects = {
    "projects" : [
        {
            "title" : "Front End Web Developer Project P1",
            "dates" : "January 2015",
            "description" : "Wonderful experience of learning new current to languages, HTML 5, CSS. Began to compare various DOMs and using placeholder graphics during development, like the galaxy below.",
            "images" : [
                "images/197x148-P1-Base.jpg",
                "images/M31-Andromeda.jpg"
            ],
            "url" : "http://www.udacity.com"
        },
        {
            "title" : "Front End Web Developer Project P2",
            "dates" : "February 2015",
            "description" : "A project that involving delving into Javascript and the beginnings of using APIs. Involved learning a great deal of new syntax and how to manipulate objects. jQuery.js and help.js are powerful tools to speed development when coupled with powerful APIs from organizations like google.",
            "images" : [
                "images/P2-Code-page.jpg",
                "images/Albert-snip.jpg"
            ],
            "url" : "http://www.udacity.com"
        }
    ],
    "display" : function() {}
};

//EDUCATION OBJECT GROUP
var education = {
    "schools" : [
        {
            "name": "Richard Ivey",
            "city": "Toronto",
            "degree": "Masters",
            "majors": ["MBA"],
            "location" : "London, Ontario, Canada",
            "dates": 2011,
            "url": "http://www.ivey.uwo.ca/"
        },
        {
            "name": "Insead",
            "city": "Fontainebleau",
            "degree": "International Business Management",
            "majors": ["Executive Training"],
            "location" : "Fontainebleau, France",
            "dates": 1997,
            "url": "http://www.executive-education.insead.edu/"
        },
        {
            "name": "University of Minnesota, Duluth",
            "city": "Duluth",
            "degree": "BS Program",
            "majors": ["Geology with Conc CompSci"],
            "location" : "Duluth, Minnesota",
            "dates": 1981,
            "url": "http://www.d.umn.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "date" : "July, 2015",
            "url" : "http://www.udacity.com/"
        },
        {
            "title" : "Software Defined Networks",
            "school" : "T-University",
            "date" : "October, 2014",
            "url" : "http://www.att.com/"
        }
    ],
    "display" : function() {}
};

/* Resume Display Function Section */

/* Bio Information Display Function */

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMob = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLoc);

    var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").prepend(formattedTwit);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGithub);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);

    var formattedWelMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
    $("#topContacts").prepend(formattedMob);

    $("#footerContacts").prepend(formattedLoc);

    $("#footerContacts").prepend(formattedTwit);

    $("#footerContacts").prepend(formattedGithub);

    $("#footerContacts").prepend(formattedEmail);

    $("#footerContacts").prepend(formattedMob);

    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);

    var formattedListStart = HTMLskillsStart.replace("box", "list");
    $("#header").append(formattedWelMsg);

    if (bio.skills.length > 0) {
        $("#header").append(formattedListStart);

        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").prepend(formattedSkill);
        }
    }
    $("#header").append(buttonContainer);

    $(".button-box").append(usaButton);

    $(".button-box").append(internationalizeButton);
};

/* Work Information Display Function */

work.display = function () { 
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedEmployedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedEmployedDates);

            var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedEmployerLocation);

            var formattedJobDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedJobDescrip);
        }
    }
};

/* Project Information Display Function */

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
            $(".project-entry:last").append(formattedProjTitle);

            var formattedProjDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjDate);

            var formattedProjDescript = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
            $(".project-entry:last").append(formattedProjDescript);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedProjImage);
                }
            }
        }
    }
};

/* Education Information Display Function */

education.display = function() {
    if (education.schools.length > 0) {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolFullTitle = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url) 
                + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolFullTitle);

            var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates)
            $(".education-entry:last").append(formattedSchoolDate);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }

    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var online in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#",
                education.onlineCourses[online].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
            $(".education-entry:last").append(formattedOnlineDate);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};


/* International and USA Name Standards Button Functions */
/* Using Standard Helper.js Buttons*/
/* Modified the CSS to make the bottons prettier */

function inName() {
    var name = bio.name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] + " " + name[1];
    return bio.name;
}
function usName() {
    var name = bio.name.split(" ");
    name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    bio.name = name[0] +" "+ name[1];
    return bio.name;
}

/* HEADER INFO */
bio.display();

/* WORK EXPERIENCE */
work.display();

/* PROJECTS */
projects.display();

/* EDUCATION */
education.display();


/* THE MAP */
$("#mapDiv").append(googleMap);