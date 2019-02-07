//script by PP
	
var textarea;

textarea = $('#lyrics_textarea');

function deletePolishLetters(string) {	
	
	let text_changed = string;
	
	text_changed = text_changed.replace(/ą/g, 'a');
	text_changed = text_changed.replace(/Ą/g, 'A');
	text_changed = text_changed.replace(/ć/g, 'c');
	text_changed = text_changed.replace(/Ć/g, 'C');
	text_changed = text_changed.replace(/ę/g, 'e');
	text_changed = text_changed.replace(/Ę/g, 'E');
	text_changed = text_changed.replace(/ł/g, 'l');
	text_changed = text_changed.replace(/Ł/g, 'L');
	text_changed = text_changed.replace(/ń/g, 'n');
	text_changed = text_changed.replace(/Ń/g, 'N');
	text_changed = text_changed.replace(/ó/g, 'o');
	text_changed = text_changed.replace(/Ó/g, 'O');
	text_changed = text_changed.replace(/ś/g, 's');
	text_changed = text_changed.replace(/Ś/g, 'S');
	text_changed = text_changed.replace(/ż/g, 'z');
	text_changed = text_changed.replace(/ź/g, 'z');
	text_changed = text_changed.replace(/Ż/g, 'Z');
	text_changed = text_changed.replace(/Ź/g, 'Z');
	
	return text_changed;
}

$('#polish_letters_submit_1').on('click', function(e) {
		
	e.preventDefault();
	textarea.val(deletePolishLetters(textarea.val()));
});
	
document.write("javascript test 1.0")
