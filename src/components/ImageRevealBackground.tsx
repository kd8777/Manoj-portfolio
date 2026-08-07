import { useEffect, useRef } from "react";

interface Particle {
  // Original image position
  ox: number;
  oy: number;

  // Current particle position
  x: number;
  y: number;

  // Pixel color
  r: number;
  g: number;
  b: number;
  a: number;

  // Particle size
  size: number;

  // Dust movement
  vx: number;
  vy: number;

  // Individual dissolve timing
  threshold: number;
}

export default function ImageRevealBackground() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    // ============================================
    // IMAGE
    // ============================================

    const image = new Image();

    // IMPORTANT:
    // Photoshop background removed image
    image.src = "/manoj-cutout.png";

    let animationFrame = 0;

    let particles: Particle[] = [];

    let imageLoaded = false;

    let scrollProgress = 0;

    let imageX = 0;
    let imageY = 0;
    let imageWidth = 0;
    let imageHeight = 0;

    // ============================================
    // SETTINGS
    // ============================================

    /*
     * Image height on screen.
     *
     * 0.86 = 86vh
     */
    const IMAGE_HEIGHT = 0.86;

    /*
     * Right side spacing.
     */
    const IMAGE_RIGHT = 0.035;

    /*
     * Particle quality.
     *
     * Smaller = more particles / better image
     * Larger = better performance
     */
    const PARTICLE_GAP = 4;

    /*
     * Safety limit.
     */
    const MAX_PARTICLES = 55000;

    // ============================================
    // EASING
    // ============================================

    const easeInOut = (t: number) => {
      return t < 0.5
        ? 2 * t * t
        : 1 -
            Math.pow(
              -2 * t + 2,
              2
            ) /
              2;
    };

    // ============================================
    // IMAGE POSITION
    // ============================================

    const calculateImagePosition = () => {
      if (!imageLoaded) return;

      const viewportWidth =
        window.innerWidth;

      const viewportHeight =
        window.innerHeight;

      const aspectRatio =
        image.naturalWidth /
        image.naturalHeight;

      /*
       * Image height
       */
      imageHeight =
        viewportHeight *
        IMAGE_HEIGHT;

      /*
       * Keep original aspect ratio
       */
      imageWidth =
        imageHeight *
        aspectRatio;

      /*
       * Right aligned
       */
      imageX =
        viewportWidth -
        imageWidth -
        viewportWidth *
          IMAGE_RIGHT;

      /*
       * Bottom aligned
       */
      imageY =
        viewportHeight -
        imageHeight;
    };

    // ============================================
    // CREATE PARTICLES FROM IMAGE
    // ============================================

    const createParticles = () => {
      if (!imageLoaded) return;

      particles = [];

      /*
       * Offscreen canvas.
       *
       * This reads the REAL pixels from
       * manoj-cutout.png.
       */

      const offscreen =
        document.createElement(
          "canvas"
        );

      const offCtx =
        offscreen.getContext("2d", {
          willReadFrequently: true,
        });

      if (!offCtx) return;

      /*
       * Scale image according to screen size.
       */

      const scale =
        imageHeight /
        image.naturalHeight;

      const workingWidth =
        Math.max(
          1,
          Math.floor(
            image.naturalWidth *
              scale
          )
        );

      const workingHeight =
        Math.max(
          1,
          Math.floor(
            image.naturalHeight *
              scale
          )
        );

      offscreen.width =
        workingWidth;

      offscreen.height =
        workingHeight;

      /*
       * Draw transparent PNG.
       */
      offCtx.clearRect(
        0,
        0,
        workingWidth,
        workingHeight
      );

      offCtx.drawImage(
        image,
        0,
        0,
        workingWidth,
        workingHeight
      );

      /*
       * Read image pixels.
       */

      const pixelData =
        offCtx.getImageData(
          0,
          0,
          workingWidth,
          workingHeight
        ).data;

      /*
       * Create particles from pixels.
       */

      for (
        let py = 0;
        py < workingHeight;
        py += PARTICLE_GAP
      ) {
        for (
          let px = 0;
          px < workingWidth;
          px += PARTICLE_GAP
        ) {
          if (
            particles.length >=
            MAX_PARTICLES
          ) {
            break;
          }

          const index =
            (py *
              workingWidth +
              px) *
            4;

          const r =
            pixelData[index];

          const g =
            pixelData[index + 1];

          const b =
            pixelData[index + 2];

          const alpha =
            pixelData[index + 3];

          /*
           * Transparent background
           * pixels are ignored.
           */

          if (alpha < 25) {
            continue;
          }

          /*
           * Screen position.
           */

          const originalX =
            imageX + px;

          const originalY =
            imageY + py;

          /*
           * Random dust direction.
           */

          const angle =
            Math.random() *
            Math.PI *
            2;

          /*
           * Dust distance.
           */

          const distance =
            120 +
            Math.random() * 320;

          const vx =
            Math.cos(angle) *
            distance;

          const vy =
            Math.sin(angle) *
            distance;

          /*
           * Each particle starts at
           * a slightly different time.
           *
           * But all particles finish
           * by 100%.
           */

          const threshold =
            Math.random() *
            0.18;

          particles.push({
            ox: originalX,
            oy: originalY,

            x: originalX,
            y: originalY,

            r,
            g,
            b,

            a: alpha / 255,

            size:
              0.55 +
              Math.random() * 0.8,

            vx,
            vy,

            threshold,
          });
        }
      }
    };

    // ============================================
    // CANVAS RESIZE
    // ============================================

    const resizeCanvas = () => {
      const dpr = Math.min(
        window.devicePixelRatio ||
          1,
        2
      );

      canvas.width =
        window.innerWidth * dpr;

      canvas.height =
        window.innerHeight * dpr;

      canvas.style.width =
        `${window.innerWidth}px`;

      canvas.style.height =
        `${window.innerHeight}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      if (imageLoaded) {
        calculateImagePosition();

        createParticles();
      }
    };

    // ============================================
    // SCROLL PROGRESS
    // ============================================

    const updateScrollProgress = () => {
      const scrollY =
        window.scrollY;

      /*
       * 0%
       *
       * Full clear photo.
       */

      const animationStart = 0;

      /*
       * Entire dissolve happens
       * during first 1.8 viewport heights.
       */

      const animationEnd =
        window.innerHeight * 1.8;

      let progress =
        (scrollY -
          animationStart) /
        (animationEnd -
          animationStart);

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      scrollProgress =
        progress;
    };

    // ============================================
    // DRAW
    // ============================================

    const draw = () => {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      /*
       * Clear canvas.
       */

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      if (!imageLoaded) {
        animationFrame =
          requestAnimationFrame(
            draw
          );

        return;
      }

      const progress =
        scrollProgress;

      // ==========================================
      // 0% — FULL REAL PHOTO
      // ==========================================

      /*
       * At exactly 0%, draw original
       * image at full quality.
       *
       * This prevents the initial
       * dotted appearance.
       */

      if (progress <= 0.001) {
        ctx.globalAlpha = 1;

        ctx.drawImage(
          image,
          imageX,
          imageY,
          imageWidth,
          imageHeight
        );

        ctx.globalAlpha = 1;

        animationFrame =
          requestAnimationFrame(
            draw
          );

        return;
      }

      // ==========================================
      // PARTICLE DISSOLVE
      // ==========================================

      particles.forEach(
        (particle) => {
          /*
           * Individual particle progress.
           *
           * 0 = original position
           * 1 = completely moved away
           */

          let localProgress =
            (progress -
              particle.threshold) /
            (1 -
              particle.threshold);

          localProgress =
            Math.max(
              0,
              Math.min(
                1,
                localProgress
              )
            );

          /*
           * Smooth movement.
           */

          const eased =
            easeInOut(
              localProgress
            );

          /*
           * Move particle away
           * from original position.
           */

          particle.x =
            particle.ox +
            particle.vx *
              eased;

          particle.y =
            particle.oy +
            particle.vy *
              eased;

          /*
           * Particle remains visible
           * throughout the dissolve.
           *
           * We DON'T use opacity to
           * dissolve the photo.
           */

          let alpha =
            particle.a;

          /*
           * Final 18%:
           *
           * Dust slowly disappears.
           *
           * This guarantees that at
           * 100% NOTHING remains.
           */

          if (
            progress > 0.82
          ) {
            const finalProgress =
              (progress -
                0.82) /
              0.18;

            alpha *=
              Math.max(
                0,
                1 -
                  easeInOut(
                    finalProgress
                  )
              );
          }

          /*
           * Particle gets slightly
           * smaller while travelling.
           */

          const size =
            particle.size *
            (1 -
              eased * 0.35);

          if (
            alpha > 0.002 &&
            size > 0
          ) {
            ctx.beginPath();

            ctx.arc(
              particle.x,
              particle.y,
              size,
              0,
              Math.PI * 2
            );

            ctx.fillStyle =
              `rgba(${particle.r}, ${particle.g}, ${particle.b}, ${alpha})`;

            ctx.fill();
          }
        }
      );

      ctx.globalAlpha = 1;

      animationFrame =
        requestAnimationFrame(
          draw
        );
    };

    // ============================================
    // SCROLL EVENT
    // ============================================

    const handleScroll = () => {
      updateScrollProgress();
    };

    // ============================================
    // RESIZE EVENT
    // ============================================

    const handleResize = () => {
      resizeCanvas();
    };

    // ============================================
    // IMAGE LOADED
    // ============================================

    image.onload = () => {
      imageLoaded = true;

      calculateImagePosition();

      createParticles();

      updateScrollProgress();
    };

    image.onerror = () => {
      console.error(
        "ERROR: /manoj-cutout.png could not be loaded."
      );
    };

    // ============================================
    // INITIALIZE
    // ============================================

    resizeCanvas();

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    animationFrame =
      requestAnimationFrame(
        draw
      );

    // ============================================
    // CLEANUP
    // ============================================

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        z-0
        pointer-events-none
        overflow-hidden
      "
    >
      {/* ========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[#f5f5f3]
        "
      />

      {/* ========================================
          GRID
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-10
        "
        style={{
          backgroundImage:
            `
            linear-gradient(
              #000 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #000 1px,
              transparent 1px
            )
            `,
          backgroundSize:
            "50px 50px",
        }}
      />

      {/* ========================================
          IMAGE + PARTICLES
          
          EVERYTHING IS DRAWN THROUGH
          ONE CANVAS.

          No <img> opacity layer.
          No second dust layer.
          No double dissolve.
      ========================================= */}

      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          h-full
          w-full
        "
      />
    </div>
  );
}