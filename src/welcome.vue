<template>
  <div class="">

    <section class="relative bg-gray-800 overflow-hidden">
      <div class="absolute inset-y-0 right-0 w-200">
        <img class="mx-auto h-full lg:w-1/2 object-cover" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
      </div>
      <nav class="relative border-b border-gray-500">

      </nav>
      <div class="relative container px-4 pt-24 md:pt-40 pb-32 mx-auto">
        <div class="flex flex-wrap items-center -mx-4 mb-12 md:mb-24">
          <div class="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
            <h2 class="mt-8 mb-12 lg:mb-16 text-6xl md:text-9xl text-white font-bold font-heading">Invoice Track</h2>
            <a class="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#" @click="goToLogin()">Get started</a>
          </div>
          <div class="hidden lg:block lg:w-2/3 px-4">
            <div class="flex justify-end">

            </div>
          </div>
          <div class="hidden lg:block w-full px-4 mt-16">

          </div>
        </div>

      </div>
      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav class="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
          <div class="flex items-center mb-16 pr-6">
            <a class="ml-10 mr-auto text-2xl text-gray-800 font-bold" href="#">
              <img class="h-7" src="../public/zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto">
            </a>
          </div>
        </nav>
      </div>
    </section>











    <section class="py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="mb-10 max-w-xl mx-auto mb-24 text-center">
          <span class="text-lg font-bold text-blue-500">How it works</span>
          <h2 class="mt-12 text-5xl lg:text-6xl text-white font-bold font-heading">Upload and manage invoices with ease</h2>
        </div>
        <div class="relative px-8 lg:pr-0 lg:pl-12 2xl:pl-24 mb-14 lg:mb-40 bg-gray-600 rounded-xl overflow-hidden">
          <div class="w-full lg:w-1/3 pt-12 lg:py-12">
            <h3 class="mb-4 text-xl font-bold text-white">How it works? Steps</h3>
            <p class="text-xl text-gray-300">Below are the simple steps on how to use our platform</p>
          </div>

        </div>
        <div class="relative flex flex-wrap justify-center -mx-10 mb-20">
          <img class="hidden lg:block absolute inset-y-0 -mr-80 -mt-16" src="../public/zospace-assets/lines/dots-gray.svg" alt="">
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="relative flex">
              <img class="hidden lg:block absolute top-0 right-0 -mr-20 -mt-16" src="../public/zospace-assets/lines/dots-gray.svg" alt="">
              <div class="mr-8">
                <span class="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">1</span>
              </div>
              <div class="max-w-xs">
                <h3 class="mb-6 text-lg font-bold font-heading text-white">Register account</h3>
                <p class="text-lg text-gray-200">You will need to first create an account.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
            <div class="flex">
              <div class="mr-8">
                <span class="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">2</span>
              </div>
              <div class="max-w-xs">
                <h3 class="mb-6 text-lg font-bold font-heading text-white">Upload Invoice Details</h3>
                <p class="text-lg text-gray-200">Add Invoice details to the platform</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-10">
            <div class="flex">
              <div class="mr-8">
                <span class="flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full">3</span>
              </div>
              <div class="max-w-xs">
                <h3 class="mb-6 text-lg font-bold font-heading text-white">Manage Invoices</h3>
                <p class="text-lg text-gray-200">Easily manage Invoices and keep track of their states be it Paid or Pending</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">

        </div>
      </div>
    </section>

    <section class="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <img class="absolute top-0 right-0 -mr-80 -mt-80" src="../public/zospace-assets/lines/circle.svg" alt="">
      <img class="hidden lg:block absolute bottom-0 left-0 w-96" src="../public/zospace-assets/lines/half-double-circle.svg" alt="">
      <div class="relative container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-20 lg:mb-32">
            <span class="text-lg text-blue-400 font-bold">Testimonials</span>
            <h2 class="mt-12 text-5xl font-bold font-heading text-white">What people say</h2>
          </div>
          <div class="relative flex flex-wrap -mx-5 mb-20">
            <div class="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
              <div class="flex -mx-4 lg:mx-0">
                <div class="w-1/3 px-4">
                  <img class="w-30 h-40 mx-auto rounded-full object-cover" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt="">
                </div>
                <div class="w-2/3 px-4">
                  <div class="relative inline-block mb-8 p-10 bg-gray-500 rounded-lg">
                    <div class="absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></div>
                    <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="../public/zospace-assets/images/quote-circle.svg" alt="">
                    <p class="mb-8 text-lg text-gray-200">I love it. it's so easy to use and keeps everything organized. I've used other apps before that didn't fulfill my needs and this one is just great.</p>
                    <div class="flex mb-4">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img src="../public/zospace-assets/images/star-empty.svg" alt="">
                    </div>
                    <h3 class="mb-1 text-2xl text-white font-bold">Ethan Kaila</h3>
                    <p class="text-white">Cambridge Book Sellers</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-5">
              <div class="flex -mx-4 lg:mx-0">
                <div class="w-1/3 px-4">
                  <img class="w-30 h-40 mx-auto rounded-full object-cover object-top" src="https://images.pexels.com/photos/5325893/pexels-photo-5325893.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt="">
                </div>
                <div class="w-2/3 px-4">
                  <div class="relative inline-block mb-8 p-10 bg-gray-500 rounded-lg">
                    <div class="absolute top-0 right-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></div>
                    <img class="absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14" src="../public/zospace-assets/images/quote-circle.svg" alt="">
                    <p class="mb-8 text-lg text-gray-200">I usually never waste time reviewing, but Invoice-Track deserves it. I can't be grateful enough to have been using their web app. Their app is incredibly user-friendly. I am super happy with everything that is Invoice-Track</p>
                    <div class="flex mb-4">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img class="mr-1" src="../public/zospace-assets/images/star-full.svg" alt="">
                      <img src="../public/zospace-assets/images/star-half.svg" alt="">
                    </div>
                    <h3 class="mb-1 text-2xl text-white font-bold">Jeff Maathai</h3>
                    <p class="text-white">JM Logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">


          </div>
        </div>
      </div>
    </section>

    <section class="relative py-20 2xl:py-40 bg-gray-600">
      <div class="hidden lg:block absolute top-0 left-0 h-full bg-gray-800 w-1/2">
        <img class="hidden lg:block absolute top-0 left-0 -ml-32 w-full h-full" src="../public/zospace-assets/images/map.svg" alt="">
        <img class="hidden lg:block absolute top-0 left-0 mt-40 ml-40" src="../public/zospace-assets/images/office-tag.svg" alt="">
      </div>
      <div class="container px-4 mx-auto">
        <div class="w-full lg:w-1/2 ml-auto">
          <div class="max-w-md lg:ml-20">
            <div class="pb-16 mb-8 border-b border-gray-400">
              <span class="text-lg text-blue-400 font-bold">Have a question?</span>
              <h2 class="mt-10 mb-16 text-5xl font-bold font-heading text-white">Contact us</h2>
              <div class="flex items-center mb-12">
                  <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-4 h-4" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z" fill="white"></path>
                    </svg>
                  </span>
                <p class="text-lg font-bold text-white">+2547 12345678</p>
              </div>
              <div class="flex items-center mb-12">
                  <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-4 h-4" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9347 13.3167C17.811 12.6058 17.2022 12.0401 16.4551 11.94L12.3077 11.3855C11.555 11.2832 10.8101 11.6825 10.4984 12.3528C10.4185 12.5237 10.3521 12.7014 10.2981 12.8848C9.13582 12.4 8.09277 11.7004 7.19375 10.8018C6.29473 9.90315 5.59374 8.86053 5.10992 7.6987C5.29332 7.64471 5.4711 7.57835 5.64213 7.4985C6.31274 7.18695 6.70993 6.44351 6.60866 5.69108L6.05394 1.54536C5.9538 0.797426 5.38784 0.188953 4.66434 0.0641091C4.40105 0.0202451 4.18164 0 3.97348 0C2.61201 0 1.32368 0.71982 0.612565 1.87716C-0.157059 3.13122 -0.0501675 4.73507 0.128736 5.9925C0.533802 8.84029 1.99766 11.7038 4.14451 13.8498C5.74002 15.4446 7.71246 16.6402 9.84693 17.306C10.9339 17.6457 12.2942 18 13.605 18C14.5851 18 15.537 17.802 16.3235 17.2498C17.3733 16.5109 18 15.3052 18 14.0196C18 13.8115 17.9797 13.5911 17.9347 13.3167Z" fill="white"></path>
                    </svg>
                  </span>
                <p class="text-lg font-bold text-white">Invoice-Track</p>
              </div>
              <div class="flex">
                  <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg class="w-5 h-5" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z" fill="white"></path>
                      <path d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z" fill="white"></path>
                    </svg>
                  </span>
                <div>
                  <p class="text-lg font-bold text-white">UpperHill, Nairobi</p>
                  <p class="text-lg font-bold text-white">W16EG, KE</p>
                </div>
              </div>
            </div>
            <div class="max-w-xs">
              <p class="text-gray-400">Customer care line open 24/7 from 8 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 2xl:py-40 bg-gray-800">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
          <div class="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
            <span class="text-lg text-blue-400 font-bold">We're Invoice-Track</span>
            <h2 class="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">Thank you for your time</h2>
            <p class="mb-16 text-gray-300">The Number one Invoice Management Web App</p>
            <div><a class="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Contact</a></div>
          </div>
          <div class="w-full lg:w-3/5 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">

              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">

              </div>
              <div class="w-full lg:w-1/3 px-4">
                <ul class="text-lg">
                  <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">New account</a></li>
                  <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Log in</a></li>
                  <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">Testimonials</a></li>
                  <li class="mb-6"><a class="text-gray-200 hover:text-gray-100" href="#">How it Works</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between">
          <p class="text-lg text-gray-200 mb-8 md:mb-0">© 2022 Invoice-Track. All rights reserved.</p>
          <div class="flex items-center">
            <a class="inline-block mr-2" href="#">
              <img class="h-12" src="../public/zospace-assets/logos/facebook.svg" alt="">
            </a>
            <a class="inline-block mr-2" href="#">
              <img class="h-12" src="../public/zospace-assets/logos/instagram.svg" alt="">
            </a>
            <a class="inline-block" href="#">
              <img class="h-12" src="../public/zospace-assets/logos/twitter.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>



</template>

<script>

// import Home from "./views/Home";

export default {
  name: "Welcome",
  data() {
    return {

    };
  },

  methods:{
    goToLogin(){
      this.$router.push('/login');
    }
  }

};
</script>




