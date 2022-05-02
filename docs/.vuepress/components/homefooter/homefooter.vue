
  
<template>
<div class="main">
<section class="footer">
    <div class="logo-links">
        <div class="logo-socials">
            <div class="logo">
                <img src="../../public/images/logo.png" alt="logo">
            </div>
            <div class="socials">
                   

            </div>
        </div>
        <div class="links">
            <div class="product">
                <p>Product</p>
                <div class="link-col">

                <a href="#">
                    Database</a>
                <a href="#">Authentication</a>
                <a href="#">storage</a>
                <a href="#">Functions</a>
                <a href="#">Pricing</a>
                <a href="#">Beta</a>
                </div>

            </div>
            <div class="resources">
                <p>Resources</p>
            <div class="link-col">

                <a href="#">Support</a>
                <a href="#">Brand Assets/Logos</a>
                <a href="#">System status</a>
                <a href="#">Terms of service</a>
                <a href="#">Privacy Policy</a>
            </div>
            </div>


            <div class="developers">
                <p>Developers</p>
                <div class="link-col">

                <a href="#">Documentation</a>
                <a href="#">API Reference</a>
                <a href="#">Guides</a>
                </div>

            </div>
            <div class="company">
                <p>company</p>
                <div class="link-col">

                <a  href="#" class="link-f">Blog</a>
                <a href="#" class="link-f">Open Source</a>
                <a href="#" class="link-f">careers</a>
                <a href="#" class="link-f">company</a>
                <a href="#" class="link-f">Human.txt</a>
                <a href="#" class="link-f">Lawyer.txt</a>
                <a href="#" class="link-f">Security.txt</a>
                </div>

            </div>
        </div>

    </div>
    <hr>
    <div class="copyrights">
            <p style="text-align:center;">copyright &copy; framely {{new Date().getFullYear()}} </p>
    </div>

</section>

</div>
    
</template>
<style scoped>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
}
.logo-links{
    display: flex;
}
.links{
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    
}
.logo>img{
    width: 100px;
    height: 100px;
    padding-top: 20px;
}
.logo-socials{
    width: 20%;
    
}
.link-col{
    display: flex;
    flex-direction: column;
    text-align: left;
    /* margin-left: 35px; */
    /* width: fit-content; */
}
.link-col a{
    color: #4e6e8e;
    margin: 5px;
}
.socials{
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}
.socials>img{
    width: 30px;
    height: 30px;
}
.links>div{
   
    text-align: left;
    
}
@media (max-width:768px) {
 
    .logo-links{
        flex-direction: column;
        align-items: center;
    }

    .links{
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: end;
    }
  
    
}
</style>