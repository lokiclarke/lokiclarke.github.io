var pro_users = ['lokiclarke09@gmail.com']
var email = Session.getActiveUser().getEmail()

function showImageDialog() {
  var htmlOutput = HtmlService.createHtmlOutput('<style>body { overflow: hidden; }</style>' +
    '<img src="https://pngimg.com/uploads/dwarf/dwarf_PNG70.png">')
    .setWidth(410)
    .setHeight(540);

  var dialog = DocumentApp.getUi().showModalDialog(htmlOutput, 'Supa Hax Enabled.');
}

    

function adminCheck() {
    ui = DocumentApp.getUi();
    var response = ui.prompt('Supa Hax','Do you want to enable Supa Hax?:',ui.ButtonSet.YES_NO)
    
    if (response.getSelectedButton() == ui.Button.YES) {
      if (pro_users.includes(email)){
      showImageDialog() 
      supa()
      ad()
      pro()} else {
      showImageDialog()
      supa()
      ad()}
    } }

      
      
    
    function supa() {
      var ui = DocumentApp.getUi();
      ui.createAddonMenu()
        .addItem('Edit','edit')
        .addToUi(); 
      // Supa Hax Menu
      ui.createMenu('Supa Hax')
          .addItem('Buy Supa Hax Pro','buyPro')
          .addSeparator()
          .addSubMenu(ui.createMenu('🔧 Tools 🔧')
              .addItem('Create Document', 'createDoc')
                    .addItem('Invisiblize Text','invis')
                    .addSeparator()
                    .addItem('Create Custom Supa Hax Menu','hax')
                    .addItem('Check Bank Balance','bank')
                    .addItem('Text to Art Converter','textConvert')
                    
                    .addItem('Check IQ','iq')
                    .addItem('Enable CPS Test','cps')
              .addSubMenu(ui.createMenu('Translate To')
                      .addItem('Russian','russian')
                      .addItem('Spanish','spanish')
                      .addItem('French','french')
                      .addItem('Arabic','arabic')
                      .addItem('German','german')
                      .addItem('Pig Latin','pigLatin'))
              .addSubMenu(ui.createMenu('Add Moneys')
              .addItem('Add $1000','money1')
              .addItem('Add $69,699,699,699.69','money2')
              .addSeparator()
              .addItem('Add Custom Amount','customMoney'))
              .addSubMenu(ui.createMenu('Expert Mode')
            .addItem('What Does It Do?','expertHelp')
            .addSeparator()
            .addItem('Enable','copyPasteText20Times')
            .addItem('Disable','undoCopyPasteText')))
            .addSeparator()
            .addSubMenu(ui.createMenu('🎮 Games 🎮')
            .addItem('Poker ♠','poker')
            .addItem('Penalty Shootout ⚽','shootout')
            .addItem('Tic-Tac-Toe ❌⭕','tictactoe')
            .addItem('Solitaire 🃏','solitaire')
            .addItem('Wordle 🔡','wordle')
            .addItem('Pac-Man 🍒','pacman'))
          
          

          .addSeparator()

          .addItem('Version 7.0.0','doShit')
             
          
          .addToUi();
    }
    
    
    function menuItem1() {
      DocumentApp.getUi() // Or DocumentApp or FormApp.
         .alert('Ha ha u bull men');
    }

    function expertHelp() {
      var ui = DocumentApp.getUi()
      ui.alert('This takes what you\'ve written so far and pastes it 20 more times. You can undo this by pressing `Disable`.')
    }

    function hax() {
        var ui = DocumentApp.getUi()
        var response = ui.prompt('Enter Custom Menu Name: ')
        var name = response.getResponseText()

          ui.createMenu(name)
            .addItem('Supa Mega Secret Hak','addhak')
            .addSeparator()
            .addToUi();
      
      }

    function addhak(){
      var ok = Browser.inputBox('Password Check','Enter password to continue: ',Browser.Buttons.OK)
      Browser.msgBox('🤡🤡🤡','Incorrect password.',Browser.Buttons.OK)
    }

    function iq() {
        var ui = DocumentApp.getUi();
        var response = ui.prompt('Enter name in lower caps: ')
        var name = response.getResponseText()

        if (name=='loki') {
            ui.alert('IQ Check','Loki\'s IQ: 152',ui.ButtonSet.OK)
        } else if (name=='richard') {
            ui.alert('IQ Check','Richard\'s IQ: 138',ui.ButtonSet.OK)
        } else if (name=='david') {
            ui.alert('IQ Check','David\'s IQ: 269',ui.ButtonSet.OK)
        } else if (name=='adrian') {
            ui.alert('IQ Check','Adrian\'s IQ: ⚽🦶',ui.ButtonSet.OK)
        } else if (name=='donte') {
            ui.alert('IQ Check','Donte\'s IQ: 100',ui.ButtonSet.OK)
        } else if (name=='eden') {
          ui.alert('IQ Check','Eden\'s IQ: I have no clue',ui.ButtonSet.OK)
        } else if (name=='joia') {
            ui.alert('IQ Check','Joia\'s IQ: I have no clue',ui.ButtonSet.OK)
        } else if (name=='maya') {
            ui.alert('IQ Check','Maya\'s IQ: I have no clue',ui.ButtonSet.OK)
        }else if (name=='michael') {
            ui.alert('IQ Check','Michael\'s IQ: I have no clue',ui.ButtonSet.OK)
        }else {ui.alert('Error','That name is not listed in the Ultra Mega Secret Info Database.\nComplete the IQ test: https://www.free-iqtest.net/',ui.ButtonSet.OK)}
    }
    
    function menuItem2() {
      DocumentApp.getUi() // Or DocumentApp or FormApp.
         .alert('Richard bulls men daily');
    }
    
    function createDoc() {
      var ui = DocumentApp.getUi()
      var response = ui.prompt('Enter the title of the doc you want to create: ')
      var title = response.getResponseText()
      DocumentApp.create(title);
      ui.alert('Document called '+title+' created.')
    }
    
    function customMoney() {
      var ui = DocumentApp.getUi()
      var response = ui.prompt('Enter Amount in USD: ')
      var amount = response.getResponseText()
      DocumentApp.getUi().prompt('Enter Bank Account Number: ')
      DocumentApp.getUi().prompt('Enter Bank Credentials:  ')
      DocumentApp.getUi().alert('Adding '+amount+' ....')
      DocumentApp.getUi().alert('OH NO!','You have been logged out your bank account! You have been scammed.', ui.ButtonSet.OK);
    }
    
    function bulla() {
      var ui = DocumentApp.getUi()
      var ans = ui.prompt('Enter your name to check if u bull men: ')
    
      if (ans.getResponseText() == 'Loki') {
        ui.alert('You don`t bull men.')
      } else if (ans.getResponseText() == 'Richard') {
        ui.alert('MEGA BULLA ALERT','YOU ARE A SUPA MEGA ULTRA BULLA',ui.ButtonSet.OK)
      } else {
        ui.alert('You are half bulla.')
      }
    



      DocumentApp.getActive().toast('Bulla test complete.');
    }
    
    function money1() {
    var ui = DocumentApp.getUi()
    DocumentApp.getUi().prompt('Enter Bank Account Number: ')
    DocumentApp.getUi().prompt('Enter Bank Credentials:  ')
    DocumentApp.getUi().alert('Adding $1000 ....')
    DocumentApp.getUi().alert('OH NO!','You have been logged out your bank account! You have been scammed.', ui.ButtonSet.OK);
    }
    
    function money2() {
    var ui = DocumentApp.getUi()
    DocumentApp.getUi().prompt('Enter Bank Account Number: ')
    DocumentApp.getUi().prompt('Enter Bank Credentials:  ')
    DocumentApp.getUi().alert('Adding $69,699,699,699.69 ....')
    DocumentApp.getUi().alert('OH NO!','You have been logged out your bank account! You have been scammed.', ui.ButtonSet.OK);
    }
    
    function bank() {
      var loki_balance = "$323,119,015"
      var richard_balance = "₹13"
      var david_balance = "-$144,523"
      var donte_balance = "3,102,001 (🌿🚬)"
      var joia_balance = "$450,223"
      var michael_balance = "$44"
      var maya_balance = "$134,182" 
      var ui = DocumentApp.getUi()
    
      var name = ui.prompt('Enter your name (lower caps):')
    
      if (name.getResponseText() == 'loki') {
        ui.alert('Loki Bank Balance',loki_balance,ui.ButtonSet.OK)
      } else if (name.getResponseText() == 'david') {
        ui.alert('David Bank Balance',david_balance,ui.ButtonSet.OK)
      } else if (name.getResponseText() == 'richard') {
        ui.alert('Richard Bank Balance',richard_balance,ui.ButtonSet.OK)
      } else if (name.getResponseText() == 'donte') {
        ui.alert('Donte Bank Balance', donte_balance, ui.ButtonSet.OK)
      }else if (name.getResponseText() == 'joia') {
        ui.alert('Joia Bank Balance', joia_balance, ui.ButtonSet.OK)
      }else if (name.getResponseText() == 'maya') {
        ui.alert('Maya Bank Balance', maya_balance, ui.ButtonSet.OK)
      }else if (name.getResponseText() == 'michael') {
        ui.alert('Michael Bank Balance', michael_balance, ui.ButtonSet.OK)
      } else (ui.alert('That name is not registered. Try again.'))
    }

    function pigLatin() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var content = body.getText();
  var translatedContent = "";

  // Split the content into individual words and punctuation marks
  var wordsAndPunctuation = content.match(/[^\s]+|[^\w\s]/g);

  // Loop through each word and apply the Pig Latin conversion algorithm
  for (var i = 0; i < wordsAndPunctuation.length; i++) {
    var wordOrPunctuation = wordsAndPunctuation[i];

    // If the word or punctuation is a single character, add it directly to the translated content
    if (wordOrPunctuation.length == 1) {
      translatedContent += wordOrPunctuation;
      continue;
    }

    // Otherwise, apply the Pig Latin conversion algorithm
    var firstLetter = wordOrPunctuation.charAt(0);
    if (/[aeiou]/.test(firstLetter)) {
      wordsAndPunctuation[i] = wordOrPunctuation + "yay";
    } else {
      var match = wordOrPunctuation.match(/^[^aeiou]+/);
      if (match) {
        var consonants = match[0];
        wordsAndPunctuation[i] = wordOrPunctuation.substring(consonants.length) + consonants + "ay";
      }
    }
  }

  // Join the words and punctuation back together into a single string
  translatedContent = wordsAndPunctuation.join(" ");

  // Replace the original content with the translated content
  body.clear();
  body.appendParagraph(translatedContent);
}

function russian() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var content = body.getText();

  var targetLanguage = 'ru';

  // Use the Google Translate service to translate the content to Russian
  var translatedContent = LanguageApp.translate(content, 'en', targetLanguage);

  // Replace the original content with the translated content
  body.clear();
  body.appendParagraph(translatedContent);
}

function invis() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var white = "#ffffff"; // Set the color to white

  // Loop through all the paragraphs in the body
  var paragraphs = body.getParagraphs();
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.getText();

    // Set the foreground color for the entire paragraph to white
    var element = paragraph.editAsText();
    element.setText(text);
    element.setLinkUrl(null); // Remove any existing links
    element.setForegroundColor(white);
  }
}


function edit() {
  DocumentApp.getUi().alert('https://script.google.com/home/projects/1Mmdh3Z6KcFjhAyKW_8EdlF6ROnrUjq_p1aS8zgKmQeRB5P-_ZNlcxHFz/edit')
}


    
    function doShit() {
      DocumentApp.getUi().alert('New Update - v7.0.0','//CHANGELOG//\n\n- Updated Ultra Mega Secret Info Database\n\n- Fixed minor bugs\n\n- Updated Menu Appearance\n\n- Fixed CPS Test\n\n\n\n ⚒ Supa Hax v7.0.1 Coming out 24/06/2023 ⚒',DocumentApp.getUi().ButtonSet.OK)
    }





var originalText;

function copyPasteText20Times() {
  var doc = DocumentApp.getActiveDocument();
  var ui = DocumentApp.getUi();
  var body = doc.getBody();

  var res = ui.prompt('Expertness Multiplier (OP)','Enter value between 2 and 40.\n NOTE - Going above 10 may slow down your browser.',ui.ButtonSet.OK_CANCEL )
  var multiplier = res.getResponseText()

  ui.alert('Loading...')


  originalText = body.getText();
  var newText = '';
  for (var i = 0; i < multiplier; i++) {
    newText += originalText;
  }
  body.clear();
  body.setText(newText);
}

function undoCopyPasteText() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  body.clear();
  body.setText(originalText);
}
 
// Update 6.9.0

function buyPro() {
var ui = DocumentApp.getUi(); 
var key = 'SHP-4753846543987535'

if (pro_users.includes(email)){
  ui.alert('Error','You have already unlocked Supa Hax Pro. Click on the \'SH Pro\' menu button on th toolbar to utilize.',ui.ButtonSet.OK)
} else {

ui.alert('Confirmation','Do you want to continue with the activation of Supa Hax Pro?',ui.ButtonSet.YES_NO)

var input = ui.prompt('Activation','Enter key to activate: ',ui.ButtonSet.OK).getResponseText()

if (input == key) {
  ui.alert('Message','Supa Hax Pro Activated!\n\n All the pro features are on the `SH Pro` menu.',ui.ButtonSet.OK)
  
  pro()
} else {
  ui.alert('Message','Wrong key.',ui.ButtonSet.OK)
}}
}

/*PRO VERSION*/

function pro() {
  var ui = DocumentApp.getUi();

  pro_users.push(email)

  ui.createMenu('SH Pro')
  .addItem('SupaChat','showDialog')
  .addItem('Jailbreak ChatGPT.','jailbreak')
  .addToUi();

  
}


function ad() {
  DocumentApp.getUi()//.alert('Advertisement','Supa Hax Pro Out Now \n\n Available to buy \n\nFeatures include: \n\n- Built-In SupaChat (ChatGPT Based)\n\n- Text-to-Art Converter\n\n- And More',DocumentApp.getUi().ButtonSet.OK)
}

function showDialog() {
  var htmlOutput = HtmlService.createHtmlOutput('<p>SupaChat: <a href="https://bing.com/chat">Click To Enable</a></p>')
      .setHeight(700)
      .setWidth(1100);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'SupaChat');
}

function jailbreak() {
  var ui = DocumentApp.getUi();
  var result = ui.alert(
    'Click the link below to visit Pastebin',
    '',
    ui.ButtonSet.OK_CANCEL
  );
  if (result == ui.Button.OK) {
    var htmlOutput = HtmlService.createHtmlOutput('<a href="https://pastebin.com/raw/DrUpWuKr" target="_blank">Click to access jailbreak code</a>');
    ui.showModalDialog(htmlOutput, 'Jailbreak Code');
  }
}


function shootout() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.friv.com/z/games/penaltyshootoutmultileague/game.html" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Penalty Shootout');
  
}


function wordle() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.247wordley.com" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Wordle');
  
}


function poker() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.247freepoker.com/" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Poker');
  
}


function solitaire() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.247solitaire.com/" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Solitaire');
  
}

function tictactoe() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.friv.com/z/games/tictactoexxo/game.html" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Tic Tac Toe');
}

function pacman() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://www.google.com/logos/2010/pacman10-i.html" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'Pac-Man');
}




function textToAsciiArt(text) {
  var asciiArt = '';
  for (var i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'A':
      case 'a':
        asciiArt += '  /\\  \n /  \\ \n/____\\\n';
        break;
      case 'B':
      case 'b':
        asciiArt += ' ____  \n|  _ \\ \n| |_) |\n|  _ < \n|_| \\_\\\n';
        break;
      case 'C':
      case 'c':
        asciiArt += '  ____ \n / ___|\n| |    \n| |___ \n \\____|\n';
        break;
      case 'D':
      case 'd':
        asciiArt += ' ____  \n|  _ \\ \n| | | |\n| |_| |\n|____/ \n';
        break;
      case 'E':
      case 'e':
        asciiArt += ' _____ \n| ____|\n|  _|  \n| |___ \n|_____| \n';
        break;
      case 'F':
      case 'f':
        asciiArt += ' _____ \n|  ___|\n| |_   \n|  _|  \n|_|    \n';
        break;
      case 'G':
      case 'g':
        asciiArt += '  ____ \n / ___|\n| |  _ \n| |_| |\n \\____|\n';
        break;
      case 'H':
      case 'h':
        asciiArt += ' _   _ \n| | | |\n| |_| |\n|  _  |\n|_| |_|\n';
        break;
      case 'I':
      case 'i':
        asciiArt += '  ___ \n |_ _| \n  | |  \n  | |  \n |___| \n';
        break;
      case 'J':
      case 'j':
        asciiArt += '     _ \n    | |\n _  | |\n| |_| |\n \\___/ \n';
        break;
      case 'K':
      case 'k':
        asciiArt += ' _  __\n| |/ / \n| \' /  \n| . \\  \n|_|\\_\\\n';
        break;
      case 'L':
      case 'l':
        asciiArt += ' _     \n| |    \n| |    \n| |___ \n|_____| \n';
        break;
      case 'M':
      case 'm':
        asciiArt += ' __  __ \n|  \\/  |\n| |\\/| |\n| |  | |\n|_|  |_|\n';
        break;
      case 'N':
      case 'n':
        asciiArt += ' _   _ \n| \\ | |\n|  \\| |\n| |\\  |\n|_| \\_|\n';
        break;
      case 'O':
      case 'o':
        asciiArt += '  ___  \n / _ \\ \n| | | |\n| |_| |\n \\___/ \n';
        break;
      case 'P':
      case 'p':
        asciiArt += ' ____  \n|  _ \\ \n| |_) |\n|  __/ \n|_|    \n';
        break;
      case 'Q':
      case 'q':
        asciiArt += '  ___  \n / _ \\ \n| | | |\n| |_| |\n \\__\\_\\\n';
        break;
      case 'R':
      case 'r':
        asciiArt += ' ____  \n|  _ \\ \n| |_) |\n|  _ < \n|_| \\_\\\n';
        break;
      case 'S':
      case 's':
        asciiArt += ' ____  \n/ ___| \n\\___ \\ \n ___) |\n|____/ \n';
        break;
      case 'T':
      case 't':
        asciiArt += ' _____ \n|_   _|\n  | |  \n  | |  \n  |_|  \n';
        break;
      case 'U':
      case 'u':
        asciiArt += ' _   _ \n| | | |\n| | | |\n| |_| |\n \\___/ \n';
        break;
      case 'V':
      case 'v':
        asciiArt += '__     __\n\\ \\   / /\n \\ \\ / / \n  \\ V /  \n   \\_/   \n';
        break;
      case 'W':
      case 'w':
        asciiArt += '__        __\n\\ \\      / /\n \\ \\ /\\ / / \n  \\ V  V /  \n   \\_/\\_/   \n';
        break;
      case 'X':
      case 'x':
        asciiArt += '__  __\n\\ \\/ /\n \\  / \n /  \\ \n/_/\\_\\\n';
        break;
      case 'Y':
      case 'y':
        asciiArt += '__   __\n\\ \\ / /\n \\ V / \n  | |  \n  |_|  \n';
        break;
      case 'Z':
      case 'z':
        asciiArt += ' _____\n|__  / \n  / /  \n / /_  \n/____| \n';
        break;
      case '0':
        asciiArt += '  ___  \n / _ \\ \n| | | |\n| |_| |\n \\___/ \n';
        break;
      case '1':
        asciiArt += '  __ \n /_ |\n  | |\n  | |\n  |_|\n';
        break;
      case '2':
        asciiArt += ' ____  \n|___ \\ \n  __) |\n |__ < \n ___\\ \\\n|____/ \n';
        break;
      case '3':
        asciiArt += ' ____  \n|___ \\ \n  |_ \\ \n ___) |\n|____/ \n';
        break;
      case '4':
        asciiArt += ' _  _   \n| || |  \n| || |_ \n|__   _|\n   |_|  \n';
        break;
      case '5':
        asciiArt += ' ____ \n| ___|\n|___ \\ \n ___) |\n|____/ \n';
        break;
      case '6':
        asciiArt += '  __  \n / /_ \n| \'_ \\\n| (_) |\n \\___/ \n';
        break;
      case '7':
        asciiArt += '  ____  \n |___ \\ \n    / / \n   / /  \n  /_/   \n';
      case '8':
        asciiArt += '  ___  \n ( _ ) \n / _ \\\n| (_) |\n \\___/ \n';
        break;
      case '9':
        asciiArt += '  ___  \n / _ \\ \n| (_) |\n \\__, |\n   /_/ \n';
        break;
      case ' ':
        asciiArt += '  \n';
        break;
      default:
        asciiArt += letter + '\n';
    }
  }

  return asciiArt;
}

function textConvert() {
var ui = DocumentApp.getUi()
var response = ui.prompt('Enter Text To Convert: ')
var text = response.getResponseText()
var ascii = textToAsciiArt(text)
ui.alert(ascii)

}

function spanish() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();
  var sourceLang = 'en'; // Source language (English)
  var targetLang = 'es'; // Target language (Spanish)
  var textString = text.getText();

  var translatedText = LanguageApp.translate(textString, sourceLang, targetLang);

  text.setText(translatedText);
}

function french() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();
  var sourceLang = 'en'; // Source language (English)
  var targetLang = 'fr'; // Target language (French)
  var textString = text.getText();

  var translatedText = LanguageApp.translate(textString, sourceLang, targetLang);

  text.setText(translatedText);
}

function arabic() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();
  var sourceLang = 'en'; // Source language (English)
  var targetLang = 'ar'; // Target language (Arabic)
  var textString = text.getText();

  var translatedText = LanguageApp.translate(textString, sourceLang, targetLang);

  text.setText(translatedText);
}

function indian() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();
  var sourceLang = 'en'; // Source language (English)
  var targetLang = 'hi'; // Target language (Indian)
  var textString = text.getText();

  var translatedText = LanguageApp.translate(textString, sourceLang, targetLang);

  text.setText(translatedText);
}


function german() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();
  var sourceLang = 'en'; // Source language (English)
  var targetLang = 'de'; // Target language (German)
  var textString = text.getText();

  var translatedText = LanguageApp.translate(textString, sourceLang, targetLang);

  text.setText(translatedText);
}

function cps() {
  var ui = DocumentApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutput('<a href="https://cpstest.org" >Click to start</a>');
  htmlOutput.setWidth(1000);
  htmlOutput.setHeight(800);
  ui.showModalDialog(htmlOutput, 'CPS Test');
}

function toggleTrigger(triggerName, isEnabled) {
  var allTriggers = ScriptApp.getProjectTriggers();

  for (var i = 0; i < allTriggers.length; i++) {
    var trigger = allTriggers[i];
    if (trigger.getHandlerFunction() === triggerName) {
      ScriptApp.getProjectTriggers()[i].setEnabled(isEnabled);
      break;
    }
  }
}



function annoying() {
  toggleTrigger("annoying",true);
  var ui = DocumentApp.getUi()
  ui.alert('u = 🚽')
  annoying()
}












