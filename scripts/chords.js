//script by PP

(function() {

    let textarea = $('#chords_textarea');
    const chordsArray = [
        ['e', 'f', 'fis', 'g', 'gis', 'a', 'b', 'h', 'c', 'cis', 'd', 'dis'],
        ['E', 'F', 'Fis', 'G', 'Gis', 'A', 'B', 'H', 'C', 'Cis', 'D', 'Dis']
    ];

    //regexp przygotowany pod sprawdzanie poprawności akordów (na przyszłość)
    //const pattern = /^(e|f|fis|g|gis|a|b|h|c|cis|d|dis|x)\d?$/gi;

    //funkcja rozkłdająca textarea na tablicę wielowymiarową
    function disassemblyChords(string) {
        
        let linesArr = deletePolishLetters(string).split('\n');
        let content = new Array(linesArr.length);
        linesArr.forEach(function(item, index) {
            let lineItems = item.split(' ');
            content[index] = new Array();
            lineItems.forEach(function(item) {
                content[index].push(item);
            });
        });
        return content;
    }

    //funkcja zmieniająca akordy
    function moveChords(direction) {
        
        let content = disassemblyChords(textarea.val());
        let newContent = new Array(content.length);

        content.forEach(function(item, index) {
            newContent[index] = new Array();
            content[index].forEach(function(item) {
                let number = chordsArray[0].indexOf(item.toLowerCase().replace(/\d/, ''));
                if(number === -1) {
                    if(/(\w)+/.test(item)) {newContent[index].push('NN');}
                    //linijka potrzebna, żeby program nie zwracał "NN" w momencie napotkania \n
                    else {newContent[index].push(item);}
                } else {
                    number = number + direction;
                    if(number  > 11) number = 0;
                    if(number < 0) number = 11;
                    let y = 0;
                    if (/[A-H]/.test(item[0])) y++;
                    newContent[index].push(item.replace(/(\D)+/, chordsArray[y][number]));
                }
            });
        });

        content = '';
        newContent.forEach(function(item, index, arr) {
            content += item.join(' ');
            if(index !== (arr.length-1)) content += '\n';
        });
        textarea.val(content);
    }
    
    //kontrola poprawności akordów                      @TODO

    //synchronizacja scrollbarów
    let lyricsTextarea = $('#lyrics_textarea');
    let numbersTextarea = $('.numbers_textarea');
    
    lyricsTextarea.on('scroll', function() {
        textarea.scrollTop(this.scrollTop);
        numbersTextarea.scrollTop(this.scrollTop);
    });

    textarea.on('scroll', function() {
        lyricsTextarea.scrollTop(this.scrollTop);
        numbersTextarea.scrollTop(this.scrollTop);        
    });
    
    //handlery przycisków
    $('#chords_button_up').on('click', function(e) {
        e.preventDefault();
        moveChords(1);
    });

    $('#chords_button_down').on('click', function(e) {
        e.preventDefault();
        moveChords(-1);
    });

})();

document.write('<br />javascript test 3.0');