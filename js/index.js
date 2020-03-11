var time;//倒计时
var score = 0;
var interval;
var timer;//计时器
var cur_td='';
var pre_time = document.getElementById('time');
//改变难度
function changeLevel(){
    var level = document.getElementById('level').value;
    if(level == 'hard'){
        pre_time.value = 30;
    }else if(level == 'medium'){
        pre_time.value = 60;
    }else{
        pre_time.value = 90;
    }
}


//开始游戏
function startGame(){
    var level = document.getElementById('level').value;
    if(level == 'hard'){
        time = 30;
        interval = 500;
    }else if(level == 'medium'){
        time = 60;
        interval = 1000;
    }else{
        time = 90;
        interval = 2000;
    }
    //禁用难度选择
    document.getElementById('start').disabled = true;
    // document.getElementById('end').disabled = true;


    timer = window.setInterval(function (){
        // 清空img
        var itemArr = document.getElementsByTagName('td');
        for (var i = 0;i<itemArr.length;i++){
            itemArr[i].style.background = 'gray';
            itemArr[i].innerHTML = '';
        };

        //生成竹鼠
        var mouse = parseInt(Math.random()*25 + 1);
        var index = 'item_' + mouse;

        time -= 1;
        document.getElementById('time').value = time;
        
        //时间到了
        if(time <= 0){
            document.getElementById('score').value = 0;
            window.clearInterval(timer);
            alert("游戏结束，你的得分是：" + score);
            //可重新选择难度
            document.getElementById('start').disabled = false;
            document.getElementById('level').disabled = false;
            return false;
        }

        document.getElementById(index).style.background = "url('./images/target.jpg')"
        document.getElementById(index).innerHTML = '!';
    },interval);
}
function stop(){
    var itemArr = document.getElementsByTagName('td');
     window.clearInterval(startGame); 
     for (var i = 0; i < itemArr.length; i++) {
            itemArr[i].style.backgroundColor = 'gray';
            itemArr[i].innerHTML = '';
    };
    document.getElementById("score").value = 0;
    window.clearInterval(timer);
    changeLevel();
    reset();
    alert('游戏结束，你的得分是'+score); 
    //点击停止结束之后重新启用开始游戏和选择难度
    document.getElementById("start").disabled = false;
    document.getElementById("diffculty").disabled = false;
};

function hit(target){
    if(cur_td == target){
        return false;
    }
    cur_td = target;

    var target_id = 'item_'+ target;

    if(document.getElementById(target_id).innerHTML != ''){
        score+=1;
        document.getElementById('score').value = score;
        
    };
}


//重置游戏
function reset(){
    var itemArr = document.getElementsByTagName('td');
        for (var i = 0;i<itemArr.length;i++){
            itemArr[i].style.background = 'gray';
            itemArr[i].innerHTML = '';
        };
}