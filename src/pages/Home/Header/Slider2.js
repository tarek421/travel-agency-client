import React from 'react';
import './Slider2.css';
import anime from 'animejs/lib/anime.es.js';

const Slider2 = () => {


    function init() {
        const slider = document.querySelector(".slider");
        const nextBtn = slider.querySelector(".slider .nav .next");
        const prevBtn = slider.querySelector(".slider .nav .prev");
        const items = slider.querySelectorAll(".slider .item");

        let current = 0;


        function anim(current, next, callback) {
            const currentImgs = current.querySelectorAll(".img");
            const currentText = current.querySelectorAll(".content .letter");
            const nextImgs = next.querySelectorAll(".img");
            const nextText = next.querySelectorAll(".content .letter");

            const t = 400;
            const offset = "-=" + t * 0.4;
            const imgOffset = t * 0.8;

            const tl = anime.timeline({
                easing: "easeInOutQuint",
                duration: t,
                complete: callback
            });

            // Add children
            tl.add({
                targets: currentText,
                translateY: [0, "-.75em"],
                /*clipPath: ['polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'],*/
                opacity: [1, 0],
                easing: "easeInQuint",
                duration: t,
                delay: (el, i) => 10 * (i + 1)
            })
                .add(
                    {
                        targets: currentImgs[0],
                        translateY: -600,
                        translateZ: 0,
                        rotate: [0, "-15deg"],
                        opacity: [1, 0],
                        easing: "easeInCubic"
                    },
                    offset
                )
                .add(
                    {
                        targets: currentImgs[1],
                        translateY: -600,
                        translateZ: 0,
                        rotate: [0, "15deg"],
                        opacity: [1, 0],
                        easing: "easeInCubic"
                    },
                    "-=" + imgOffset
                )
                .add(
                    {
                        targets: currentImgs[2],
                        translateY: -600,
                        translateZ: 0,
                        rotate: [0, "-15deg"],
                        opacity: [1, 0],
                        easing: "easeInCubic"
                    },
                    "-=" + imgOffset
                )
                .add(
                    {
                        targets: currentImgs[3],
                        translateY: -600,
                        translateZ: 0,
                        rotate: [0, "15deg"],
                        opacity: [1, 0],
                        easing: "easeInCubic"
                    },
                    "-=" + imgOffset
                )
                .add({
                    targets: current,
                    opacity: 0,
                    visibility: "hidden",
                    duration: 10,
                    easing: "easeInCubic"
                })
                .add(
                    {
                        targets: next,
                        opacity: 1,
                        visibility: "visible",
                        duration: 10
                    },
                    offset
                )
                .add(
                    {
                        targets: nextImgs[0],
                        translateY: [600, 0],
                        translateZ: 0,
                        rotate: ["15deg", 0],
                        opacity: [0, 1],
                        easing: "easeOutCubic"
                    },
                    offset
                )
                .add(
                    {
                        targets: nextImgs[1],
                        translateY: [600, 0],
                        translateZ: 0,
                        rotate: ["-15deg", 0],
                        opacity: [0, 1],
                        easing: "easeOutCubic"
                    },
                    "-=" + imgOffset
                )
                .add(
                    {
                        targets: nextImgs[2],
                        translateY: [600, 0],
                        translateZ: 0,
                        rotate: ["15deg", 0],
                        opacity: [0, 1],
                        easing: "easeOutCubic"
                    },
                    "-=" + imgOffset
                )
                .add(
                    {
                        targets: nextImgs[3],
                        translateY: [600, 0],
                        translateZ: 0,
                        rotate: ["-15deg", 0],
                        opacity: [0, 1],
                        easing: "easeOutCubic"
                    },
                    "-=" + imgOffset
                )
                .add(
                    {
                        targets: nextText,
                        translateY: [".75em", 0],
                        translateZ: 0,
                        /*clipPath: ['polygon(0 0, 100% 0, 100% 0, 0 0)','polygon(0 0, 100% 0, 100% 100%, 0% 100%)'],*/
                        opacity: [0, 1],
                        easing: "easeOutQuint",
                        duration: t * 1.5,
                        delay: (el, i) => 10 * (i + 1)
                    },
                    offset
                );
        }

        let isPlaying = false;

        function updateSlider(newIndex) {
            const currentItem = items[current];
            const newItem = items[newIndex];

            function callback() {
                currentItem.classList.remove("is-active");
                newItem.classList.add("is-active");
                current = newIndex;
                isPlaying = false;
            }

            anim(currentItem, newItem, callback);
        }

        function next() {
            if (isPlaying) return;
            isPlaying = true;
            const newIndex = current === items.length - 1 ? 0 : current + 1;
            updateSlider(newIndex);
        }

        function prev() {
            if (isPlaying) return;
            isPlaying = true;
            const newIndex = current === 0 ? items.length - 1 : current - 1;
            updateSlider(newIndex);
        }

        nextBtn.onclick = next;
        prevBtn.onclick = prev;
    }

    document.addEventListener("DOMContentLoaded", init);



    return (
        <div class="slider">
            <div class="nav">
                <div class="next"></div>
                <div class="prev"></div>
            </div>
            <div class="item is-active">
                <div class="content">
                    <div class="wrap">
                        <h1>TAKE <span>YOUR DREAM</span></h1>
                        <h5>Your travel, your life</h5>
                    </div>
                </div>
                <div class="imgs">
                    <div class="grid">
                        <div class="img img-1"><img src="https://picsum.photos/seed/a/700/700" alt="images" /></div>
                        <div class="img img-2"><img src="https://picsum.photos/seed/b/700/700" alt="images" /></div>
                        <div class="img img-3"><img src="https://picsum.photos/seed/c/700/700" alt="images" /></div>
                        <div class="img img-4"><img src="https://picsum.photos/seed/d/700/700" alt="images" /></div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="content">
                    <div class="wrap">
                        <h1>ADVENTURE IS <span>WORTHWHILE</span></h1>
                        <h5>For my part, I travel not to go anywhere, I travel for travel shake. The great affeir is to move.</h5>
                    </div>
                </div>
                <div class="imgs">
                    <div class="grid">
                        <div class="img img-1"><img src="https://picsum.photos/seed/e/700/700" alt="images" /></div>
                        <div class="img img-2"><img src="https://picsum.photos/seed/f/700/700" alt="images" /></div>
                        <div class="img img-3"><img src="https://picsum.photos/seed/g/700/700" alt="images" /></div>
                        <div class="img img-4"><img src="https://picsum.photos/seed/h/700/700" alt="images" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider2;