<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.min.js"></script>
<script>
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  multiplier: 1.0,
}); 

// Wait 2 seconds then calculate the new page height
setTimeout(() => {  
	locoScroll.update();
}, 2000);
</script>
