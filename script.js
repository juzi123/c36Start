//1.初始化数据
var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
var hash = {
    'q': 'qq.com', 
    'w': 'weibo.com', 
    'e': 'ele.me', 
    'r': 'runoob.com', 
    'c': 'css-tricks.com', 
    'y': 'youtube.com', 
    'b': 'bilibili.com' , 
    'i': 'iqiyi.com', 
    'o': 'opera.com', 
    'p': undefined, 
    'a': 'acfun.tv', 
    's': 'sohu.com', 
    'z': 'zhihu.com', 
    'm': 'www.mcdonalds.com.cn'
}

var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

function ctag(tagName){
    return document.createElement(tagName)
}

//2.生成键盘，以后添加其他键
for(var index1 = 0; index1 < keys['length']; index1++){
    var div1 = ctag('div')

    main.appendChild(div1)
    
    var row = keys[index1]
    for(var index2 = 0; index2 < row['length']; index2++){
        var bt1 = ctag('button')
        bt1.textContent = "编辑"
        bt1.id = row[index2]
        bt1.onclick = function(bt1Click){
            var bt2 = bt1Click['target']
            var img2 = bt2.previousSibling
            var key = bt2['id']
            var x = prompt('给我一个网址')
            hash[key] = x
            img2.src = 'http://' + x + '/favicon.ico'
            img2.onerror = function(xxx){
                xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
            }
            localStorage.setItem('zzz', JSON.stringify(hash))
        }

        var img1 = ctag("img")
        if(hash[row[index2]]){
            img1.src = 'http://' + hash[row[index2]] + '/favicon.ico'
        }else{
            img1.src =  '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        img1.onerror = function(xxx){
            xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        
        var kbd1 = ctag('kbd')
        kbd1.textContent = row[index2]
        kbd1.appendChild(img1)
        kbd1.appendChild(bt1)
        div1.appendChild(kbd1)
    }
}
//3.监听用户
var checkText = true
document.onkeypress = function(keypress){
    if(checkText){
        var key = keypress['key']
        var asc = key.charCodeAt() //ascii值
        if(asc>='97' && asc<='122'){//判断是否为a~z
            var website = hash[key]
            window.open('http://'+ website, '_blank')
        }
    }
}
//获取焦点
textInput.onfocus = function(){
    checkText = false
}
//失去焦点
textInput.onblur = function(){
    checkText = true
}

