
function daleytime (i,time,r) {
    setTimeout(() => {
        //console.log(i);
    r();
}, time);

}

var ntime=2000;


promise=[];


promise[1] = new Promise(function(resolve, reject) {
this.daleytime(1,ntime,resolve);
});

console.log('start 1',promise[1]);
promise[1].then( data => {
    //console.log('end 1',);
console.log('end 1',promise[1]);




    promise[2] = new Promise(function(resolve, reject) {
        this.daleytime(2,ntime,resolve);
    });
    console.log('start 2',promise[2]);
    promise[2].then( data => {
        console.log('end 2',promise[2]);

        promise[3] = new Promise(function(resolve, reject) {
            this.daleytime(3,ntime,resolve);
        });

        console.log('start 3',promise[3]);
        promise[3].then( data => {
            console.log('end 3',promise[3]);

        });
    });
});

        console.log('end..................')






