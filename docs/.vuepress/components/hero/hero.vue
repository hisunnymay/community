<template>
<div class="main-hero-container">
    <div class="intro">
        <div class="text-info">
            <h1>Building Conversational Interface</h1>
            <h1>For Your Services</h1>
        </div>
        <div class="buttons">
            <a href="/guide">
             <button class='btn'>Documentation</button>
            </a>
           
            <a href="http://framely.naturali.io" target="_blank" rel="noopener noreferrer">
            <button class="btn">Get Started</button>
            </a>
            
            
        </div>
    </div>
    <div class="img">
        <div class="image">
            <img src="../../../.vuepress/public/images/hero.png" alt="">
        </div>
    </div>
</div>
</template>
<style scoped>
.main-hero-container{
    width: 100%;
    position: relative;
    width: var(--homepagewidth);
   display: flex;
   align-items: center;
   height: 100vh;
   justify-content: space-between;
}
.intro{
    width: 50%;
}
.intro .text-info h1{
    font-size:2.5rem ;

}
.img{
    display: flex;
    align-items: flex-end;
    width: 50%;
    position: relative;
}
.image>img{
    width: 100%;
}
 .btn{
     padding: 15px;
     background: var(--c-brand);
     border: none;
     color: var(--c-bg);
     font-weight: bold;
     margin: 10px;
     border-radius: 10px;
     cursor: pointer;
 }
 @media(max-width:719px){
     .main-hero-container{
         flex-direction: column;
         justify-content: center;
         height: fit-content;
         padding-bottom: 100px;
     }
     .intro{
         width: 100%;
     }
     .buttons{
         display: flex;
         width: 100%;
     }
     .img{
         display: none;
     }

 }

</style>