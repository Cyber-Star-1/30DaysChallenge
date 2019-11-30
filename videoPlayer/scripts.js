{
  let mouseDown = false;
  /* Get Our Elements*/
  const els = {
    player: document.querySelector(".player"),
    video: document.querySelector(".viewer"),
    progress: document.querySelector(`.progress`),
    progressBar: document.querySelector(".progress__filled"),
    toggle: document.querySelector(".toggle"),
    skipButtons: document.querySelectorAll("[data-skip]"),
    ranges: document.querySelectorAll(".player__slider") 
  };
  /* Build out functions */
  const functions = {
    togglePlay: () => {
      const method = els.video.paused ? `play` : `pause`;
      els.video[method]();
    },
    updateButton: el => {
      let icon = el.paused ? "►" : "❚❚";
      els.toggle.textContent = icon;
    },
    skip: el => {
      els.video.currentTime += parseFloat(el.dataset.skip);
    },
    handleRangeUpdate: el => {
      els.video[el.name] = el.value;
    },
    handleProgress: () => {
      const percent = (els.video.currentTime / els.video.duration) * 100;
      els.progressBar.style.flexBasis = `${percent}%`;
    },
    scrub: el => {
      const scrubTime =
        (el.offsetX / els.progress.offsetWidth) * els.video.duration;
      els.video.currentTime = scrubTime;
    }
  };
  /* Adding event listeners */
  els.video.addEventListener("play", () => {
    functions.updateButton(els.video);
  });
  els.video.addEventListener("click", () => {
    functions.togglePlay();
  });
  els.video.addEventListener("pause", () => {
    functions.updateButton(els.video);
  });
  els.video.addEventListener("timeupdate", () => {
    functions.handleProgress();
  });
  els.skipButtons.forEach(el =>
    el.addEventListener("click", () => {
      functions.skip(el);
    })
  );
  els.toggle.addEventListener("click", () => {
    functions.togglePlay();
  });
  window.addEventListener("keyup", e => {
    if (e.which === 32) {
      functions.togglePlay();
      e.preventDefault();
    }
    if(e.which === 37){
      functions.skip(els.skipButtons[0])
    }
    if(e.which === 39){
      functions.skip(els.skipButtons[1])
    }
  });
  els.ranges.forEach(el => {
    el.addEventListener("change", () => {
      functions.handleRangeUpdate(el);
    });
    el.addEventListener("mousemove", () => {
      functions.handleRangeUpdate(el);
    });
  });
  els.progress.addEventListener("click", el => {
    functions.scrub(el);
  });
  els.progress.addEventListener("mouse", el => {
    mouseDown && functions.scrub(el);
  });
  els.progress.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  els.progress.addEventListener("mouseup", () => {
    mouseDown = false;
  });
}
