const a = {
    b: (email, pass) => {
        this.email = email;
        this.pass = pass;
    },
    c: (email, pass) => {
        b.call(this, email, pass)
        this.category = 'b' 
    }
}




// a.b().c = function (d, e) {}
console.log(a.b().c());
