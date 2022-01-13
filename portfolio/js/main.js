$(function(){
    //--------------------------------------------------

    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    //WEB is My MONEY
    new Typed('.slogan_txt',{
        strings: ['단순함을<br> 미덕으로 삼다.'],
        typeSpeed:200,
    });


    $('.cover_btn').on('click', function(){
        $('#cover').fadeToggle();
    });
    
    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu);
    $('#cover').append(cloneMenu);
    //cloneMenu.appendTo('#cover')
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp();
    });
    
    $('#cover').on('scroll wheel', function(){
        return false;
    })
    
    //-----------------------------------------------------
});