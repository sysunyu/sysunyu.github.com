/**
 * Created by Administrator on 2016/9/7.
 */
function getStyle(obj,name){
    return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}
function move(obj,name,iTarget,duration,complete){
    clearInterval(obj.timer);
    var start = parseFloat(getStyle(obj,name));
    var dis = iTarget-start;
    //�ܴ���
    var count = Math.floor(duration/30);
    //��ǰ���˼���
    var n =0;
    obj.timer=setInterval(function(){
        n++;
        if(name=='opacity'){
            obj.style.opacity=start+n*dis/count;
            obj.style.filter='alpha(opacity:'+(start+n*dis/count)*100+')';
        }else{
            obj.style[name]=start+n*dis/count+'px';
        }
        if(n==count){
//                        alert('������');
            clearInterval(obj.timer);
            complete && complete();
        }
    },30);
}