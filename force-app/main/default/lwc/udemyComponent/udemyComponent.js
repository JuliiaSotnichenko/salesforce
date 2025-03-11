import { LightningElement } from 'lwc';

export default class UdemyComponent extends LightningElement {



        myName = "Yuliia";
        myFavoriteLanguage = "Ukrainian";
            handleClick(event) {
                this.textValue = event.detail.value;
            }
        greetings(){

            console.log("Hello on my page" + this.myName)
        }    

        handleOnChange(event){
            this.myName = event.target.value;
            // console.log(myName);
        }

       
}