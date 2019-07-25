
//Make the DIV element draggagle:


function dragElement(elmnt) {
	elmnt = document.getElementById("mydiv");
  var diffMX = 0, diffMY = 0, startX = 0, startY = 0, diffX = 0, diffY = 0, maxLeft = 0, maxRight = 0, maxTop = 0, maxBottom = 0;
  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    startX = e.clientX;
    startY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
	//set the boundaries of draggability(all values are relative to parent container)
	maxLeft = 0;
	maxRight = elmnt.parentNode.clientWidth - elmnt.offsetWidth;
	maxTop = 0;
	maxBottom = elmnt.parentNode.clientHeight - elmnt.offsetHeight;
	
    // calculate the new cursor position:
    diffMX = e.clientX - startX;
    diffMY = e.clientY - startY;
	console.log(e.clientX + "-" + startX + " " + e.clientY + "-" + startY);
    startX = e.clientX;
    startY = e.clientY;
	
	//check boundaries
	diffX = (elmnt.offsetLeft + diffMX);
	console.log(elmnt.offsetLeft + "+" + diffMX);
	diffY = (elmnt.offsetTop + diffMY);
	diffX = diffX < maxLeft ? maxLeft : diffX;
	diffX = diffX > maxRight ? maxRight : diffX;
	diffY = diffY < maxTop ? maxTop : diffY;
	diffY = diffY > maxBottom ? maxBottom : diffY;
	
    // set the element's new position:
    elmnt.style.top = diffY/elmnt.parentNode.clientHeight * 100 + "%";
    elmnt.style.left = diffX/elmnt.parentNode.clientWidth * 100 + "%";
	console.log(diffX);
  }

  function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
	//elementDrag(e);
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

