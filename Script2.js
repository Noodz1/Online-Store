function controller(){
    constructor ()
    {
        var Kristian = new User('Kristian', 'two');

        var users = new set([]);

        this.addedItem = [
            new addItem(uid,new Set(this.users),
                [new Message(uid, "Text 1", new Date()),
                    new Message(nils, "Text 2", new Date())]),
            new Conversation(uid,new Set([nils,gunnar]),
                [new Message(uid, "Text 3", new Date()),
                    new Message(gunnar, "Text 4", new Date())])
        ];

        // Setup Conversation-View
        this.newItem = document.getElementById('ItemList');
        this.newItem.style.display = 'block';
        this.conversationsList = document.getElementById('newItem');
        document.getElementById('addItem').onclick = event = this.addItemForSale();

    }

    function addItemForSale()
    {
        this.newProduct = new addedItem();
        this.addItem.push(this.newProduct);
        this.openConversation(this.selectedConversation);
    }
}




 function User() {

     constructor(uid, password)
     {
         this.uid = uid;
         this.password = password;
     }
 }
 function addItem()
     {
         constructor(productName, description, value1)
         {
             this.productName = productName;
             this.description = description;
             this.value1 = value1;
         }
     }
