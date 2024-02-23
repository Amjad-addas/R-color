const input =document.getElementById('numberofc')
const o1=document.querySelectorAll('span')
const O1=document.getElementById('o1')
const O2=document.getElementById('o2')
const O3=document.getElementById('o3')
let str=''
let key =0
const O4=document.getElementById('o4')

const O5=document.getElementById('o5')


const first=document.getElementById('first')
const sec=document.getElementById('sec')
const third=document.getElementById('third')

const foth=document.getElementById('foth')

const fith=document.getElementById('fith')



const option = document.getElementById('one')
const five = document.getElementById('five')
const colorsList= ['black','brown','red','orange','yellow','green','blue','blueviolet','gray','white']
const pp=['gold', 'silver']
const two = document.getElementById('two')

const three = document.getElementById('three')

const four = document.getElementById('four')
one.value = two.value=three.value=four.value=input.value=five.value=70
const colors = document.getElementById('colors')
colors.style.display='none'

let value=0
 const colorNumber=function(){
 
      console.log(input.value)
      colors.style.display='flex'
      o1.forEach((e)=>(
         e.style.display='block'
      ))
      value=input.value
      if(value=='fv'){
         five.style.display='block'

      }
      else if(value=='fo'){
         five.value=70
         fith.innerText=''
         three.value=70
         third.innerText=''
         five.style.display='none'
         o1[5].style.display='none'
         o1[5].style.backgroundColor='rgb(82, 80, 80)'
      }

   } 

const changeValue=function(op,O,inp){



   if(op.id=='four'){
      if(op.value=='0'){
         O.style.backgroundColor='gold'
         fith.innerText='+/- 5%'
      }else{
         O.style.backgroundColor='silver'
         fith.innerText='+/- 10%'
      }
   }else{



         O.style.backgroundColor=colorsList[op.value]
         
            inp.innerText=op.value   
            if(value=='fo'){
               if(three.value!=70){
                  for(let i=0;i<three.value;i++){
                     str=str+'0'
                  }
                  third.innerText=str
                  str=''
               }
            }
            else if(value=='fv'){
               if(five.value!=70){
                  for(let i=0;i<five.value;i++){
                     str=str+'0'
                  }
                  fith.innerText=str
                  str=''
               }
            }
   }
   }
   /*
for(let i=0 ;i<option.length;i++){
   option[i].addEventListener('click',()=>{
      O1.style.backgroundColor=colorsList[option[i].value]
         first.innerText=option[i].value   
      })
}
for(let i=0 ;i<two.length;i++){
   two[i].addEventListener('click',()=>{
      O2.style.backgroundColor=colorsList[two[i].value]
      sec.innerText=two[i].value
   })
}
for(let i=0 ;i<three.length;i++){
   three[i].addEventListener('click',()=>{
      O3.style.backgroundColor=colorsList[three[i].value]
      if(value=='fo'){
         console.log('fff')
         for(let i=0;i<three.value;i++){
            str=str+'0'
         }
         third.innerText=str
      }else
      third.innerText=three[i].value
   })
}
for(let i=0 ;i<four.length;i++){
   four[i].addEventListener('click',()=>{
      O4.style.backgroundColor=pp[four[i].value]
      if(four[i].value=='0'){
         fith.innerText='+/- 5%'
      }
      else{
         fith.innerText='+/- 10%'
      }
   })
}
for(let i=0 ;i<five.length;i++){
   five[i].addEventListener('click',()=>{
      O5.style.backgroundColor=colorsList[five[i].value]
      if(value=='fv'){
         for(let i=0;i<five.value;i++){
            str=str+'0'
         }
         foth.innerText=str
      }else
      foth.innerText=five[i].value
   })
}
*/