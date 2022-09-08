import { Injectable } from '@angular/core';
import { listCurrencyType, listCurrencyWord } from '../constant/static-const';

@Injectable()
export class CurrencytowordService {
  constructor() {}

  /**
   *
   * @param num NUmber
   * @returns True | false
   * @desription: check amount is decimal or not
   */
  private hasDecimal(num: number) {
    return !!(num % 1);
  }

  /**
   *
   * @param amount number
   * @param type string
   * @returns word string of the amount in two currency type. e.g : 59435.21 => Fifty Nine Thousand Four Hundred-Thirty Five Rupeess and Twenty One Paisa Only
   */
  public convertAmoutToWord(amount: number, type: string): string {
    // varibale declaration
    var currencyToWord: string = '';
    var iniDigit: Array<string> = [];
    var fraction: Array<string> = [];
    var str = '';

    // conditionally check for beautification type
    var prefix =
      type == listCurrencyType.INR
        ? listCurrencyWord.Rupeess
        : listCurrencyWord.Dollars;
    var suffix =
      type == listCurrencyType.INR
        ? listCurrencyWord.Paisa
        : listCurrencyWord.Cents;

    // check the amount has a fraction or not
    if (this.hasDecimal(amount)) {
      iniDigit = amount.toString().split('.')[0].split('');
      fraction = amount.toString().split('.')[1].split('');
    } else {
      iniDigit = amount.toString().split('');
    }

    // convert initial digit to word
    if (iniDigit.length > 0) {
      str = str + this.convertToWord(iniDigit.toString(), type);
    }

    // add extra word for beautification of word pharse
    str = str + prefix;
    if (this.hasDecimal(amount)) {
      str = str + '  and ';
    }

    // convert fraction to word
    if (fraction != null && fraction.length > 0) {
      str = str + this.convertToWord(fraction.toString(), type);
      str = str + ' ' + suffix;
    }

    // add tail word for beautification
    str = str + ' Only';
    currencyToWord = str.replace(/\s+/g, ' ');
    return currencyToWord;
  }

  /**
   *
   * @param amount string
   * @param type string
   * @returns convert string amount to word
   */
  private convertToWord(amount: string, type: string) {
    /**
     * Ref link : https://math.tools/calculator/currency/words
     */
    if (type === listCurrencyType.USD) {
      var words = new Array();
      words[0] = 'zero';
      words[1] = 'One';
      words[2] = 'Two';
      words[3] = 'Three';
      words[4] = 'Four';
      words[5] = 'Five';
      words[6] = 'Six';
      words[7] = 'Seven';
      words[8] = 'Eight';
      words[9] = 'Nine';
      words[10] = 'Ten';
      words[11] = 'Eleven';
      words[12] = 'Twelve';
      words[13] = 'Thirteen';
      words[14] = 'Fourteen';
      words[15] = 'Fifteen';
      words[16] = 'Sixteen';
      words[17] = 'Seventeen';
      words[18] = 'Eighteen';
      words[19] = 'Nineteen';
      words[20] = 'Twenty';
      words[30] = 'Thirty';
      words[40] = 'Forty';
      words[50] = 'Fifty';
      words[60] = 'Sixty';
      words[70] = 'Seventy';
      words[80] = 'Eighty';
      words[90] = 'Ninety';
      words[100] = 'One Hundred';
      words[200] = 'Two Hundred';
      words[300] = 'Three Hundred';
      words[400] = 'Four Hundred';
      words[500] = 'Five Hundred';
      words[600] = 'Six Hundred';
      words[700] = 'Seven Hundred';
      words[800] = 'Eight Hundred';
      words[900] = 'Nine Hundred';

      var words_string = '';
      var amount = amount.toString();
      var atemp = amount.split('.');
      var number = atemp[0].split(',').join('');
      var n_length = number.length;

      if (n_length <= 11) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 11 - n_length, j = 0; i < 11; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 11; i++, j++) {
          if (i == 0 || i == 3 || i == 6 || i == 9) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j].toString());
              n_array[i] = 0;
            }
          }
        }
        var value = 0;
        for (var i = 0; i < 11; i++) {
          if (i == 0 || i == 3 || i == 6 || i == 9) {
            value = n_array[i] * 10;
          } else if (i == 2 || i == 5 || i == 8) {
            value = n_array[i] * 100;
          } else {
            value = n_array[i];
          }

          if (value != 0) {
            words_string += words[value] + ' ';
          }
          if (i == 1 && value != 0 && n_array[i - 1] > 0) {
            words_string += 'Billion ';
          } else if (i == 1 && value != 0) {
            words_string += 'Biillion ';
          }
          if (
            i == 4 &&
            value == 0 &&
            (n_array[i - 1] > 0 || n_array[i - 2] > 0)
          ) {
            words_string += 'Million ';
          } else if (i == 4 && value != 0) {
            words_string += 'Million ';
          }
          if (
            i == 7 &&
            value == 0 &&
            (n_array[i - 1] > 0 || n_array[i - 2] > 0)
          ) {
            words_string += 'Thousand ';
          } else if (i == 7 && value != 0) {
            words_string += 'Thousand ';
          }
        }
        words_string = words_string.split(' ').join(' ');
      }
      return words_string;
    }
    /*if (type === listCurrencyType.INR) {
      if (n_length <= 11) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j].toString());
              n_array[i] = 0;
            }
          }
        }
        var value = 0;
        for (var i = 0; i < 11; i++) {
          if (i == 0 || i == 2 || i == 4 || i == 7 || i == 9) {
            value = Number(n_array[i]) * 10;
          } else {
            value = Number(n_array[i]);
          }
          if (value != 0) {
            words_string += words[value] + ' ';
          }
          if (
            (i == 1 && value != 0) ||
            (i == 0 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += 'Crores ';
          }
          if (
            (i == 3 && value != 0) ||
            (i == 2 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += 'Lakhs ';
          }
          if (
            (i == 5 && value != 0) ||
            (i == 4 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += 'Thousand ';
          }
          if (
            i == 6 &&
            value != 0 &&
            n_array[i + 1] != 0 &&
            n_array[i + 2] != 0
          ) {
            words_string += 'Hundred - ';
          } else if (i == 6 && value != 0) {
            words_string += 'Hundred ';
          }
        }
        words_string = words_string.split('  ').join(' ');
      }
    }*/
  }

  public convertAmountToIndianWord(amount: string) {
    var price = amount;
    price = price.toString();
    var sglDigit = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
      ],
      dblDigit = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
      ],
      tensPlace = [
        '',
        'Ten',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
      ],
      handle_tens = function (dgt, prevDgt) {
        return 0 == dgt
          ? ''
          : ' ' + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt]);
      },
      handle_utlc = function (dgt, nxtDgt, denom) {
        return (
          (0 != dgt && 1 != nxtDgt ? ' ' + sglDigit[dgt] : '') +
          (0 != nxtDgt || dgt > 0 ? ' ' + denom : '')
        );
      };

    var str = '';
    var digitIdx = 0;
    var digit = 0;
    var nxtDigit = 0;
    var words = [];
    var re = /(0|([1-9]\d*))(\.\d+)?/g;
    if (re.test(price)) {
      price = price.split('.')[0];
      for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) {
        switch (
          ((digit = Number(price[digitIdx]) - 0),
          (nxtDigit = digitIdx > 0 ? Number(price[digitIdx - 1]) - 0 : 0),
          price.length - digitIdx - 1)
        ) {
          case 0:
            words.push(handle_utlc(digit, nxtDigit, ''));
            break;
          case 1:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 2:
            words.push(
              0 != digit
                ? ' ' +
                    sglDigit[digit] +
                    ' Hundred' +
                    (0 != Number(price[digitIdx + 1]) &&
                    0 != Number(price[digitIdx + 2])
                      ? ' and '
                      : '')
                : ''
            );
            break;
          case 3:
            words.push(handle_utlc(digit, nxtDigit, 'Thousand'));
            break;
          case 4:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 5:
            words.push(handle_utlc(digit, nxtDigit, 'Lakh'));
            break;
          case 6:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 7:
            words.push(handle_utlc(digit, nxtDigit, 'Crore'));
            break;
          case 8:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 9:
            words.push(handle_utlc(digit, nxtDigit, 'Arab'));
            break;
          case 10:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 11:
            words.push(handle_utlc(digit, nxtDigit, 'Kharab'));
            break;
          case 12:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 13:
            words.push(handle_utlc(digit, nxtDigit, 'Nil'));
            break;
          case 14:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 15:
            words.push(handle_utlc(digit, nxtDigit, 'Padma'));
            break;
          case 16:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 17:
            words.push(handle_utlc(digit, nxtDigit, 'Shankh'));
            break;
          case 18:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 19:
            words.push(
              0 != digit
                ? ' ' +
                    sglDigit[digit] +
                    ' Hundred' +
                    (0 != Number(price[digitIdx + 1]) &&
                    0 != Number(price[digitIdx + 2])
                      ? ' and'
                      : '')
                : ''
            );
            break;
          case 20:
            words.push(handle_utlc(digit, nxtDigit, 'Thousand'));
            break;
          case 21:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
          case 22:
            words.push(handle_utlc(digit, nxtDigit, 'Lakh'));
            break;
          case 23:
            words.push(handle_tens(digit, price[digitIdx + 1]));
            break;
        }
      }
      str = words.reverse().join('');
    } else str = '';
    return str;
  }
}
