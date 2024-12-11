// ==UserScript==
// @name         Force Discord Canary
// @author       Puyodead1
// @description  Redirect Stable and PTB to Canary
// @version      1.0.0
// @match        *://discord.com/*
// @match        *://ptb.discord.com/*
// @match        *://ptb.discordapp.com/*
// @match        *://discordapp.com/*
// @match        *://www.discord.com/*
// @match        *://www.ptb.discord.com/*
// @match        *://www.ptb.discordapp.com/*
// @match        *://www.discordapp.com/*
// @run-at       document-start
// @grant        window.onurlchange
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// ==/UserScript==

(function() {
    function redirect() {
        location.hostname = "canary.discord.com";
    }

    window.addEventListener('urlchange', ({ url }) => {
        redirect();
    });

    redirect();
})();