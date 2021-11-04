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

  // console.log('Foto',photo);
  // console.log('Nome',name);
  // console.log('Ruolo',role);

  createCard(member); 
}



console.log(newObject);

function createCard(member) {

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamContainer.append(teamCard);

  teamCard.innerHTML = `
  <div class="card-image">
  <img
    src="${member.photo}"
    alt="Wayne Barnett"
  />
  </div>
  <div class="card-text">
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  </div>
  `;
}

