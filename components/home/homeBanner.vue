<template>
  <div class="home-banner">
    <div class="slide-container">
      <div class="slide fade" v-for="(item , index) in HomeBannerList" >
        <img :src="item?.file?.path" alt="">
        <div class="home-banner--description">
          <div>
            <div class="text-center">
              <p class="home-banner--description--title text-white">{{ item?.title }}</p>
            </div>
            <div class="d-flex justify-center w-100 mt-3">
              <p class="home-banner--description--description text-white  w-66 text-center">
                {{item?.description}}
              </p>
            </div>
            <div class="d-flex justify-center w-100 mt-11">
              <div class="btn-more">
                <span>مشاهده پیشنهادها</span>
              </div>
            </div>
          </div>
        </div>      </div>

    </div>
    <div class="dots-container">
      <span class="dot" v-for="(item , index) in HomeBannerList"></span>
    </div>

  </div>
</template>
<script>
export default {
  props:{
    HomeBannerList:null
  },

  watch:{
    HomeBannerList(){

      setTimeout(()=>{let currentSlide = 0;
        const slides = document.querySelectorAll(".slide")
        const dots = document.querySelectorAll('.dot')

        const init = (n) => {
          slides.forEach((slide, index) => {
            slide.style.display = "none"
            dots.forEach((dot, index) => {
              dot.classList.remove("active")
            })
          })
          slides[n].style.display = "block"
          dots[n].classList.add("active")
        }
        document.addEventListener("DOMContentLoaded", init(currentSlide))
        const next = () => {
          currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
          init(currentSlide)
        }

        const prev = () => {
          currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
          init(currentSlide)
        }

        document.querySelector(".next").addEventListener('click', next)

        document.querySelector(".prev").addEventListener('click', prev)


        setInterval(() => {
          next()
        }, 5000);

        dots.forEach((dot, i) => {
          dot.addEventListener("click", () => {
            console.log(currentSlide)
            init(i)
            currentSlide = i
          })
        })}, 100)

    }
  }

}
</script>

<style>
.slide-container .prev,
.slide-container .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.slide-container .prev:hover,
.slide-container .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

.slide-container .prev {
  left: 2px;
}

.slide-container .next {
  right: 2px;
}

.dots-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: -57px;
  position: relative;
  z-index: 100;
}

.dots-container .dot {
  cursor: pointer;
  margin: 5px;
  width: 20px;
  height: 20px;
  color: #333;
  border-radius: 50%;
  background-color: #7d7d7d;
}

.dots-container .dot.active {
  border: 2px solid white;
  background-color: #FFFFFF;

}

* {
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  /*   background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%); */
}

body h1 {
  text-align: center;
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
}

.slide-container .slide {
  display: none;
  width: 100%;
}

.slide-container .slide.fade {
  animation: fade 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-container .slide img {
  width: 100%;
}
</style>