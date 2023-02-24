const slidesJS = ['<div class="swiper-slide slider__item" id="level-main">\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/main/layer-back.jpg);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header_main">\n' +
'\t\t\t\t\t\t<div class="layers__title">Eu Genes</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Welcome to hell</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="25%" style="background-image: url(ready-html/img/main/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="14%" style="background-image: url(ready-html/img/main/layer-front.png);"></div>\n' +
'\t\t\t\t<div id="papper" data-swiper-parallax="90%" style="background-image: url(ready-html/img/main/papper.png);"></div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="10%" data-color="#b28db2"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t\n' +
'\n',

	'<div class="swiper-slide slider__item" id="level-0">\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="40%" style="background-image: url(ready-html/img/level-0/layer-back.jpg);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-0">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Zero</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Abandoned City</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" style="background-image: url(ready-html/img/level-0/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="rat-glow" data-swiper-parallax="14%" style="background-image: url(ready-html/img/level-0/ratGlow.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="city-rat" data-swiper-parallax="14%" style="background-image: url(ready-html/img/level-0/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="cityRatPhrase" data-swiper-parallax="14%" style="background-image: url(ready-html/img/common/darkGreenPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="10%" data-color="#338086"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-0" style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_0_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_0_btn" >CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-1">\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-1/layer-back.jpg);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="rat-glow2" data-swiper-parallax="40%" style="background-image: url(ready-html/img/level-1/level_1_glow.png);"></div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-1">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level One</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Rat Shelter</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-1/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-1/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="shelterRatPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/darkGreenPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="10%" data-color="#938086"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-1"  style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_1_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_1_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-2">\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-2/layer-back.jpg);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="basement-glow" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-2/glowBasement.png);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-2">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Two</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Basements of beggars</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-2/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-2/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="basementRatPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/darkGreenPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#4d4334"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-2"  style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_2_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_2_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-3">\n' +
'\t\t\t\t<div class="slider__layer" id="severs-back" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-3/layer-back.jpg);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="severs-glow" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-3/layer-back-glow.jpg);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-3">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Three</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Severs</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-3/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-3/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="seversPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/darkGreenPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#4d4334"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-3"  style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_3_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_3_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-4">\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-4/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-4">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Four</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Military Camp</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-4/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="soldier-glow" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-4/soldier-glow.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="soldier-front" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-4/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="soldierPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/flatOrPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#4d4334"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-4"  style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_4_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_4_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-5">\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-5/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-5">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Five</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">ex generals bunker</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-5/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="cat-glow" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-5/layer-front-glow.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="cat-front" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-5/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="catPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/flatOrPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#4d4334"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-5"  style="background-image: url(ready-html/img/common/answear2.png);">\n' +
'\t\t\t\t<input class="nums" id="level_5_input" type="text">\n' +
'\t\t\t\t<button class="btn" id="level_5_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-6">\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-6/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="30%" >\n' +
'\t\t\t\t\t<div class="layer__header" id="layer__header-level-6">\n' +
'\t\t\t\t\t\t<div class="layers__title">Level Six</div>\n' +
'\t\t\t\t\t\t<div class="layers__caption">Nest of Elites</div>\n' +
'\t\t\t\t\t</div>\n' +
'\t\t\t\t</div>\n' +
'\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-6/layer-middle.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" id="cyborg-glow" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-6/layer-front-glow.png);"></div>\n' +
'\t\t\t\t<div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-6/layer-front.png);"></div>\n' +
'\t\t\t\t\n' +
'\t\t\t\t<div class="question" id="cyborgPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/flatRedPhrase.png);">\n' +
'\t\t\t\t\t<p id="ratText">...</p>\n' +
'\t\t\t\t</div>\n' +
'\t\t\t\t<div id="panel-text" data-swiper-parallax="90%" style="background-image: url(ready-html/img/level-6/panel-text.png);"></div>\n' +
'\n' +
'\n' +
'\t\t\t\t<canvas class="particles slider__layer" data-swiper-parallax="25%" data-color="#4d4334"></canvas>\n' +
'\t\t\t</div>\n' +
'\n' +
'\t\t\t<div class="response" id="response-6"  style="background-image: url(ready-html/img/common/panel.png);">\n' +
'\t\t\t\t<input class="nums_panel" id="level_6_input" type="text">\n' +
'\t\t\t\t<button class="btn_panel" id="level_6_btn">CHECK</button>\n' +
'\t\t\t</div>',

'<div class="swiper-slide slider__item" id="level-62">\n' +
'    <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-62/layer-back.jpg);"></div>\n' +
'\n' +

'    <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-62/layer-middle.png);"></div>\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="30%" >\n' +
'        <div class="layer__header" id="layer__header-level-62">\n' +
'            <div class="layers__title">Level Seven</div>\n' +
'            <div class="layers__caption">Enter to the Caves</div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-62/layer-front.png);"></div>\n' +
'    \n' +
'    <div class="panel" id="enterPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'        <p id="ratText">TAKE A TEST\n' +
'TO PROCEED</p>\n' +
'    </div>\n' +
'\n' +
'    <canvas class="particles slider__layer" data-swiper-parallax="0%" data-color="#4d4334"></canvas>\n' +
'</div>\n' +
'\n' +
'<div class="response" id="response-62"  style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'    <input class="nums_panel" id="level_62_input" type="text">\n' +
'    <button class="btn_panel" id="level_62_btn">CHECK</button>\n' +
'</div>',

'<div class="swiper-slide slider__item" id="level-7">\n' +
'    <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-7/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="30%" >\n' +
'        <div class="layer__header" id="layer__header-level-7">\n' +
'            <div class="layers__title">Level Eight</div>\n' +
'            <div class="layers__caption">Fungi Kingdom</div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <div class="slider__layer" id="mashroom-glow" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-7/mashroom-glow.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-7/layer-middle.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-7/layer-front.png);"></div>\n' +
'    \n' +
'    <div class="panel" id="mashroomPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'        <p id="ratText">TAKE A TEST\n' +
'TO PROCEED</p>\n' +
'    </div>\n' +
'\n' +
'    <canvas class="particles slider__layer" data-swiper-parallax="0%" data-color="#4d4334"></canvas>\n' +
'</div>\n' +
'\n' +
'<div class="response" id="response-7"  style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'    <input class="nums_panel" id="level_7_input" type="text">\n' +
'    <button class="btn_panel" id="level_7_btn">CHECK</button>\n' +
'</div>',


'<div class="swiper-slide slider__item" id="level-8">\n' +
'    <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-8/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="30%" >\n' +
'        <div class="layer__header" id="layer__header-level-8">\n' +
'            <div class="layers__title">Level Nine</div>\n' +
'            <div class="layers__caption">Underground River</div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <div class="slider__layer" id="greenCave-glow" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-8/cave-glow.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-8/layer-middle.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-8/layer-front.png);"></div>\n' +
'    \n' +
'    <div class="panel" id="greenCavePhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'        <p id="ratText">TAKE A TEST\n' +
'TO PROCEED</p>\n' +
'    </div>\n' +
'\n' +
'    <canvas class="particles slider__layer" data-swiper-parallax="0%" data-color="#4d4334"></canvas>\n' +
'</div>\n' +
'\n' +
'<div class="response" id="response-8"  style="background-image: url(ready-html/img/common/panel-colored.png);">\n' +
'    <input class="nums_panel" id="level_8_input" type="text">\n' +
'    <button class="btn_panel" id="level_8_btn">CHECK</button>\n' +
'</div>',

'<div class="swiper-slide slider__item" id="level-9">\n' +
'    <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-9/layer-back.jpg);"></div>\n' +
'    <div class="slider__layer" id="gates-glow" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-9/gate-glow.jpg);"></div>\n' +
'\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="30%" >\n' +
'        <div class="layer__header" id="layer__header-level-9">\n' +
'            <div class="layers__title">Level Ten</div>\n' +
'            <div class="layers__caption">Misterious Gates</div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-9/layer-middle.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-9/layer-front.png);"></div>\n' +
'    \n' +
'    <div class="question" id="gatesPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/flatOrPhrase.png);">\n' +
'        <p id="ratText">...</p>\n' +
'    </div>\n' +
'\n' +
'    <canvas class="particles slider__layer" data-swiper-parallax="0%" data-color="#4d4334"></canvas>\n' +
'</div>\n' +
'\n' +
'<div class="response" id="response-9"  style="background-image: url(ready-html/img/common/panel.png);">\n' +
'    <input class="nums_panel" id="level_9_input" type="text">\n' +
'    <button class="btn_panel" id="level_9_btn">CHECK</button>\n' +
'</div>',

'<div class="swiper-slide slider__item" id="level-10">\n' +
'    <div class="slider__layer" data-swiper-parallax="48%" style="background-image: url(ready-html/img/level-10/layer-back.jpg);"></div>\n' +
'\n' +
'\n' +
'    <div class="slider__layer" data-swiper-parallax="30%" >\n' +
'        <div class="layer__header" id="layer__header-level-10">\n' +
'            <div class="layers__title">Level Eleven</div>\n' +
'            <div class="layers__caption">Reptilian Guardian</div>\n' +
'        </div>\n' +
'    </div>\n' +
'\n' +
'    <div class="slider__layer" id="reptilian-glow" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-10/reptilian-glow.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="35%" style="background-image: url(ready-html/img/level-10/layer-middle.png);"></div>\n' +
'    <div class="slider__layer" data-swiper-parallax="16%" style="background-image: url(ready-html/img/level-10/layer-front.png);"></div>\n' +
'    \n' +
'    <div class="question" id="reptilianPhrase" data-swiper-parallax="16%" style="background-image: url(ready-html/img/common/flatRevPhrase2.png);">\n' +
'        <p id="ratText">...</p>\n' +
'    </div>\n' +
'\n' +
'    <canvas class="particles slider__layer" data-swiper-parallax="0%" data-color="#4d4334"></canvas>\n' +
'</div>\n' +
'\n' +
'<div class="response" id="response-10"  style="background-image: url(ready-html/img/common/panel.png);">\n' +
'    <input class="nums_panel" id="level_10_input" type="text">\n' +
'    <button class="btn_panel" id="level_10_btn">CHECK</button>\n' +
'</div>'];

let mySlider = new Swiper('.slider', {
	direction: 'vertical',
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	allowSlidePrev: false,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},
	navigation:{
		nextEl: '.swiper-button-next',
	},
	preloadImage: false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	virtual: {
		slides: (function(){
			let slide = []
			for (let i = 0; i<slidesJS.length; i++){
				slide.push(slidesJS[i])
			}
			return slide;
		}()),
	},
})

var sfx = {
	levelup: new Howl({
	   src: [
		  'levelup.mp3',
	   ],
	   volume: 0.1,
	   loop: false,
	}),
	panel_text: new Howl({
	   src: [
		  'panel-text.mp3'
	   ],
	   loop: false,
	   volume: 0.2,
	}),
	gameover_panel: new Howl({
		src: [
			'access-denied-panel.mp3'
		 ],
		 loop: false,
		 volume: 0.2,
	}),
 }
 var tracks = ["kerosene.mp3", "husk.mp3", "magazin.mp3"];

 var music = {
	track: new Howl({
		src: [tracks[Math.floor(Math.random() * 3)]],
		autoplay: true,
		loop: true,
		volume: 0.07,
	})
 }
 document.querySelector(".button-unmute").style.visibility = 'hidden';

 document.querySelector(".button-mute").addEventListener("click", () => {
	music.track.pause();
	document.querySelector(".button-mute").style.visibility = 'hidden';
	document.querySelector(".button-unmute").style.visibility = 'visible';
})
document.querySelector(".button-unmute").addEventListener("click", () => {
	music.track.play();
	document.querySelector(".button-mute").style.visibility = 'visible';
	document.querySelector(".button-unmute").style.visibility = 'hidden';
})

function disableScroll() {
	document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	mySlider.enabled = false;	
}

function enableScroll() {
	document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'visible';
	mySlider.enabled = true;
}

function myMove(elemId, startPos, endPos, interval) {
	var id = null;
	var elem = document.getElementById(elemId);
	clearInterval(id);
	id = setInterval(frame, interval);
	function frame() {
		if (startPos == endPos) {
		clearInterval(id);
		} else {
		startPos++;
		elem.style.right = startPos + 'px';
		}
	}
}

var result_6;
var lose = new Howl({
	src: [
	   'access-denied.mp3'
	],
	loop: false,
	volume: 0.95,
 });

function submitRecord() {

	const email = localStorage.getItem('email');
	const sc = localStorage.getItem('score');
	const url = "/api/account/details";
	const token = localStorage.getItem('_gamesiteId');
	const name = localStorage.getItem('username');

	(async () => {
		const rawResponse = await fetch(url, {
			method: "PUT",
			headers: {
				"Authorization": `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: email, username: name, score: parseInt(sc)})
		});
		const content = await rawResponse.json();
	})();
}

function topScorers() {
	const url = "/api/account/topscorers";

	return fetch(url, {
		method: "GET",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	})
		.then(response => response.json())
		.then(content => {
			const obj = content.topscorers;
			let table = '';
			for (let i=0; i < obj.length; i++){
				let str = obj[i];
				let okName = str.username;
				if ( okName.length > 9){
					okName = okName.substring(0,10);
				}
				table = table + (i+1) + '. ' + okName + '_'.repeat(14 - okName.length - str.score.toString(10).length) + str.score + '\n';
			}
			return table;
		});
}
var gameovertable = document.getElementsByClassName('gameovertable')[0];
var goChangable = document.getElementById('gameovercontent2');
var tsButton = document.getElementById('topscorersbutton');

function topScorersButtonClick(){
	tsButton.addEventListener('click', function (){

		tsButton.style.visibility = 'hidden';
		goChangable.style.whiteSpace = "pre-wrap";
		goChangable.style.wordBreak= "break-all";
		goChangable.style.textAlign = "left";
		topScorers().then(table => {
			goChangable.innerHTML = table;
		});

	})
}
function gameover(){

	document.getElementById('gameovercontent').innerHTML = 'Your score is ' + score;

	if (localStorage.getItem('username') == null){
		goChangable.innerHTML = 'Sign in/Sign up to save it. (left-bottom corner)';
	} else{

		if (score > record){
			goChangable.innerHTML = "It's your new record! Congratulations.";
			record = score;
			localStorage.setItem('record', record);
			submitRecord();
		} else{
			goChangable.innerHTML = "Train more and you will succeed.";

		}
	}
	gameovertable.style.visibility = 'visible';

	document.getElementsByClassName('button-close')[0].addEventListener('click', function(){
		gameovertable.style.visibility = 'hidden';
	})
	topScorersButtonClick();
};

function cheater(){
	score = 0;
	document.getElementById('gameovercontent').innerHTML = 'Your score is ' + score;
	document.getElementById('scoreNums').innerHTML = score;
	goChangable.innerHTML = 'You were killed as a cheater x︿x';
	gameovertable.style.visibility = 'visible';
	document.getElementById('scoreNums').innerHTML = score;
	topScorersButtonClick();
}

function checkAnswer(btn, rightAnswear, input){

	document.getElementsByClassName("response")[i].style.visibility = 'visible';
	if (i === 0){
		i++;
	}
	button = document.getElementById(btn);
	currentInput = document.getElementById(input);

	button.addEventListener("click",function(){
		button.style.visibility = 'hidden';
		if (currentInput.value == rightAnswear){
			score = score + [8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,][k]
			k++;

			document.getElementById('scoreNums').innerHTML = score;

			enableScroll();
			if (btn === "level_6_btn"){
				result_6 = true
			}
			if (btn === "level_10_btn"){
				cheater();
				lose.play();
			} else{
				sfx.levelup.play();
			}
		} else{
			if (btn === "level_6_btn" || btn === "level_62_btn" || btn === "level_7_btn" || btn === "level_8_btn"){
				lose = sfx.gameover_panel;
			};
			lose.play();
			result_6 = false;
			gameover();
		}
		localStorage.setItem('score', score);
	});
};

// _________________________________MAIN PAGE__________________________________

score = 0;
var user;
var record = 0;

if (localStorage.getItem('username') != null){
	user = localStorage.getItem('username');
	document.getElementById('user').innerHTML = user;

	localStorage.setItem('score', '0');
	if (localStorage.getItem('record') != null) {
		record = localStorage.getItem('record')
	} else{
		record = localStorage.getItem('score');
		localStorage.setItem('record', record);
	}
};

document.getElementsByClassName('score')[0].style.visibility = 'hidden';
document.getElementsByClassName('gameovertable')[0].style.visibility = 'hidden';

setTimeout(myMove("papper", -120, 10, 6), 900);

document.getElementsByClassName('swiper-button-next')[0].addEventListener("click",function(){
	document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
})
main = document.getElementById('level-main');
main.onwheel = hideArrow;

function hideArrow(event){
	event.preventDefault();
	if (event.deltaY > 0){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	};
}
var hammer = new Hammer(main)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
hammer.on('swipe', function(){
	document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
});

// __________________________________LEVEL 0___________________________________

var i = 0;
var k = 0;

document.getElementsByClassName("response")[i].style.visibility = 'hidden';
document.getElementById('rat-glow').style.visibility = 'hidden';
document.getElementById("cityRatPhrase").style.visibility = 'hidden';

cityRat = document.getElementById("level-0");

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}
LevelZeroNumber = getRndInteger(100,999)

cityRat.addEventListener("mouseover", cityRatAction);
cityRat.addEventListener("touchmove", cityRatAction);
cityRat.onwheel = stopScrolling;

function stopScrolling(event){
	event.preventDefault();
	if (event.deltaY > 0){
		cityRatAction();
	};
}

function cityRatAction (){

	disableScroll()
	setTimeout(function(){
		document.getElementById('rat-glow').style.visibility = 'visible';
		document.getElementsByClassName('score')[0].style.visibility = 'visible';

	}, 500);
	
	setTimeout(ratPhrase, 2000);
	cityRat.removeEventListener("mouseover", cityRatAction);
	cityRat.removeEventListener("touchmove", cityRatAction);
	cityRat.onwheel = '';
}

function ratPhrase() {
	elem = document.getElementById("cityRatPhrase");
	elem.style.visibility = 'visible';
	setTimeout(function(){
		elem.innerHTML = LevelZeroNumber;
	}, 400);
	
	myMove("cityRatPhrase", 2, 4, 6);

	setTimeout(ratPhraseGone, 800);

	function ratPhraseGone(){
		elem.style.visibility = 'hidden';
		checkAnswer("level_0_btn",LevelZeroNumber, 'level_0_input',8);
	}

}

hammer = new Hammer(cityRat)
hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
hammer.on('swipe', function(){
	document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
});

// __________________________________LEVEL 1___________________________________

function checkShelterRat(){
	shelterRat = document.getElementById("level-1");
	if (shelterRat == null){
		setTimeout(checkShelterRat, 150);
		return;
	} else{
		level1();
	}
}

setTimeout(checkShelterRat, 100);

function level1(){
	shelterRat = document.getElementById("level-1");
	document.getElementById("response-1").style.visibility = 'hidden';
	document.getElementById('rat-glow2').style.visibility = 'hidden';
	document.getElementById("shelterRatPhrase").style.visibility = 'hidden';

	LevelOneNumber = getRndInteger(1000,9999)

	shelterRat.addEventListener("mouseover", shelterRatAction);
	shelterRat.addEventListener("touchmove", shelterRatAction);
	shelterRat.onwheel = stopScrolling1;

	function stopScrolling1(event){
		event.preventDefault();
		if (event.deltaY > 0){
			shelterRatAction();
		};
	}

	function shelterRatAction (){

		disableScroll();

		setTimeout(function(){
			document.getElementById('rat-glow2').style.visibility = 'visible';
		}, 500);
		
		setTimeout(shelterPhrase, 2000);
		shelterRat.removeEventListener("mouseover", shelterRatAction);
		shelterRat.removeEventListener("touchmove", shelterRatAction);
		shelterRat.onwheel = '';
	}



	function shelterPhrase() {
		shelterPh = document.getElementById("shelterRatPhrase");
		shelterPh.style.visibility = 'visible';
		setTimeout(function(){
			shelterPh.innerHTML = LevelOneNumber;
		}, 400);
		
		myMove("shelterRatPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 800);

		function ratPhraseGone(){
			shelterPh.style.visibility = 'hidden';
			checkAnswer("level_1_btn",LevelOneNumber, 'level_1_input');
		}

	}

	hammer = new Hammer(shelterRat)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 2___________________________________

function checkBasementRat(){
	basementRat = document.getElementById("level-2");

	if (basementRat == null){
		setTimeout(checkBasementRat, 100);
		return;
	} else{
		level2();
	}
}

setTimeout(checkBasementRat, 100);

function level2(){
	basementRat = document.getElementById("level-2");
	document.getElementById("response-2").style.visibility = 'hidden';
	document.getElementById('basement-glow').style.visibility = 'hidden';
	document.getElementById("basementRatPhrase").style.visibility = 'hidden';

	LevelTwoNumber = getRndInteger(10000,99999)

	basementRat.addEventListener("mouseover", basementRatAction);
	basementRat.addEventListener("touchmove", basementRatAction);
	basementRat.onwheel = stopScrolling2;

	function stopScrolling2(event){
		event.preventDefault();
		if (event.deltaY > 0){
			basementRatAction();
		};
	}

	function basementRatAction (){

		disableScroll();

		setTimeout(function(){
			document.getElementById('basement-glow').style.visibility = 'visible';
		}, 500);
		
		setTimeout(basementPhrase, 2000);
		basementRat.removeEventListener("mouseover", basementRatAction);
		basementRat.removeEventListener("touchmove", basementRatAction);
		basementRat.onwheel = '';
	}

	function basementPhrase() {
		elem = document.getElementById("basementRatPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelTwoNumber;
		}, 400);

		myMove("basementRatPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 800);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_2_btn",LevelTwoNumber, 'level_2_input');
		}
	}

	hammer = new Hammer(basementRat)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 3___________________________________

function checkSeversRat(){
	severs = document.getElementById("level-3");

	if (severs == null){
		setTimeout(checkSeversRat, 100);
		return;
	} else{
		level3();
	}
}

setTimeout(checkSeversRat, 100);

function level3(){
	severs = document.getElementById("level-3");
	document.getElementById("response-3").style.visibility = 'hidden';
	document.getElementById("severs-glow").style.visibility = 'hidden';
	document.getElementById("seversPhrase").style.visibility = 'hidden';

	LevelThreeNumber = getRndInteger(100000,999999)

	severs.addEventListener("mouseover", seversAction);
	severs.addEventListener("touchmove", seversAction);
	severs.onwheel = stopScrolling3;

	function stopScrolling3(event){
		event.preventDefault();
		if (event.deltaY > 0){
			seversAction();
		};
	}

	function seversAction (){

		disableScroll();

		setTimeout(function(){
			document.getElementById("severs-glow").style.visibility = 'visible';
			document.getElementById("severs-back").style.visibility = 'hidden';
		}, 500);
		
		setTimeout(seversPhrase, 2000);
		severs.removeEventListener("mouseover", seversAction);
		severs.removeEventListener("touchmove", seversAction);
		severs.onwheel = '';
	}

	function seversPhrase() {
		elem = document.getElementById("seversPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelThreeNumber;
		}, 400);

		myMove("seversPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 800);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_3_btn",LevelThreeNumber, 'level_3_input');
		}
	}
};

// __________________________________LEVEL 4___________________________________

function checkSoldier(){
	soldier = document.getElementById("level-4");

	if (soldier == null){
		setTimeout(checkSoldier, 100);
		return;
	} else{
		level4();
	}
}

setTimeout(checkSoldier, 100);

function level4(){
	soldier = document.getElementById("level-4");
	document.getElementById("response-4").style.visibility = 'hidden';
	document.getElementById("soldier-glow").style.visibility = 'hidden';
	document.getElementById("soldierPhrase").style.visibility = 'hidden';

	LevelFourNumber = getRndInteger(100000,999999)

	soldier.addEventListener("mouseover", soldierAction);
	soldier.addEventListener("touchmove", soldierAction);
	soldier.onwheel = stopScrolling4;

	function stopScrolling4(event){
		event.preventDefault();
		if (event.deltaY > 0){
			soldierAction();
		};
	}

	function soldierAction (){

		disableScroll();

		setTimeout(function(){
			document.getElementById("soldier-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(soldierPhrase, 2000);
		soldier.removeEventListener("mouseover", soldierAction);
		soldier.removeEventListener("touchmove", soldierAction);
		soldier.onwheel = '';
	}

	function soldierPhrase() {
		elem = document.getElementById("soldierPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelFourNumber;
		}, 400);

		myMove("soldierPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 700);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_4_btn",LevelFourNumber, 'level_4_input');
		}
	}

	hammer = new Hammer(soldier)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 5___________________________________

function checkCat(){
	cat = document.getElementById("level-5");

	if (cat == null){
		setTimeout(checkCat, 100);
		return;
	} else{
		level5();
	}
}

setTimeout(checkCat, 100);

function level5(){
	cat = document.getElementById("level-5");
	document.getElementById("response-5").style.visibility = 'hidden';
	document.getElementById("cat-glow").style.visibility = 'hidden';
	document.getElementById("catPhrase").style.visibility = 'hidden';

	LevelFiveNumber = getRndInteger(100000,999999)

	cat.addEventListener("mouseover", catAction);
	cat.addEventListener("touchmove", catAction);
	cat.onwheel = stopScrolling5;

	function stopScrolling5(event){
		event.preventDefault();
		if (event.deltaY > 0){
			catAction();
		};
	}

	function catAction (){
		disableScroll();

		setTimeout(function(){
			document.getElementById("cat-glow").style.visibility = 'visible';
			document.getElementById("cat-front").style.visibility = 'hidden';
		}, 500);
		
		setTimeout(catPhrase, 2000);
		cat.removeEventListener("mouseover", catAction);
		cat.removeEventListener("touchmove", catAction);
		cat.onwheel = '';
	}

	function catPhrase() {
		elem = document.getElementById("catPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelFiveNumber;
		}, 400);

		myMove("catPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 650);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_5_btn",LevelFiveNumber, 'level_5_input');
		}
	}

	hammer = new Hammer(cat)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

//  __________________________________LEVEL 6___________________________________

function checkCyborg(){
	cyborg = document.getElementById("level-6");

	if (cyborg == null){
		setTimeout(checkCyborg, 100);
		return;
	} else{
		level6();
	}
}

setTimeout(checkCyborg, 100);

function level6(){
	cyborg = document.getElementById("level-6");
	document.getElementById("response-6").style.visibility = 'hidden';
	document.getElementById("cyborg-glow").style.visibility = 'hidden';
	document.getElementById("cyborgPhrase").style.visibility = 'hidden';

	LevelSixNumber = getRndInteger(100000,999999)

	cyborg.addEventListener("mouseover", cyborgAction);
	cyborg.addEventListener("touchmove", cyborgAction);
	cyborg.onwheel = stopScrolling6;

	function stopScrolling6(event){
		event.preventDefault();
		if (event.deltaY > 0){
			cyborgAction();
		};
	}

	function cyborgAction (){
		disableScroll();
		setTimeout(function(){
			document.getElementById("cyborg-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(cyborgPhrase, 2000);
		cyborg.removeEventListener("mouseover", cyborgAction);
		cyborg.removeEventListener("touchmove", cyborgAction);
		cyborg.onwheel = '';
	}

	function cyborgPhrase() {
		elem = document.getElementById("cyborgPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelSixNumber;
		}, 400);

		myMove("cyborgPhrase", 2, 4, 6);

		setTimeout(ratPhraseGone, 600);

		function checkResult(){
			if (result_6 === undefined || result_6 === false){
				setTimeout(checkResult, 170);
				return;
			}
			if (result_6===true){
				setTimeout(myMove("panel-text", -120, -6, 6), 900);
				sfx.panel_text.play();
			};
		};

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_6_btn",LevelSixNumber, 'level_6_input');
			setTimeout(checkResult, 100);
		}
	}

	hammer = new Hammer(cyborg)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 62___________________________________

function checkEnter(){
	enter = document.getElementById("level-62");

	if (enter == null){
		setTimeout(checkEnter, 100);
		return;
	} else{
		level62();
	}
}

setTimeout(checkEnter, 100);

function level62(){
	enter = document.getElementById("level-62");
	document.getElementById("response-62").style.visibility = 'hidden';
	document.getElementById("enterPhrase").style.visibility = 'hidden';

	LevelSixTwoNumber = getRndInteger(1000000,9999999)

	enter.addEventListener("mouseover", enterAction);
	enter.addEventListener("touchmove", enterAction);
	enter.onwheel = stopScrolling62;

	function stopScrolling62(event){
		event.preventDefault();
		if (event.deltaY > 0){
			enterAction();
		};
	}

	function enterAction (){
		disableScroll();
		setTimeout(enterPhrase, 2000);
		enter.removeEventListener("mouseover", enterAction);
		enter.removeEventListener("touchmove", enterAction);
		enter.onwheel = '';
	}

	function enterPhrase() {
		elem = document.getElementById("enterPhrase");
		elem.style.visibility = 'visible';

		setTimeout(function(){
			elem.innerHTML = LevelSixTwoNumber;
			elem.style.fontSize = '39px';
		}, 1500);

		setTimeout(ratPhraseGone, 1770);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			elem.style.fontSize = '27px';
			checkAnswer("level_62_btn",LevelSixTwoNumber, 'level_62_input');
		}
	}

	hammer = new Hammer(enter)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

 // __________________________________LEVEL 7___________________________________

function checkMashroom(){
	mashroom = document.getElementById("level-7");

	if (mashroom == null){
		setTimeout(checkMashroom, 100);
		return;
	} else{
		level7();
	}
}

setTimeout(checkMashroom, 100);

function level7(){
	mashroom = document.getElementById("level-7");
	document.getElementById("response-7").style.visibility = 'hidden';
	document.getElementById("mashroom-glow").style.visibility = 'hidden';
	document.getElementById("mashroomPhrase").style.visibility = 'hidden';

	LevelSevenNumber = getRndInteger(1000000,9999999)

	mashroom.addEventListener("mouseover", mashroomAction);
	mashroom.addEventListener("touchmove", mashroomAction);
	mashroom.onwheel = stopScrolling7;

	function stopScrolling7(event){
		event.preventDefault();
		if (event.deltaY > 0){
			mashroomAction();
		};
	}

	function mashroomAction (){
		disableScroll();
		setTimeout(function(){
			document.getElementById("mashroom-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(mashroomPhrase, 2000);
		mashroom.removeEventListener("mouseover", mashroomAction);
		mashroom.removeEventListener("touchmove", mashroomAction);
		mashroom.onwheel = '';
	}

	function mashroomPhrase() {
		elem = document.getElementById("mashroomPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.style.fontSize = '39px';
			elem.innerHTML = LevelSevenNumber;
		}, 1500);

		setTimeout(ratPhraseGone, 1700);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_7_btn",LevelSevenNumber, 'level_7_input');
		}
	}

	hammer = new Hammer(mashroom)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 8___________________________________

function checkGreenCave(){
	greenCave = document.getElementById("level-8");

	if (greenCave == null){
		setTimeout(checkGreenCave, 100);
		return;
	} else{
		level8();
	}
}

setTimeout(checkGreenCave, 100);

function level8(){
	greenCave = document.getElementById("level-8");
	document.getElementById("response-8").style.visibility = 'hidden';
	document.getElementById("greenCave-glow").style.visibility = 'hidden';
	document.getElementById("greenCavePhrase").style.visibility = 'hidden';

	LevelEightNumber = getRndInteger(1000000,9999999)

	greenCave.addEventListener("mouseover", greenCaveAction);
	greenCave.addEventListener("touchmove", greenCaveAction);
	greenCave.onwheel = stopScrolling8;

	function stopScrolling8(event){
		event.preventDefault();
		if (event.deltaY > 0){
			greenCaveAction();
		};
	}

	function greenCaveAction (){
		disableScroll();
		setTimeout(function(){
			document.getElementById("greenCave-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(greenCavePhrase, 2000);
		greenCave.removeEventListener("mouseover", greenCaveAction);
		greenCave.removeEventListener("touchmove", greenCaveAction);
		greenCave.onwheel = '';
	}

	function greenCavePhrase() {
		elem = document.getElementById("greenCavePhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.style.fontSize = '39px';
			elem.innerHTML = LevelEightNumber;
		}, 1500);

		setTimeout(ratPhraseGone, 1670);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_8_btn",LevelEightNumber, 'level_8_input');
		}
	}

	hammer = new Hammer(greenCave)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 9___________________________________

function checkGates(){
	gates = document.getElementById("level-9");

	if (gates == null){
		setTimeout(checkGates, 100);
		return;
	} else{
		level9();
	}
}

setTimeout(checkGates, 100);

function level9(){
	gates = document.getElementById("level-9");
	document.getElementById("response-9").style.visibility = 'hidden';
	document.getElementById("gates-glow").style.visibility = 'hidden';
	document.getElementById("gatesPhrase").style.visibility = 'hidden';

	LevelNineNumber = getRndInteger(1000000,9999999)

	gates.addEventListener("mouseover", gatesAction);
	gates.addEventListener("touchmove", gatesAction);
	gates.onwheel = stopScrolling9;

	function stopScrolling9(event){
		event.preventDefault();
		if (event.deltaY > 0){
			gatesAction();
		};
	}

	function gatesAction (){
		disableScroll();
		setTimeout(function(){
			document.getElementById("gates-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(gatesPhrase, 2000);
		gates.removeEventListener("mouseover", gatesAction);
		gates.removeEventListener("touchmove", gatesAction);
		gates.onwheel = '';
	}

	function gatesPhrase() {
		elem = document.getElementById("gatesPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelNineNumber;
		}, 1500);

		setTimeout(ratPhraseGone, 1650);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_9_btn",LevelNineNumber, 'level_9_input');
		}
	}

	hammer = new Hammer(gates)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};

// __________________________________LEVEL 10___________________________________

function checkReptilian(){
	reptilian = document.getElementById("level-10");

	if (reptilian == null){
		setTimeout(checkReptilian, 100);
		return;
	} else{
		level10();
	}
}

setTimeout(checkReptilian, 100);

function level10(){
	reptilian = document.getElementById("level-10");
	document.getElementById("response-10").style.visibility = 'hidden';
	document.getElementById("reptilian-glow").style.visibility = 'hidden';
	document.getElementById("reptilianPhrase").style.visibility = 'hidden';

	LevelTenNumber = getRndInteger(10000000,99999999)

	reptilian.addEventListener("mouseover", reptilianAction);
	reptilian.addEventListener("touchmove", reptilianAction);
	reptilian.onwheel = stopScrolling10;

	function stopScrolling10(event){
		event.preventDefault();
		if (event.deltaY > 0){
			reptilianAction();
		};
	}

	function reptilianAction (){
		disableScroll();
		setTimeout(function(){
			document.getElementById("reptilian-glow").style.visibility = 'visible';
		}, 500);
		
		setTimeout(reptilianPhrase, 2000);
		reptilian.removeEventListener("mouseover", reptilianAction);
		reptilian.removeEventListener("touchmove", reptilianAction);
		reptilian.onwheel = '';
	}

	function reptilianPhrase() {
		elem = document.getElementById("reptilianPhrase");
		elem.style.visibility = 'visible';
		
		setTimeout(function(){
			elem.innerHTML = LevelTenNumber;
		}, 1500);

		setTimeout(ratPhraseGone, 1535);

		function ratPhraseGone(){
			elem.style.visibility = 'hidden';
			checkAnswer("level_10_btn",LevelTenNumber, 'level_10_input');
		}
	}

	hammer = new Hammer(reptilian)
	hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP });
	hammer.on('swipe', function(){
		document.getElementsByClassName('swiper-button-next')[0].style.visibility = 'hidden';
	});
};
