
function daleytime (i,time,r) {
    setTimeout(() => {
        //console.log(i);
    r();
}, time);

}

var ntime=2000;


promise=[];

console.log('start 1');


var dlina=0;

for (var ii=0; ii<=dlina; ii++ ) {
    console.log(ii);





    if (ii==0) {
    console.log('i did')
    promise[ii] = new Promise(function(resolve, reject) {
    this.daleytime(1,ntime,resolve);
    });
    }
    console.log(ii,promise[ii],'before');
    promise[ii].then( data => {
        console.log(data);
        console.log('end ',ii,promise[ii-1]);



 //       console.log('start ',i+1);
 //       promise[i+1] = new Promise(function(resolve, reject) {
 //           daleytime(2,ntime,resolve);
 //       });


    });
    console.log(promise[ii],'after');
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







