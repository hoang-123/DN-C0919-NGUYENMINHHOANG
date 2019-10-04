    var Apple = function(){
        this.setWeight = function (weight) {
            this.weight = weight;
        }
        this.getWeight = function(){
            return this.weight;
        }

    };

    var Human = function(){
        this.setName = function (name) {
            this.name = name;
        }
        this.getName = function(){
            return this.name;
        }
        this.setGender = function (gender) {
            this.gender = gender;
        }
        this.getGender = function(){
            return this.gender;
        }
        this.setWeight = function (weight) {
            this.weight = weight;
        }
        this.getWeight = function(){
            return this.weight;
        }
        this.Say = function(){
            return console.log(this.status);
        }
        this.Eat = function(app){
            app.setWeight(app.getWeight() -1 );
            this.setWeight(this.getWeight() + 1);
        }
        this.Check = function (app) {
            app.setWeight(app.getWeight());
        }

    };

    let result;
    let apple = new Apple();
    apple.setWeight(10);

    let adam = new Human();
    adam.setGender(1);
    adam.setName("adam");
    adam.setWeight(60);
    adam.Eat(apple);
    adam.Check(apple);

    let eva = new Human();
    eva.setGender(0);
    eva.setName("eva");
    eva.setWeight(50);

    while(apple.weight>0){
        adam.weight++;
        eva.weight++;
        apple.weight-=2;
    }
    alert("adam:" + adam.weight + "eva:" + eva.weight);


