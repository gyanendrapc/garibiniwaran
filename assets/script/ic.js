let totalIc1 = totalIc2 = totalIc3 = totalIc4 = totalIc5 = totalIc6 = totalIc7 = totalIc = 0;
let totalNc1 = totalNc2 = totalNc3 = totalNc4 = totalNc5 = totalNc6 = totalNc7 = totalNc = 0;

let amountIC = amountNc = 0;
let rate = 1;

$(document).ready(function () {
    $("#rate").change(function () {
        rate = $(this).val();
    });

    // thousand
    $("#thousandIc").change(function () {
        // for ic
        amountIc = $(this).val();
        amountIc = amountIc * 1000;


        // for ic
        totalIc1 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // FOR NC
        totalNc1 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;


        $("#total1Ic").text(amountIc);
        $("#totalNc1").text(totalNc1);
        // console.log(totalIc);
        // console.log(rate);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);
    });
    // five hundred
    $("#fiveHundredIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 500;

        // for ic
        totalIc2 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // FOR NC
        totalNc2 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total2Ic").text(amountIc);
        $("#totalNc2").text(totalNc2);
        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);
    });
    // one hundred
    $("#oneHundredIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 100;

        // for ic
        totalIc3 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // for nc
        totalNc3 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total3Ic").text(amountIc);
        $("#totalNc3").text(totalNc3);
        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);
    });
    // fifty
    $("#fiftyIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 50;


        // for ic
        totalIc4 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // for nc
        totalNc4 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total4Ic").text(amountIc);
        $("#totalNc4").text(totalNc4);

        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);

    });
    // twenty
    $("#twentyIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 20;


        // for ic
        totalIc5 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // for nc
        totalNc5 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total5Ic").text(amountIc);
        $("#totalNc5").text(totalNc5);

        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);

    });
    // ten
    $("#tenIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 10;


        // for ic
        totalIc6 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // for nc
        totalNc6 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total6Ic").text(amountIc);
        $("#totalNc6").text(totalNc6);

        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);

    });
    // five
    $("#fiveIc").change(function () {
        amountIc = $(this).val();
        amountIc = amountIc * 5;

        // for ic
        totalIc7 = amountIc;
        totalIc = totalIc1 + totalIc2 + totalIc3 + totalIc4 + totalIc5 + totalIc6 + totalIc7;

        // for nc
        totalNc7 = amountIc * rate;
        totalNc = totalNc1 + totalNc2 + totalNc3 + totalNc4 + totalNc5 + totalNc6 + totalNc7;

        $("#total7Ic").text(amountIc);
        $("#totalNc7").text(totalNc7);

        // console.log(totalIc);
        $("#totalIc").text(totalIc);
        $("#totalNc").text(totalNc);

    });
});