document.addEventListener("DOMContentLoaded", function () {
    // Pobierz referencje do elementów HTML
    const numerKartyDiv = document.getElementById("numer");
    const dataDiv = document.getElementById("data");
    const imieDiv = document.getElementById("imie");

    const inputNumer = document.getElementById("input_numer");
    const inputData = document.getElementById("input_data");
    const inputImie = document.getElementById("input_imie");
    const generujKarteButton = document.getElementById("generujKarte");

    // Obsługa kliknięcia przycisku "wygeneruj kartę"
    generujKarteButton.addEventListener("click", function () {
        // Pobierz wartości z inputów
        const nowyNumerKarty = inputNumer.value;
        const nowaData = inputData.value;
        const noweImie = inputImie.value;

        // Ustaw nowe wartości w divach
        numerKartyDiv.innerHTML = nowyNumerKarty;
        dataDiv.innerHTML = nowaData;
        imieDiv.innerHTML = noweImie;
    });
});