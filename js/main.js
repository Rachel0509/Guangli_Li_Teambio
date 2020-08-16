(function(){
    var arr1= [
        'Guangli Li',
        'Stitch'
    ];

    var arr2 = [
        '<h2>Hey! My name is Guangli Li.</h2><p>I am 19 years old and graduated from Fanshawe College in Interactive Media Design. I am from China, but I have studied in Canada for two years.</p><p>I like art very much and I also like playing the piano. Probably because my father is a construction engineer, and I like playing piano and painting, so this gives me a sense of art. Lol.</p> <p>I have always wanted to be an excellent interaction designer. I am better at coding than design. I think it will make me more interesting.</p>',
        '<h2>Hey! My name is Stitch.</h2><p>I am Subject 626, a virtual character in the. Disney animated series lilo & Stitch and the TV cartoon series.</p><p>I love being funny, but I am also very smart! I love pranks, I love little girls, And I have gone from being an indifferent and destructive creature to being a loving, self-aware creature who loves the company of adoptive families on Earth.</p>'
    ];

    var arr3 = [
        '<div class="left"><p id="card1">These are the flowers that I grow in my backyard. I like them very much. It will open in summer, and I often go to see it.</p></div><div class="right"><img src="./images/flower1.jpg" alt=""><img src="./images/flower2.jpg" alt=""></div>',
        '<div class="left"><p id="card1">These are some of my routines! I love to act up, and I love little girls, but I am also a righteous little cutie, so I hope you like me!</p></div><div class="right"><img src="./images/1.jpg" alt=""><img src="./images/2.jpg" alt=""></div>'
    ];

    var title = document.getElementById('title');
    var text = document.getElementById('text');
    var flower = document.getElementById('flower');
    function removeActive(){
        var imgs = document.querySelectorAll('.me');
        imgs.forEach(function(el){
            el.classList.remove('active');
        });
    }

    for (let index = 0; index < arr2.length; index++) {
        var el = document.getElementById(`me${index}`);

        el.onclick = function(){
            removeActive();
            this.classList.add('active');
            title.innerText = arr1[index];
            text.innerHTML = arr2[index];
            flower.innerHTML = arr3[index];
        }
    }

})();