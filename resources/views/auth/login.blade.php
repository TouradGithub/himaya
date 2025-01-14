@extends('layouts.app')

@section('content')
<div class="open-effect loaded">
    <!-- Page preloader -->
    <div id="loading" class="" style="opacity: 0; display: none;">
        <div id="preloader" class="" style="opacity: 0;">
            <div class="circle"></div>
            <div class="circle1"></div>
        </div>
        <div class="loader-section"></div>
    </div>
    <!-- Left/Right Menu LINK -->
    <div class="link left" style="left: 0px;">
        <div class="link-box">
            <a class="link-box-left" href="#about" title=" Need Support">
                <p class="lmenu"> Need Support</p>
            </a>
            <div class="lmenu-line-box">
                <div class="lmenu-line-mask">
                    <div class="lmenu-line"></div>
                </div>
            </div>
        </div>
    </div>
    <a class="link-background left" href="#"></a>
    <div class="link right" style="right: 0px;">
        <div class="link-box">
            <a class="link-box-right" href="#contact" title="login to DCS System">
                <p class="rmenu brand-logo">Login to <span>DCS System</span></p>
            </a>
            <div class="rmenu-line-box">
                <div class="rmenu-line-mask">
                    <div class="rmenu-line"></div>
                </div>
            </div>
        </div>
    </div>
    <a class="link-background right" href="#"></a>
    <!-- START - Home -->
    <div >
        <section id="body-container" class="vegas-container active" style="height: 100%;">
            <div class="vegas-slide vegas-transition-fade vegas-transition-fade-in" style="transition: all 1000ms ease 0s;">
                <div class="vegas-slide-inner" style="background-color: rgba(0, 0, 0, 0); background-position: center center; background-size: cover;"></div>
            </div>
            <div class="vegas-timer">
                <div class="vegas-timer-progress" style="transition-duration: 0ms;"></div>
            </div>
            <div class="vegas-wrapper" style="overflow: hidden; padding: 0px;">
                <div class="home-overlay">
                    <div class="image-video">
                        <div class="video-container">
                            <!-- HTML5 Video-->
                            <video loop="" muted="" preload="auto" autoplay="true" class="video-play video-player" __idm_id__="856795137">
                                <source src=../themes/default/assets/img//surf.webm type="video/webm">
                                <source src=../themes/default/assets/img/surf.mp4 type="video/mp4">
                            </video>
                            <!-- End HTML5 Video-->
                        </div>
                    </div>
                </div>
                <div class="logo">
                    <div class="brand-logo">
                        <a href="#">
                            <span>DCS Development</span>
                        </a>
                    </div>
                </div>
                <div class="content align-center">
                    <h1 class="hero-text text-white text-uppercase animated fadeInDown">Welcome to <br> Our World</h1>
                    <h2 class="hero-text font-weight-300 text-light-gray animated fadeInDown">We are working hard to bring you new experience.</h2>
                </div>
                <div class="social-icons"> <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="http:#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
                <div class="copyright">
                    <p>© 2021 DCS - Made with Love in Mauritania.</p>
                </div>
            </div>
        </section>
    </div>
    <!-- END Home -->
    <!-- START - About Page -->
    <section id="about" class="page-inner in" data-direction="left">
        <aside class="bg">
            <a class="btn-close" href="#about"></a>
            <!-- Header Title -->
            <div class="header-content">
                <h2 class="text-white">Need Support</h2>
            </div>
            <div class="image-video">
                <div class="video-container">
                    <video  reload="auto" autoplay="true" loop="" muted="" playsinline=""  class="video-play video-player" __idm_id__="856795138">
                        <source src=../themes/default/assets/img/about.mp4 type="video/mp4">
                    </video>
                </div>
            </div>
        </aside>
        <div class="content">
            <div class="contact_content" tabindex="1" style="overflow: auto; outline: none;">
                <div class="info-contact row">
                    <div class="col-xs-12 col-sm-4 col-lg-4 item-map">
                        <div class="contact-item"><i class="fa fa-phone"></i>
                            <p><a href="tel:+(222) 126611347">+(222) 126611347</a></p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-lg-4 item-map">
                        <div class="contact-item"><i class="fa fa-map-marker"></i>
                            <p> Mauritania - Nouakchott, Tevrag zeyna
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-lg-4 item-map">
                        <div class="contact-item"><i class="fa fa-envelope"></i>
                            <p><a href="mailto:web@digitalorder.net">info@dcs-sarl.net</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="contact-form text-center row">
                    <h3>Lets Talk!</h3>
                    <p>If you have any questions, please don’t hesitate to contact us using form below…</p>
                    <!-- START - Contact Form -->
                    <form id="contact-form" name="contact-form" method="POST" data-name="Contact Form">
                        <div class="row">
                            <!-- Full name -->
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text" id="name" class="form form-control" placeholder="Your Name" onfocus="" onblur="" name="name" data-name="Name" required="">
                                </div>
                            </div>
                            <!-- E-mail -->
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <div class="form-group">
                                    <input type="email" id="email1" class="form form-control" placeholder="Your Email" onfocus="" onblur="" name="email-address" data-name="Email Address" required="">
                                </div>
                            </div>
                            <!-- Subject -->
                            <div class="col-xs-12 col-sm-12 col-lg-12">
                                <div class="form-group">
                                    <input type="text" id="subject" class="form form-control" placeholder="Write the subject" onfocus="" onblur="" name="subject" data-name="Subject">
                                </div>
                            </div>
                            <!-- Message -->
                            <div class="col-xs-12 col-sm-12 col-lg-12">
                                <div class="form-group">
                                    <textarea id="text-area" class="form textarea form-control" placeholder="Your message here..." onfocus="" onblur="" name="message" data-name="Text Area" required=""></textarea>
                                </div>
                            </div>
                        </div>
                        <!-- Button submit -->
                        <button type="submit" id="valid-form" class="t-btn fill-btn"><span>Get in Touch!</span>
                        </button>
                        <!-- antispam code -->
                        <div class="antispam">
                            <input type="text" value="" name="url">
                        </div>
                    </form>
                    <!-- END - Contact Form -->
                    <!-- Reply for the contact form is displayed in the next div, do not remove it. -->
                    <div id="block-reply">
                        <div id="reply"></div>
                    </div>
                </div>
            </div>
        </div>






    </section>
    <!-- END - About Page -->
    <!-- START - Contact Page -->
    <section id="contact" class="page-inner in" data-direction="right">
        <aside class="bg">
            <a class="btn-close" href="#contact"></a>
            <div class="image-background" style="background-image:url('../themes/default/assets/img/contact.jpg');"></div>
            <!-- Header Title -->
            <div class="header-content">
                <h2 class="text-white brand-logo">Login to <span style="color: #fff">DCS System</span></h2>
            </div>
        </aside>
        <div class="content">
            <div class="adjacent-center login-page about_content" style="padding-top: 0;">
                <div class="vertical-center">
                    <div class="panel">
                        <div class="brand-logo">
                            <span>DCS System</span>
                        </div>
                        <div class="panel-content">

                            <div class="form-container" style="text-align: left">

                                <h1>Sign In</h1>

                                <form method="POST" action="{{route('login')}}" >

                                    <div class="control-group">
                                        <label for="email">Email</label>
                                        <input type="text" v-validate="'required|email'" class="control" id="email" name="email" data-vv-as="&quot;Email&quot;"/>
                                        <span class="control-error" v-if="errors.has('email')"></span>
                                    </div>
@csrf
                                    <div class="control-group" :class="[errors.has('password') ? 'has-error' : '']">
                                        <label for="password">Password</label>
                                        <input type="password" v-validate="'required|min:6'" class="control" id="password" name="password" data-vv-as="&quot;Password&quot;" value=""/>
                                        <span class="control-error" v-if="errors.has('password')"></span>
                                    </div>

                                    <div class="control-group">
                                        <a href="https://amwal.doe.net.sa/public/admin/forget-password">Forget Password ?</a>
                                    </div>

                                    <div class="button-group">
                                        <button class="btn btn-xl btn-primary">Sign In</button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>






    </section>
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
        </div>
    </div>


    <script src="https://amwal.doe.net.sa/public/themes/default/assets/js/vendor.js" ></script>
    <script src="https://amwal.doe.net.sa/public/themes/default/assets/js/main.js" ></script>


    <div class="revealer" style="width: 100vh; height: 100vw; transform: translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 90deg) translate3d(0px, 100%, 0px); opacity: 0;">
        <div style="background:#f5f5f5" class="revealer__layer"></div>
        <div style="background:#324da0" class="revealer__layer"></div>
        <div style="background:#323232" class="revealer__layer"></div>
    </div>
</div>
@endsection
