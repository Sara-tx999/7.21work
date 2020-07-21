var imglist= document.querySelectorAll(".imgList ul li a img");
var mimg=document.querySelector(".mbox img");
var bimg= document.querySelector(".bbox img");
var mbox = document.querySelector(".mbox");
var mark = document.querySelector(".mark");
var bbox = document.querySelector(".bbox");

mbox.onmouseover = function () {
    mark.style.display = "block";
    bbox.style.display = "block";
}
mbox.onmouseout = function () {
    mark.style.display = "none";
    bbox.style.display = "none";
}
// console.log(imglist.length);
// console.log(mimg);
for(let i=0;i<imglist.length;i++){
    console
    imglist[i].onmouseover=function(){
        console.log(i);
        mimg.src="image/m"+(i + 1) +".png";
        bimg.src="image/m"+(i + 1)+".png";
    }
}

function drag(type) {
    this.div = document.querySelector(type);
    this.x = "";
    this.y = "";
    this.max = {
        x1: "", x2: "", y1: "", y2: ""
    }

}
drag.prototype = {

    move(callback) {
        var divx = (parseInt(getComputedStyle(this.div, null).width)) / 2;
        var divy = (parseInt(getComputedStyle(this.div, null).height)) / 2;

        var that = this;
        var parent = this.div.parentElement;
        console.log(parent.getBoundingClientRect().top);
        parent.onmousemove = function (ev) {

  
            var x = ev.clientX- this.getBoundingClientRect().left;
            var y = ev.clientY - this.getBoundingClientRect().top;
       
            if (that.max.x1 !== "") {

                if (that.max.x1 > x) {
                    x = that.max.x1;
                }
            }
            if (that.max.x2 !== "") {
                if (that.max.x2 < x) {
                    x = that.max.x2;
                }
            }
            if (that.max.y1 !== "") {
                if (that.max.y1 > y) {
                    y = 0;
                }
            }
            if (that.max.y2 !== "") {
                if (that.max.y2 < y) {
                    y = that.max.y2;
                }
            }
            if (x < 50 || y < 50) {
                return
            } else {
                that.div.style.left = x - divx + "px";
                that.div.style.top = y - divy + "px";
                bimg.style="transform:scale(2,2);transform-origin: left top;";
                bimg.style.marginLeft=-(x-divx) + "px";
                bimg.style.marginTop=-(y-divy)+ "px";
            }

            if(callback){
                callback.call(that);
            }
        }
    }
}