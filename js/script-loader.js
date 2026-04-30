import { mainInit } from './main.js';
import { articleReveal } from './article_reveals.js';
import { formInit } from './form.js';
import { formBtnTextInit } from './form_btn_text.js';
import { heroShowreelInit } from './hero-showreel.js';
import { modalScriptInit } from './modal_script.js';
import { navigationInit } from './navigation.js';
import { projectListInit } from './project-list.js';
import { revealsInit } from './reveals.js';
import { shareInit } from './share.js';
import { swiperInit } from './swiper.js';
import { tabHoverInit } from './tab-hover.js';

mainInit();
heroShowreelInit();
projectListInit();
navigationInit();
swiperInit();
tabHoverInit();
formInit();
revealsInit();
formBtnTextInit();
shareInit();
modalScriptInit();
articleReveal();

console.log("PRD - Loading main scripts loader");