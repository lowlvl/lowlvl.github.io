    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 700,
      transition: 4000,
    });

    const nav = document.querySelectorAll('.pushpin');
    M.Pushpin.init(nav);

    const scroll = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scroll);

    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);

    const cr = document.querySelectorAll('.carousel');
    M.Carousel.init(cr);

    const tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
