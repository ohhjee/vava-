<template>
    <div>
        <div class="">
            <div class="h-[10vh] 2xl:h-[15vh] flex items-center justify-between lg:justify-center lg:items-stretch fam">
                <div class="img w-3/12 2xl:6/12 flex items-center justify-center">
                    <div class="flex justify-center items-center">
                        <img src="../assets/image/logo.png" class="ml-4 md:ml-0" alt="" />
                    </div>
                </div>
                <div id="clip" class=" bg-[#b91a16] w-full lg:flex hidden items-center">
                    <div class="nav px-3">
                        <nav class="uppercase">
                            <ul class="flex space-x-5 text-[14px] 2xl:text-[2rem] ml-[5rem] items-center">
                                <li><a class="p-2 text-[#e98583]" href="">home</a></li>
                                <li><a class="p-2 text-white" href="">about</a></li>
                                <li><a class="p-2 text-white" href="">projects</a></li>
                                <li><a class="p-2 text-white" href="">fqa</a></li>
                                <li><a class="p-2 text-white" href="">contact us</a></li>
    
                                <li class="2xl:my-5"><a href="" class="px-5 py-[4px] border text-white uppercase flex items-center hover:text-black hover:bg-white transition ease-in-out duration-75 ">schedule an inspection <ArrowRightIcon class=" ml-1 w-4 h-4 2xl:w-20 2xl:h-20"/> </a></li>
                            </ul>
    
                        </nav>
                    </div>
                </div>
                <div class="block lg:hidden mx-4 w-[6%] sm:w-[3%]">
                    <div class="hamburger space-y-1 cursor-pointer" @click="nav" id="ham">
                        <div class="w-full  border-[#b91a16] border-[1px]"></div>
                        <div class="w-full border-[#b91a16] border-[1px]"></div>
                        <div class="w-full   border-[#b91a16] border-[1px]"></div>
    
                    </div>
                </div>
            </div>
            <div class="bg-[#b91a16] w-full z-10  absolute lg:hidden" id="nav_content">
                <div class="p-5 w-full">
                    <div class="nav px-3">
                        <nav class="uppercase">
                            <ul class=" text-left space-y-5 text-[14px] flex flex-col items-start justify-center">
                                <li class="w-full flex items-center justify-center p-2"><a class="py-2 w-full text-[#e98583]" href="">home</a></li>
                                <li class="w-full flex items-center p-2"><a class="py-2 text-white" href="">about</a></li>
                                <li class="w-full flex items-center p-2"><a class="py-2 text-white" href="">projects</a></li>
                                <li class="w-full flex items-center p-2"><a class="py-2 text-white" href="">fqa</a></li>
                                <li class="w-full flex items-center p-2"><a class="py-2 text-white" href="">contact us</a></li>
    
                                <li class=""><a href="" class="px-5 py-[4px] border text-white uppercase flex items-center hover:text-black hover:bg-white transition ease-in-out duration-75 ">schedule an inspection <ArrowRightIcon class=" ml-1 w-4 h-4"/> </a></li>
                            </ul>
    
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

function  nav() {
    document.getElementById('ham')?.classList.toggle('click')
    document.getElementById('nav_content')?.classList.toggle('navs')
    console.log('hey');
    
}
</script>

<style lang="scss" scoped>
#clip {
    clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%);
}

.fam {
    font-family: 'Poppins', sans-serif;
}
.click{
    transition: all 300ms ease-in-out;
    
    div{
        transition: all 300ms ease-in-out;
        &:nth-child(1){
            position: relative;
            top: 5px;
            transform: rotate(45deg);
        }
        &:nth-child(2){
            display: none;
        }
        &:nth-child(3){
            transform: rotate(-45deg);
        }
    }
}
#nav_content{
    opacity: 0;
    pointer-events:none;
}
.navs{
    opacity:1 !important;
    pointer-events:all !important;
    }
</style>