let char_x = 100
let randombred = random(100,W-100)
let uppner = 0
let tid=0
let tid2=0
let x3 = 0
let x4 = 0
let char_y = 400
let movement_x = 0
let movement_y = 0
let jump_time = 0
let jumping = false
let hitbox = new Hitbox(char_x, char_y, 100, 100)
let ippey=1

let marremonster = await fetchImage ("media.jpg")
let ippebosse = await fetchImage ("IPPEBOSS.jpg")
let ippe2 = await fetchImage ("ippe2.png")
let lukazmonster = await fetchImage ("lukaz.jpg")
let coin = await fetchImage ("8cd3c27a96c00fe6a769ca850758a959.jpg")
let coinvalue = 0
function updateCharacter(x: number, y: number, hitbox: Hitbox) {
    rectangle(x, y, 100, 100)
    hitbox.x = x
    hitbox.y = y
   
}
 
function jump() {
    if (jumping && char_y <= H/2+H/16) {
        jump_time += deltaTime
        return -10 + 10 * jump_time / 700
    } else if (char_y > H/2+H/16) {
        jumping = false
        char_y = H/2+H/16
        jump_time = 0
        return 0
    }
    return 0
}
 
function walk() {
    if (keyboard.a && !jumping) {
        return -5
    } else if (keyboard.d && !jumping) {
        return 5
    } else if (jumping) {
        return movement_x
    } else if (movement_x < -0.1) {
        return movement_x + 0.2
    } else if (movement_x > 0.1) {
        return movement_x - 0.2
    } else {
        return 0
    }
}
 
function updatePosition() {
    if(char_x+movement_x>-50 && char_x+movement_x<W-50){
    char_x += movement_x
    }
    char_y += movement_y
}

let framme = false
function lukazattack(){
    if(uppner<201 && framme == false ){
        uppner+=1
        tid2=0
        }
    if (uppner > 195 ){
        rectangle(W-randombred+29, uppner-77,5,H ,"red")
        rectangle(W-randombred+62, uppner-80,5,H ,"red")
        tid += 1
        tid2 = 0
        if(hitbox.intersects(lukazlazer)){
            död = true
        }
    }
    if(tid >= 100) {
        framme = true
    }  
    if (uppner>0 && framme ){
        uppner-=1
        tid = 0
        }
    if(uppner<1){
        tid2+=1
     }
     if(tid2 >= 100) {
        framme = false
        randombred = random(100,W-100)
        lukazhb.x =  W-randombred 
        lukazlazer.x =  W-randombred + 28 
    } 
}
let vänster = true
async function marrekuben(speed: number,x2: number, ){
    /*marremonster = await fetchImage ("marreflip.png")
    let sprite = new Sprite(marremonster, 1, 1)
    sprite.height = 10 
    sprite.width = 10 
    sprite.x = 10
    sprite.y = 10
    sprite.draw()*/
    
    let hitboxkub = new Hitbox(W-x4,H/2+H/17,100,100)
    ctx.drawImage(marremonster, W-x3,H/2+H/17,100,100)
    
  
    if(x4<W+100 && vänster){
    x4+=speed
    x3+=speed
    x2+=speed
   }
  if(x4>W+99){
    vänster = false
    marremonster = await fetchImage ("marreflip.png")

  }
  
  if (hitbox.intersects(hitboxkub)) {
    död = true
}
  
  
   if(x4>-1 && vänster==false){
    x4-=speed
    x3-=speed
    x2-=speed
  }
  if(x4<-1){
    vänster = true
    marremonster = await fetchImage ("Media.jpg")

  }

  console.log()
 return(x3)
 return(x4)
 hitboxkub.x = x4
}

function reset(){
     char_x = 100
     randombred = random(100,W-100)
     uppner = 0
     tid=0
     tid2=0
     x3 = 0
     x4 = 0
     char_y = 400
     movement_x = 0
     movement_y = 0
     jump_time = 0
     jumping = false


}
function ippeboss(){
    
    ctx.drawImage(ippe2, W-W/2-12.5,ippey,25,25)
    ctx.drawImage(ippebosse, W/6,1,W-W/3,150)
    let hitboxippe = new Hitbox(W/6,1,W-W/3,150)
    if (hitbox.intersects(hitboxippe)) {
        död = true
    }
    
    if (ippey==H){
        ippey = 1
    }
    if (ippey<H){
        ippey+=1
    }

}
    

function coins1(x: number, y: number,){
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(coinvalue=1)
    }
}
function coins2(x: number, y: number,){
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(coinvalue=2)
    }
}
function coins3(x: number, y: number,){
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(coinvalue=3)
    }
    
}

let lukazlazer = new Hitbox(W-randombred+28, 125,37,H)
let lukazhb = new Hitbox(W-randombred,H-H-200+uppner,100,200)

function death(): void{
    rectangle(0,0,10000,10000)
    text('WASTED', W - W / 2 - 475, 400, 300, 'red')
}
let död = false
let bana1 = false
let bana2 = false
let bana3 = false
let ippebossbana = true
update = () => {
    if (död){
        death()
     
    }else{
        if(bana1){

            clear()
            
            ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
            
            
        movement_x = walk()
        movement_y = jump()
        if (keyboard.w) {
            jumping = true
        }
        if (hitbox.intersects(lukazhb)) {
            död = true
        }
        if( död == false){
        lukazattack()
        marrekuben(2,W+x4)
       
        }
        
        updatePosition()
        updateCharacter(char_x, char_y, hitbox)
        
        
        lukazhb.y = uppner-200
        if(keyboard.l){
         
        
        }
        if(coinvalue == 0){
            coins1(W/4,H/2)
        }
        if(coinvalue == 1){
            coins2(W-W/4,H/5)
        }
        if(coinvalue == 2){
            coins3(W/2,H/3)
        }
        if(coinvalue == 3){
            
            coinvalue = 4
         bana2 = true
        
         console.log
           
        }
        
        
        }
        if(bana2){
             clear()
           bana1=false 
           
           ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
           
           
       movement_x = walk()
       movement_y = jump()
       if (keyboard.w) {
           jumping = true
       }
       if(hitbox.intersects(lukazhb)) {
           död = true
       }
       if( död == false){
       lukazattack()
       marrekuben(4,W/2)
       
       }
       
       updatePosition()
       updateCharacter(char_x, char_y, hitbox)
       
       
       lukazhb.y = uppner-200
       
        
       if(coinvalue == 0){
        coins1(W/4,H/2)
     }
     if(coinvalue == 1){
        coins2(W-W/9,H/5)
     }
     if(coinvalue == 2){
        coins3(W/6,H/4)
     }
     if(coinvalue == 3){
        bana3 = true
        coinvalue = 4
     }
       if(coinvalue == 4){
       coinvalue = 0
       
          
       }
       }
       
       if(bana3){
           clear()
           bana2=false 
           
           ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
           
           
       movement_x = walk()
       movement_y = jump()
       if (keyboard.w) {
           jumping = true
       }
       if ( hitbox.intersects(lukazhb)) {
           död = true
       }
       if( död == false){
       lukazattack()
       
       marrekuben(10,W/2)
       
       }
       
       updatePosition()
       updateCharacter(char_x, char_y, hitbox)
       
       
       lukazhb.y = uppner-200
       if(keyboard.l){
        
       
       }
       if(coinvalue == 0){
        coins1(W/4,H/2)
     }
     if(coinvalue == 1){
        coins2(W-W/9,H/5)
     }
     if(coinvalue == 2){
        coins3(W/6,H/4)
     }
     if(coinvalue == 3){
        reset()
        coinvalue = 4
     ippebossbana = true
    
     console.log
       
    }
       if(coinvalue == 4){
           
       coinvalue = 0

       }

       }

     if(ippebossbana){
        clear()
        bana2=false 
        movement_x = walk()
        movement_y = jump()
        if (keyboard.w) {
            jumping = true
        }
        updatePosition()
        updateCharacter(char_x, char_y, hitbox)
        if( död == false){
            ippeboss()
            }

     }




       }
        
    
    
    
    
    
    }


    














    
 
export { }
