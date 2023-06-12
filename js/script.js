const userName = prompt( 'Ciao, mi dici il tuo nome?');

// console.log(userName, typeof userName);

const userSurname = userSurname = prompt( `Bel nome!
ti va di dirmi il tuo cognome?`);

// console.log(userSurname, typeof userSurname);

const userFavouriteColor =  prompt( `Ok, quasi fatto...
un ultima domandina, colore preferito?`);

// console.log(userFavouriteColor, typeof userFavouriteColor);

const classNumber='101'

const password = userName + userSurname + userFavouriteColor + classNumber;

console.log(password, typeof password);

document.getElementById('password-display')
.innerHTML = password;