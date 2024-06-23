document.addEventListener('DOMContentLoaded', function () {
    show()
    function move() {
        // 获取滑块的当前值
        var sliderValue = document.getElementById("range").value;
        var newLeft = sliderValue + "%";

        document.querySelector(".none").style.left = newLeft;
    }
    document.getElementById("range").addEventListener("mousemove", move);
    document.getElementById("range").addEventListener("change", move);

    function show(){
        var number=document.querySelector(".num")
        var value=document.getElementById("range").value
        number.innerHTML=value+'%'
    }
    document.getElementById("range").addEventListener("mousemove", show);
    document.getElementById("range").addEventListener("change",show);
});