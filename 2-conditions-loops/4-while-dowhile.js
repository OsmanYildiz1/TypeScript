var counter = 10;
while (counter < 5) {
    console.log(counter);
    counter++;
    //break döngüyü sonlandırır.
    if (counter == 3) {
        break;
    }
}
// önce işlemi yapar sonra whileı kontrol eder
do {
    console.log(counter);
    counter++;
} while (counter < 5);
