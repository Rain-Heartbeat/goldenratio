let n = (-1+Math.sqrt(+5))/2;
let t = 512;
let x = t/n;
let startx = 0;
let starty = 0;

const cs = document.createElement('canvas');
const ctx = cs.getContext('2d');

cs.width = x + 1;
cs.height = t + 1;

document.body.appendChild(cs);

goldenRatio(0,0,512,16);

function goldenRatio(mx,my,mt,mi) {
    t = mt;
    startx += mx;
    starty += my;
    ctx.beginPath();
    ctx.strokeRect(startx,starty,x,t);
    ctx.arc(startx + t,starty + t,t, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
    ctx.strokeStyle = "#dab300";
    ctx.lineWidth = 1;
    ctx.stroke();

    for (let i = 0; i < mi; i++) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(startx,starty,t,t);
        x = t / n;
        startx = startx + x;
        t = t - x;
        checkt();
        ctx.beginPath();
        ctx.strokeStyle = "#dab300";
        ctx.arc(startx - t,starty + t,t, 270 * Math.PI / 180, 360 * Math.PI / 180, false );
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.strokeRect(startx,starty,-t,t);
        x = t / n;
        starty = starty + x;
        t = t - x;
        checkt();
        ctx.beginPath();
        ctx.arc(startx - t,starty - t,t, 360 * Math.PI / 180, 90 * Math.PI / 180, false );
        ctx.strokeStyle = "#dab300";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.strokeRect(startx,starty,-t,-t);
        startx = startx - x + t;
        x = t / n;
        t = t - x;
        checkt();
        ctx.beginPath();
        ctx.arc(startx + t,starty - t,t, 90 * Math.PI / 180, 180 * Math.PI / 180, false );
        ctx.strokeStyle = "#dab300";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.strokeRect(startx,starty,t,-t);
        starty = starty + t - x;
        x = t / n;
        t = t - x;
        checkt();
        ctx.beginPath();
        ctx.arc(startx + t,starty + t,t, 180 * Math.PI / 180, 270 * Math.PI / 180, false );
        ctx.strokeStyle = "#dab300";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    t = 512;
    x = t/n;
    startx = 0;
    starty = 0;
}

function checkt() {
    if (t < 0) {
        t = Math.sqrt(t ** 2);
    }
}

// ctx.strokeRect(startx,starty,t,t);
// startx = startx + t / n;
// x = t / n;
// t = t - x;
// ctx.strokeRect(startx,starty,t,-t);
// startx = startx + ;
// starty = starty + t + x;
// x = t / n;
// t = t - x;
// ctx.strokeRect(startx,starty,-t,-t);
