    /*
    1.创建XMLHttpRequest对象(数据交互对象)
    2.打开与服务器的链接、
    3.发送请求
    4.等待服务的响应
    */
function ajax(option){
    //1.创建XMLHttpRequest对象(数据交互对象)
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
    }else{
        var xhr = ActiveXObject('Microsoft.XMLHTTP');
    }
    //判断类型
    if(option.type == 'get' || option.type == 'GET'){
        // 2.打开与服务器的链接
        xhr.open(option.type,option.url + '?'+ option.data + '&_='+new Date().getTime(),true);//解决缓存
        xhr.send(null);//get请求
    }else if (option.type == 'post' || option.type == 'POST'){
        xhr.open(option.type,option.url,true);//解决缓存
        //模拟表单form的post方式提交数据，在send之前执行
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        xhr.send(option.data);//post请求
    }else{
        alert('目前只支持get和post请求方式');
    }


    // 4.等待服务器的响应
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if(xhr.status == 200){
                option.success(xhr.responseText);
            }else{
                option.failed(xhr.status)
            }
        }
    }
}