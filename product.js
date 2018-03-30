var opsi = function(){
    this.rmContainer = function(){
        var mainDIV = document.getElementById('container');
        mainDIV.remove();
    };
    this.newContainer = function(){
        var body = document.body;
        var mainDIV = document.createElement('div');
        var mainDIVattr = document.createAttribute('id');
        mainDIVattr.value = 'container';
        mainDIV.setAttributeNode(mainDIVattr);
        body.appendChild(mainDIV);
    };
    this.opsi = function(){
        rmContainer();
        newContainer();
        var mainDIV = document.getElementById('container');
        var button1 = document.createElement('button');
        button1.setAttribute('class','buttonopsi');
        var button1txt = document.createTextNode('Penjumlahan');
        button1.appendChild(button1txt);
        button1.addEventListener('click',function(){
            soal();
        });
        var button2 = document.createElement('button');
        button2.setAttribute('class','buttonopsi');
        var button2txt = document.createTextNode('Pengurangan');
        button2.appendChild(button2txt);
        button2.addEventListener('click',function(){
            soal2();
        });
        var button3 = document.createElement('button');
        button3.setAttribute('class','buttonopsi');
        var button3txt = document.createTextNode('Perkalian');
        button3.appendChild(button3txt);
        button3.addEventListener('click',function(){
            soal4();
        });
        var button4 = document.createElement('button');
        button4.setAttribute('class','buttonopsi');
        var button4txt = document.createTextNode('Pembagian');
        button4.addEventListener('click',function(){
            soal3();
        });
        button4.appendChild(button4txt);
        mainDIV.appendChild(button1);
        mainDIV.appendChild(button2);
        mainDIV.appendChild(button3);
        mainDIV.appendChild(button4);
    }
    this.opsi();
}