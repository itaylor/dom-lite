       ,--.                        ,--.,--.  ,--.          
     ,-|  | ,---. ,--,--,--.,-----.|  |`--',-'  '-. ,---.  
    ' .-. || .-. ||        |'-----'|  |,--.'-.  .-'| .-. : 
    \ `-' |' '-' '|  |  |  |       |  ||  |  |  |  \   --. 
     `---'  `---' `--`--`--'       `--'`--'  `--'   `----'   
                                        dom-lite   v_0.0.1
    ------------------------------------------------------

A lightweight faux HTML DOM implementation for creating HTML Node trees and printing them

###Design goals
* Support the use of DOM Builder type API's on the server side, or in other places a real DOM 
is unavailable or would be overkill.
* Fast enough to be usable as a way to build HTML pages, as an alternative to templating languages.
* Can turn HTML into a DOM-like representation, and turn DOM-like representations into
pretty-printed HTML.
* Simple and approachable codebase.

###WTF?  This implementation sucks!  It not a real HTML DOM implementation and it's missing all kinds of important stuffs!
* That's 100% true.
* If you want a full blown HTML DOM implementation, use jsdom.  It's awesome, very complete and powerful.
* If you're just wanting to create HTML from a DOM-like API, this might work for you, and without the overhead of jsdom.

###Where are the tests?
* Yes, there should be tests and there aren't yet.  They will come in good time.  This was part of a larger,
unpublished project of mine that had tests covering large swaths of functionality.  I will rework them into tests of just this piece.

###I want something added/fixed/changed
* Patches are welcome, and will likely be accepted so long as they don't violate the design goals

###License for All files EXCEPT HTMLParser.js 

MIT License -
Copyright (c) 2012 Ian Taylor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### HTMLParser.js is covered by the Mozilla Public Licence.  
Please see that file for details of its licensing and copyright info.