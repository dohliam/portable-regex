Portable Regex is a simple tool for testing, constructing, debugging, and otherwise working with regular expressions. It's a bit old but still quite useful.

## Features

## The basics

Enter some text in the input text area and a regular expression in the search text box below. The result area on the right will update as you type, highlighting any matches in your input text.

To replace matches with some other text, just enter something in the _Replacement Text_ box. The results will live update again as you type, showing you the result of replacing the matched regex with your replacement text. When you are satisfied with the result, you can use the _Modify orignal_ option to make the changes to your original text in the input window.

Backreferences are supported, either through the _Insert backreference_ button or by using `$1` for the first match, `$2` for the second match, and so on.

## Other options

There are a number of other things you can do with your regex other than just search and replace. The following options are available:

* _Test_ (Search for specified value and return true or false depending on the result.)
* _Exec_ (Search for specified value, and return text of the found results.)
* _Select_ (Highlight matching text.)
* _Grep_ (Print out all lines matching the pattern to the result area. Functions like *nix `grep`. These results can optionally be piped back to the input window.)
* _Reverse Grep_ (Print lines **not** matching the pattern. Functions like *nix `grep -v`. These results can optionally be piped back to the input window.)
* _Modify orignal_ (Show changes in input window. Replaces original text with the value of the text after the matching pattern has been replaced with the contents of the _Replacement text_ box.)
* _Show original_ (Display the original source text.)


## Special characters

Pre-composed expressions matching a variety of special characters can be inserted into the search box automatically through the "Insert special characters" drop-down menu. This supports the following characters:

* `\t` - Tab
* `\n` - Linebreak
* `\s` - Whitespace
* `\S` - Any non-whitespace
* `\b` - Word boundary
* `\d` - Any digit [0-9]
* `\w` - Any letter or digit
* `\W` - Any non-word character
* `\w+` - Any word
* `\D` - Any non-digit
* `?` - Non-greedy match
* `*` - Zero or more of prec. term
* `+` - One or more of prec. term
* `.` - Any character
* `\` - Escape
* `[一-龜]` - Any Hanzi
* `[あ-ん]` - Any Hiragana
* `[ァ-ヺ]` - Any Katakana
* `[가-힣]` - Any Hangul
* `[Ё-ё]` - Any Cyrillic
* `[a-ȇ]+` - Any Latin (incl. diacritics)
* `[a-z]` - Any lowercase letter
* `[A-Z]` - Any uppercase letter
* `[^aeiou\\W]` - Any consonant
* `[aeiou]` - Any vowel

If you need to insert a tab character into the replacement text, use the "Insert tab" button.


## To do

* Add some nice CSS

## License

MIT -- see LICENSE file for details.

The default text is from [Wikipedia](http://en.wikipedia.org/wiki/Regular_expression) ca. early 2012.