const sangerApp = {
    congressionalDistrict: "5th Tennessee District", //easy function built
    platformStatements: {
        taxes: "Dont't like them",
        jobs: 'Need more of them',
        infrastructure: 'is cool',
        healthCare: 'Make it less pricey',
        crimeEnforcement: 'Monopoly go to jail'
    },
    donateHere: 'www.paypal.com', //easy function built
    calendarEvents: {
        nov22: 'Thanksgiving',
        dec12: 'voting',
        dec25: 'Presents'
    },
    volunteerInfo: {
        name: '',
        address: '',
        email: '',
        phone: '',
        availability: '',
        desiredActivity: ['Answering Phone Calls', 'taking polls', 'making signs', 'etc...']
    },
    biography: 'Insert epic Bio!', //easy function built
    imgGallery: {
        headShot: 'https://www.example.com/images/img123.jpg',
        familyPic: 'https://www.example.com/images/img1234.jpg',
        constituentPic: 'https://www.example.com/images/img12345.jpg'
    },
    missionStatement: 'eat tacos',  //easy function built
    registerToVoteURL: 'https://www.usa.gov/register-to-vote' //easy function built

}

//MORE DIFFICULT FUNCTIONS



//  THE FOLLOWING ARE EASY FUNCTIONS
//This will allow user to change Congressional District
function changeDistrict(newDis) {
    sangerApp.congressionalDistrict = newDis;
  }

  //This will allow user to change donation link
  function donationURL(newDonate) {
    sangerApp.donateHere = newDonate;
  }

   //This will allow user to change biography
   function bioRecall(newBio) {
    sangerApp.biography = newBio;
  }

  //This will allow user to change mission statement
function missionChange(missionary) {
    sangerApp.missionStatement = missionary;
  }

 //This will allow user to change register to vote URL
 function newVoteLink(goVote) {
    sangerApp.registerToVoteURL = goVote;
  }
  

  //CHANGES ENDS OF STATEMENT PLATFORMS
//change tax statement platforms
function changeTaxStatement(newState) {
    sangerApp.platformStatements.taxes = newState;
}

function changeJobStatement(newState) {
    sangerApp.platformStatements.jobs = newState;
}

function changeInfraStatement(newState) {
    sangerApp.platformStatements.infrastructure = newState;
}

function changeHealthStatement(newState) {
    sangerApp.platformStatements.healthCare = newState;
}

function changeCrimeStatement(newState) {
    sangerApp.platformStatements.crimeEnforcement = newState;
}

//this allows you to add a platform statement
function changePlat (key1, something) {
sangerApp.platformStatements[key1]=something
}

//this allows you to add photos to the image gallery
function changePhoto (key1, radPhoto) {
    sangerApp.imgGallery[key1]=radPhoto
    }

changePlat('more', 'shizam');
changePhoto('highSchoolPhoto', "url.etcandstuff");

console.log(sangerApp.imgGallery);




