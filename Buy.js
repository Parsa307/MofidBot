(function() {
  console.log("Script started.");

  // The values you want to type (ensure they're within min/max)
  const valueStr  = "2000";  // For (value)
  const priceValue = "3000";  // For (price)

  // Interval delay (milliseconds)
  const INTERVAL_MS = 350;
  // How long to run before automatically stopping (milliseconds)
  const STOP_AFTER = 7000;

  // A helper to emulate typing character by character
  function emulateTyping(element, text) {
    element.focus();

    let currentValue = "";
    const nativeSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    // Clear existing value
    nativeSetter.call(element, "");

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // keydown & keypress
      element.dispatchEvent(
        new KeyboardEvent("keydown", { key: char, bubbles: true, cancelable: true })
      );
      element.dispatchEvent(
        new KeyboardEvent("keypress", { key: char, bubbles: true, cancelable: true })
      );

      // Append the character
      currentValue += char;
      nativeSetter.call(element, currentValue);

      // Dispatch 'input' so the framework detects the updated value
      element.dispatchEvent(new InputEvent("input", { data: char, bubbles: true }));

      // keyup
      element.dispatchEvent(
        new KeyboardEvent("keyup", { key: char, bubbles: true, cancelable: true })
      );
    }

    // Finally, dispatch 'change', then blur
    element.dispatchEvent(new Event("change", { bubbles: true }));
    element.blur();
    element.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  // Checks if a proposed value is within the input's min/max range
  function isWithinRange(inputEl, desiredValue) {
    const minVal = parseFloat(inputEl.getAttribute("min"));
    const maxVal = parseFloat(inputEl.getAttribute("max"));
    // Remove commas if your desiredValue has them
    const numericValue = parseFloat(desiredValue.replace(/,/g, ""));

    if ((isNaN(minVal) && isNaN(maxVal)) || isNaN(numericValue)) {
      return true; // No min/max set or invalid numericValue → allow
    }

    if (!isNaN(minVal) && numericValue < minVal) {
      console.log(`Value ${numericValue} is below the minimum ${minVal}.`);
      return false;
    }
    if (!isNaN(maxVal) && numericValue > maxVal) {
      console.log(`Value ${numericValue} is above the maximum ${maxVal}.`);
      return false;
    }
    return true;
  }

  // Select inputs by their IDs (with colons)
  const valueInput = document.getElementById(":r0:");  // value
  const priceInput = document.getElementById(":r1:");  // price

  if (!valueInput) {
    console.log("Value input not found.");
    return;
  }
  if (!priceInput) {
    console.log("Price input not found.");
    return;
  }

  // We store our auto-stop timeout ID so we can clear it if we stop early
  const autoStopId = setTimeout(() => stopAll("Script ended after time limit."), STOP_AFTER);

  // Repeatedly set values & click the buy button
  const intervalId = setInterval(() => {
    // 1) Check valueInput range
    if (!isWithinRange(valueInput, valueStr)) {
      // Stop script and clear the auto-stop (so we don't see "time limit" message later)
      clearTimeout(autoStopId);
      stopAll("Value is out of range. Stopping script.");
      return;
    }
    emulateTyping(valueInput, valueStr);
    console.log(`Typed "${valueStr}" into value input.`);

    // 2) Check priceInput range
    if (!isWithinRange(priceInput, priceValue)) {
      // Stop script and clear the auto-stop (so we don't see "time limit" message later)
      clearTimeout(autoStopId);
      stopAll("Price value is out of range. Stopping script.");
      return;
    }
    emulateTyping(priceInput, priceValue);
    console.log(`Typed "${priceValue}" into price input.`);

    // 3) Click the Buy button
    const buyButton = document.querySelector("button.online-tools-13rpnxo");
    if (buyButton) {
      buyButton.click();
      console.log("Buy button clicked.");
    } else {
      console.log("Buy button not found.");
    }
  }, INTERVAL_MS);

  function stopAll(message) {
    // Stop the interval
    clearInterval(intervalId);
    // Log/alert
    console.log(message);
    alert(message);
  }
})();