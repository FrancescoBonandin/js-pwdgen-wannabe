let userName = undefined;
let userSurname = undefined;
let userFavouriteColor = undefined;
let classNumber='101'

userName = prompt( 'Ciao, mi dici il tuo nome?');

// console.log(userName, typeof userName);

userSurname = prompt( `Bel nome.
ti va di dirmi il tuo cognome?`);

// console.log(userSurname, typeof userSurname);

userFavouriteColor = prompt( `Ok, quasi fatto...
un ultima domandina, colore preferito?`);

// console.log(userFavouriteColor, typeof userFavouriteColor);

document.getElementById('password-display')
.innerHTML = userName + userSurname + userFavouriteColor + classNumber;
