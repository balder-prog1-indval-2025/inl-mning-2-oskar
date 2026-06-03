// app2.ts har grunden till koden / bygg stenarna
export let char_x = 100
var vinstljudet = new Audio('[FNAF] 6 am - QuickSounds.com.mp3');
var dödsljudet = new Audio('gta-v-wasted-death-sound.mp3');
export let randombred = random(100,W-100)
export let uppner = 0
let tid=0
let tid2=0
let x3 = 0
export let död1 = false
export 
let död2 = false
export let x4 = 0
export let char_y = 400
export let movement_x = 0
export let movement_y = 0
let jump_time = 0
export let jumping = false
export let hitbox = new Hitbox(char_x, char_y, 100, 100)
let ippebosse = await fetchImage ("IPPEBOSS.jpg")
let ippe = [ //ippe bossens variabler 
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
]
let ippereset = [ //ippe bossens reset kod
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
    {
        "x": W/2,
        "y": 1,
        "v":random(-9,9)/10,
        "m": random(15,30)/10
    },
]
let  h=-150
let woman3 = await fetchImage ("OIP3.jpg") //alla bilder till tjejen som är rädd för isak
let woman4 = await fetchImage ("OIP.jpg")
let woman5 = await fetchImage ("OIP2.jpg")
let woman6 = await fetchImage ("OIP4.jpg")
let woman2 = [ // variablerna till sammma tjej
    {
        "x": W,
        "y": H/2-H/17,
        "h": W-201,
        "j": W-195,
        "k": W-203,
        "ö": W+200
        
    },
    {
        "x": -50,
        "y": H/2-H/17,
        "h": 201,
        "j": 195,
        "k": 203,
        "ö":-200
    }
    
    
]
let woman2reset = [// reset variablerna till sammma tjej
    {
        "x": W,
        "y": H/2-H/17,
        "h": W-201,
        "j": W-195,
        "k": W-203,
        "ö": W+200
        
    },
    {
        "x": -50,
        "y": H/2-H/17,
        "h": 201,
        "j": 195,
        "k": 203,
        "ö":-200
    }
    
    
]
let marremonster = await fetchImage ("media.jpg")
let marretimerx = 0
let tomat=await fetchImage ("ippe2.png")
let coin = await fetchImage ("8cd3c27a96c00fe6a769ca850758a959.jpg")
var boingljudet = new Audio('klasky-csupo-boing-sound-effect.mp3');

export function getDöd1() {
    return död1
}

export function jump() {  // functionen för att hoppa;)
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

export function updateCharacter(x: number, y: number, hitbox: Hitbox) { // function för att uppdatera hitbosen till karaktären
    rectangle(x, y, 100, 100)
    hitbox.x = x
    hitbox.y = y
   
}
export function walk() {// functionen för att karaktären ska kunna röra sig
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

export function updateMovement() {// en till function för rörelsen
    movement_x = walk()
    movement_y = jump()
    if (keyboard.w) {
        jumping = true
        boingljudet.play();
    }
}
 
export function updatePosition() {// en till function för rörelsen
    if(char_x+movement_x>-50 && char_x+movement_x<W-50){
    char_x += movement_x
    }
    char_y += movement_y
}
 
let framme = false 
export function lukazattack(){ // function som får huvudet med lazer att funka
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
            
            död1 = true
        }
    }
    if (hitbox.intersects(lukazhb)) {
        död1 = true
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
export async function marrekuben(speed: number,x2: number){// function som får kuben med marvins ansikte att röra på sig åt höger och vänsster
 
   
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
   död1 = true
    
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
 
  
 return(x3)
 return(x4)
 hitboxkub.x = x4
}


let womanv = true
export function woman(woman,){ // function som får tjejerna i ippe boss att röra sig
   let hitboxwoman = new Hitbox(woman.x,woman.y,75,200)
   hitboxwoman.x = woman.x
   hitboxwoman.y = woman.y
   if (womanv && woman.x > woman.h){
    ctx.drawImage(woman3, woman.x,woman.y,75,200)
    woman.x -= 1
   }
   if (womanv && woman.x < woman.j){
    
    woman.x-=0.1
    ctx.drawImage(woman4, woman.x,woman.y,70,200)

   }
   if(woman.x < woman.j ){

    womanv=false
   }
   if (womanv ==false){
    woman.x+=2
    ctx.drawImage(woman5, woman.x,woman.y,70,200)

   }
   if(woman.x > woman.ö ){

    womanv=true
   }
   if(hitbox.intersects(hitboxwoman)) {
    död2 = true
}
}
export function woman9(woman){// function som får tjejerna i ippe boss att röra sig 
    let hitboxwoman = new Hitbox(woman.x,woman.y,75,200)
    hitboxwoman.x = woman.x
    hitboxwoman.y = woman.y
    if (womanv && woman.x < woman.h){
     ctx.drawImage(woman6, woman.x,woman.y,75,200)
     woman.x += 1
    }
    if (womanv && woman.x > woman.j){
     
     woman.x+=0.1
     ctx.drawImage(woman5, woman.x,woman.y,70,200)
 
    }
    if(woman.x > woman.j ){
 
     womanv=false
    }
    if (womanv ==false){
     woman.x-=2
     ctx.drawImage(woman4, woman.x,woman.y,70,200)
 
    }
    if(woman.x < woman.ö ){
 
     womanv=true
    }
    if(hitbox.intersects(hitboxwoman)) {
     död2 = true
 }
 }
export function reset(){// function som nollställer alla vairabler den dess första posetion
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
     lukazhb.x =  W-randombred
     lukazlazer.x =  W-randombred + 28
     ippe = ippereset
     woman2 = woman2reset
     h=-150
     marretimerx = 0
     
     
 
 
}
 export function ippeboss1(bana){ // en dell av bossen med isak
   
    ctx.drawImage(ippebosse, W/6,h,W-W/3,150)
    if(h<2){
    h+=1
    
    }
    if(h>0){
    bana = 5
       }   return bana
 }
 
export function ippeboss(bana: number){// en dell av bossen med isak
   
   
    let hitboxippe = new Hitbox(W/6,1,W-W/3,150)
    if (hitbox.intersects(hitboxippe) ) {
        död2 = true
    }
    
   
    if(död2 == false){
        ippetomat(ippe[0])
        ippetomat(ippe[1])
        ippetomat(ippe[2])
        ippetomat(ippe[3])
        ippetomat(ippe[4])
        woman(woman2[0])
        woman9(woman2[1])
        marretimerx+=1
        
    }
    if (marretimerx>2000){
        marrekuben(2,W+x4)

    }
    if (marretimerx>4500){
        bana = 6

    }
    ctx.drawImage(ippebosse, W/6,1,W-W/3,150)
   
}
 
export function ippetomat(ippe,){//  tomaterna från bossen med isak
    ctx.drawImage(tomat, ippe.x,ippe.y,25,25)
if (ippe.y>H){
        ippe.y = 1
        ippe.x=W/2
        ippe.v = random(-0.9,0.9)
        
    }
    if (ippe.y<H){
        ippe.y+=ippe.m
       
        ippe.x+=ippe.v
    }
    let hitboxippe2 = new Hitbox(ippe.x,ippe.y,25,25)
    if(hitbox.intersects(hitboxippe2)) {
        död2 = true
    }
}
 
export function coins1(x: number, y: number,coinvalue){ // pengarna
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(1)
    }
    else{return coinvalue }
}
export function coins2(x: number, y: number,coinvalue){// pengarna
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(2)
    }
    else{return coinvalue }
}
export function coins3(x: number, y: number,coinvalue){// pengarna
    ctx.drawImage(coin, x, y,50,60)
    let coinhb = new Hitbox(x,y,50,60)
    if (hitbox.intersects(coinhb) ){
    return(3)
    }
    else{return coinvalue }
   
}
 
let lukazlazer = new Hitbox(W-randombred+28, 125,37,H)
export let lukazhb = new Hitbox(W-randombred,H-H-200+uppner,100,200)
 
export function death1(bana): number{ //döds skräm och reset
    rectangle(0,0,10000,10000)
    text('WASTED', W - W / 2 - 475, 400, 300, 'red')
    text('Press Enter to restart', W  - 375, H-30, 25, 'red')
    dödsljudet.play();
    if (keyboard.enter){
        bana = 1
        reset()
        död1=false
    }
    return bana
    
}
export function death2(bana): number{//döds skräm och reset och reset point
    rectangle(0,0,10000,10000)
    text('WASTED', W - W / 2 - 475, 400, 300, 'red')
    text('Press Enter to restart', W  - 375, H-30, 25, 'red')
    dödsljudet.play();
    if (keyboard.enter){
        bana = 4
        reset()
        död2=false
    }
    return bana
}
export function win(){// vinst skärmen
    vinstljudet.play();
    text('victory', W - W / 2 - 550, 400, 300, 'yellow')
    
}