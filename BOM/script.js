//-------------->Windows Function<-------------//

//windows.open()
//window.close()
//windows.document.bgcolor
//window.focus()
//window.moveBy( , )   لما بدوس عليها كل مرة بتتحرك من مكتنها بال coordinates اللى مديلهالها
//window.moveTo( , )   moveTom astatic place according to the coordinate of the function
//window.resizeBy( , )
//window.resizeTo( , )
//window.scrollBy( , )
//windows.scrollTo( , )
var win;
function openNewWin() {
  win = open("childWin.html", "", "width = 150 , height = 150");
}

function closeNewWin() {
  win.close();
}

function changebkgrd() {
  win.document.bgColor = "wihiteblue";
  win.focus();
}

function moveWin() {
  win.moveBy(50, 50);
  win.focus();
}

function moveWinTo() {
  win.moveTo(50, 50);
  win.focus();
}
