const itemList = 
    [{
        "itemName":"Flip Machine",
        "itemPrice":15000,
        "itemUrl":"https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
        "itemInfo":"+¥25/click",
        "itemEffect":25
    },
    {
        "itemName":"Lemonade Stand",
        "itemPrice":30000,
        "itemUrl":"https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
        "itemInfo":"+¥30/sec",
        "itemEffect":30
    },
    {
        "itemName":"ETF Stock",
        "itemPrice":300000,
        "itemUrl":"https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "itemInfo":"+0.1%/sec",
        "itemEffect":0.001
    },
    {
        "itemName":"ETF Bonds",
        "itemPrice":300000,
        "itemUrl":"https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "itemInfo":"+0.07%/sec",
        "itemEffect":0.0007
    },
    {
        "itemName":"Ice Cream Truck",
        "itemPrice":100000,
        "itemUrl":"https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
        "itemInfo":"+¥120/sec",
        "itemEffect":120
    },
    {
        "itemName":"House",
        "itemPrice":20000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
        "itemInfo":"+¥32000/sec",
        "itemEffect":32000
    },
    {
        "itemName":"Town House",
        "itemPrice":40000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
        "itemInfo":"+¥64000/sec",
        "itemEffect":64000
    },
    {
        "itemName":"Mansion",
        "itemPrice":250000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
        "itemInfo":"+¥50000/sec",
        "itemEffect":500000
    },
    {
        "itemName":"Industrical Space",
        "itemPrice":1000000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
        "itemInfo":"+¥2200000/sec",
        "itemEffect":2200000
    },
    {
        "itemName":"Hotel Skyscraper",
        "itemPrice":10000000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
        "itemInfo":"+¥25000000/sec",
        "itemEffect":25000000
    },
    {
        "itemName":"Bullet-Speed Sky Railway",
        "itemPrice":10000000000000,
        "itemUrl":"https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
        "itemInfo":"+¥30000000000/sec",
        "itemEffect":30000000000
    }
    ]


config = {
    initialForm :document.getElementById("initialForm"),
    mainPage: document.getElementById("mainPage"),
    sidePage: document.getElementById("sidePage"),
    firstPage: document.getElementById("firstPage")
}

function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

function initializeUserAccount(){
    let btns = document.getElementById("btns");
    let startBtn = btns.querySelectorAll(".btn").item(0);
    let userName = document.getElementById("yourName").value

    startBtn.addEventListener("click",function(){
        displayNone(config.firstPage);
        config.mainPage.append(mainPage(userName));
    })
    
    //本当はここはオブジェクトを受け取るように後で変更する。
}

class UserInformation{
    constructor(userName,userAge,totalMoney,incomePerSecond,incomePerTouch,totalSecond,totalEtfStock,totalEtfBonds,clickNumber){
        this.userName = userName;
        this.userAge = userAge;
        this.totalMoney = totalMoney;
        this.incomePerSecond = incomePerSecond;
        this.incomePerTouch = incomePerTouch;
        this.totalSecond = totalSecond;
        this.totalEtfStock = totalEtfStock;
        this.totalEtfBonds = totalEtfBonds;
        this.clickNumber = clickNumber;
    };

    buyFlipMachine(){
        this.incomePerTouch += itemList[0]["itemEffect"];
        console.log(this.incomePerTouch)
    }

    buyItems(itemEffect){
        this.incomePerSecond += itemEffect;
    }

    incomeByEtfStock(){
        return itemList[2]["itemPrice"] * itemList[2]["itemEffect"];
        
    }
    incomeByEtfBonds(){
        this.totalEtfBonds += itemList[3]["itemPrice"];
        return this.totalEtfBonds * itemList[3]["itemEffect"];
    }
}

function mainPage(userName){

    let container = document.createElement("div");

    // 本当はオブジェクトで受け取る。userの状態をオブジェクトで保存する。
    let userGameAcount = new UserInformation(userName,20,50000,0,25,0,0,0,0);
    let name = userGameAcount.userName;
    let age = userGameAcount.userAge;
    let money = userGameAcount.totalMoney;
    let totalsecond = userGameAcount.totalSecond;
    let incomePerTouch = userGameAcount.incomePerTouch;
    let clickNumber = userGameAcount.clickNumber;

    container.innerHTML+=`
        <div class="bg-dark bg align-center">
            <div class="box bg-blue d-flex flex-wrap justify-content-between">
                <div class="half-box bg-dark">
                    <div class="small-box bg-blue" id="head">
                        <p>${clickNumber} Burgers<br>one click ¥${incomePerTouch}</p>
                    </div>
                    <div class="align-center pt-3 box3" id="hum-img">
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" class="hum-img">
                    </div>
                    <div class ="d-flex align-items-end  box3">
                    <div class="row justify-content-center max-width m-1 bg-dark">
                        <button type="submit" class="btn btn-light col-6 subt-btn" id="reset-btn">Reset</button>
                        <button type="submit" class="btn btn-light col-6 sub-btn" id="save-btn">Save</button>
                    </div>
                    </div>
                </div>
                <div class="left-box bg-dark">
                    <div class="user-info d-flex flex-wrap justify-content-between">
                        <div class="bg-blue detail-box align-center">${name}</div>
                        <div class="bg-blue detail-box align-center" id="age">${age} years old</div>
                        <div class="bg-blue detail-box align-center" id="totaltime">${totalsecond} days</div>
                        <div class="bg-blue detail-box align-center" id="money">¥${money}</div>
                    </div>
                    <div id="scroll-box">
                        <div class="scroll" id ="scroll">
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    `
    
    let timeHtml = container.querySelector("#totaltime")
    let moneyHtml = container.querySelector("#money");
    let ageHtml = container.querySelector("#age")
    let burgerHead = container.querySelector("#head")
    let resetBtn = container.querySelector("#reset-btn");
    let saveBtn = container.querySelector("#save-btn");

    resetBtn.addEventListener("click",function(){
        userGameAcount = new UserInformation(userName,20,50000,0,25,0,0,0,0);
        
        container.innerHTML = ``
        container.append(mainPage(userName));
    })

    console.log(timeHtml)

    setInterval(function(){
        totalsecond += 1;
        timeHtml.innerText = `${totalsecond} days`
        if (totalsecond>=365){
            age = 20 + parseInt(totalsecond/365);
            ageHtml.innerText = `${age} years old`
        }
    },1000)

    setInterval(function(){
        userGameAcount.totalMoney += userGameAcount.incomePerSecond;
        moneyHtml.innerHTML = `<div class="bg-blue detail-box align-center" id="money">¥${userGameAcount.totalMoney}</div>`
    },1000)

    let humbergerImg = container.querySelectorAll("#hum-img").item(0);
    humbergerImg.addEventListener("click",function(){
        userGameAcount.totalMoney += userGameAcount.incomePerTouch;
        clickNumber += 1;
        moneyHtml.innerText = `¥${userGameAcount.totalMoney}`
        burgerHead.innerHTML=`${userGameAcount.clickNumber} Burgers <br>one click ¥${userGameAcount.incomePerTouch}`
    })

    let itemScroll = container.querySelector("#scroll");
    let scrollBox = container.querySelector("#scroll-box");
    

    console.log(itemList)
    for (let i = 0; i<itemList.length; i++){
        let item = document.createElement("div");
        item.classList.add("itembox");
        item.classList.add("d-flex")
        if (itemList[i]["itemName"]==="Flip Machine"){
            item.innerHTML = `
            
                <img src=${itemList[i]["itemUrl"]} class="items">
                <div class="mx-4 align-center"><h6>${itemList[i]["itemName"]}<br>¥${itemList[i]["itemPrice"]}<br>(¥${itemList[i]["itemEffect"]}/touch)</h6></div>
                <div></div>
        `
        itemScroll.append(item);

        item.addEventListener("click",function(){
            displayNone(itemScroll);
            scrollBox.append(itemBuyPage(itemList[i]["itemName"],itemList[i]["itemUrl"],itemList[i]["itemPrice"],itemList[i]["itemEffect"],userGameAcount))
            
        })
        }
        else if (itemList[i]["itemName"]==="ETF Stock"){
            item.innerHTML = `
            
                <img src=${itemList[i]["itemUrl"]} class="items">
                <div class="mx-4 align-center" id="item-detail"><h6>${itemList[i]["itemName"]}<br>¥${itemList[i]["itemPrice"]}<br>(${itemList[i]["itemEffect"]*100}%/sec)</h6></div>
                <div></div>
        `
        itemScroll.append(item);
        item.addEventListener("click",function(){
            displayNone(itemScroll);
            scrollBox.append(itemBuyPage(itemList[i]["itemName"],itemList[i]["itemUrl"],itemList[i]["itemPrice"],itemList[i]["itemEffect"],userGameAcount))
            
        })
        }
        else if (itemList[i]["itemName"]==="ETF Bonds"){
            item.innerHTML = `
            
                <img src=${itemList[i]["itemUrl"]} class="items">
                <div class="mx-4 align-center"><h6>${itemList[i]["itemName"]}<br>¥${itemList[i]["itemPrice"]}<br>(0.07%/sec)</h6></div>
                <div></div>
        `
        itemScroll.append(item);
        item.addEventListener("click",function(){
            displayNone(itemScroll);
            scrollBox.append(itemBuyPage(itemList[i]["itemName"],itemList[i]["itemUrl"],itemList[i]["itemPrice"],itemList[i]["itemEffect"],userGameAcount))
            
        })
        }
        else{
            item.innerHTML = `
            
                <img src=${itemList[i]["itemUrl"]} class="items">
                <div class="mx-4 align-center"><h6>${itemList[i]["itemName"]}<br>¥${itemList[i]["itemPrice"]}<br>(¥${itemList[i]["itemEffect"]}/sec)</h6></div>
                <div></div>
        `
        itemScroll.append(item);
        item.addEventListener("click",function(){
            displayNone(itemScroll);
            scrollBox.append(itemBuyPage(itemList[i]["itemName"],itemList[i]["itemUrl"],itemList[i]["itemPrice"],itemList[i]["itemEffect"],userGameAcount))
            
        })
        }
        

    }

    return container
}

function itemBuyPage(itemName,imgUrl,price,effect,userGameAcount){
    let container = document.createElement("div")
    container.classList.add("bg-blue","item-detail","p-2")
    container.innerHTML = `
                        <div class= d-flex justify-content-between flex-wrap">
                            <div class="">
                                <div>${itemName}</div>
                                <div>Max purchase:500</div>
                                <div>Price ¥${price}</div>
                                <div>Get ${effect}</div>
                            </div>
                            <img src="${imgUrl}" class="items">
                        </div>
                        <div>
                            <div class="mt-2">
                                <div>How many would you like to buy?</div>
                                <input type="number" name="example2" min="0" class="input-number" id="number">
                                <div id="btns" class="d-flex justify-content-between my-2">
                                    <button type="submit" class="btn btn-light col-5" id="back">Back</button>
                                    <button type="submit" class="btn btn-light col-5" id="confirm">Confirm</button>
                                </div>
                            </div>
                        </div>
                    `
    let backBtn = container.querySelector("#back");
    let confirmBtn = container.querySelector("#confirm");

    backBtn.addEventListener("click",function(){
        let itemScroll = document.getElementById("scroll");
        displayNone(container);
        displayBlock(itemScroll)
    })

    confirmBtn.addEventListener("click",function(){
        let head = document.getElementById("head");
        let inputNumber = container.querySelector("#number").value
        let itemScroll = document.getElementById("scroll");
        let money = document.getElementById("money");
        let itemDetail = document.getElementById("item-detail");

        if (itemName==="Flip Machine"){
            if (userGameAcount.totalMoney>=price*inputNumber){
                userGameAcount.incomePerTouch += (25 * inputNumber);
                userGameAcount.totalMoney -= (price*inputNumber);
                head.innerHTML = `${userGameAcount.clickNumber} Burgers <br>one click ¥${userGameAcount.incomePerTouch}`;
                money.innerHTML = `<div class="bg-blue detail-box align-center" id="money">¥${userGameAcount.totalMoney}</div>`

                console.log(inputNumber)
                displayNone(container);
                displayBlock(itemScroll)
            }
            else{
                alert("you can not afford it!")
            }
        }
        else if (itemName==="ETF Stock"){
            if (userGameAcount.totalMoney>=price*inputNumber){
                userGameAcount.buyItems(userGameAcount.incomeByEtfStock());
                itemList[2]["itemPrice"] =　parseInt(itemList[2]["itemPrice"]*1.1) ;
                let inputNumber = container.querySelector("#number").value
                let money = document.getElementById("money");
                let itemScroll = document.getElementById("scroll");
                let itemDetail = document.getElementById("item-detail");

                userGameAcount.totalMoney -= price;
                money.innerHTML = `<div class="bg-blue detail-box align-center" id="money">¥${userGameAcount.totalMoney}</div>`
                displayNone(container);
                displayBlock(itemScroll)
                itemDetail.innerHTML = `<h6>${itemList[2]["itemName"]}<br>¥${itemList[2]["itemPrice"]}<br>(${itemList[2]["itemEffect"]*100}%/sec)</h6>`
            }
            else{
                alert("you can not afford it!")
            }
            
            
        }
        else if (itemName==="ETF Bonds"){
            if (userGameAcount.totalMoney>=price*inputNumber){
            userGameAcount.buyItems(userGameAcount.incomeByEtfStock());
            let inputNumber = container.querySelector("#number").value
            let money = document.getElementById("money");
            let itemScroll = document.getElementById("scroll");

            userGameAcount.totalMoney -= price*inputNumber;
            money.innerHTML = `<div class="bg-blue detail-box align-center" id="money">¥${userGameAcount.totalMoney}</div>`
            displayNone(container);
            displayBlock(itemScroll)
            }
            else{
                alert("you can not afford it!")
            }

        }
        else {
            if (userGameAcount.totalMoney>=price*inputNumber){
            userGameAcount.buyItems(effect);
            let inputNumber = container.querySelector("#number").value
            let money = document.getElementById("money");
            let itemScroll = document.getElementById("scroll");

            userGameAcount.totalMoney -= price*inputNumber;
            money.innerHTML = `<div class="bg-blue detail-box align-center" id="money">¥${userGameAcount.totalMoney}</div>`

            displayNone(container);
            displayBlock(itemScroll)
            }
            else{
                alert("you can not afford it!")
            }

        }

    })
    return container;
}