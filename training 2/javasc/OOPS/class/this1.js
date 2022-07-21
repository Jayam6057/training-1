class pro{
    constructor(Name,price,loc)
    {
        this.product_Name = Name;
        this.product_Price = price;
        this.product_Loc = loc;
        console.log("constructor executing automatically")
    }
}
    let p1=new pro("Asus lapop",25000,"Anantapur");
console.log(p1);