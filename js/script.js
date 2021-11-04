const membersTeam = [
  {
    photo: 'img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    role: 'Chief Editor',
  },
  {
    photo: 'img/angela-caroll-chief-editor.jpg',
    name: 'Angela Croll',
    role: 'Chief Editor',
  },
  {
    photo: 'img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager',
  },
  {
    photo: 'img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager',
  },
  {
    photo: 'img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    role: 'Developer',
  },
  {
    photo: 'img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
  }
]
// console.log('Vediamo il nostro array di oggetti',membersTeam);

const teamContainer = document.querySelector('.team-container');
teamContainer.innerHTML = '';


for (let key in membersTeam) {
  // console.log(membersTeam[key]);

  const member = membersTeam[key];

  // console.log(member);

  createCard(member); 
}


const addMemberButton = document.querySelector('#addMemberButton');

addMemberButton.addEventListener('click',function() {

  console.log('Sto cliccando il bottone add');

  const newMember = {
    photo: document.querySelector('#image').value,
    name: document.querySelector('#name').value,
    role:  document.querySelector('#role').value,
  }

  createCard(newMember);

  membersTeam.push(newMember);

  console.log('Nuovo membro',newMember);
  console.log('Vediamo il nostro array dopo il push',membersTeam);
});


function createCard(member) {

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamContainer.append(teamCard);

  teamCard.innerHTML = `
  <div class="card-image">
  <img
    src="${member.photo}"
    alt="${member.name}"
  />
  </div>
  <div class="card-text">
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  </div>
  `;
}

