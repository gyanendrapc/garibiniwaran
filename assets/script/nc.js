var total1 = total2 = total3 = total4 = total5 = total6 = total7 = total = 0;
let amount = 0;


$(document).ready(function () {
    // thousand
    $("#thousand").change(function () {
            amount = $(this).val();
            amount = amount * 1000;
            total1 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;
            $("#total1").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // five hundred
    $("#fiveHundred").change(function () {
            amount = $(this).val();
            amount = amount * 500;
            total2 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total2").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // one hundred
    $("#oneHundred").change(function () {
            amount = $(this).val();
            amount = amount * 100;
            total3 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total3").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // fifty
    $("#fifty").change(function () {
            amount = $(this).val();
            amount = amount * 50;
            total4 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total4").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // twenty
    $("#twenty").change(function () {
            amount = $(this).val();
            amount = amount * 20;
            total5 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total5").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // ten
    $("#ten").change(function () {
            amount = $(this).val();
            amount = amount * 10;
            total6 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total6").text(amount);
            // console.log(total);
            $("#total").text(total);

        }

    );
    // five
    $("#five").change(function () {
            amount = $(this).val();
            amount = amount * 5;
            total7 = amount;
            total = total1 + total2 + total3 + total4 + total5 + total6 + total7;

            $("#total7").text(amount);
            // console.log(total);
            $("#total").text(total);
        }

    );
});