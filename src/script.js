var el = document.getElementById("weather-widget");
el.innerHTML = '<a class="weatherwidget-io" href="https://forecast7.com/en/n1d2936d82/nairobi/" data-label_1="NAIROBI" data-label_2="HOME" data-font="Noto Serif" data-icons="Climacons Animated" data-theme="original" data-basecolor="#dfd4e9" data-shadow="#ffffff" data-textcolor="#4b4747" data-highcolor="#4b4747" data-lowcolor="#4b4747" data-suncolor="#ffffff" data-cloudfill="#c2e4fc" data-raincolor="#163664">NAIROBI HOME</a>';

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');
