window.onload = function(){
   var music = [
        {
            title:'不谈爱情',
            author:'东南',
            pic:'img/a1.png',
            src:'music/不谈爱情.mp3',
            lrc:'music/不谈爱情.lrc'
        },
        {
            title:'忘尘谷',
            author:'刘珂矣',
            pic:'img/a2.jpg',
            src:'music/忘尘谷.mp3',
            lrc:'music/忘尘谷.lrc'
        },
        {
            title:'我懂了',
            author:'金莎',
            pic:'img/a3.jpg',
            src:'music/我懂了.mp3',
            lrc:'music/我懂了.lrc'
        },
        {
            title:'怕什么孤单',
            author:'孙露',
            pic:'img/a4.jpg',
            src:'music/怕什么孤单.mp3',
            lrc:'music/怕什么孤单.lrc'
        },
       {
           title:'苦笑',
           author:'汪苏泷',
           pic:'img/a5.jpg',
           src:'music/苦笑.mp3',
           lrc:'music/苦笑.lrc'
       }

    ]
    var playIndex = 0;
    var myAudio = document.createElement('audio');
    var mode = "single";
    myAudio.preload  = 'true';
    myAudio.src = music[playIndex].src;
    var aplayer_pic = document.getElementsByClassName("aplayer-pic")[0];
    var aplayer_pic_bg = document.getElementsByClassName("aplayer-pic-bg")[0];
    var aplayer_title = document.getElementsByClassName('aplayer-title')[0];
    var aplayer_author = document.getElementsByClassName('aplayer-author')[0];
    var aplayer_bar_wrap = document.getElementsByClassName("aplayer-bar-wrap")[0];
    var aplayer_bar = document.getElementsByClassName("aplayer-bar")[0];
    var aplayer_loaded = document.getElementsByClassName("aplayer-loaded")[0];
    var aplayer_played = document.getElementsByClassName("aplayer-played")[0];
    var thumb = document.getElementsByClassName("aplayer-thumb")[0];
    var aplayer_button= document.getElementsByClassName("aplayer-button")[0];
    var aplayer_pic_bg = document.getElementsByClassName("aplayer-pic-bg")[0];
    var num=0 ;
    //加载函数
    aplayer_pic_bg.src = music[playIndex].pic;
    console.log(music[playIndex].pic);
    aplayer_title.innerText = music[playIndex].title;
    aplayer_author.innerText = '-'+music[playIndex].author;
    updateBar(aplayer_played,0)
    var aplayer_icon_mode = document.getElementsByClassName("aplayer-icon-mode")[0];
    aplayer_icon_mode.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 38 32" width="100%">\n' +
        '<path class="aplayer-fill" d="M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"></path>\n' +
        '</svg>\n';
    //头像旋转函数
    //歌曲播放模式
    aplayer_icon_mode.addEventListener('click',function(){
        if(mode == "single"){
            mode = "random";
            aplayer_icon_mode.innerHTML =  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 33 31" width="100%">\n' +
                '<path class="aplayer-fill" d="M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z"></path>\n' +
                '</svg>\n';
        }else if(mode == "random"){
            mode = "order";
            aplayer_icon_mode.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 32 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path>\n' +
                '</svg>\n';
        } else if(mode == "order"){
            mode = "circulation";
            aplayer_icon_mode.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 29 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"></path>\n' +
                '</svg>\n';
        } else if(mode == "circulation"){
            mode = "single";
            aplayer_icon_mode.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 38 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"></path>\n' +
                '</svg>\n';
        }


    },true)
    //播放图标
    myAudio.addEventListener('play',function(){
        if(aplayer_button.classList.contains('aplayer-play')){
            aplayer_button.classList.remove('aplayer-play');
            aplayer_button.classList.add('aplayer-pause');
            aplayer_button.innerHTML = '';
            setTimeout(aplayer_button.innerHTML= ' <button type="button" class="aplayer-icon aplayer-icon-pause">\n' +
                '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 17 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z" id="aplayer-pause"></path>\n' +
                '</svg>\n'+ '</button>',10000)}
    },false);
    //暂停图标
    myAudio.addEventListener('pause',function(){
        if(aplayer_button.classList.contains('aplayer-pause')){
            aplayer_button.classList.remove('aplayer-pause');
            aplayer_button.classList.add('aplayer-play');
            aplayer_button.innerHTML = '';
            setTimeout(aplayer_button.innerHTML= '<button type="button" class="aplayer-icon aplayer-icon-play">\n' +
                '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 16 31" width="100%">\n' +
                '<path class="aplayer-fill" d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z" id="aplayer-play"></path>\n' +
                '</svg>\n'+ '</button>',10000)}
    },false);
    //数字处理函数
    function add0(num) {
        if(num < 10){
            return  '0' + num;
        }else{
            return num;
        }
    }
    //时间格式处理
    function secondToTime(second) {
        if (isNaN(second)) {
            return '00:00';
        }
        var min = parseInt(second / 60);
        var sec = parseInt(second - min * 60);
        var hours = parseInt(min / 60);
        var minAdjust = parseInt((second / 60) - (60 * parseInt((second / 60) / 60)));
        if (second >= 3600) {
            return add0(hours) + ':' + add0(minAdjust) + ':' + add0(sec);
        } else {
            return add0(min) + ':' + add0(sec);
        }
    }
    //歌词解析
    var lrc1 = "";
    function parseLrc(lrcs){
        var lyric = lrcs.split('\n');
        var lrc = [];
        var lyricLen = lyric.length;
        for (var i = 0; i < lyricLen; i++) {
            // match lrc time
            var lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g);
            // match lrc text
            var lrcText = lyric[i].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, '').replace(/^\s+|\s+$/g, '');

            if (lrcTimes != null) {
                // handle multiple time tag
                var timeLen = lrcTimes.length;
                for (var j = 0; j < timeLen; j++) {
                    var oneTime = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(lrcTimes[j]);
                    var lrcTime = (oneTime[1]) * 60 + parseInt(oneTime[2]) + parseInt(oneTime[3]) / ((oneTime[3] + '').length === 2 ? 100 : 1000);
                    lrc.push([lrcTime,lrcText]);
                }
            }
        }
        lrc.sort(function(a,b){
            return a[0]-b[0]
        });
        return lrc;
    }
    //歌词展示
    //XMLHttpRequest函数（取得歌词文本 ）
    function loadText(url){
        var xhr = new XMLHttpRequest();
        var lrcs ='';
        if (xhr != null){
            xhr.onreadystatechange=function getText(){
                //readystatus === 4 表示加载完成
                if(xhr.readyState === 4)
                //status == 200 表示ok
                    if(xhr.status >=200 && xhr.status <300|| xhr.status === 304)
                    {
                        lrcs = xhr.responseText;
                        lrc1 = parseLrc(lrcs);
                        var lrcHTML = '';
                        lrcContents  = document.getElementsByClassName("aplayer-lrc-contents")[0];
                        for(var i=0;i<lrc1.length;i++){
                            lrcHTML +='<p>'+lrc1[i][1]+'</p>';
                        }
                        document.getElementsByClassName("aplayer-lrc-contents")[0].innerHTML = lrcHTML;
                        lrcContents.getElementsByTagName('p')[0].classList.add('aplayer-lrc-current');
                        lrcContents.style.transform = 'translateY(0px)';
                    }else {
                        console.log('Request was unsuccessful: ' + xhr.status);
                        lrc1 = [['00:00', 'Not available']];
                    }

            };
            xhr.open("GET",url,true);
            xhr.send(null);
        }
    }
    //歌词移动
    function showLrc(){
        loadText(music[playIndex].lrc);
        myAudio.ontimeupdate= function(){
            for(var i=0;i< lrc1.length;i++){
                var Time = myAudio.currentTime;
                if ((Time >= lrc1[i][0]) && (Time < lrc1[i + 1][0])){
                    lrcIndex =i;
                    lrcContents.style.top = -lrcIndex*21+'px';
                    //歌词移动
                    lrcContents.getElementsByClassName('aplayer-lrc-current')[0].classList.remove('aplayer-lrc-current');
                    //歌词效果
                    lrcContents.getElementsByTagName('p')[i].classList.add('aplayer-lrc-current');

                }
            }
            document.getElementsByClassName("aplayer-ptime")[0].innerHTML = secondToTime(Time);
        };
    }
    //进度条移动函数
    function updateBar(type,percentage){
        if(percentage <= 0)
        {
            percentage = 0;
        }
        if(percentage >=1)
        {
            percentage = 1;
        }
        type.style.width= percentage*100+'%';
    }
    //当前element距离屏幕左边的相对距离
    function getElementViewLeft(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        var elementScrollLeft;
        while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        if (document.compatMode == "BackCompat"){
            elementScrollLeft=document.body.scrollLeft;
        } else {
            elementScrollLeft=document.documentElement.scrollLeft;
        }
        return actualLeft - elementScrollLeft;
    }
    //获取歌曲总时长
    myAudio.oncanplay = function(){
        full_time = myAudio.duration;
        document.getElementsByClassName("aplayer-dtime")[0].innerHTML = secondToTime(full_time);
    }
    //加载进度条
    myAudio.addEventListener('progress',function () {
        var l1 = myAudio.buffered.length ;
        var length ;
        if(l1>0){
             length =myAudio.buffered.end(l1- 1) / myAudio.duration ;
             updateBar(aplayer_loaded,length)
        }else{
            updateBar(aplayer_loaded,0)
        }
    });
    //球函数
    thumb.addEventListener('mouseover',function(){
        thumb.style.backgroundColor = '#aa4553';
    });
    thumb.addEventListener('mouseout',function(){
        thumb.style.backgroundColor = '#fff';
    });
    //球移动函数
    function thumbMove(event){
        var e = event||window.event;
        var percentage = (e.clientX - getElementViewLeft(aplayer_bar_wrap))/barWidth;
        updateBar(aplayer_played,percentage);
        if(myAudio.showlrc)
        {
            myAudio.updateLrc(parseFloat(percentage*full_time));
        }
        document.getElementsByClassName('aplayer-ptime')[0].innerHTML = secondToTime(parseFloat(percentage*full_time))
    }
    //点击球后鼠标释放函数
    function thumbUp(event){
        document.removeEventListener('mouseup',thumbUp);
        document.removeEventListener('mousemove',thumbMove);
        if(isNaN(myAudio.duration))
        {
            updateBar(aplayer_played,0)
        }else{
            myAudio.currentTime = parseFloat(aplayer_played.style.width)/100*full_time;
            myAudio.playedTime = setInterval(function(){
                updateBar(aplayer_played,myAudio.currentTime / full_time)
                if(myAudio.showlrc){
                    updateLrc();
                }
                document.getElementsByClassName('aplayer-ptime')[0].innerHTML = secondToTime(myAudio.currentTime)
            },100)
        }
    }
    //球拖动事件
    thumb.addEventListener('mousedown',function(){
        barWidth = aplayer_bar_wrap.clientWidth;
        clearInterval(myAudio.playedTime);
        document.addEventListener('mousemove',thumbMove);
        document.addEventListener('mouseup',thumbUp);
    })
    //进度条点击函数
    aplayer_bar_wrap.addEventListener('click',function(event){
        var e =  event||window.event ;
        var barWidth = aplayer_bar_wrap.clientWidth;
        var percentage = (e.clientX - getElementViewLeft(aplayer_bar_wrap) )/ barWidth;
        if (isNaN(full_time)) {
            updateBar('aplayer_bar_played', 0);
        }
        else {
            updateBar(aplayer_played, percentage);
            showLrc();
            myAudio.currentTime=parseFloat(percentage*full_time);
            document.getElementsByClassName('aplayer-ptime')[0].innerHTML =secondToTime(percentage * full_time);
        }

    });
    //音量控制函数
    var aplayer_volume_bar = document.getElementsByClassName("aplayer-volume-bar")[0];
    var aplayer_volume_bar_wrap = document.getElementsByClassName("aplayer-volume-bar-wrap")[0];
    var aplayer_volume = document.getElementsByClassName("aplayer-volume")[0];
    var aplayer_volume_wrap = document.getElementsByClassName("aplayer-volume-wrap")[0];
    var volumeIcon = document.getElementsByClassName("aplayer-volume-wrap")[0].getElementsByClassName("aplayer-icon")[0];
    var volumeHeight = 40;
    //音量图标
    aplayer_volume_wrap.addEventListener('mouseover',function(){
        aplayer_volume_bar_wrap.style.display = 'block';
    });
    aplayer_volume_wrap.addEventListener('mouseout',function(){
        aplayer_volume_bar_wrap.style.display = 'none';
    });
    //音量高度函数
    function getElementViewTop(element)
    {
        var actulTop = element.offsetTop;
        var current = element.offsetParent;
        var elementScrollTop;
        while(current !== null){
            actulTop += current.offsetTop;
            current = current.offsetParent;
        }
        if (document.compatMode == "BackCompat"){
            elementScrollTop = document.body.scrollTop;
        } else {
            elementScrollTop =document.documentElement.scrollTop;
        }
        return actulTop - elementScrollTop
    }
    //音量条函数
    function updateVolumeBar(type,percentage){
        if(percentage <= 0){
            percentage = 0;
        }else if(percentage >= 1)
        {
            percentage = 1;
        }
        type.style.height = percentage*40+'px';
    }
    //音量条点击函数
    aplayer_volume_bar_wrap.addEventListener('click',function(event){
        var e = event;
        var percentage = (volumeHeight - e.clientY+getElementViewTop(aplayer_volume_bar))/volumeHeight;
        if(percentage <= 0){
            percentage = 0;
            volumeIcon.className = 'aplayer-icon aplayer-icon-volume-off';
            volumeIcon.innerHTML =  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path>\n' +
                '</svg>\n';
        }
        if(percentage >= 1)
        {
            percentage = 1;
            volumeIcon.className = 'aplayer-icon aplayer-icon-volume-up';
            volumeIcon.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path>\n' +
                '</svg>\n';
        }
        myAudio.volume = percentage;
        updateVolumeBar(aplayer_volume,percentage);
        if(percentage>0 && percentage<1){
            volumeIcon.className = 'aplayer-icon aplayer-icon-volume-down';
            volumeIcon.innerHTML =  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path>\n' +
                '</svg>\n';
        }

    },false);
    //音量图标点击函数（静音）
    volumeIcon.addEventListener('click',function(){
        if(myAudio.muted)
        {
            myAudio.muted = false;
            if(myAudio.volume === 1)
            {
                volumeIcon.className = 'aplayer-icon aplayer-icon-volume-up';
                volumeIcon.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                    '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path>\n' +
                    '</svg>\n';
            }else{
                volumeIcon.className = 'aplayer-icon aplayer-icon-volume-down';
                volumeIcon.innerHTML =  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                    '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path>\n' +
                    '</svg>\n';
            }
            updateVolumeBar(aplayer_volume,myAudio.volume)
        }else{
            myAudio.muted = true;
            volumeIcon.className = 'aplayer-icon aplayer-icon-volume-off';
            volumeIcon.innerHTML =  '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 28 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path>\n' +
                '</svg>\n';
            updateVolumeBar(aplayer_volume,0);
        }
    });

    //显示播放列表
    var icon_menu = document.getElementsByClassName('aplayer-icon-menu')[0];
    icon_menu.addEventListener('click',function(){
        if(list.style.display == 'none'){
            list.style.display = 'block';
        }else{
            list.style.display = 'none';
        }

    },false);
    //歌曲列表
    var list = document.getElementsByClassName('aplayer-list')[0];
    for(var i=0;i<music.length;i++){
        document.getElementsByClassName("aplayer-list-title")[i].innerText = music[i].title;
        document.getElementsByClassName("aplayer-list-author")[i].innerText = music[i].author;
    }
    document.getElementsByClassName("aplayer-list")[0].style.height= music.length*31+'px';
    //设置当前播放音乐信息
    function setMusic(index) {
        // get this.music
        if (typeof(index) !== 'undefined') {
            aplayer_pic_bg.src = music[index].pic;
            console.log(music[index].pic);
            document.getElementsByClassName('aplayer-title')[0].innerText = music[index].title;
            document.getElementsByClassName('aplayer-author')[0].innerText ='-'+ music[index].author;
        }
        // set html
        if (document.getElementsByClassName('aplayer-list-light')[0]) {
            document.getElementsByClassName('aplayer-list-light')[0].classList.remove('aplayer-list-light');
        }
        document.getElementsByClassName('aplayer-list')[0].getElementsByTagName('li')[index].classList.add('aplayer-list-light');
    }
    //不点其他歌曲时歌曲的暂停和播放
    function toggle() {
        if(aplayer_button.classList.contains('aplayer-play')){
            aplayer_button.classList.remove('aplayer-play');
            aplayer_button.classList.add('aplayer-pause');
            aplayer_button.innerHTML = '';
            setTimeout(aplayer_button.innerHTML= ' <button type="button" class="aplayer-icon aplayer-icon-pause">\n' +
                '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 17 32" width="100%">\n' +
                '<path class="aplayer-fill" d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z" id="aplayer-pause"></path>\n' +
                '</svg>\n'+ '</button>',10000)
        myAudio.play();
        }
        else   if(aplayer_button.classList.contains('aplayer-pause')){
            aplayer_button.classList.remove('aplayer-pause');
            aplayer_button.classList.add('aplayer-play');
            aplayer_button.innerHTML = '';
            setTimeout(aplayer_button.innerHTML= '<button type="button" class="aplayer-icon aplayer-icon-play">\n' +
                '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="0 0 16 31" width="100%">\n' +
                '<path class="aplayer-fill" d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z" id="aplayer-play"></path>\n' +
                '</svg>\n'+ '</button>',10000) ;
            myAudio.pause();}
    }
    //点击切换歌曲
    list.addEventListener('click', function(e){
        var target;

        if (e.target.tagName.toUpperCase() === 'LI') {
            target = e.target;
        }
        else {
            target = document.getElementsByClassName('aplayer-list')[0].getElementsByTagName('li')[0];
        }
        var musicIndex = parseInt(target.getElementsByClassName('aplayer-list-index')[0].innerHTML) - 1;
        myAudio.src = music[musicIndex].src;

        if (musicIndex !== playIndex) {
            setMusic(musicIndex);
            myAudio.play();
            playIndex = musicIndex;
            num = 0
            myAudio.cl = setInterval(function(){
                num += 5;
                aplayer_pic_bg.style.transform = 'rotate('+num+'deg)';
            },1000)
        }else {
          toggle();
        }
        showLrc()

    });

    //播放与暂停按钮事件
    aplayer_button.addEventListener('click',function() {
        if (aplayer_button.classList.contains('aplayer-play')) {
            myAudio.play();
            myAudio.cl = setInterval(function(){
                num += 5;
                aplayer_pic_bg.style.transform = 'rotate('+num+'deg)';
            },1000)
            myAudio.playedTime =setInterval(function(){
                updateBar(aplayer_played,myAudio.currentTime / full_time);
                if(myAudio.showlrc){
                    updateLrc();
                }
                document.getElementsByClassName('aplayer-ptime')[0].innerHTML = secondToTime(myAudio.currentTime)
            },100);
            aplayer_bar_wrap.addEventListener('click',function(event){
                var e =  event||window.event ;
                barWidth = aplayer_bar_wrap.clientWidth;
                percentage = (e.clientX - getElementViewLeft(aplayer_bar_wrap) )/ barWidth;
                console.log('percentage',percentage);
                if (isNaN(full_time)) {
                    updateBar('aplayer_bar_played', 0);
                }
                else {
                    updateBar(aplayer_played, percentage);
                    myAudio.currentTime=parseFloat(percentage*full_time);
                    document.getElementsByClassName('aplayer-ptime')[0].innerHTML =secondToTime(percentage * full_time);
                }

            });
            showLrc();
        } else {
            myAudio.pause();
            clearInterval(myAudio.cl)
        }
    },false)

    //歌曲循环模式
    myAudio.addEventListener('ended',function(){
        if(mode == "single"){
            showLrc();
            myAudio.play();
        }else if(mode == "random")
        {
            var number = Math.floor(Math.random()*music.length);
            playIndex = number;
            myAudio.src = music[playIndex].src;
            setMusic(playIndex);
            showLrc();
            myAudio.play();
        }else if(mode == 'order'){
            playIndex += 1;
            if(playIndex == (music.length-1)){
                playIndex = 0;
            }
            myAudio.src = music[playIndex].src
            setMusic(playIndex);
            showLrc();
            myAudio.play();
        }else if(mode == 'circulation'){
            playIndex +=1;
            if(playIndex == (music.length-1)){
                myAudio.pause();
            }
            myAudio.src = music[playIndex].src
            setMusic(playIndex);
            showLrc();
            myAudio.play();
        }
    })
}