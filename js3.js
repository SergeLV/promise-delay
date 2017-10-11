
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

    oldPr=oldPr.then (
        data => {
            console.log('end ',ii);
            console.log('start ',ii+1);
            var oldPr=pr;
        }
    );


};

oldPr.then (data => {
    console.log('end ', ii);

