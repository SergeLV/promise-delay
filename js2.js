
function daleytime (i,time,r) {
    setTimeout(() => {
        //console.log(i);
    r();
}, time);

}

var ntime=2000;




console.log('start 1');
var promise = new Promise(function(resolve, reject) {
this.daleytime(1,ntime,resolve);
});

promise.then( data => {
    console.log('end 1');




    console.log('start 2');
    var promise2 = new Promise(function(resolve, reject) {
        this.daleytime(2,ntime,resolve);
    });
    promise2.then( data => {
        console.log('end 2');

        var promise3 = new Promise(function(resolve, reject) {
            this.daleytime(3,ntime,resolve);
        });

        promise3.then( data => {
            console.log('end 3');

        console.log('end..................')
        });
    });





});







