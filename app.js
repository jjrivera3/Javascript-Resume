let name = 'joseph rivera';

let career = 'Web designer';

let description = 'I like my coffee #000000';

let interests = ['Basketball', 'Photography', 'Running', 'Singing in the shower'];

let experiences = [
{
    company: 'Yardi',
    position: 'Web Designer',
    description: 'Creates user interfaces, using front-end code in HTML, CSS, JQuery, and JavaScript to interface with backend code.'

},

    {
        company: 'Convert Marketing',
        position: 'Marketing Strategist',
        description: 'Used the power of the Internet to communicate awareness of companies to their target audience for higher profitability'
    },
    {
        company: 'Dominos Pizza',
        position: 'Delivery Driver',
        description: 'Delivered pizza to annoying drunk college kids'
    }
];

let companies = ['Yardi', 'Convert Marketing', 'Dominoes'];
let jobTitles = ['Web Designer','Marketing Specialist', 'Delivery Driver'];
let descriptions = ['Creates user interfaces, using front-end code in HTML, CSS, JQuery, and JavaScript to interface with backend code.', 'Used the power of the Internet to communicate awareness of companies to their target audience for higher profitability', 'Delivered pizza to annoying drunk college kids'];

let skills = [
    {
        skill: 'Can eat a large pizza alone',
        cool: false
    },
    {
        skill: 'Switching tabs from Facebook to something work-related really fast every time my boss approaches',
        cool: true
    },
    {
        skill: 'Sits back seat middle if necessary',
        cool: false
    },
    {
        skill: 'Showers regularly',
        cool: true
    }
]

function displayInfo(name, career, description) {
    console.log('Name: ' + name.toUpperCase());
    console.log('Career: ' + career);
    console.log('Description: ' + description);
    console.log('');
}

function displayInterests(interests){
    console.log('My Interests:');
    for (i=0; i < interests.length; i++) {
        console.log('* ' + interests[i]);
    }
    console.log("");
}



function displayPosition(companies, jobTitles, descriptions) {
    console.log("WORK HISTORY:");
    for (i=0; i < companies.length; i++) {
        console.log('* ' + jobTitles[i] + ' at ' + companies[i] + ' - ' + descriptions[i]);
    }
    console.log("");
}

function displaySkills(skills) {
    console.log("SKILLS:");
    for (i = 0; i < skills.length; i++) {
        if (skills[i].cool == true) {
            console.log("* BAM: " + skills[i].skill);
        } else {
            console.log("* " + skills[i].skill);
        }
    }
    console.log("");
}

displayInfo(name, career, description);
displayInterests(interests);
displayPosition(companies,jobTitles,descriptions);
displaySkills(skills);
