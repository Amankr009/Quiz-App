//Left Quiz
var leftbtn = document.getElementById('leftbtn');
var left = document.getElementById('left');
var c = 0;

leftbtn.addEventListener('click',function(e){
    e.preventDefault();
    left.removeChild(leftbtn);
    var i = 0;
    data(i);

    function data(i){
        var e = 0;
        document.getElementById('left').innerHTML = '';
        var Q = [
            ['1) 5 + 4 ?',9,5,3,6,9],
            ['2) 5 - 4 ?',4,6,1,9,1],
            ['3) 5 x 4 ?',20,66,16,54,20],
            ['4) 51 - 40 ?',41,62,11,9,11],
            ['5) 25 / 5 ?',5,6,12,9,5],
            ['6) 29 - 4 ?',25,60,10,19,25],
            ['7) 25 - 14 ?',10,61,11,19,11],
            ['8) 91 + 4 ?',40,60,10,95,95],
            ['9) 54 x 2 ?',42,67,108,118,108],
            ['10) 52 / 13 ?',3,6,1,4,4],
            ['11) 27 - 4 ?',14,26,21,23,23],
            ['12) 15 + 40 ?',54,56,55,91,55],
            ['13) 20 / 4 ?',4,5,1,9,5],
            ['14) 100 / 2 ?',5,50,15,90,50],
            ['15) 50 - 14 ?',46,36,12,29,36],
            ['16) 7 + 4 ?',4,16,11,19,11],
            ['17) 11 x 4 ?',44,16,18,94,44],
            ['18) 10 + 4 ?',4,16,14,9,14],
            ['19) 23 - 4 ?',6,16,12,19,19],
            ['20) 25 + 5 ?',31,24,30,27,30],
        ];

        var qu = document.createElement('div');
        qu.className = 'lqu';
        qu.appendChild(document.createTextNode(Q[i][0]));
        //qu.innerHTML = i+') '+Q;
        left.appendChild(qu);

        var optn1 = document.createElement('button');
        optn1.classList = 'loptn';
        optn1.appendChild(document.createTextNode(Q[i][1]));
        left.appendChild(optn1);
        optn1.addEventListener('click',function(){
            optn1.classList = 'lanswered';
            optn2.classList = 'loptn';
            optn3.classList = 'loptn';
            optn4.classList = 'loptn';
            e++;
            marks(Q[i][1]);
        });

        var optn2 = document.createElement('button');
        optn2.classList = 'loptn';
        optn2.appendChild(document.createTextNode(Q[i][2]));
        left.appendChild(optn2);
        optn2.addEventListener('click',function(){
            optn1.classList = 'loptn';
            optn2.classList = 'lanswered';
            optn3.classList = 'loptn';
            optn4.classList = 'loptn';
            e++;
            marks(Q[i][2]);
        });

        var optn3 = document.createElement('button');
        optn3.classList = 'loptn';
        optn3.appendChild(document.createTextNode(Q[i][3]));
        left.appendChild(optn3);
        optn3.addEventListener('click',function(){
            optn1.classList = 'loptn';
            optn2.classList = 'loptn';
            optn3.classList = 'lanswered';
            optn4.classList = 'loptn';
            e++;
            marks(Q[i][3]);
        });

        var optn4 = document.createElement('button');
        optn4.classList = 'loptn';
        optn4.appendChild(document.createTextNode(Q[i][4]));
        left.appendChild(optn4);
        optn4.addEventListener('click',function(){
            optn1.classList = 'loptn';
            optn2.classList = 'loptn';
            optn3.classList = 'loptn';
            optn4.classList = 'lanswered';
            e++;
            marks(Q[i][4]);
        });

        var btn = document.createElement('button');
        btn.classList = 'lbtn';
        btn.innerHTML = 'Next';
        left.appendChild(btn);

        function marks(s){
            var temp;
            if(s == Q[i][5] && e === 1){
                c++;
                temp = c;
            }
            else if(s != Q[i][5] && e == 2 && c > temp)
            c--;
        }

        btn.addEventListener('click',function(){
        
            var btn = document.createElement('button');
            btn.classList = 'lbtn';
            btn.innerHTML = 'Next';
            left.appendChild(btn);
            i++;
            if(i<20){
                data(i);
            }
            else{
                document.getElementById('left').innerHTML = '';
                var score = document.createElement('div');
                score.classList = 'lscore';
                score.appendChild(document.createTextNode('Your score is '+c+' out of 20'));
                left.appendChild(score);
            }
        });
    }        
});

//Right Quiz
var rightbtn = document.getElementById('rightbtn');
var right = document.getElementById('right');
var d = 0;

rightbtn.addEventListener('click',function(e){
    e.preventDefault();
    right.removeChild(rightbtn);
    var i = 0;
    data(i);

    function data(i){
        var f = 0;
        document.getElementById('right').innerHTML = '';
        var Q = [
            ['1) 15 - 4 ?',11,15,23,16,11],
            ['2) 5 + 14 ?',4,6,1,19,19],
            ['3) 5 x 4 ?',20,66,16,54,20],
            ['4) 51 - 40 ?',41,62,11,9,11],
            ['5) 25 / 5 ?',5,6,12,9,5],
            ['6) 29 - 4 ?',25,60,10,19,25],
            ['7) 25 - 14 ?',10,61,11,19,11],
            ['8) 91 + 4 ?',40,60,10,95,95],
            ['9) 54 x 2 ?',42,67,108,118,108],
            ['10) 52 / 13 ?',3,6,4,19,4],
            ['11) 27 - 4 ?',14,26,21,23,23],
            ['12) 15 + 40 ?',54,56,55,91,55],
            ['13) 20 / 4 ?',4,5,1,9,5],
            ['14) 100 / 2 ?',5,50,15,90,50],
            ['15) 50 - 14 ?',46,36,12,29,36],
            ['16) 7 + 4 ?',4,16,11,19,11],
            ['17) 11 x 4 ?',44,16,18,94,44],
            ['18) 10 + 4 ?',4,16,14,9,14],
            ['19) 23 - 4 ?',6,16,12,19,19],
            ['20) 25 + 5 ?',31,24,30,27,30],
        ];

        var qu = document.createElement('div');
        qu.className = 'rqu';
        qu.appendChild(document.createTextNode(Q[i][0]));
        //qu.innerHTML = i+') '+Q;
        right.appendChild(qu);

        var optn1 = document.createElement('button');
        optn1.classList = 'roptn';
        optn1.appendChild(document.createTextNode(Q[i][1]));
        right.appendChild(optn1);
        optn1.addEventListener('click',function(){
            optn1.classList = 'ranswered';
            optn2.classList = 'roptn';
            optn3.classList = 'roptn';
            optn4.classList = 'roptn';
            f++;
            marks(Q[i][1]);
        });

        var optn2 = document.createElement('button');
        optn2.classList = 'roptn';
        optn2.appendChild(document.createTextNode(Q[i][2]));
        right.appendChild(optn2);
        optn2.addEventListener('click',function(){
            optn1.classList = 'roptn';
            optn2.classList = 'ranswered';
            optn3.classList = 'roptn';
            optn4.classList = 'roptn';
            f++;
            marks(Q[i][2]);
        });

        var optn3 = document.createElement('button');
        optn3.classList = 'roptn';
        optn3.appendChild(document.createTextNode(Q[i][3]));
        right.appendChild(optn3);
        optn3.addEventListener('click',function(){
            optn1.classList = 'roptn';
            optn2.classList = 'roptn';
            optn3.classList = 'ranswered';
            optn4.classList = 'roptn';
            f++;
            marks(Q[i][3]);
        });

        var optn4 = document.createElement('button');
        optn4.classList = 'roptn';
        optn4.appendChild(document.createTextNode(Q[i][4]));
        right.appendChild(optn4);
        optn4.addEventListener('click',function(){
            optn1.classList = 'roptn';
            optn2.classList = 'roptn';
            optn3.classList = 'roptn';
            optn4.classList = 'ranswered';
            f++;
            marks(Q[i][4]);
        });

        var btn = document.createElement('button');
        btn.classList = 'rbtn';
        btn.innerHTML = 'Next';
        right.appendChild(btn);

        function marks(s){
            var temp;
            if(s == Q[i][5] && f === 1){
                d++;
                temp = d;
            }
            else if(s != Q[i][5] && f == 2 && d>temp)
            d--;
        }

        btn.addEventListener('click',function(){
        
            var btn = document.createElement('button');
            btn.classList = 'rbtn';
            btn.innerHTML = 'Next';
            right.appendChild(btn);
            i++;
            if(i<20){
                data(i);
            }
            else{
                document.getElementById('right').innerHTML = '';
                var score = document.createElement('div');
                score.classList = 'rscore';
                score.appendChild(document.createTextNode('Your score is '+d+' out of 20'));
                right.appendChild(score);
            }
        });
    }        
});