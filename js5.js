
function daleytime (i,time,r) {
    setTimeout(() => {
        //console.log(i);
    r();
}, time);

}

var ntime=2000;


promise=[];

console.log('start 1');


var dlina=1;

for (var i=0; i<=dlina; i++ ) {
    console.log(i);
    if (i==0) {
    console.log('i did')
    promise[i] = new Promise(function(resolve, reject) {
    this.daleytime(1,ntime,resolve);
    });
    }
    console.log(i,promise[i],'before');
    promise[i].then( data => {
        console.log('end ',i,promise[i]);



 //       console.log('start ',i+1);
 //       promise[i+1] = new Promise(function(resolve, reject) {
 //           daleytime(2,ntime,resolve);
 //       });


    });
    console.log(promise[i],'after');
}


//    promise[2].then( data => {
//        console.log('end 2');
//
//        console.log('start 1');
//        promise[3] = new Promise(function(resolve, reject) {
//            this.daleytime(3,ntime,resolve);
//        });
//
//        promise[3].then( data => {
//            console.log('end 3');
//
//        console.log('end..................')
//        });
//    });
//});







