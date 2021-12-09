function show(){
    var left =1;
    var right=5;
    for(i=left;i<=right;i++){
        document.getElementById("p"+i).style.display='inline-block';
    }

    var left =1;
    var right=4;
    for(i=left;i<=right;i++){
        document.getElementById("c"+i).style.display='inline-block';
    }

    
}

function moveLeft(){
    document.getElementById("p"+left).style.display='none';
    left+=1;
    right+=1;

    for(i=left;i<=right;i++){
        document.getElementById("p"+i).style.display='inline-block';
    }

}