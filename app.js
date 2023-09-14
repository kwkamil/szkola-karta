const inputNumer = document.getElementById('input_numer');
        const inputData = document.getElementById('input_data');
        const inputImie = document.getElementById('input_imie');
        const numerDiv = document.getElementById('numer');
        const dataDiv = document.getElementById('data');
        const imieDiv = document.getElementById('imie');
        const generateButton = document.getElementById('generate_button');

        // Add click event listener to the "wygeneruj kartę" button
        generateButton.addEventListener('click', function () {
            // Get the values from the input fields
            const numerValue = inputNumer.value;
            const dataValue = inputData.value;
            const imieValue = inputImie.value;

            // Update the content of the div elements with the new values
            numerDiv.textContent = numerValue;
            dataDiv.textContent = dataValue;
            imieDiv.textContent = imieValue;

            // Clear the input fields
            inputNumer.value = '';
            inputData.value = '';
            inputImie.value = '';
        });