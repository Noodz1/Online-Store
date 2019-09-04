

var accounts = [
    {
        username: "Kristian",
        password: "one"
    },
    {
        username: "o",
        password: "k"
    },
    {
        username:'' ,
        password:''
    }

];

var newItem;





// log in
function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    for (i=0; i< accounts.length; i++) {
        if(username=== accounts[i].username && password === accounts[i].password){

           ItemListPageView();

            return
        }
        else{
            document.getElementById("logInInfo").innerHTML = username + "'s username or password is incorrect. " ;


        }
    }

}



function newProduct() {

  productPageView();

}


//registration view
function registration(){
   registrationView();


//document.getElementById('').onclick = event => this.addUser();
    //var userInput = document.createElement('input');



    //var userName = document.createTextNode("UserName: ");
    //userInput.appendChild(userName);
    //var newUser = document.getElementById("registration");
    //newUser.appendChild(userInput);

}

function addItem (){
    var productName = document.getElementById('productName').value;
    var description = document.getElementById('description').value;
    var number = document.getElementById('number').value;

    var newItem1 = this.newItem;
    newItem1 = document.createElement('form');
    newItem1.style.width = '30%';
    newItem1.style.textAlign = 'left';
    newItem1.style.marginLeft = '35%';
    newItem1.style.marginBottom = '1%';
    newItem1.style.lineHeight = '2';
    newItem1.style.border = 'box';
    newItem1.style.boxSizing = 'border-box';
    newItem1.style.padding = '5px';
    newItem1.innerHTML  = productName + "\n" + description + "\n" + number;

    var item2 = document.getElementById("itemListPage");
    item2.appendChild(newItem1);
    console.log(newItem1);
    console.log(item2);

    ItemListPageView();

}



//register a user
//will have to implement check for whether user already exists
function registerUser()
{

    var userName = document.getElementById("usernameToAdd").value;
    var password = document.getElementById("passwordToAdd").value;


        if (userName === accounts.valueOf({username: ""})) {
            document.getElementById("existingUser").innerHTML = userName + "'s username is already in use. " ;

            console.log("This user already exists. ");

        } else {
            accounts.push({
                username: userName,
                password: password
            });

          logInPageView();

            console.log(userName + " has been registered. ");
            console.log(accounts)
        }





}




//previous button function
function backButton(){
    var currentRegistrationDisplay = document.getElementById('registration').display;
    var currentlogInPageDisplay = document.getElementById('logInPage').display;

    if (currentRegistrationDisplay==='block' && currentlogInPageDisplay === 'none' ){

        logInPageView();

    }
}

function logOutButton(){

    var userName =  document.getElementById("username").value;
    document.getElementById('registration').style.display ='none';
    document.getElementById('logInPage').style.display ='block';
    document.getElementById('itemListPage').style.display ='none';
    document.getElementById('productPage').style.display ='none';

    document.getElementById("existingUser").innerHTML = userName + " is logged out. " ;


}


function registrationView()
{
    document.getElementById('registration').style.display ='block';
    document.getElementById('logInPage').style.display ='none';
    document.getElementById('itemListPage').style.display ='none';
    document.getElementById('productPage').style.display ='none';
}

function logInPageView()
{
    document.getElementById('registration').style.display ='none';
    document.getElementById('logInPage').style.display ='block';
    document.getElementById('itemListPage').style.display ='none';
    document.getElementById('productPage').style.display ='none';
}

function ItemListPageView()
{
    document.getElementById('registration').style.display ='none';
    document.getElementById('logInPage').style.display ='none';
    document.getElementById('itemListPage').style.display ='block';
    document.getElementById('productPage').style.display ='none';
}

function productPageView()
{
    document.getElementById('registration').style.display ='none';
    document.getElementById('logInPage').style.display ='none';
    document.getElementById('itemListPage').style.display ='none';
    document.getElementById('productPage').style.display ='block';
}






