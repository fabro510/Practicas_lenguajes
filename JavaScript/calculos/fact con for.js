//con for
function f(n){
    let r = 1
    console.log(r)
    for(let i=2;i<=n;i=i+1){
        console.log(r)
        r=r*i
        console.log(r)
    }
    return r
}
console.log (f(5))



