const admin = require('firebase-admin');

admin.initializeApp();

function main() {
  const match = {
    date: '2902199',
    homeTeam: { name: 'My_team' },
    homePlayers: ['Nomran Mailer', 'Peter Bonetti'],
    awayPlayers: ['Ernst Blofeld', 'Postman Pat'],
  };
  return admin
    .database()
    .ref('sm_matches/' + match.date + '/' + match.homeTeam.name + '/homeNGSPlayers')
    .set(match.homePlayers);
}

module.exports = main;
