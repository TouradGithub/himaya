

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>    Sign In
</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="Owd993PeKmfaCLpVUr6mmTXPrgiJXkATzTZoNIke">

        <link rel="icon" sizes="16x16" href="https://amwal.doe.net.sa/public/vendor/webkul/ui/assets/images/favicon.ico" />

        <link rel="stylesheet" href="{{asset('css/asset/admin.css')}}">
        <link rel="stylesheet" href="{{asset('css/ui.css')}}">
        <link rel="stylesheet" href="{{asset('css/asset/admin.css')}}">

        <style>
            .container {
                text-align: center;
                position: absolute;
                width: 100%;
                height: 100%;
                display: table;
                z-index: 1;
                background: #F8F9FA;
            }
            .center-box {
                display: table-cell;
                vertical-align: middle;
            }
            .adjacent-center {
                width: 365px;
                display: inline-block;
                text-align: left;
            }

            .form-container .control-group .control {
                width: 100%;
            }

            h1 {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 30px;
            }

            .brand-logo {
                margin-bottom: 30px;
                text-align: center;
            }

            .footer {
                margin-top: 40px;
                padding: 0 20px;
            }

            .footer p {
                font-size: 14px;
                color: #8E8E8E;
                text-align: center;
            }

            .btn.btn-primary {
                width: 100%;
            }
            html:lang(ar) .panel .panel-content h1 {
                text-align: right;
            }
            @media (max-width: 365px){
                .adjacent-center {
                    width: 300px;
                }
            }
        </style>

            <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/font-awesome.css')}}" />
    <link rel="stylesheet" href="{{asset('do.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <script src="{{asset('js/modernizr.custom.js')}}" ></script>





</head>
    <body  style="scroll-behavior: smooth;">
        <div id="app" class="container">

            <flash-wrapper ref='flashes'></flash-wrapper>

            <div class="center-box">

                <div class="adjacent-center">

                    <div class="brand-logo">
                        <img src="https://amwal.doe.net.sa/public/vendor/webkul/ui/assets/images/logo.png" alt="Digital-Order"/>
                                            </div>




  @yield('content')




                                    </div>

            </div>

        </div>

        <script type="text/javascript">
            window.flashMessages = [];
            window.flashMessages = [{'type': 'alert-warning', 'message': "Errror" }];

            window.serverErrors = [];
        </script>

        <!-- <script type="text/javascript" src="https://amwal.doe.net.sa/public/vendor/webkul/admin/assets/js/admin.js"></script>
        <script type="text/javascript" src="https://amwal.doe.net.sa/public/vendor/webkul/ui/assets/js/ui.js"></script>

         -->


        <div class="modal-overlay"></div>
    <script type="text/javascript">

</script>
</body>
</html>
