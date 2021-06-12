import { svg_tag } from "./svg.js";
import { leetcode_icon } from "./img.js";
import { style } from "./style.js";

function not_found_card(parameters) {
    const [svg_start_tag, svg_close_tag] = svg_tag(parameters.width, parameters.height, 500, parameters.extension == "activity" ? 400 : 200);
    return `${svg_start_tag}
<style>${style(parameters)}</style>
<g class="theme_${parameters.style}">
<rect id="background" stroke="lightgray" stroke-width="${parameters.border}" width="${500 - parameters.border}" height="${
        (parameters.extension == "activity" ? 400 : 200) - parameters.border
    }" x="${parameters.border / 2}" y="${parameters.border / 2}" rx="4" />
<g id="icon" transform="translate(30, 65)">${leetcode_icon(60, 60)}</g>
<text transform="translate(100, 115)" style="font-size: 48px;">User Not Found</text>
<a target="_blank" href="https://github.com/JacobLinCool/leetcode-stats-card"><text class="sub" transform="translate(480, 180)" text-anchor="end">LeetCode Status Card</text></a>
</g>
${svg_close_tag}`;
}

export { not_found_card };