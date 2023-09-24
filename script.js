document.getElementById("copy-button").addEventListener("click", function () {
    const accountNumber = document.getElementById("account-number");
    const textArea = document.createElement("textarea");
    textArea.value = accountNumber.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Account number copied to clipboard: " + accountNumber.textContent);
});