// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) { //Butonlara "addEventListener" olay dinleyicisi ekliyoruz ve olay detayları içerisine ekleniyor.
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) { //Bu satır, eğer tıklanan düğmenin sınıfı "decrease" ise, sayaç değerini azaltır.
            count--;
        }
        else if (styles.contains("increase")) { //Bu satır, eğer "decrease" sınıfına sahip değilse ve tıklanan düğmenin sınıfı "increase" ise, sayaç değerini artırır.
            count++;
        }
        else if (styles.contains("reset")) { //Bu satır, eğer hiçbir önceki durum sağlanmazsa (ne "decrease" ne de "increase"), ve tıklanan düğmenin sınıfı "reset" ise, sayaç değerini sıfırlar.
            count = 0;
        }
        // Sayaç değerine göre renk değişimi.
        if (count > 0) {
            value.style.color = "#557C55";
        }
        if (count < 0) {
            value.style.color = "#FA7070";
        }
        if (count === 0) {
            value.style.color = "#555843";
        }
        // Sayacın değerini gösterme.
        value.textContent = count;
    });
});
