document.addEventListener("DOMContentLoaded", function() {
    const helpContainer = document.getElementById("help-container");
    const helpSpans = document.querySelectorAll(".help-span");
    let isDragging = false;
    let offsetX, offsetY;
  
    // Display help text when a span is clicked
    helpSpans.forEach(span => {
      //console.log(span);
      span.addEventListener("click", function() {
        const spanId = this.id;
        const helpText = allhelp[spanId];
        //console.log(spanId, helpText);
        if (helpText) {
          showHelp(span, helpText);
        }
      });
    });
  
    // Function to display help text
    function showHelp(span, text) {
      helpContainer.innerHTML = text || "No help text available.";
      helpContainer.style.display = "block";

      const spanRect = span.getBoundingClientRect();
      const helpRect = helpContainer.getBoundingClientRect();
      
      // Calculate the position to place the help container next to the span
      let leftOffset = spanRect.right + window.pageXOffset;
      let topOffset = spanRect.top + window.pageYOffset + (spanRect.height - helpRect.height) / 2;
      
      console.log(leftOffset, topOffset);
      if (topOffset < 0) {topOffset = 10};

      helpContainer.style.left = `${leftOffset}px`;
      helpContainer.style.top = `${topOffset}px`;
    }
  
    // Function to handle mouse down event on help container
    helpContainer.addEventListener("mousedown", function(event) {
      isDragging = true;
      offsetX = event.clientX - helpContainer.getBoundingClientRect().left;
      offsetY = event.clientY - helpContainer.getBoundingClientRect().top;
    });
  
    // Function to handle mouse move event
    document.addEventListener("mousemove", function(event) {
      if (isDragging) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;
        helpContainer.style.left = `${newX}px`;
        helpContainer.style.top = `${newY}px`;
      }
    });
  
    // Function to handle mouse up event
    document.addEventListener("mouseup", function() {
      isDragging = false;
    });
  
    // Hide help container when clicked outside
    document.addEventListener("click", function(event) {
      let clickedSpan = false;
      helpSpans.forEach(span => {
        if (span.contains(event.target)) {
          clickedSpan = true;
        }
      });
  
      if (!helpContainer.contains(event.target) && !clickedSpan) {
        helpContainer.style.display = "none";
      }
    });
  });
  