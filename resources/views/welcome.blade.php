<!DOCTYPE html>
<html lang="en">
<head>
    <title>Physician</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" sizes="16x16" href="#.net.sa/public/vendor/webkul/ui/assets/images/favicon.ico" />
    <!-- <link rel="stylesheet" href="bootstrap.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css" rel="stylesheet">

{{-- select2 --}}
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <!-- Font Awesome CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('select2.css')}}" />
    <link rel="stylesheet" href="{{asset('all.min.css')}}">
    <link rel="stylesheet" href="{{asset('v4-shims.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('slick.css')}}"/>
    <link rel="stylesheet" href="{{asset('do.css')}}">
    <link rel="stylesheet" title="darkMode" href="{{asset('dark_mode.css')}}" disabled="true">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

    <style>
        .form-control:invalid {
            border-color: #dc3545 !important;
        }
        .tabular-form td:has(input[type="checkbox"]) {
            text-align: center;
        }
        .selectedItem {
                background-color: #081aa0;
                color: #fff;
                height: 100%;
                /* width: 100%; */
            }
    </style>\
    <style>
        body{
            width: 100%;
        }
        .content-container{
            width: auto;
        }
        .content-wrapper , .content{
            margin-right: 20px;
            margin-left: 20px;
        }
    </style>
    <style>
        .modal-content {
            border-radius: 10px;
        }
        .modal-header {
            border-bottom: 1px solid #ddd;
        }
        .modal-footer {
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div id="app" style="">
        <link href="https://amwal.doe.net.sa/public/vendor/jstree/dist/themes/default/style.min.css" rel="stylesheet" />
        {{-- <script>
            document.addEventListener("DOMContentLoaded", function () {
                const loadTime = window.performance.timing.responseStart - window.performance.timing.navigationStart;
                const preLoader = document.getElementById("pre-loader");
                console.log("Load Time = " + loadTime + "ms");
                setTimeout(() => {
                        preLoader.style.display = "none";
                }, 1500);
            });
        </script> --}}


        {{-- <div id="pre-loader">
            <div id="loader-logo"></div>
            <div id="loader-circle"></div>
            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div> --}}

        @include('layouts.navbartp')

        @include('layouts.navbarleft')

        <style>
            /* Initially hide submenu */
            .subMenuColor1 {
                display: none;
            }

            /* Show submenu when active */
            .menu-item.active .subMenuColor1 {
                display: block;
            }
            .selectedItem {
                background-color: #081aa0;
                color: #fff;
            }
        </style>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const menuToggles = document.querySelectorAll('.menu-toggle');

                menuToggles.forEach(toggle => {
                    toggle.addEventListener('click', function (e) {
                        e.preventDefault(); // Prevent default anchor behavior
                        const parent = this.closest('.menu-item');

                        // Hide other menus if needed
                        document.querySelectorAll('.menu-item').forEach(item => {
                            if (item !== parent) {
                                item.classList.remove('active');
                            }
                        });

                        // Toggle current menu
                        parent.classList.toggle('active');
                    });
                });
            });
        </script>


        <div class="content-container">
            <div class="inner-section">
                <div class="content-wrapper">
                    <div class="content" style="padding-right: 30px; padding-left: 5px;">

                        @yield('content')



                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Deletion</h5>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this contact?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" id="confirmDeleteButton">Delete</button>
                </div>
            </div>
        </div>
    </div>





    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Include any other needed scripts -->


        <!-- Bootstrap JavaScript -->

        <!-- <script type="text/javascript" src="vendor/admin.js"></script> -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>

        <script type="text/javascript" src="{{asset('adminjs.js')}}"></script>

        <!-- <script type="text/javascript" src="public/admin.js"></script> -->
        <script type="text/javascript" src="{{asset('ui.js')}}"></script>
        <script src="{{asset('bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('select2.full.js')}}"></script>
        <!-- <script src="#.net.sa/public/vendor/select2/dist/js/i18n/en.js"></script> -->
        <script src="{{asset('mustache.min.js')}}"></script>
        <script src="{{asset('slick.min.js')}}"></script>





        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/js/select2.min.js"></script>
        <script>
            $(document).ready(function () {
                $('#example-select').select2({
                    placeholder: "Search and select an option",
                    allowClear: true // Enables clearing the selected option
                });
            });
        </script>

<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

        @yield('js')

        <script>
            $(document).ready(function() {
                $('.select2-option').select2();
            });
        </script>
</body>
</html>
