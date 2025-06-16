/*
*Estado en línea
 

Mostrar el estado en línea de una lista de usuarios.
 

Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` .
*/

function onlineStatus(users) {
  const n = users.length;

  if (n === 0) {
    return 'Nadie está en línea';
  } else if (n === 1) {
    return `${users[0]} está en línea`;
  } else if (n === 2) {
    return `${users[0]} y ${users[1]} están en línea`;
  } else {
    return `${users[0]}, ${users[1]} y ${n - 2} más en línea`;
  }
}

console.log(onlineStatus(["user99", "Betz15"]))