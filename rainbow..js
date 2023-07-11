var body = document.querySelector('body');
function rain() {
    //创建div
    var div = document.createElement('div');
    //添加样式
    div.classList.add('dis');
    // 随机颜色
    div.style.backgroundImage = `linear-gradient(rgb(0,0,0,1),rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}))`;
    //随机动漫时间
    div.style.animation = `displace ${Math.random() * 8 + 3}s infinite`;
    //随机偏移距离
    div.style.left = `${(Math.random() * 100)}vw`;
    // 插入
    body.appendChild(div);
}
setInterval(rain, 1000)
