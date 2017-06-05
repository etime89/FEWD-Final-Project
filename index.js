$(document).ready(function() {
	//this jquery code allows the pieces to be dragged
	$('.piece').draggable(
		//the 'document' constraint keeps the pieces
		//from dragging off of the screen
		{cursor: 'pointer', containment: '#game-stage', opacity: 0.60, revert: 'invalid',
		stop: function() {
			$(this).draggable('option','revert','invalid');
		}

	});
	//this will inform players on who has the next turn
	//after a piece is legally moved by displaying an alert 
	//message on the screen
	$('.drop').droppable({
		//this will highlight a space when a piece is dragged over it
		hoverClass: 'border',
		//this will ensure that a piece cannot be dropped into a space
		//until the pointer is inside that space
		drop: function(event,ui) {
			var $this = $(this);

			if($this.find('.piece').length >= 1) {
				ui.draggable.draggable('option','revert',true);
				return;
			}

			ui.draggable.appendTo($this).css( {
				top: '8%',
				left: '11%'
			});
		}
	});
});