/**
 * Created by 993711336 on 2016/1/20.
 */
window.onload = function () {
    imgLocation("container", "box")
    var imgDate={"date":[{"src":"2.png"},{"src":"1.png"},{"src":"3.png"},{"src":"4.png"},{"src":"5.png"},{"src":"6.png"}]};
    window.onscroll = function () {
        if(checkFlag()){
            console.log(imgDate);
            var cparent=document.getElementById("container");
            for(var i=0;i<imgDate.date.length;i++){
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img=document.createElement("img");
                img.src="img/"+imgaate.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container","box");
        }
    }
}

function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
}

function imgLocation(parent, content) {
//    将parent下所有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientHeight / imgWidth);
    cparent.style.cssText = "width:" + imgWidth * num + "px";

    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            boxHeightArr[i] = ccontent[i].offsetHeight;
        } else {
            var minheight = Math.min.apply(null, boxHeightArr);
            var minIndex = getMinHeightLocation(boxHeightArr, minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}
function getMinHeightLocation(boxHeightArr, minHeight) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}