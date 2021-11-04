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

  let photo = member.photo;
  let name = member.name;
  let role = member.role;

  console.log('Foto',photo);
  console.log('Nome',name);
  console.log('Ruolo',role);

  createCard(photo, name, role);
  
}

function createCard(photo, name, role) {

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamContainer.append(teamCard);

  photo;
  name;
  role,

  teamCard.innerHTML = `
  <div class="card-image">
  <img
    src="${photo}"
    alt="Wayne Barnett"
  />
  </div>
  <div class="card-text">
    <h3>${name}</h3>
    <p>${role}</p>
  </div>
  `;
}

