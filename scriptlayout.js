var layout = function(){
    this.boxUI = function(){
        var body = document.body;
        var mainDIV = document.createElement('div');
        var mainDIVattr = document.createAttribute('id');
        mainDIVattr.value = 'container';
        mainDIV.setAttributeNode(mainDIVattr);
        body.appendChild(mainDIV);
    };

    this.Paragraph = function(text){
        var mainDIV = document.getElementById('container');
        var Paragraph = document.createElement('p');
        var Paragraphtext = document.createTextNode(text);
        Paragraph.appendChild(Paragraphtext);
        mainDIV.appendChild(Paragraph);
    };

    this.button = function(){
        var mainDIV = document.getElementById('container');
        var button = document.createElement('button');
        var buttontxt = document.createTextNode('Mulai Berhitung');
        button.appendChild(buttontxt);
        mainDIV.appendChild(button);
        button.addEventListener('click',function(){
            opsi();
        });
    };

    var p = 'Ini adalah platform yang disediakan untuk melatih anak kecil dengan rentang usia 6-10 tahun belajar berhitung matematika sederhana.'
    this.boxUI();
    this.Paragraph(p);
    this.button();
}
layout();