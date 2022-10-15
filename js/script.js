
$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 810,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
          ]
     });
        $('ul.catalog__tubs').on('click', 'li:not(.catalog_tub_active)', function() {
            $(this)
            .addClass('catalog_tub_active').siblings().removeClass('catalog_tub_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      function toggleSlide (item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog__contents').eq(i).toggleClass('catalog__contents_active');
                $('.catalog__list').eq(i).toggleClass('catalog__list_active');
            });
        });
      };
      toggleSlide('.catalog__link');
      toggleSlide('.catalog__back');

     //modal

     $('[data-modal="consultation"]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
     });

     $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut();
     });

     

     $('.catalog__btn').each(function(i){
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
     });
     
     function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minLength: 20
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "введіть своє ім'я"
                },
                phone: "вкажіть номер телефону",
                email: {
                    required: "введіть свою електрону адресу",
                    email: "неправильно вказана адреса"
                }
            }
        });
     }
     validateForms('#consultation-form');
     validateForms('#consultation form');
     validateForms('#order form');
  });

