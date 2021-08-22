let soObj = {
    name:"Jason",
    getName:function(){
        console.log(this.name) //Jason
    },
}

soObj.getName();