var total1Jhuthre = total2Jhuthre = total3Jhuthre = total4Jhuthre = total5Jhuthre = total6Jhuthre = total7Jhuthre = totalJhuthre = 0;
let amountJhuthre = 0;


$(document).ready(function () {
    // thousand
    $("#thousandJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 1000;
            total1Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;
            $("#total1Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // five hundred
    $("#fiveHundredJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 500;
            total2Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;

            $("#total2Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // one hundred
    $("#oneHundredJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 100;
            total3Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;

            $("#total3Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // fifty
    $("#fiftyJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 50;
            total4Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;

            $("#total4Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // twenty
    $("#twentyJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 20;
            total5Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;

            $("#total5Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // ten
    $("#tenJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 10;
            total6Jhuthre = amountJhuthre;
            totalJhuthre = total1Jhuthre + total2Jhuthre + total3Jhuthre + total4Jhuthre + total5Jhuthre + total6Jhuthre + total7Jhuthre;

            $("#total6Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);

        }

    );
    // five
    $("#fiveJhuthre").change(function () {
            amountJhuthre = $(this).val();
            amountJhuthre = amountJhuthre * 5;
            total7Jhuthre = amountJhuthre;
            totalJhuthre = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total7Jhuthre").text(amountJhuthre);
            // console.log(totalJhuthre);
            $("#totalJhuthre").text(totalJhuthre);
        }

    );
});