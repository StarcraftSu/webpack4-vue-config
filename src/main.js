const p = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Promise resolved')
    },3000)
}).then(res=>{
    console.log(res)
})

let es6 = 'es6'

var es5 = 'es5'