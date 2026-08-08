//Напиши функцію canDrive(hasLicense), яка приймає true або false. Якщо true — повертає "Yes", якщо false — "No". Обов'язково використай тернарний оператор.
function canDrive(hasLicense) {
    return hasLicense ? "Так" : "Ні";
}

console.log(canDrive(true));
console.log(canDrive(false));
console.log("Водій з правами:", canDrive(true));
console.log("Водій без прав:", canDrive(false));
console.log(`Має права: ${canDrive(true)}`);
console.log(`Має права: ${canDrive(false)}`);