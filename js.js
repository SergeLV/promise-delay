
function daleytime (i,ntime,r) {
    setTimeout(() => {
        console.log(i,'setTimeout');
        r;
        console.log('>>>r');


}, ntime);

}

var ntime=2000;



var pr = new Promise(function(resolve, reject) {
    this.daleytime(1,ntime,resolve);
});


let countPromise=1,
arrPr=[];

console.log('start 0')
arrPr[0]=pr;
let newPr = pr,
oldPr=newPr;
for (var ii=1; ii<=countPromise; ii++) {

    console.log(ii-1,arrPr[ii-1]);
    arrPr[ii-1].then(data => {

        console.log('end ',ii-1);
        arrPr[ii] = pr;
    });

};

console.log('end');



//oldPr.then (data => {
//    console.log('end ', ii)});


//for (var ii=0; ii<=countPromise; ii++) {
//
//    console.log(ii,oldPr);
//    oldPr=oldPr.then(data => {
//        daleytime (ii,ntime,resolve)
//        console.log('start ',ii);
//    //newPr = pr;
//});
//
//};




//console.log('start');
//
//let itemIDs = [1, 2, 3, 4, 5];
//
//itemIDs.reduce((promise, itemID) => {
//    return promise.then(_ => {
//        console.log('exp',Math.exp(Math.random(),Math.random()))
//        daleytime (itemID,2000);
//        console.log(itemID);
//    });
//}, Promise.resolve());
//
//console.log('end');
