document.addEventListener("DOMContentLoaded", () => {
    const totalCommande = document.getElementById("tyu");

    const updateTotal = (remainingBoxes) => {
        let total = 0;
        remainingBoxes.forEach(box => {
            const boxPrice = parseInt(box.querySelector(".price").innerText) || 0;
            total += boxPrice;
        });
        totalCommande.innerText = total;
    };

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const plusButton = box.querySelector(".plus");
        const minusButton = box.querySelector(".moins");
        const quantityDisplay = box.querySelector(".num");
        const priceDisplay = box.querySelector(".price");
        const priceUnit = parseInt(box.querySelector("span:nth-of-type(2)").innerText);
        const deleteButton = box.querySelector(".faSolid");
        const likeButton = box.querySelector(".btn");

        let quantity = 0;

        const updatePrice = () => {
            priceDisplay.innerText = quantity * priceUnit;
            const remainingBoxes = document.querySelectorAll(".box");
            updateTotal(remainingBoxes); // Met à jour le total à chaque changement de prix
        };

        plusButton.addEventListener("click", () => {
            quantity++;
            quantityDisplay.innerText = quantity;
            updatePrice();
        });

        minusButton.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.innerText = quantity;
                updatePrice();
            }
        });
      
        deleteButton.addEventListener("click", () => {
            box.remove();     
            const remainingBoxes = document.querySelectorAll(".box");
            updateTotal(remainingBoxes);  
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
        });
    });

    updateTotal(boxes);
});
