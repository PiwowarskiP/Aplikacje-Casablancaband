//script by PP

(function() {

    let textFile = null;
    let fileName;
    let downloadLink = $('#download_link');
    let chords_textarea = $('#chords_textarea');
    
    function makeTxt (text) {

         let data = new Blob([text], {type: 'text/plain'});
        if(textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);

        return textFile;

    }

    $('#polish_letters_submit_2').on('click', function(e) {

        e.preventDefault();
        let text_changed = deletePolishLetters(textarea.val())
        textarea.val(text_changed);
        
        //dokładanie zawartości z chords_textarea
        text_changed += '\n\n\nMade By @PP';   //dodane po to, żeby potem replace zadziałał na ostatnią linijkę, bo pewnie nie będzie tam new line
        let chords = chords_textarea.val().split('\n');
        let counter = -1;

        //downloadLink.attr('href', makeTxt(text_changed.replace(/\n/g, '\r\n')));
        downloadLink.attr('href', makeTxt(text_changed.replace(/\n/g, function(){
            counter++;
            //if ma nas zabezpieczać przed odwołaniem do nieistniejącego elementu tablicy
            if(chords[counter]) {
                return ('  ' + chords[counter] + '\r\n');
            } else {
                return '\r\n';
            }
        })));
        fileName = $('#textfile_name').val();
        if(fileName !== '') {
            downloadLink.attr('download', fileName + '.txt');
        } else {
            downloadLink.attr('download', 'plik.txt');
        }
        downloadLink.css('display', 'inline-block');

    });

    //chowanie linku po kliknięciu
    downloadLink.on('click', function(){
        downloadLink.css('display', 'none');
    });

})();

document.write('<br />javascript test 2.0');