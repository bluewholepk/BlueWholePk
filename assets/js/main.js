/**
* Template Name: ComingSoon - v4.4.0
* Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Countdown timer
   */


  // let countdown = select('.countdown');
  // const output = countdown.innerHTML;

  // const countDownDate = function() {
  //   let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();
  //   let timeleft=new Date();
  //   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  //   countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
  // }
  // countDownDate();
  // setInterval(countDownDate, 1000);

  // Select all countdown elements
let countdowns = document.querySelectorAll('.countdown');

function updateCurrentTime() {
    let now = new Date();
    
    let date = now.getDate(); // Get the current date
    let month = now.getMonth() + 1; // Get month (0-indexed, so add 1)
    let year = now.getFullYear(); // Get full year
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 (midnight case)

    // Format with leading zeros if needed
    month = month < 10 ? '0' + month : month;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update each countdown section separately
    countdowns.forEach((countdown, index) => {
        if (index === 0) {
            // First countdown div (Date, Month, Year)
            countdown.innerHTML = `
                <div>
                  <h3>${date}</h3>
                  <h4>Date</h4>
                </div>
                <div>
                  <h3>${month}</h3>
                  <h4>Month</h4>
                </div>
                <div>
                  <h3>${year}</h3>
                  <h4>Year</h4>
                </div>`;
        } else if (index === 1) {
            // Second countdown div (Time)
            countdown.innerHTML = `
                <div>
                  <h3>${hours}</h3>
                  <h4>Hours</h4>
                </div>
                <div>
                  <h3>${minutes}</h3>
                  <h4>Minutes</h4>
                </div>
                <div>
                  <h3>${seconds}</h3>
                  <h4>Seconds</h4>
                </div>
                <div>
                  <h3>${ampm}</h3>
                  <h4>AM/PM</h4>
                </div>`;
        }
    });
}

// Update every second
setInterval(updateCurrentTime, 1000);

// Run once immediately
updateCurrentTime();



})()