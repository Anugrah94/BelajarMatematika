var number = 1;
var count = 0;
var soal3 = function(){
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
    this.info = function(){
        rmContainer();
        newContainer();
        var mainDIV = document.getElementById('container');
        var info = document.createElement('p');
        info.setAttribute('id','info');
        var infotxt = document.createTextNode('Pada bagian ini akan diberikan 10 soal pembagian, contoh soal 10 : 10 = 1; 50 : 40 = 1,25; 1 : 3 = 0,3, terkhusus pada soal pembagian, jawaban hanya dimasukan pembulatan kebawahnya saja, misal jawabannya 1,3333 = 1 dan 24,222 = 24 serta 25,777 = 25')
        info.appendChild(infotxt);
        mainDIV.appendChild(info);
        var button = document.createElement('button');
        var buttontxt = document.createTextNode('Lanjut');
        button.appendChild(buttontxt);
        mainDIV.appendChild(button);
        button.addEventListener('click',function(){
            task();
        });
        var button2 = document.createElement('button');
        var button2txt = document.createTextNode('Kembali');
        button2.appendChild(button2txt);
        mainDIV.appendChild(button2);
        button2.addEventListener('click',function(){
            opsi();
        });
    };
    this.task = function(){
        rmContainer();
        newContainer();
        var mainDIV = document.getElementById('container');
        var rand1 = Math.floor(Math.random() * 10);
        var rand2 = Math.floor(Math.random() * 10);
        var Paragrahph = document.createElement('p');
        Paragrahph.setAttribute('id','paragraphtask')
        var Paragrahphtxt = document.createTextNode(rand1 + ' : '+rand2)
        var input = document.createElement('input');
        input.setAttribute('id','answer');
        input.setAttribute('type','number');
        var button = document.createElement('button');
        button.setAttribute('id','buttonanswer');
        var buttontxt = document.createTextNode('next');
        button.appendChild(buttontxt);
        Paragrahph.appendChild(Paragrahphtxt);
        mainDIV.appendChild(Paragrahph);
        mainDIV.appendChild(input);
        mainDIV.appendChild(button);
        button.addEventListener('click',function(){
            console.log(input.value)
            if(input.value === ''){
                alert('Jawaban Harus Di Isi')
            }
            else{
                console.log(Math.floor((rand1 / rand2)));
                if(Number(input.value) === Math.floor((rand1 / rand2))){
                    count++;
                    console.log(count);
                }
                console.log(number);
                if(number<10){
                    number++;
                    task();
                }
                else if(number === 10){
                    result();
                }
            }
        });
    }

    this.result = function(){
        rmContainer();
        newContainer();
        var mainDIV = document.getElementById('container');
        var text = document.createElement('p');
        var textsentence = document.createTextNode('Kamu benar menjawab '+count+' dari '+number+' soal yang ada.')
        text.appendChild(textsentence);
        mainDIV.appendChild(text);
        var button = document.createElement('button');
        var buttontext = document.createTextNode('Home');
        button.appendChild(buttontext);
        mainDIV.appendChild(button);
        button.addEventListener('click',function(){
            number = 1;
            count = 0;
            rmContainer();
            layout();
        });
    }
    this.info();
}