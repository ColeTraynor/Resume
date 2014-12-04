
var bio = {
    'Name': 'Cole Traynor',
    'Role': 'Web Programmer',
    'contacts': {
        'email': 'cole-traynor@hotmail.ca',
        'mobile': '905 808 0097',
        'gitHub': "http://github.com/ColeTraynor",
        'location': 'Oakville, Ontario'
    },
    'biopic': 'http://patkaybites.files.wordpress.com/2013/04/happy-smug-sloth.jpg',
    'Wel': 'Welcome to my resume!',
    'skills': ['Knowledge of Python, Java, Javascript', 'Arch linux user']

};


var education = {
    'schools':{
        'sta':{
            'Name': 'St. Thomas Aquinas secondary school',
            'date': 'Graduating class of 2015',
            'location': 'Oakville, Ontario',
            'url': 'http://sta.hcdsb.org'
        }
    },
    'online':{
        'udacity':{
            'Title': 'Javascript basics',
            'date': 'November 2014',
            'school': 'Udacity',
            'url': 'http://www.udacity.com',
        }
    },
};


var work = {
    'jobs': {
        "Tutor":{
            "employer":"Jarvan Salman",
            "title": "Tutor Lord & savior",
            "desc":"Bronze V",
            "location": "Oakville, Ontario"
        }
    },
};

var project = {
    'projects':{
        'sudoku': {
            "title": "Sudoku",
            "date": "October 2014",
            "Desc": "Display and alter board",
            "img": "http://get-healthy-wealthy-and-wise.com/wp-content/uploads/2014/01/sudoku-puzzle-256.png"
        }
    }
};


bio.display = function(info){
    
    var formatName = HTMLheaderName.replace('%data%', info.Name);
    var formatEmail = HTMLemail.replace('%data%', info.contacts.email);
    var formatMobile = HTMLmobile.replace('%data%', info.contacts.mobile);
    var formatGithub = HTMLgithub.replace('%data%', info.contacts.gitHub);
    var formatBiopic = HTMLbioPic.replace('%data%', info.biopic);
    var formatRole = HTMLheaderRole.replace('%data%', info.Role);
    var formatMsg = HTMLWelcomeMsg.replace('%data%', info.Wel);

    $("#header").prepend(formatName, formatRole);
    $("#topContacts").append(formatMobile, formatGithub, formatEmail);

    $("#header").append(formatBiopic, formatMsg, HTMLskillsStart);
    
    for (skill in info.skills){
        var formatSkill = HTMLskills.replace('%data%', info.skills[skill]);
        $('#skills').append(formatSkill);
    };
};

education.display= function(info){
    
    for (school in info.schools){
        
        $('#education').append(HTMLschoolStart);
        var formatName = HTMLschoolName.replace('%data%', info.schools[school].Name).replace("#", info.schools[school].url);
        var formatDate = HTMLschoolDates.replace('%data%', info.schools[school].date);
        var formatLocation = HTMLschoolLocation.replace('%data%', info.schools[school].location);

        $(".education-entry:last").append(formatName, formatDate, formatLocation);

    };

    $(".education-entry:last").append("<br></br>");
    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in info.online){

        var formatTitle = HTMLonlineTitle.replace('%data%', info.online[course].Title);
        var formatTitle = formatTitle.replace("#", info.online[course].url);
        var formatDate = HTMLonlineDates.replace('%data%', info.online[course].date);
        var formatSchool = HTMLonlineSchool.replace('%data%', info.online[course].school);
        $(".education-entry:last").append(formatTitle, formatSchool);
    };
};


work.display = function(info){
    
    for (job in info.jobs){

        $("#workExperience").append(HTMLworkStart); 
        var formatEmployer = HTMLworkEmployer.replace("%data%", info.jobs[job].employer);
        var formatTitle = HTMLworkTitle.replace("%data%", info.jobs[job].title);
        var formatDesc = HTMLworkDescription.replace("%data%", info.jobs[job].desc);

        $(".work-entry:last").append(formatEmployer, formatTitle, formatDesc);
    };
};

project.display = function(info){
    
    for (project in info.projects){
        
        $('#projects').append(HTMLprojectStart);
        var formatTitle = HTMLprojectTitle.replace('%data%', info.projects[project].title);
        var formatDate = HTMLprojectDates.replace('%data%', info.projects[project].date);
        var formatDesc = HTMLprojectDescription.replace('%data%', info.projects[project].Desc);
        var formatImg = HTMLprojectImage.replace('%data%', info.projects[project].img);

        $(".project-entry:last").append(formatTitle, formatDate, formatDesc, formatImg);
    };
};


bio.display(bio);
education.display(education);
work.display(work);
project.display(project);

$('#mapDiv').append(googleMap);

$('#main').append("<center>" + internationalizeButton + "</center>");

function inName(){
    var name = bio.Name.split(" ");
    
    return name[0] + " " + name[1].toUpperCase();
}

function logClick(x, y){
    console.log(x, y);
}

$(document).click(function(loc) {
    logClick(loc.clientX + " " + loc.clientY);
});

