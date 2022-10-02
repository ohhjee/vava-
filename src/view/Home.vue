<template>
    <div>
        <Nav/>
        <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" :mouse-drag="false" class="w-full">
            <slide v-for="(slide,index) in image" :key="slide.id" class="relative w-full">
                <img :src="getPaths(slide.url)" class="w-full h-[100vh]" />
                <div class=" container flex">
                    <div class="absolute z-10 bottom-0  flex flex-col md:flex-row mb-[52px] text-left items-center w-full px-[20px] lg:px-0 lg:left-[54px] text-white">
                        <div class="animate__animated animate__fadeInLeft animate_slower">
                            <div class="flex flex-col w-full justify-center md:justify-start">
                                <div v-html="slide.text1" class="md:leading-[60px] leading-[20px] mb-3 capitalize text-[20px] md:text-[59px]" id="fonts" data-aos="fade-right" data-aos-duration="30000"></div>
                                <div v-html="slide.description1" class="md:text-[14px] w-full text-[12px] leading-[26px]" id="popins"></div>
                            </div>
                        </div>
                        <!-- <div class="flex space-x-[4rem] items-end animate__animated animate__fadeInLeft animate_slower">
                            <div class="flex items-end space-x-[4rem] ">
                                <div v-html="slide.text2" class="lg:leading-[60px] leading-[26px] text-[20px] capitalize lg:text-[59px]" id="fonts" data-aos="fade-right" data-aos-duration="30000"></div>
                                <div v-html="slide.description" class="lg:text-[17px] w-full text-[14px] leading-[26px]" id="popins"></div>
                            </div>
    
                        </div> -->
                        <div class="animate__animated animate__fadeInLeft animate_slower">
                            <div class="flex flex-col">
                                <div v-html="slide.text2" class="md:leading-[60px] leading-[20px] mb-3 capitalize text-[20px] md:text-[59px]" id="fonts" data-aos="fade-right" data-aos-duration="30000"></div>
                                <div v-html="slide.description" class="md:text-[17px] w-full text-[14px] leading-[26px]" id="popins"></div>
                            </div>
                        </div>
                        <div class="animate__animated animate__fadeInLeft animate_slower left-[15px] right-[15px] relative lg:left-0 lg:right-0">
                            <div class="flex flex-col">
                                <div v-html="slide.text3" class="md:leading-[60px] leading-[20px] mb-3 capitalize text-[20px] md:text-[59px]" id="fonts" data-aos="fade-right" data-aos-duration="30000"></div>
                                <div v-html="slide.description3" class="md:text-[17px] w-full text-[14px] leading-[26px]" id="popins"></div>
                            </div>
                        </div>
    
                        <div class="button mb-[2rem] left-[40px]">
                            <router-link to="#" class="capitalize whitespace-nowrap md:px-6 md:py-2 px-2 py-1 flex items-center bg-[#b91a16] hover:bg-white hover:text-black" id="clip">learn more
                                <ArrowRightIcon class="w-4 ml-1 h-4" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </slide>
    
            <template #addons>
                                                                                                                                <div class=" w-11/12 mx-auto ">
                                                                                                                                <navigation class="absolute" />
                                                                                                                            </div>
</template>
        </carousel>

        <div class="lg:container mx-auto my-[4rem]">
            <div class="text-center mb-10" data-aos="fade-down" data-aos-duration="1500">
                <h1 class="text-[30px] " id="fonts">Welcome to VAVA</h1>
                <p class="text-[14px]" id="popins_san"> 
                    We offer cost-effective, qualitative and advanced solutions to our clients by combining the <br> business of Real estate and construction. Explore some of our projects below.
                </p>
                <div class="flex items center justify-center mt-3">
                    <div class="bg-[#b91a16] h-[7px] w-[10%]" id="clip"></div>
                </div>
            </div>
            <div class=" flex flex-col justify-center items-center mx-auto lg:flex lg:flex-row lg:space-x-6 lg:mx-4 mb-[2rem]">
                <div class=" w-11/12 lg:w-1/2 bg-white mb-10 hover:shadow-2xl lg:mb-0 animate__animate animate_ animate__slower_fadeInLeft">
                    <div class="img">
                        <img src="../assets/image/vav/featured1.png" class="w-full" alt="">
                    </div>
                    <div class="shadow py-4 px-6">
                    <div class="text-[28px] capitalize font-800" id="fonts">
                        joneer court
                    </div>
                    <p id="popins_san" class="text-[14px] mt-4">
                        An array of sleek finishes and a thoughtful open-plan layout, a paradigm of contemporary Victoria Island living.
                    </p>
                    <div class="mt-[3rem]">
                        <div class="flex items-center justify-between">
                            <div class="">
                                <div class="capitalize text-[16px] font-extrabold" id="popins_san">
                                    location:
                                </div>
                                <p class="text-[14px]">
                                    Admiralty Way, Lekki Phase 1
                                </p>
                            </div>
                            <div>
                                 <router-link to="#" class="border flex items-center px-3 py-1 hover:bg-[#b91a16] hover:text-white">Expore <ArrowRightIcon class="w-4 h-4"/></router-link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-11/12 lg:w-1/2 hover:shadow-2xl bg-white lg:mb-0 animate__animate animate__fadeInLeft animate__slower" >
                    <div class="img">
                        <img src="../assets/image/vav/featured2-Crystal-Bay-Towers.png" class="w-full" alt="">
                    </div>
                    <div class="shadow py-4 px-6">
                    <div class="text-[28px] capitalize font-800" id="fonts">
                        Crystal Bay Towers
                    </div>
                    <p id="popins_san" class="text-[14px] mt-4">
                        Situated in a nice, quiet area with many expensive homes in it’s neighborhood.
                    </p>
                    <div class="mt-[3rem]">
                        <div class="flex items-center justify-between">
                            <div class="">
                                <div class="capitalize text-[16px] font-extrabold" id="popins_san">
                                    location:
                                </div>
                                <p class="text-[14px]">
                                    Water Corporation Drive, Oniru
                                </p>
                            </div>
                            <div>
                                 <router-link to="#" class="border flex items-center px-3 py-1 hover:bg-[#b91a16] hover:text-white">Expore <ArrowRightIcon class="w-4 h-4"/></router-link>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="container mx-auto  flex mb-[4rem] flex-col lg:flex-row">
            <div class="w-full lg:w-8/12 lg:mx-4 ">
                <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" :mouse-drag="false">
                    <slide v-for="(slide,index) in carousels" :key="slide.id" class="relative w-full">
                        <img :src="getPaths(slide.url)"  class="w-full h-[60vh]"/>
                    </slide>
            
<template #addons>
    <div class=" w-11/12 mx-auto ">
        <navigation class="absolute" />
    </div>
</template>
                </carousel>
            </div>
            <div class="mt-4 w-11/12 mx-auto lg:w-4/12">
                <div class="mb-4">
                    <p class="text-[14px]" id="popins_san">
                        Ready to enjoy affordable
                    </p>
                    <h2 class="text-[28px]" id="fonts">
                        Modern Luxury?
                    </h2>
                </div>
                <div id="popins_san" class="text-[14px] text-justify mb-8">
                    At Vava Projects, it is not just about selling homes; it is about serving families. We have built a masterpiece that guarantees assurance, comfort, luxury, harmony, style, and warmth yet affordable for your family. What are you waiting for?
                </div>

                <div>
                    <router-link to="#" id="popins_san" class="flex border uppercase text-[16px] border-black hover:text-white items-center p-2 w-9/12 hover:bg-[#b91a16]">
                        schedule an inspection <ArrowRightIcon class=" ml-1 w-4 h-4"/> 
                    </router-link>
                </div>
            </div>
        </div>
        <div id="bg-img">
            <div id="img" class="h-[260vh] md:h-[150vh] lg:h-[120vh]">
                <!-- <img class="h-full" src="../assets/image/vav/vava-projects-property-amenities.png" id="img1" alt=""> -->
            </div>
<div class="container py-2 mx-auto w-10/12 left-0 top-0 bottom-0 right-0 absolute" id="content">
    <div class="text-center mt-[3rem]" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="text-[40px] text-white " id="fonts">Amenities to Expect</h1>
        <p class="text-[14px] leading-[24px] text-white my-[1rem]" id="popins_san"> 
            All our projects are equipped with accessories that make a house a <br> home that meets all luxury standards
        </p>
        <div class="flex items center justify-center mt-3">
            <div class="bg-[#b91a16] h-[7px] w-[10%]" id="clip"></div>
        </div>
    </div>
    <div class="my-[3rem] space-y-[4rem]">
        <div class="flex flex-col md:flex-row items-center justify-between">
           <div data-aos="fade-down" data-aos-duration="1800">
            <router-link to="#">
                <img src="../assets/image/vav/vava-projects-pool-icon.png"  alt="">
            </router-link>
            <p class="text-white text-[16px] text-center">
                Swimming pool
            </p>
           </div>
           <div data-aos="fade-down" data-aos-duration="1800">
            <router-link to="#">
                <img src="../assets/image/vav/vava-projects-fitness-icon.png"  alt="">
            </router-link>
            <p class="text-white text-[16px] text-center">
                Fitness Center
            </p>
           </div>
           <div data-aos="fade-down" class="flex flex-col items-center" data-aos-duration="1800">
            <router-link to="#">
                <img src="../assets/image/vav/vava-projects-beauty-icon.png"  alt="">
            </router-link>
            <p class="text-white text-[16px] text-center">
                Beauty Center
            </p>
           </div>
           <div data-aos="fade-down" class="flex items-center justify-center flex-col" data-aos-duration="1800">
            <router-link to="#">
                <img src="../assets/image/vav/vava-projects-internet-icon.png"  alt="">
            </router-link>
            <p class="text-white text-[16px] text-center">
                Unlimited fiber internet
            </p>
           </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div data-aos="fade-down" data-aos-duration="2200">
             <router-link to="#">
                 <img src="../assets/image/vav/vava-projects-minimat-icon.png"  alt="">
             </router-link>
             <p class="text-white text-[16px] text-center">
                    Minimart
             </p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2200">
             <router-link to="#">
                 <img src="../assets/image/vav/vava-projects-pharmacy-icon.png"  alt="">
             </router-link>
             <p class="text-white text-[16px] text-center">
                    Pharmacy
             </p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2200">
             <router-link to="#">
                 <img src="../assets/image/vav/vava-projects-gate-icon.png"  alt="">
             </router-link>
             <p class="text-white text-[16px] text-center">
                 Automated gates 
             </p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2200">
             <router-link to="#">
                 <img src="../assets/image/vav/vava-projects-elevator-icon.png"  alt="">
             </router-link>
             <p class="text-white text-[16px] text-center">
                Panoramic elevators
             </p>
            </div>
         </div>
    </div>
</div>
        </div>

        <div id="imgs">
            <div class="image h-[260vh] md:h-[150vh] lg:h-[100vh]">
            </div>
            <div class="container py-2 mx-auto w-10/12 left-0 top-0 bottom-0 right-0 absolute">
                <div class="text-center my-10" data-aos="fade-down" data-aos-duration="1500">
                    <h1 class="text-[40px] text-white" id="fonts">Our Strengths</h1>
                    <p class="text-[14px] text-white" id="popins_san"> 
                        For a minute, let’s take you through the core pillars on which our luxurious and <br> affordable homes are built on.
                    </p>
                    <div class="flex items center justify-center mt-3">
                        <div class="bg-[#b91a16] h-[7px] w-[10%]" id="clip"></div>
                    </div>
                </div>
                <div class="grid md:grid-cols-2  lg:grid-cols-5">
                    <div class="md:mx-2 space-y-4">
                        <div class="text-center">
                            <div class="img flex items-center justify-center">
                                <img src="../assets/image/vav/vava-projects-integrity-icon.png" class="" alt="">
                            </div>
                            <div class="text-center">
                                <p class="text-white text-[20px]" id="fonts">
                                    Integrity
                                </p>
                            </div>
                        </div>
                        <div class="text-center text-[12px] text-[#868681]" id="popins_san">
                            As a team, we believe that integrity is absolutely fundamental to success in real estate. We have showcased this in all our building policies, knowing fully well that honesty and transparency are essential. No compromise!
                        </div>
                    </div>
                    <div class="md:mx-2 space-y-4">
                        <div class="text-center">
                            <div class="img flex items-center justify-center">
                                <img src="../assets/image/vav/vava-projects-innovation-icon.png" class="" alt="">
                            </div>
                            <div class="text-center">
                                <p class="text-white text-[20px]" id="fonts">
                                    Innovation
                                </p>
                            </div>
                        </div>
                        <div class="text-center text-[12px] text-[#868681]" id="popins_san">
                            Beyond the traditional approach, we are big on developing new insights and approaches to tackling challenges through creative thinking and deploying state-of-the-art facilities to all our homes. It’s just a way of going the extra mile for your comfort.
                        </div>
                    </div>
                    <div class="md:mx-2 space-y-4">
                        <div class="text-center">
                            <div class="img flex items-center justify-center">
                                <img src="../assets/image/vav/vava-projects-quality-icon.png" class="" alt="">
                            </div>
                            <div class="text-center">
                                <p class="text-white text-[20px]" id="fonts">
                                    Quality
                                </p>
                            </div>
                        </div>
                        <div class="text-center text-[12px] text-[#868681]" id="popins_san">
                            For once, you can rest assured of the quality of homes been built. Before setting out, we resolved to beat the status quo and provide the best: nothing but the best.
                        </div>
                    </div>
                    <div class="md:mx-2 space-y-4">
                        <div class="text-center">
                            <div class="img flex items-center justify-center">
                                <img src="../assets/image/vav/vava-projects-customer-icon.png" class="" alt="">
                            </div>
                            <div class="text-center">
                                <p class="text-white text-[20px] w-full" id="fonts">
                                    Customer Satisfaction
                                </p>
                            </div>
                        </div>
                        <div class="text-center text-[12px] text-[#868681]" id="popins_san">
                            We are big on offering immense value to our customers. While we advise our customers to have an expectation, we at Vava projects are addicted to exceeding our customer’s expectations, and we are not stopping anytime soon.
                        </div>
                    </div>
                    <div class="md:mx-2 space-y-4">
                        <div class="text-center">
                            <div class="img flex items-center justify-center">
                                <img src="../assets/image/vav/vava-projects-customer-icon.png" class="" alt="">
                            </div>
                            <div class="text-center">
                                <p class="text-white text-[20px] w-full" id="fonts">
                                    Dedication
                                </p>
                            </div>
                        </div>
                        <div class="text-center text-[12px] text-[#868681]" id="popins_san">
                            This is what we are cut out to do: to deliver superior elegance and add a finesse touch to real estate in the country. We put our heart into it because we know the price for comfort
                        </div>
                    </div>

                </div>
            </div>

        </div>




    <footer class="bg-black" id="">
<div class="container mx-auto">
    <div class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-5">
        <div>
            <img src="../assets/image/vav/foot-logo.png" class="mt-3 lg:mt-0" alt="">
        </div>
        <p class="text-[#868681] text-[12px]">
            Copyright ©2022, VAVA Projects Ltd. All Rights Reserved. Website Design by <a href="#"> DientWeb</a> 
        </p>
        <div class="bg-[#b91a16] w-full justify-center lg:w-[27%] h-[10vh] flex space-x-2 items-center " id="clips">
            <img src="../assets/image/vav/phone-icon.png" class="ml-[4rem]" alt="">
            <div class="text-white text-[18px] mr-2">
                +234(0)9130000304
            </div>
        </div>
    </div>    
</div>
    </footer>
    </div>

</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { onMounted } from "vue";
import simpleParallax from 'simple-parallax-js';
import aos from '../animate'


onMounted(() => {
    aos.init()
})

// window.addEventListener('scroll', function(){
// let value = window.scrollY
// document.getElementById('img').style.bottom = value * 0.5 + 'px'
// document.getElementById('img1').style.position = 'absolute'
// 
// console.log(value);

// })

const images = new URL('../assets/image/vav/banner1.png', import.meta.url).href
const image1 = new URL('../assets/image/vav/banner2.png', import.meta.url).href

const image2 = new URL('../assets/image/vav/banner5.png', import.meta.url).href


const image = [
    {
        id: 1,
        url: images,
        text1: 'Utmost comfort in well <br> secured environment...',
        description1: 'You can not but fall in lov with our exquisite and grandeur homes built in highly <br> sought-after environment and perfectly priced' as string
    },
    {
        id: 2,
        text2: 'your <br> dream house <br> awaits you',
        description: 'Alluring and move-in-already homes built <br> by the finest developers at decent places <br> and a disruptive payment plan up to 30 <br> months.',
        url: image1,
    },
    {
        id: 3,
        url: image2,
        text3: 'Exquisite Interior &amp; <br> State of the art Facilities',
        description3: 'Welcome to VAVA Projects. Explore our residential apartments, equipped with special<br> amenities for your utmost comfort and security;  Automated Gate, Panoramic Elevators,<br> Unlimited Fibre Internet, Fitness &amp; Beauty Centers and much more.'
    }
]

const car1 = new URL('../assets/image/vav/via1.png', import.meta.url).href
const car2 = new URL('../assets/image/vav/via2.png', import.meta.url).href
const car3 = new URL('../assets/image/vav/via3.png', import.meta.url).href
const car4 = new URL('../assets/image/vav/via4.png', import.meta.url).href



const carousels = [{
        id: 1,
        url: car1
    },
    {
        id: 2,
        url: car2
    },
    {
        id: 3,
        url: car3
    },
    {
        id: 4,
        url: car4
    },
]


function getPaths(imagePath) {
    return imagePath
}
</script>

<style lang="scss">
#bg-img {
    position: relative;
    #img {
        position: relative;
        background-attachment: fixed;
        background-image: url('../assets/image/vav/vava-projects-property-amenities.png');
    }
}

#imgs {
    position: relative;
    .image {
        position: relative;
        background-attachment: fixed;
        background-image: url('../assets/image/vav/vava-projects-strength-bg.png');
    }
}

#fonts {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
}

#popins_san {
    font-family: 'Poppins', sans-serif;
}

#popins {
    font-family: 'Poppins';
}

#clip {
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
}
#clips {
    clip-path: polygon(50px 0, 100% 0, 100% 100%, 0 100%);
}

.carousel__next {
    background: rgba(0, 0, 0, 0.5);
    height: 40px;
    width: 40px;
    right: 30px !important;
    svg {
        width: 30px;
        height: 30px;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.9);
    }
}

.carousel__prev {
    background: rgba(0, 0, 0, 0.5);
    height: 40px;
    width: 40px;
    left: 30px !important;
    svg {
        width: 30px;
        height: 30px;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.9);
    }
}
</style>