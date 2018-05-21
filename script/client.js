console.log( 'js' );

$(document).ready(readyNow);

function readyNow(){
  console.log( 'JQ' );
  $( "#generateButton" ).on( 'click', clickCount );
  $( "#swapButton" ).on( 'click', redToYellow );
}

let clickSum = 0;

function redToYellow() {
  console.log( 'in redToYellow' );
  //change its parent background-color from red to yellow.
  $( '#colorDiv' ).toggleClass( 'yellow' );

}


function clickCount(){
 console.log( 'in clickCount' );
 clearSum ();
 //show how many times 'generate' has been clicked
 clickSum += 1;
 $( '#mainSection' ).append('<div id="colorDiv">' + '<button id="swapButton" class="btn btn-warning">Swap</button>' + '<button id="DeleteButton" class="btn btn-danger">Delete</button>' + '<p>' + (clickSum) + '</p></div>');
 //count how many times the button is clicked
 //show the count
 //clear sum after each click

}

function clearSum() {
  console.log( 'in clearSum' );
  $( "#mainSection" ).empty();

}
