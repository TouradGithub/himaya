<div class="navbar-top">
    <div class="navbar-top-left">
        <div class="brand-logo">
            <a href="#">
                <span class="system-name">SOS</span>
            </a>
        </div>
        <div class="selectedCompany" style="float:left; font-size:16px;">Testing-Dev</div>
    </div>

    <div class="navbar-top-right">
        <div class="profile">
            <span class="avatar"></span>
            <div class="profile-info">
                <div class="notifications-container">
                    <button type="button" class="button-default show-notifications js-show-notifications">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="32" viewBox="0 0 30 32">
                            <defs>
                                <g id="icon-bell">
                                    <path class="path1" d="M15.143 30.286q0-0.286-0.286-0.286-1.054 0-1.813-0.759t-0.759-1.813q0-0.286-0.286-0.286t-0.286 0.286q0 1.304 0.92 2.223t2.223 0.92q0.286 0 0.286-0.286zM3.268 25.143h23.179q-2.929-3.232-4.402-7.348t-1.473-8.652q0-4.571-5.714-4.571t-5.714 4.571q0 4.536-1.473 8.652t-4.402 7.348zM29.714 25.143q0 0.929-0.679 1.607t-1.607 0.679h-8q0 1.893-1.339 3.232t-3.232 1.339-3.232-1.339-1.339-3.232h-8q-0.929 0-1.607-0.679t-0.679-1.607q3.393-2.875 5.125-7.098t1.732-8.902q0-2.946 1.714-4.679t4.714-2.089q-0.143-0.321-0.143-0.661 0-0.714 0.5-1.214t1.214-0.5 1.214 0.5 0.5 1.214q0 0.339-0.143 0.661 3 0.357 4.714 2.089t1.714 4.679q0 4.679 1.732 8.902t5.125 7.098z" />
                                </g>
                            </defs>
                            <g fill="#000000">
                                <use xlink:href="#icon-bell" transform="translate(0 0)"></use>
                            </g>
                        </svg>
                        <div class="notifications-count js-count"></div>
                    </button>
                </div>
                <div class="system-actions">
                    <ul class="main-menu">
                        <li>
                            <ul class="clock-date">
                                <li class="current-clock word w1">
                                    <ul>
                                        <li id="hours"></li>
                                        <li id="point">:</li>
                                        <li id="min"></li>
                                        <li id="point">:</li>
                                        <li id="sec"></li>
                                    </ul>
                                </li>
                                <li class="current-clock word w2">
                                    <span id="Date"></span>
                                </li>
                                <li id="todayAr" class="current-clock word w3"></li>
                            </ul>
                        </li>
                        <li class="switch-lang">
                            <div class="current-lang">
                                <img class="lang-flag" src="#.net.sa/public/assets/images/flags/en.png"/>
                                <p class="lang-text"><span>English</span></p>
                            </div>
                            <div class="lang-dropdown">
                                <div class="selecting-lang">
                                    <p class="lang-text">
                                        <a href="#" style="color: #fff;">
                                            <img class="lang-flag" src="#.net.sa/public/assets/images/flags/en.png"/><span>English</span>
                                        </a>
                                    </p>
                                </div>
                                <div class="selecting-lang">
                                    <p class="lang-text">
                                        <a href="#/clinic?lang=ar" style="color: #fff;">
                                            <img class="lang-flag" src="#.net.sa/public/assets/images/flags/ar.png"/><span>Arabic</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown user-dropdown">
                            <a href="##" class="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <span class="name">touradlehcene</span>
                                    <span class="role">touradlehceneRole</span>
                                    <hr>
                                </li>
                                <li><span>Account</span></li>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li style="left: 0">
                                    <form action="{{ route('logout') }}" method="POST" style="display: inline;">
                                        @csrf
                                        <button type="submit" style="background: none; border: none; color: inherit; padding: 0; font: inherit; cursor: pointer;">
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
