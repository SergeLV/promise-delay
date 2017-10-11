
function daleytime (i,time,r) {
    setTimeout(() => {
        //console.log(i);
    r();
}, time);

}

var ntime=2000;



var pr = new Promise(function(resolve, reject) {
    this.daleytime(1,ntime,resolve);
});


let countPromise=3,
arrPr=[];

console.log('start 0')
arrPr[0]=pr;
let newPr = pr,
oldPr=newPr;
for (var ii=0; ii<countPromise; ii++) {

    console.log(ii,oldPr);
    //oldPr = newPr;

    oldPr.then (
        data => {
            console.log('end ',ii);
            console.log('start ',ii+1);
            pr;
        }
    );
    oldPr = oldPr;

    //arrPr[ii-1].then (data => {
    //        console.log('end ', ii-1);
    //        console.log('start ',ii)
    //        arrPr[ii]=pr;
    //        console.log(arrPr[ii]);
    //    }
    //);
};

oldPr.then (data => {
    console.log('end ', ii);


//arrPr[ii].then (data => {
//    console.log('end ', ii);
});


//console.log('start 1');
//var promise = new Promise(function(resolve, reject) {
//this.daleytime(1,ntime,resolve);
//});

//promise.then( data => {
//    console.log('end 1');
//
//
//
//
//    console.log('start 2');
//    var promise2 = new Promise(function(resolve, reject) {
//        this.daleytime(2,ntime,resolve);
//    });
//    promise2.then( data => {
//        console.log('end 2');
//
//        var promise3 = new Promise(function(resolve, reject) {
//            this.daleytime(3,ntime,resolve);
//        });
//
//        promise3.then( data => {
//            console.log('end 3');
//
//        console.log('end..................')
//        });
//    });
//
//
//
//
//
//});










//promise.then(array => {
//    console.log(`Promise complete 1`);
//
//
//
//var promise2 = new Promise(function(resolve, reject) {
//    setTimeout(() => {
//    console.log(' 2');
//    resolve();
//        }, 2000);
//});
//promise2.then(array => {
//    console.log(`Promise complete 2`);
//var promise3 = new Promise(function(resolve, reject) {
//    setTimeout(() => {
//    console.log(' 3');
//    resolve();
//        }, 2000);
//});
//promise3.then(array => {
//    console.log(`Promise complete 3`);
//
//
//});
//});
//
//});