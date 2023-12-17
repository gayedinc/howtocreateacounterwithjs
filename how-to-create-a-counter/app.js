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

/* // textContent, bir HTML öğesinin içerdiği metin içeriğini almak veya değiştirmek için kullanılan bir özelliktir. 
Bu özellik, bir HTML öğesinin içindeki metin içeriğini temsil eder ve bu içerikle etkileşimde bulunmanıza olanak tanır.
 */

/* querySelector, Document Object Model (DOM) üzerinde belirli bir CSS seçiciye uyan ilk öğeyi seçmek için kullanılan bir JavaScript metodudur. 
Bu metot, bir HTML belgesi içinde belirli bir öğeyi seçmek ve üzerinde işlemler yapmak için yaygın olarak kullanılır.
selector: CSS seçici (örneğin, etiket adı, sınıf adı, ID gibi) ile belirtilen öğeyi seçmek için kullanılır. */


/* forEach, JavaScript'te bir dizi üzerinde her bir eleman üzerinde belirli bir işlemi gerçekleştirmek için kullanılan bir dizi metodu (method) veya fonksiyonudur. 
Bu metodun temel amacı, dizi elemanları üzerinde gezinmek ve her eleman için belirli bir işlemi gerçekleştirmektir.

array.forEach(function(currentValue, index, array) {
    // Her bir eleman için yapılacak işlemler
});

currentValue: Şu anki dizi elemanının değeri.
index: Şu anki dizi elemanının index'i.
array: forEach fonksiyonunu çağırdığınız dizinin kendisi.
Bu parametreler opsiyoneldir; yani, ihtiyacınıza göre kullanabilirsiniz.

forEach kullanmanın avantajları şunlardır:

1- Döngü mantığı daha açık ve okunabilir.
2- Kodunuz daha kısa ve sade olabilir.
3- for döngüsüne kıyasla hata yapma olasılığınız düşer.
4 -forEach ile döngü içinde her elemanı işlemenin yanı sıra, bu metot genellikle bir dizi içindeki elemanları manipüle etmek, filtrelemek veya başka dizi işlemleri yapmak için kullanılır. */










