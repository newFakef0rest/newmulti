// $(document).ready(function () {
//     $('.about--options').slick({
//         arrows:false,
//         mobileFirst:true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//         dots: false,
//         responsive: [
//           {
//             breakpoint: 991,
//             settings: {
//               slidesToShow: 2
//             }
//           }
//         ]
//   });
// });

$(function () {
  $('.about--options').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
