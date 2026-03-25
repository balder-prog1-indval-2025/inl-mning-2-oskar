let char_x = 100
let randombred = random(100,W-100)
let uppner = 0

let tid=0
let tid2=0
let x=200
let x2=W-201
let char_y = 400
let movement_x = 0
let movement_y = 0
let jump_time = 0
let jumping = false
let hitbox = new Hitbox(char_x, char_y, 100, 100)
let hitboxkub = new Hitbox(W-x,H/2,100,100)
let marremonster = await fetchImage ("media.jpg")
let lukazmonster = await fetchImage ("lukaz.jpg")

 
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
    char_x += movement_x
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

function marrekuben(){
  if(x>100){
    x2-=2
    x+=2


  }
    






}
let lukazlazer = new Hitbox(W-randombred+28, 125,37,H)
let lukazhb = new Hitbox(W-randombred,H-H-200+uppner,100,200)


function death(): void{
    rectangle(0,0,10000,10000)
    text('WASTED', W - W / 2 - 475, 400, 300, 'red')
}
let död = false
 
update = () => {
    if (död){
        death()
 
     }else{
        clear()
        ctx.drawImage(marremonster, W-x,H/2+H/17,100,100)
        ctx.drawImage(lukazmonster, W-randombred,H-H-200+uppner,100,200)
    movement_x = walk()
    movement_y = jump()
    if (keyboard.w) {
        jumping = true
    }
    if (hitbox.intersects(hitboxkub) || hitbox.intersects(lukazhb)) {
        död = true
    }
   if( död == false){
    lukazattack()
   
   }
   
    updatePosition()
    updateCharacter(char_x, char_y, hitbox)
   
    hitboxkub.x = x2
    lukazhb.y = uppner-200
    if(keyboard.l){
     marrekuben()

    }
    
    
   
       
     }
   
 
}
 
export { }
