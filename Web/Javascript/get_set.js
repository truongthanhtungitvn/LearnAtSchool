let user = {
    get fullName() {
        return this.name;
    },
    set fullName(value) {
        this.name = value;
    }
}

user.fullName = "Thanh Tung Truong";
console.log(user.fullName);