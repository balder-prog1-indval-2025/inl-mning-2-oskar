import { updateCharacter,updatePosition } from "./app2"
import { lukazattack } from "./app2"
import { marrekuben } from "./app2"
import { reset } from "./app2"
import { ippeboss1,ippeboss } from "./app2"
import { coins1,coins2,coins3 } from "./app2"
import { death1,death2 } from "./app2"
import { win } from "./app2"
import {  hitbox } from "./app2"
import {  lukazhb} from "./app2"
import {  randombred } from "./app2"
import {  uppner } from "./app2"
import {  x4} from "./app2"
import {  char_y, char_x} from "./app2"
import {  updateMovement,död1, getDöd1,död2 } from "./app2"
//app.ts har uppdaten och det som driver spelet

let deathtimer = 0
let lukazmonster = await fetchImage ("lukaz.jpg")
let coinvalue = 0





let bana = 1

update = () => {
    getDöd1()
    if (död1){
        bana = death1(bana)
        coinvalue = 0
    }else{
        clear()
        if(bana == 1){
            deathtimer = 0
            
            
            ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
            
            
            updateMovement()
            
            if( död1 == false){
               lukazattack()
               marrekuben(2,W+x4)
                
            }
            
            updatePosition()
            updateCharacter(char_x, char_y, hitbox)
            
            
            lukazhb.y = uppner-200
            if(keyboard.l){
                }

            if(coinvalue == 0){
                coinvalue = coins1(W/4,H/2,coinvalue)
            }
            if(coinvalue == 1){
                coinvalue = coins2(W-W/4,H/5,coinvalue)
            }
            if(coinvalue == 2){
                coinvalue = coins3(W/2,H/3,coinvalue)
            }
            if(coinvalue == 3){
                
                coinvalue = 4
                bana = 2 
                
         
         
        }
        
        
    }
    if(bana == 2){
        
    
        
        ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
        
        
        updateMovement()
        
        if( död1 == false){
            lukazattack()
            marrekuben(4,W/2)
            
        }
        
        updatePosition()
        updateCharacter(char_x, char_y, hitbox)
        
        
        lukazhb.y = uppner-200
        
        
        if(coinvalue == 0){
           coinvalue = coins1(W/4,H/2,coinvalue)
        }
        if(coinvalue == 1){
            coinvalue = coins2(W-W/9,H/5,coinvalue)
        }
        if(coinvalue == 2){
            coinvalue = coins3(W/6,H/4,coinvalue)
        }
        if(coinvalue == 3){
            bana = 3
            coinvalue = 4
        }
        if(coinvalue == 4){
            coinvalue = 0
            
            
        }
    }
    
    if(bana == 3){
           ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
           
           
           updateMovement()
           
            if( död1 == false){
                lukazattack()
                
                marrekuben(10,W/2)
                
            }
            
            updatePosition()
            updateCharacter(char_x, char_y, hitbox)
            
            
            lukazhb.y = uppner-200
            if(keyboard.l){

       
       }
       if(coinvalue == 0){
        coinvalue = coins1(W/4,H/2,coinvalue)
     }
     if(coinvalue == 1){
        coinvalue = coins2(W-W/9,H/5,coinvalue)
     }
     if(coinvalue == 2){
        coinvalue = coins3(W/6,H/4,coinvalue)
     }
     if(coinvalue == 3){
        reset()
        coinvalue = 4
             bana = 4
   
     
       
    }
       if(coinvalue == 4){
           
       coinvalue = 0
 
       }
 
       }
    if (död2){
        bana = death2(bana) 
        
    }else{
 
     if (bana==4){
        
        
        updateMovement()
        updatePosition()
        updateCharacter(char_x, char_y, hitbox)
        
        bana = ippeboss1(bana)
        
 
     }

     
     
     
     
     if(bana == 5){
         
         
         updateMovement()
            updatePosition()
            updateCharacter(char_x, char_y, hitbox)
            if( död1 == false){
                ippeboss(bana)
            }
            
        }
        
        
     if(bana == 6){
        
        updateMovement()
           updatePosition()
           updateCharacter(char_x, char_y, hitbox)
           if( död1 == false){
               win()
           }

     }


    }
       }
    }

 
 
   
 
export { }