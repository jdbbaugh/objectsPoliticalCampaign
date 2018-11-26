const sangerApp = {
    congressionalDistrict: "5th Tennessee District",
    platformStatements: {
        taxes: "Dont't like them",
        jobs: 'Need more of them',
        infrastructure: 'is cool',
        healthCare: 'Make it less pricey',
        crimeEnforcement: 'Monopoly go to jail'
    },
    donateHere: 'www.paypal.com',
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
    biography: 'Insert epic Bio!',
    imgGallery: {
        headShot: 'https://www.example.com/images/img123.jpg',
        familyPic: 'https://www.example.com/images/img1234.jpg',
        constituentPic: 'https://www.example.com/images/img12345.jpg'
    },
    missionStatement: 'eat tacos',
    registerToVoteURL: 'https://www.usa.gov/register-to-vote'

}

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
  
