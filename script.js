$(document).ready(function(){

$('.container > .listWrapper > ul > li').on('mouseover',function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$(document).on('keydown',function(event){
    event.stopPropagation();
   var keyCode = event.keyCode;
   let activePosTop = +($('li.active').position().top)+27;
   let activeEleHeight = +$('li.active').outerHeight();
   let maxHeight = activePosTop + activeEleHeight;
   let getParentHeight = +$('.container > .listWrapper > ul').outerHeight();
   let getCurrentScrollPos =  $("ul").scrollTop();
   //alert(keyCode);
    if(keyCode == 38){
        $('.listWrapper > ul > li.active:not(:first-child)').removeClass('active').prev().addClass('active');
        if(maxHeight > getParentHeight){            
            $("ul").animate({ scrollTop: (getCurrentScrollPos-activeEleHeight) }, "fast");
        }
    }else if(keyCode == 40){
        $('.listWrapper > ul > li.active:not(:last-child)').removeClass('active').next().addClass('active');
        if(maxHeight > getParentHeight){            
            $("ul").animate({ scrollTop: (getCurrentScrollPos+activeEleHeight) }, "fast");
        }
    }else{
        return false;
    }
    
});

});