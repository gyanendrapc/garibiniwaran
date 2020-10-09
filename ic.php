<section class="container border shadow p-3">
    <table class="font-weight-bold text-center w-75" style="margin: 0 auto;">
        <div class="navbar p-0 m-0">
            <h1 class="font-weight-bold h2 p-0 m-0">Currency Converter</h1>
            <div class="m-0 p-0">
                <label for="rate" class="font-weight-bold">Rate: &nbsp;</label>
                <input type="number" name="rate" id="rate" class="form-control-xs font-weight-bold" placeholder="$">
            </div>
        </div>
        <hr class="bg-primary">
        <tr class="border">
            <td>Amount</td>
            <td></td>
            <td>Value</td>
            <td></td>
            <td class="border">$</td>
            <td>NC</td>
        </tr>
        <tr>

            <td>1000</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>
            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="thousand" id="thousandIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>

            <td class="border">
                <span id="total1Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc1"></span>
            </td>
        </tr>
        <tr>
            <td>500</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="fiveHundred" id="fiveHundredIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>

            <td class="border">
                <span id="total2Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc2"></span>
            </td>
        </tr>
        <tr>
            <td>100</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="thousand" id="oneHundredIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>

            <td class="border">
                <span id="total3Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc3"></span>
            </td>
        </tr>
        <tr>
            <td>50</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="fifty" id="fiftyIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>
            <td class="border">
                <span id="total4Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc4"></span>
            </td>
        </tr>
        <tr>
            <td>20</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="twenty" id="twentyIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>

            <td class="border">
                <span id="total5Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc5"></span>
            </td>
        </tr>
        <tr>
            <td>10</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="ten" id="tenIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>

            <td class="border">
                <span id="total6Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc6"></span>
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td><span> &nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;</span></td>

            <td>
                <input type="number" class="form-control-sm font-weight-bold" name="fiveIc" id="fiveIc" min="0">
            </td>
            <td><span> &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>
            <td class="border">
                <span id="total7Ic"></span>
            </td>
            <td class="border">
                <span id="totalNc7"></span>
            </td>
        </tr>
        <tr class="bg-secondary text-light">
            <td colspan="3" class="text-left pl-3"><span>Total</span></td>
            <!-- <td><span> IC&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td> -->
            <!-- <td><span>NC &nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td> -->
            <td><span>&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;</span></td>
            <td class="border"><span id="totalIc"></span></td>
            <td class="border"><span id="totalNc"></span></td>
        </tr>
    </table>
</section>