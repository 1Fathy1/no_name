
        // function validateSearchInput(input) {
        //     const trimmedInput = input.trim();

        //     if (trimmedInput === "") {
        //         return "Input cannot be empty.";
        //     }

        //     return "Valid input.";
        // }
       
        // const searchInput = document.querySelector('.header input[type="email"]');
       
        // const searchButton = document.querySelector('.header button');

        // searchButton.addEventListener('click', () => {
        //     const validationMessage = validateSearchInput(searchInput.value);
        //     if (validationMessage === "Valid input.") {
        //         console.log("Search initiated with:", searchInput.value);
        //     } else {
        //         alert(validationMessage); 
        //     }
        // });

        function createDeal(dealData, id) {
            const container = document.getElementById(id).querySelector('.deals-container');

            const dealDiv = document.createElement("div");
            dealDiv.className = "deal";

            const img = document.createElement("img");
            img.src = dealData.imageUrl;
            img.alt = dealData.title;

            const infoDiv = document.createElement("div");
            infoDiv.className = "info";

            const title = document.createElement("h3");
            title.textContent = dealData.title;

            const description = document.createElement("p");
            description.textContent = dealData.description;

            const viewButton = document.createElement("a");
            viewButton.href = dealData.link;
            viewButton.className = "view-button";
            viewButton.textContent = "View Deal";

            infoDiv.appendChild(title);
            infoDiv.appendChild(description);
            dealDiv.appendChild(img);
            dealDiv.appendChild(infoDiv);
            dealDiv.appendChild(viewButton);

            container.appendChild(dealDiv);
        }

        const deal1 = {
            title: "Patagonia Wilderness Trek",
            description: "7 days from $1,299",
            imageUrl: "https://storage.googleapis.com/a1aa/image/ZYJTDqdmPHaXPZe4EA1yRRwmrBJOfdGX0PRGhKDK2pIyHw5TA.jpg",
            link: "#"
        };

        const deal2 = {
            title: "Alaskan Adventure Cruise",
            description: "10 days from $2,499",
            imageUrl: "https://storage.googleapis.com/a1aa/image/ZYJTDqdmPHaXPZe4EA1yRRwmrBJOfdGX0PRGhKDK2pIyHw5TA.jpg",
            link: "#"
        };

        // createDeal(deal1, 'Hotels');
        // createDeal(deal1, 'Hotels');
        // createDeal(deal2, 'Places');
        // createDeal(deal2, 'Places');
