/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const btn_menu = document.getElementById('btn-menu');
const navbar = document.getElementById('navbar__list');

btn_menu.addEventListener('click', () => {
  navbar.classList.toggle('show');
  
  if (navbar.classList.contains('show')) {
    btn_menu.classList.replace('fa-bars', 'fa-xmark');
  } else {
    btn_menu.classList.replace('fa-xmark', 'fa-bars');
  }
});



/*
+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
*/
