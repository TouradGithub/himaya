String.prototype.toColor = function(rgbColor = true, lightColor = true) {
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var colorArray = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        colorArray[i] = (value < 128 && lightColor) ? (value+127) : value;
    }

    if(rgbColor) {
        return `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
    } else {
        var color = '#';
        for (var i = 0; i < 3; i++) {            
            color += ('00' + colorArray[i].toString(16)).substr(-2);
        }
        return color;
    }
}

$(document).ready(function(){

    // $(".current-lang").hover(function () {
    //     // $(this).parent().find(".lang-dropdown").toggleClass("on-hover-lang");
    //     $(this).parent().toggleClass("on-hover-lang");
    //
    // })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            // console.log("toooooop")
            $('.content-container .content .page-header').addClass('with-scroll');    }
        else{
            $('.content-container .content .page-header').removeClass('with-scroll');
        }
    });

    if($('.content-container .aside-nav li').find('ul.close-nav-aside.sub-menu').length !== 0){
        $('.content-container .aside-nav li').find('ul.close-nav-aside.sub-menu').parent().addClass("has-submenu")
        $('.content-container .aside-nav li.has-submenu>a i').remove();
        $('.content-container .aside-nav li.has-submenu>a').append('<i class="fa fa-angle-right angle-right-custom"></i>')
        // console.log($('.content-container .aside-nav .active').find('ul.close-nav-aside.sub-menu').parent().parent());
    }

    $(document).on("click",".has-submenu>a",function(e){
        e.preventDefault();
        $(".content-container .aside-nav li.has-submenu").addClass("active-submenu");
        // console.log($(this).parent());
        $(this).parent().toggleClass("active-submenu");
        $(this).parent().find('>ul').slideToggle(350);
        if(!$(this).parent().hasClass("active-submenu")){
            $(this).parent().toggleClass("no-active-submenu") ;
        }
    })

    var listItems = $(".aside-nav > ul > li");
    listItems.each(function(idx, li) {
        if((!$(this).hasClass("has-submenu")) && ($(this).find("a").attr('href') == undefined || $(this).find("a").attr('href')=="")) {
            $(this).addClass("no-active-link")
            // and the rest of your code
        }
    });

    //array to fill with ths
    var ths = new Array();

    //Clean the text
    function trimIt(x) {
        return x.replace(/(^\s+|\s+$)/g, '');
    }

    var thAdd;
    var responsiveClass = '.table.responsive table';

    function responsiveTable(){
        //Fill ths array with header text
        $(responsiveClass+" th").each(function () {
            var thdatatrimmed = trimIt($(this).html());
            ths.push(thdatatrimmed);
        });

        var count2=0;

        $(responsiveClass).each(function () {
            var ths1 = new Array();
            $(this).find("th").each(function () {
                var thdatatrimmed = trimIt($(this).html());
                // console.log(thdatatrimmed);
                ths1.push(thdatatrimmed);
            });
            count2++;
            //console.log(count2+" : "+ths1);

            var this_2=this;
            var trlen = $(this).find("thead tr").length;
            var trlen2 = $(this).find("tbody tr td").length;
            var trlen3 = $(this).find("tr").length;
            var trlen4= $(this).find("tbody").length;
            if($(this).find('tbody:last-child').find("td").length==1){
                $(this).addClass("have-tow-body")
            }

            if($(this).find("tbody tr td").length ==1){
                // $("table.table tbody").append('<tr></tr>');
                $(this).find("tbody tr").addClass("no-data");
                //console.log(ths.length);
                for (var i = 0, len = ths1.length; i < len; i++) {
                    //console.log(ths1[i]);
                    if(ths1[i]==='<span class="fa fa-plus"></span>'){
                        $(this).find("tbody tr").append('<td class="no-value"'+ 'data-value=' + "Actions" + '>' + '</td>');
                    }
                    else{
                        $(this).find("tbody tr").append('<td class="no-value"'+ 'data-value=' +ths1[i] + '>' + '</td>');
                    }

                }
            }
            else if(trlen==1 && trlen2==0){
                $(this).find("tbody").append('<tr></tr>');
                $(this).find("tbody tr").addClass("no-data");
                //console.log(ths.length);
                for (var i = 0, len = ths1.length; i < len; i++) {
                    //console.log(ths1[i]);
                    if(ths1[i]==='<span class="fa fa-plus"></span>'){
                        $(this).find("tbody tr").append('<td class="no-value"'+ 'data-value=' + "Actions" + '>' + '</td>');
                    }
                    else{
                        $(this).find("tbody tr").append('<td class="no-value"'+ 'data-value=' + "'" +ths1[i] + "'" + '>' + '</td>');
                    }
                }
            }
            else{
                for (var j = 0; j < trlen3; j++) {
                    // console.log(ths1.length);
                    for (var i = 0, len = ths1.length; i < len; i++) {
                        if($(this).find('tr').eq(j).find('td').eq(i).find('.checkbox').length!=0){
                            $(this).find('tr').eq(j).find('td').eq(i).attr('data-value', "checkbox");
                        }
                        else if(ths1[i].indexOf('<span class="fa fa-plus"')>-1){
                            $(this).find('tr').eq(j).find('td').eq(i).attr('data-value', "Actions");
                        }
                        else{
                            $(this).find('tr').eq(j).find('td').eq(i).attr('data-value', ths1[i]);
                        }
                        //$('td:eq('+i+')').attr("data-title", ths1[i]);
                    }
                }
            }
            // console.log($(this).find("tr th:last-child").find(".fa-plus").length);
        });
    }

    var retrievedObject;

    if($(window).width()<=1024){
        $(responsiveClass).each(function() {
            if($(this).find("th:last-child .fa-plus").length>0){
                thAdd =$(this).find("th:last-child .fa-plus").addClass("responsive-add").css("display","none");
                thAdd.insertBefore(this);
            }
            if($(this).find("th:first-child .checkbox").length>0){
                retrievedObject = $(this).find("th:first-child .checkbox").addClass("responsive-checkbox");

                $(this).find("th:first-child .checkbox").addClass("responsive-checkbox").insertBefore(this);
                $(this).find("tbody:eq(0) td:eq(0)").attr('data-value', "");
                $(this).find("tbody:eq(0) td:eq(0)").css("display","none");


            }
            if($(this).find("th:last-child input").attr('type')=="checkbox"){
                $(this).find("th:last-child input").insertBefore(this);
                $(this).addClass("with-checkAll");
            }
        });
    } else {
        $(responsiveClass).each(function() {
            if($(this).prev().hasClass("responsive-add")){
                $(this).find("th:last-child").prepend($(this).prev().removeClass("responsive-add").css("display","block"))
            }
            if($(this).prev().hasClass("responsive-checkbox")){
                $(this).find("th:first-child").prepend($(this).prev().removeClass("responsive-checkbox"));
                $(this).find("tbody:eq(0) td:eq(0)").attr('data-value', "");
                $(this).find("tbody:eq(0) td:eq(0)").css("display","block");
            }

        });
    }

    if($(window).width()<=767){
        $("#app").removeClass("collapsed");
        $(".aside-nav").removeClass("collapsed");
        $(".content-wrapper").removeClass("asid-collapsed");
    }

    $( window ).resize(function() {
        if($(window).width()<=1024){
            $(responsiveClass).each(function() {
                if($(this).find("th:last-child .fa-plus").length>0){
                    thAdd =$(this).find("th:last-child .fa-plus").addClass("responsive-add").css("display","none");
                    thAdd.insertBefore(this);
                }
                if($(this).find("th:first-child .checkbox").length>0){
                    $(this).find("th:first-child .checkbox").addClass("responsive-checkbox").insertBefore(this);
                    $(this).find("tbody:eq(0) td:eq(0)").attr('data-value', "");
                    $(this).find("tbody:eq(0) td:eq(0)").css("display","none");
                }
            });
        }
        else{
            $(responsiveClass).each(function() {
                if($(this).prev().hasClass("responsive-add")){
                    $(this).find("th:last-child").prepend($(this).prev().removeClass("responsive-add").css("display","block"))
                }
                if($(this).prev().hasClass("responsive-checkbox")){
                    $(this).find("th:first-child").prepend($(this).prev().removeClass("responsive-checkbox"));
                    $(this).find("tbody:eq(0) td:eq(0)").attr('data-value', "");
                    $(this).find("tbody:eq(0) td:eq(0)").css("display","block");

                }

            });
             }
        if($(window).width()<=767){
            $("#app").removeClass("collapsed");
            $(".aside-nav").removeClass("collapsed");
            $(".content-wrapper").removeClass("asid-collapsed");
        }
    });

    $(".table .responsive-add").parent().find("td:last-child").addClass("actions");

    if($(window).width()<=767){
        $("#app").removeClass("collapsed");
        $(".aside-nav").removeClass("collapsed");
        $(".content-wrapper").removeClass("asid-collapsed");
    }
    
    responsiveTable();

    $(document).on("click",".content-wrapper",function (e) {
        responsiveTable();
    })
});

if ($(".aside-nav")[0]){
    // Do something if class exists
    // console.log("found")
} else {
    // Do something if class does not exist
    // console.log("not found")
    $(".content-wrapper").addClass("with-no-margin");
}

/********************************************/
var loadFile = function(event) {
    var output = document.getElementById('output');

    var file = event.target.files[0];
    var fileType = file["type"];
    var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if ($.inArray(fileType, validImageTypes) < 0) {
        // invalid file type code goes here.
        $(".new-image-preview").remove();
        $(".box .add-new-image").append('<img id="output" class="document-image" src="../../../../storage/requestFiles/Icon_upload.png" >')
    } else {
        output.src = URL.createObjectURL(event.target.files[0]);
    }
    $('.add-new-image.image-content ').addClass("active");
    // console.log("Done.........")
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};

$(document).ready(function() {
    const $menu = $('.notifications-container');
    $(document).mouseup(e => {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            && $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".notifications.js-notifications").removeClass('active');
        }
    });
});
/*************************************************************/

/*********************** UPLOAD MULTIPLE IMAGES **********************************/

//I added event handler for the file upload control to access the files properties.
document.addEventListener("DOMContentLoaded", init, false);

//To save an array of attachments
var AttachmentArray = [];

//counter for attachment array
var arrCounter = 0;

//to make sure the error message for number of files will be shown only one time.
var filesCounterAlertStatus = false;

//un ordered list to keep attachments thumbnails
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

function init() {
    //add javascript handlers for the file upload event
    // document
    //     .querySelector("#files")
    //     .addEventListener("change", handleFileSelect, false);

    // console.log("files click...")
}

$(document).on("change","#files",function (e) {
    // console.log("file input change..");
    handleFileSelect(e);
})

//the handler for file upload event
function handleFileSelect(e) {
    //to make sure the user select file/files
    // console.log("1");
    if (!e.target.files) return;

    //To obtaine a File reference
    var files = e.target.files;
    // console.log("files: ", files );
    // Loop through the FileList and then to render image files as thumbnails.
    for (var i = 0, f; (f = files[i]); i++) {
        //instantiate a FileReader object to read its contents into memory
        var fileReader = new FileReader();

        // Closure to capture the file information and apply validation.
        fileReader.onload = (function(readerEvt) {
            return function(e) {
                //Apply the validation rules for attachments upload
                ApplyFileValidationRules(readerEvt);

                //Render attachments thumbnails.
                RenderThumbnail(e, readerEvt);

                //Fill the array of attachment
                FillAttachmentArray(e, readerEvt);
            };
        })(f);

        // Read in the image file as a data URL.
        // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
        // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
        fileReader.readAsDataURL(f);
    }
    // document
    //     .getElementById("files")
    //     .addEventListener("change", handleFileSelect, false);
}

//To remove attachment once user click on x button
jQuery(function($) {
    $("div").on("click", ".img-wrap .close", function() {
        var id = $(this)
            .closest(".img-wrap")
            .find("img")
            .data("id");

        //to remove the deleted item from array
        var elementPos = AttachmentArray.map(function(x) {
            return x.FileName;
        }).indexOf(id);
        if (elementPos !== -1) {
            AttachmentArray.splice(elementPos, 1);
        }

        //to remove image tag
        $(this)
            .parent()
            .find("img")
            .not()
            .remove();

        //to remove div tag that contain the image
        $(this)
            .parent()
            .find("div")
            .not()
            .remove();

        //to remove div tag that contain caption name
        $(this)
            .parent()
            .parent()
            .find("div")
            .not()
            .remove();

        //to remove li tag
        var lis = document.querySelectorAll("#imgList li");
        for (var i = 0; (li = lis[i]); i++) {
            if (li.innerHTML == "") {
                li.parentNode.removeChild(li);
            }
        }
    });
});

//Apply the validation rules for attachments upload
function ApplyFileValidationRules(readerEvt) {
    //To check file type according to upload conditions
    if (CheckFileType(readerEvt.type) == false) {
        alert(
            "The file (" +
            readerEvt.name +
            ") does not match the upload conditions, You can only upload jpg/png/gif files"
        );
        e.preventDefault();
        return;
    }

    //To check file Size according to upload conditions
    if (CheckFileSize(readerEvt.size) == false) {
        alert(
            "The file (" +
            readerEvt.name +
            ") does not match the upload conditions, The maximum file size for uploads should not exceed 300 KB"
        );
        e.preventDefault();
        return;
    }

    //To check files count according to upload conditions
    if (CheckFilesCount(AttachmentArray) == false) {
        if (!filesCounterAlertStatus) {
            filesCounterAlertStatus = true;
            alert(
                "You have added more than 10 files. According to upload conditions you can upload 10 files maximum"
            );
        }
        e.preventDefault();
        return;
    }
}

//To check file type according to upload conditions
function CheckFileType(fileType) {
    if (fileType == "image/jpeg") {
        return true;
    } else if (fileType == "image/png") {
        return true;
    } else if (fileType == "image/gif") {
        return true;
    } else {
        return false;
    }
    return true;
}

//To check file Size according to upload conditions
function CheckFileSize(fileSize) {
    if (fileSize < 1000000) {
        return true;
    } else {
        return false;
    }
    return true;
}

//To check files count according to upload conditions
function CheckFilesCount(AttachmentArray) {
    //Since AttachmentArray.length return the next available index in the array,
    //I have used the loop to get the real length
    var len = 0;
    for (var i = 0; i < AttachmentArray.length; i++) {
        if (AttachmentArray[i] !== undefined) {
            len++;
        }
    }
    //To check the length does not exceed 10 files maximum
    if (len > 9) {
        return false;
    } else {
        return true;
    }
}

//Render attachments thumbnails.
function RenderThumbnail(e, readerEvt) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = [
        '<div class="img-wrap"> <span class="close">&times;</span>' +
        '<img class="thumb" src="',
        e.target.result,
        '" title="',
        escape(readerEvt.name),
        '" data-id="',
        readerEvt.name,
        '"/>' + "</div>"
    ].join("");

    var div = document.createElement("div");
    div.className = "FileNameCaptionStyle";
    li.appendChild(div);
    div.innerHTML = [readerEvt.name].join("");
    document.getElementById("Filelist").insertBefore(ul, null);
}

/***************add collpased class on 1200px screen*****************/
$(document).ready(function() {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        console.log("Window Width:", ww); // Debugging statement
        console.log("Local Storage toggleMenu:", localStorage.getItem("toggleMenu"));
        if (ww <= 1366) {
            if(localStorage.getItem("toggleMenu")==="active"){
                $(".navbar-left").addClass("collapsed");
                $('.content-container').addClass("collapsedMenu");
                $("#app").addClass("nav-collapsed");
            }
            else{
                $(".navbar-left").removeClass("collapsed");
                $("#app").removeClass("nav-collapsed");
                $('.content-container').removeClass("collapsedMenu");
            }
        }
        else{
            if(localStorage.getItem("toggleMenu")==="active"){
                $(".navbar-left").addClass("collapsed");
                $('.content-container').addClass("collapsedMenu");
                $("#app").addClass("nav-collapsed");
            }
            else{
                $(".navbar-left").removeClass("collapsed");
                $("#app").removeClass("nav-collapsed");
                $('.content-container').removeClass("collapsedMenu");
            }
        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

//Fill the array of attachment
function FillAttachmentArray(e, readerEvt) {
    AttachmentArray[arrCounter] = {
        AttachmentType: 1,
        ObjectType: 1,
        FileName: readerEvt.name,
        FileDescription: "Attachment",
        NoteText: "",
        MimeType: readerEvt.type,
        Content: e.target.result.split("base64,")[1],
        FileSizeInBytes: readerEvt.size
    };
    arrCounter = arrCounter + 1;
}

if(localStorage.getItem("toggleMenu")=="active"){
    $(".toggle-menu-btn").parent().addClass("collapsed");
    $('.content-container').addClass("collapsedMenu");
    $("#app").addClass("nav-collapsed");
} else {
    // $('.navbar-left').removeClass('collapsed');
    // $(".content-container").removeClass("collapsedMenu");
    $("#app").removeClass("nav-collapsed");
}

if(localStorage.getItem("toggleSubMenu")=="active"){
        $("a.collapse-pages").parent().parent().toggleClass("collapsed")
        $('.top-aside-submenu').toggleClass("asid-collapsed")
        $('.content-container .content-wrapper').toggleClass("asid-collapsed")
    $("#app").addClass("collapsed");
} else{
    $("#app").removeClass("collapsed");
}

if( screen.width <= 768 ) {
    $('.content-container .content-wrapper').removeClass("asid-collapsed")
    $('.aside-nav').removeClass("collapsed")
}

let gridMediaCallBack = function() {
    var gridMedia = $(this).find(".grid-media");
    var gridMediaImg = $(this).find(".grid-media img");
    if(gridMedia.length) {
        var currName = gridMedia.text();
        gridMedia.removeClass('grid-media');
        gridMedia.addClass('media');
        gridMedia.text('');
    
        if(gridMediaImg.length) {
            gridMediaImg.removeClass('radius-img-50');
            gridMediaImg.addClass('radius-img-50');
            gridMediaImg.appendTo(gridMedia);
        } else {
            var currColor = currName.toColor();
            var relativeImg = document.createElement('div');
            var relativeSpan = document.createElement('span');
            relativeImg.setAttribute("class", "relative-img");
            relativeImg.style.backgroundColor = currColor;
            relativeImg.style.fontSize = '1rem';
            relativeImg.style.fontWeight = 'bolder';
            relativeSpan.innerText = currName.charAt(0);
            relativeImg.append(relativeSpan);
            $(relativeImg).appendTo(gridMedia);
        }

        var mediaBody = document.createElement('div');
        mediaBody.setAttribute("class", "media-body");
        mediaBody.innerText = currName;
        $(mediaBody).appendTo(gridMedia);
    }        
}

$(document).ready(function() {
    $(document).on("click",".cardStyle.card .card-title a",function () {
        $(this).parent().parent().toggleClass("active");
    });

    /********************PHOTO MODAL******************/
    $(document).on("shown.bs.modal",".photoModal",function () {
        const video = $(this).find("video");
        const audio = $(this).find("audio");

        if(video.length ){
            video.get(0).play();
        }
        else if(audio.length ){
            audio.get(0).play();
        }
    })
    $(document).on("hidden.bs.modal",".photoModal", function () {
        const video = $(this).find("video");
        const audio = $(this).find("audio");
        if(video.length ){
            video.get(0).pause();
        }
        else if(audio.length ){
            audio.get(0).pause();
        }
    })

    /*************************New Js Code **************************/
    $(document).on("click","a.toggle-menu-btn",function (){
        /*
        $(this).parents(".navbar-left").toggleClass("collapsed");
        $('.content-container').toggleClass("collapsedMenu");
        if(localStorage.getItem("toggleMenu")!=="active"){
            localStorage.setItem("toggleMenu", "active");
            $("#app").addClass("nav-collapsed");
        }
        else{
            localStorage.setItem("toggleMenu", "unactive");
            $("#app").removeClass("nav-collapsed");
        }
        */

        if($(this).parents(".navbar-left").hasClass("collapsed")) {
            localStorage.setItem("toggleMenu", "unactive");
            $("#app").removeClass("nav-collapsed");
        } else {
            localStorage.setItem("toggleMenu", "active");
            $("#app").addClass("nav-collapsed");
        }

        $(this).parents(".navbar-left").toggleClass("collapsed");
    })

    /*
    $(document).on("mouseover","a.toggle-menu-btn",function (){
        $(".navbar-left").removeClass("collapsed");
        $('.content-container').removeClass("collapsedMenu");
        $("#app").removeClass("nav-collapsed");
    })

    $(document).on("mouseover",".content-container",function (){
        $(".navbar-left").addClass("collapsed");
        $('.content-container').addClass("collapsedMenu");
        $("#app").addClass("nav-collapsed");
    })
    */

    $(document).on("click","a.collapse-pages",function (){
        $(this).parent().parent().toggleClass("collapsed")
        $('.top-aside-submenu').toggleClass("asid-collapsed")
        $('.content-container .content-wrapper').toggleClass("asid-collapsed")
        $('.content-container').toggleClass("collapsedMenu");
        if(localStorage.getItem("toggleSubMenu")!=="active"){
            localStorage.setItem("toggleSubMenu", "active");
            $("#app").addClass("collapsed");
        }
        else{
            localStorage.setItem("toggleSubMenu", "unactive");
            $("#app").removeClass("collapsed");

        }
        // if(localStorage.getItem("toggleMenu")=="active" &&
        //     localStorage.getItem("toggleSubMenu")=="active"){
        //     $("#app").addClass("collapsed");
        // }
        // else{
        //     $("#app").removeClass("collapsed");
        // }
        if(localStorage.getItem("toggleMenu")==="active"){
            $("#app").addClass("nav-collapsed");
        }
        else{
            $("#app").removeClass("nav-collapsed");
        }
    })

    $(document).on("click","a.toggle-filter",function (){
        $(".filter-section").toggleClass("collapsed")
    })
    $(document).on("click","a.filter-link",function (){
        $(".filter-section").toggleClass("collapsed")
    })

    var media =$(".video-player")

    if( media.length )
    {
        media.pause();
        media.play();
    }

    /*****************************Tabs with Slick Slider************************/
    $(function () {
        'use strict';

        var $swipeTabsContainer = $('.swipe-tabs'),
            $swipeTabs = $('.nav-item'),
            currentIndex = 0,
            slideToShow=0,
            activeTabClassName = 'active-tab';


        if(localStorage.getItem("currentIndex") !==null){
            currentIndex = localStorage.getItem("currentIndex")
        }
        $swipeTabsContainer.on('init', function(event, slick) {

            $swipeTabsContainer.removeClass('invisible');

            slideToShow=slick.options.slidesToShow-1.5;
            currentIndex = slick.getCurrent();
            $swipeTabs.removeClass(activeTabClassName);
            $('.nav-item[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });

        var item_length = $('.swipe-tabs .nav-item').length - 1;
        $('html:lang(en) .swipe-tabs').slick({
            //slidesToShow: 3.25,
            slidesToShow: 13.5,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slide-arrow prev-arrow fas fa-chevron-left"></button>',
            nextArrow: '<button class="slide-arrow next-arrow fas fa-chevron-right"></button>',
            infinite: false,
            swipeToSlide: true,
            touchThreshold: 10,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 11.5,
                        slidesToScroll: 11,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 9.5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 7.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 2.5,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        // $("html:lang(en) .swipe-tabs").on('afterChange', function(event, slick, currentSlide,nextSlide) {
        //     console.log(item_length, currentSlide);
        //     if (item_length == currentSlide+8) {
        //         console.log("Last slide");
        //         $(".next-arrow").addClass("last-slide");
        //     }
        // })
        // $(".rtl .swipe-tabs").on('afterChange', function(event, slick, currentSlide,nextSlide) {
        //     console.log(item_length, currentSlide);
        //     if (item_length == currentSlide+8) {
        //         console.log("Last slide");
        //         $(".prev-arrow").addClass("last-slide");
        //     }
        // })
        $(".rtl .swipe-tabs").slick({
            //slidesToShow: 3.25,
            slidesToShow: 12.5,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: '<button class="slide-arrow prev-arrow fas fa-chevron-left"></button>',
            prevArrow: '<button class="slide-arrow next-arrow fas fa-chevron-right"></button>',
            infinite: false,
            swipeToSlide: true,
            rtl: true,
            touchThreshold: 10,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 11.5,
                        slidesToScroll: 11,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 8.5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 7.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 1
                    }
                }
                ,
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 2.5,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $swipeTabs.removeClass(activeTabClassName);

        $('.swipe-tabs').slick('slickGoTo', localStorage.getItem("currentIndex")-slideToShow);
        $('.nav-item[data-slick-index=' + localStorage.getItem("currentIndex") +']').addClass(activeTabClassName);

        $swipeTabs.on('click', function(event) {
            // gets index of clicked tab
            currentIndex = $(this).data('slick-index');
            $swipeTabs.removeClass(activeTabClassName);
            $('.nav-item[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
            // $('.swipe-tabs').slick('slickGoTo', currentIndex);
            localStorage.setItem("currentIndex",currentIndex);
        });
    });

    /*******************Upload File new style****************/

    $('.upload-file-1').change(function() {
        var thiss=$(this);
        var filename = $(this).val();
        thiss.parent().parent().find('#file-upload-name').html(filename);
        if(filename!=""){
            setTimeout(function(){
                thiss.parent().parent().find('.upload-wrapper').addClass("uploaded");
            }, 600);
            setTimeout(function(){
                thiss.parent().parent().find('.upload-wrapper').removeClass("uploaded");
                thiss.parent().parent().find('.upload-wrapper').addClass("success");
            }, 1600);
        }
    });

    var url = window.location.href;
    var last = url.split('/');
    $(document).on("click",".aside-nav >ul>li>a",function () {
        var arr ;
        var ul =$(this).parent().parent();
        var result = {};
        var i=0;
        ul.find(">li").each(function() {
            var LI = $(this);
            var spanValue = LI.find(">a").text();
            // console.log(spanValue);
            result[i] = [];
            if(LI.hasClass("no-active-submenu")){
                result[i].push("no-active-submenu");
            }
            else{
                result[i].push("active-submenu");
            }
            i++;
        });

        var finalData={};
        finalData["backage_name"]=last[5];
        finalData["data"]=result;
        var asideNav=[];
        if(localStorage.getItem("asideNav") != null){
            asideNav=JSON.parse(localStorage.getItem("asideNav") || "[]");
        }
        asideNav = asideNav.filter((item) => item.backage_name !==finalData.backage_name);
        asideNav.push(finalData);
        localStorage.setItem("asideNav", JSON.stringify(asideNav));
    })
    if(localStorage.getItem("asideNav") != null){
        var asideNav=JSON.parse(localStorage.getItem("asideNav") || "[]");
        asideNav = asideNav.filter((item) => item.backage_name ===last[5]);
        asideNav.forEach(item=>{
            var classList=item["data"];
            var i=0;
            for (let x in classList) {
                if(classList[x][0]==="no-active-submenu"){
                    $('.aside-nav >ul>li').eq(i).find(">ul").slideToggle(350);
                    $('.aside-nav >ul>li').eq(i).addClass(classList[x][0]);
                }
                else{
                    $('.aside-nav >ul>li').eq(i).addClass(classList[x][0]);

                }
                i++;
            };
        })
    }


    /***************letter image**************/
    $(".table table td").each(function() {
        var currName= $(this).find(".relative-img span").text();
        $(this).find(".relative-img span").text(currName.charAt(0));
    });

    $(".table table td").each(gridMediaCallBack);

    $(document).on("click",".with-delete-val a",function(){
        $(this).parent().find("input").val("");
        $(this).parent().find("select").val("");
        $(this).css("display","none");
    });

    $('.with-delete-val').each(function(i, obj) {
        if($(this).find("input").length>0 && $(this).find("input").val()==""){
            $(this).find("a").css("display","none");
            console.log($(this).find("input").val());
        }
        if($(this).find("select").length>0 && $(this).find("select").val()==null){
            $(this).find("a").css("display","none");
        }
    });
    $(document).on('change',".with-delete-val select", function() {
        if ($(this).val()!= ''){
            $(this).parent().find("a").css("display","block");
        }
    });
    $(document).on('change',".with-delete-val input", function() {
        if ($(this).val()!= ''){
            $(this).parent().find("a").css("display","block");
        }
    });

    /************Multi Level asid menu**********/
    /*
    $(function(){
        var $ul   =   $('.sidebar-navigation > ul');

        $ul.find('li a').click(function(e){
            var $li = $(this).parent();

            if($li.find('ul').length > 0){
                e.preventDefault();

                if($li.hasClass('selected')){
                    $li.removeClass('selected').find('li').removeClass('selected');
                    // $li.find('ul').slideUp(400);
                    $li.find('a i').removeClass('mdi-flip-v');
                }else{

                    if($li.parents('li.selected').length == 0){
                        $ul.find('li').removeClass('selected');
                        // $ul.find('ul').slideUp(400);
                        $ul.find('li a i').removeClass('mdi-flip-v');
                    }else{
                        $li.parent().find('li').removeClass('selected');
                        // $li.parent().find('> li ul').slideUp(400);
                        $li.parent().find('> li a i').removeClass('mdi-flip-v');
                    }

                    $li.addClass('selected');
                    // $li.find('>ul').slideDown(400);
                    $li.find('>a>i').addClass('mdi-flip-v');
                }
            }
        });

        var t = ' li > ul ';
        for(var i=1;i<=10;i++){
            $('.sidebar-navigation > ul > ' + t.repeat(i)).addClass('subMenuColor' + i);
        }

        var activeLi = $('li.selected');
        if(activeLi.length){
            opener(activeLi);
        }

        function opener(li){
            var ul = li.closest('ul');
            if(ul.length){

                li.addClass('selected');
                ul.addClass('open');
                console.log(li.find('>a>i'));
                li.find('>a>i').addClass('mdi-flip-v');

                if(ul.closest('li').length){
                    opener(ul.closest('li'));
                }else{
                    return false;
                }

            }
        }

    });
    */

    $(document).on("change", "select",function () {
        $(this).addClass("auto-fill");
    })
    $(document).on("focus", ".select2-container .select2-selection--single",function () {
        $(this).addClass("auto-fill-select2");
    })
});

$(window).on("load",function() {
    $("table.table").each(function(idx, li) {
        if($(this).width() > $(this).parents(".table").width()){
            $(this).addClass("d-block");
        }
    });
    $(document).on("click","th .fa-plus",function () {
        if($(this).parents("table").width() > $(this).parents("table").parents(".table").width()){
            $(this).parents("table").addClass("d-block");
        }
    })

});

$(function() {
    $('[data-toggle="popover"]').popover()
})


