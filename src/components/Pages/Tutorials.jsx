import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Markdowner from '../Markdowner'

let test = `# Markdown Example
An example document for my markdown editor.

## Code

### JS
Here is an example of some *Javascript* code in **markdown**.
~~~js
const msg = "hello world";
console.log(msg).
~~~
### C#
Here is an example of some *C#* code in **markdown**.
~~~cs
public class Component{
  public Component(){
    this.Initialize();
  }

  public void Initialize(){
    var three = 1+2;
  }
}
~~~

## Utilities
### Lists

#### Check List
- [ ] not done
- [x] done

#### Normal List
- test
- test
- test

### Tables
|Type|Route|Description|
|---|---|---|
| GET | /api/users | returns a list of all users |
| GET | /api/users/{id} | returns a specific user of {id} |
| POST | /api/users | creates and adds a user |
| DELETE | /api/users/{id} | deletes the user of {id} and all of their associated thoughts |
| PUT | /api/users/{id} | update the user of {id} |
`


 		// Figure out which whitespace characters we need to use when adjusting our
		// textarea value.
		var newline = getLineDelimiter();
		var tabber = "\t"; // You could also use spaces here, if that's your thing.
		// --------------------------------------------------------------------------- //
		// --------------------------------------------------------------------------- //
 
		// I apply the given keyboard event to the given input.
		// --
		// NOTE: At this point, the calling context has already determined that the event
		// is relevant and needs to be applied.
		function applyKeyEventToCodeBlock( input, event ) {
 
			var state = getInputState( input );
 
			// Each method here takes the input state and return a new one. We can then
			// take the new state and re-apply it to the input.
			if ( isTabEvent( event ) ) {
 
				state = insertTabAtSelection( state );
 
			} else if ( isShiftTabEvent( event ) ) {
 
				state = insertShiftTabAtSelection( state );
 
			} else if ( isEnterEvent( event ) ) {
 
				state = insertEnterAtSelection( state );
 
			} else if ( isShiftEnterEvent( event ) ) {
 
				state = insertShiftEnterAtSelection( state );
 
			}
 
			setInputState( input, state );
 
		}
 
 
		// I find the index of the end-line that contains the given offset.
		function findEndOfLine( value, offset ) {
 
			return( value.indexOf( newline, offset ) );
 
		}
 
 
		// I find the index of the line-start that contains the given offset.
		function findStartOfLine( value, offset ) {
 
			var delimiter = /[\r\n]/i;
 
			// Starting at the current offset, let's start walking backwards through the
			// value until we either run out of characters; or, we hit a character that
			// represents some line delimiter.
			for ( var i = ( offset - 1 ) ; i >= 0 ; i-- ) {
 
				if ( delimiter.test( value.charAt( i ) ) ) {
 
					return( i + 1 );
 
				}
 
			}
 
			return( 0 );
 
		}
 
 
		// I get the current selection state of the given input.
		function getInputState( input ) {
 
			return({
				value: input.value,
				start: input.selectionStart,
				end: input.selectionEnd
			});
 
		}
 
 
		// I calculate and return the newline implementation for the current browser.
		// Different operating systems and browsers implement a "newline" with different
		// character combinations.
		function getLineDelimiter() {
 
			var fragment = document.createElement( "textarea" );
			fragment.value = "\r\n";
 
			return( fragment.value );
 
		}
 
 
		// I apply an ENTER key change to the given input state. This will add a newline
		// at the given selection point, starting the subsequent line at the same
		// indentation as the preceding line.
		function insertEnterAtSelection( state ) {
 
			var value = state.value;
			var start = state.start;
 
			var leadingTabs = value
				.slice( findStartOfLine( value, start ), start )
				.match( new RegExp( ( "^(?:" + tabber + ")+" ), "i" ) )
			;
 
			var tabCount = leadingTabs
				? ( leadingTabs[ 0 ].length / tabber.length )
				: 0
			;
 
			var preDelta = value.slice( 0, start );
			var postDelta = value.slice( start );
			var delta = ( newline + repeat( tabber, tabCount ) );
 
			return({
				value: ( preDelta + delta + postDelta ),
				start: ( start + delta.length ),
				end: ( start + delta.length )
			});
 
		}
 
 
		// I apply a TAB key change to the given input state. This will increase the
		// indentation of the lines contained within the given selection.
		function insertTabAtSelection( state ) {
 
			var value = state.value;
			var start = state.start;
			var end = state.end;
 
			// If the selection has length zero, then we're simply inserting a tab
			// character at the current location. However, if the selection crosses
			// multiple characters, then we're going to adjust the indentation of
			// the lines affected by the selection.
			var deltaStart = ( start === end )
				? start
				: findStartOfLine( value, start )
			;
			var deltaEnd = end;
			var deltaValue = value.slice( deltaStart, deltaEnd );
 
			var preDelta = value.slice( 0, deltaStart );
			var postDelta = value.slice( deltaEnd );
 
			// Insert a tabber at the start of the delta, plus any contained newline.
			var replacement = deltaValue.replace( /^/gm, tabber );
 
			var newValue = ( preDelta + replacement + postDelta );
			var newStart = ( start + tabber.length );
			var newEnd = ( end + ( replacement.length - deltaValue.length ) );
 
			return({
				value: newValue,
				start: newStart,
				end: newEnd
			});
 
		}
 
 
		// I apply a SHIFT+ENTER key change to the given input state. This will add a
		// newline after the line of the current selection start, starting the new line
		// as the same indentation as the preceding line.
		function insertShiftEnterAtSelection( state ) {
 
			var value = state.value;
			var start = state.start;
 
			var leadingTabs = value
				.slice( findStartOfLine( value, start ), start )
				.match( new RegExp( ( "^(?:" + tabber + ")+" ), "i" ) )
			;
 
			var tabCount = leadingTabs
				? ( leadingTabs[ 0 ].length / tabber.length )
				: 0
			;
 
			var deltaStart = findEndOfLine( value, start );
			var preDelta = value.slice( 0, deltaStart );
			var postDelta = value.slice( deltaStart );
			var delta = ( newline + repeat( tabber, tabCount ) );
 
			return({
				value: ( preDelta + delta + postDelta ),
				start: ( deltaStart + delta.length ),
				end: ( deltaStart + delta.length )
			});
 
		}
 
 
		// I apply a SHIFT+TAB key change to the given input state. This will decrease
		// the indentation of the lines contained within the given selection.
		function insertShiftTabAtSelection( state ) {
 
			var value = state.value;
			var start = state.start;
			var end = state.end;
 
			var deltaStart = findStartOfLine( value, start )
			var deltaEnd = end;
			var deltaValue = value.slice( deltaStart, deltaEnd );
			var deltaHasLeadingTab = ( deltaValue.indexOf( tabber ) === 0 );
 
			var preDelta = value.slice( 0, deltaStart );
			var postDelta = value.slice( deltaEnd );
 
			var replacement = deltaValue.replace( new RegExp( ( "^" + tabber ), "gm" ), "" );
 
			var newValue = ( preDelta + replacement + postDelta );
			var newStart = deltaHasLeadingTab
				? ( start - tabber.length )
				: start
			;
			var newEnd = ( end - ( deltaValue.length - replacement.length ) );
 
			return({
				value: newValue,
				start: newStart,
				end: newEnd
			});
 
		}
 
 
		// I determine if the given keyboard event represents the ENTER key.
		function isEnterEvent( event ) {
 
			return( ( event.key.toLowerCase() === "enter" ) && ! event.shiftKey );
 
		}
 
 
		// I determine if the given value is odd.
		function isOdd( value ) {
 
			return( ( value % 2 ) === 1 );
 
		}
 
 
		// I determine if the given keyboard event is one of the events that we might
		// want to manage for use in a fenced code-block.
		function isRelevantKeyEvent( event ) {
 
			return(
				isTabEvent( event ) ||
				isShiftTabEvent( event ) ||
				isEnterEvent( event ) ||
				isShiftEnterEvent( event )
			);
 
		}
 
 
		// I determine if the given input has a selection that is entirely contained
		// within a fenced code-block. This can be a multi-character selection or a
		// simple caret selection.
		function isSelectionInCodeBlock( input ) {
 
			var state = getInputState( input );
			var selectedValue = state.value.slice( state.start, state.end );
 
			// If there is a code-fence contained within the selection, then the
			// selection crosses a code-block boundary and we don't want to mess with it.
			if ( selectedValue.indexOf( "```" ) >= 0 ) {
 
				return( false );
 
			}
 
			// Get the number of code-fences that come before the start of the selection.
			var preSelectedValue = state.value.slice( 0, state.start );
			var codeFences = preSelectedValue.match( /```/g );
 
			// If there are no fences before the selection then we know that we're not in
			// the middle of a fenced code-block.
			if ( codeFences === null ) {
 
				return( false );
 
			}
 
			// If there are fences before the selection, an odd number will indicate that
			// we're inside a fenced code-block that has not yet been closed.
			return( isOdd( codeFences.length ) );
 
		}
 
 
		// I determine if the given keyboard event represents the SHIFT+ENTER key.
		function isShiftEnterEvent( event ) {
 
			return( ( event.key.toLowerCase() === "enter" ) && event.shiftKey );
 
		}
 
 
		// I determine if the given keyboard event represents the SHIFT+TAB key.
		function isShiftTabEvent( event ) {
 
			return( ( event.key.toLowerCase() === "tab" ) && event.shiftKey );
 
		}
 
 
		// I determine if the given keyboard event represents the TAB key (ensuring that
		// the SHIFT key is NOT also depressed).
		function isTabEvent( event ) {
 
			return( ( event.key.toLowerCase() === "tab" ) && ! event.shiftKey );
 
		}
 
 
		// I repeat the given string the given number of times.
		function repeat( value, count ) {
 
			return( new Array( count + 1 ).join( value ) );
 
		}
 
 
		// I apply the given selection state to the given input.
		function setInputState( input, state ) {
 
			// If the value hasn't actually changed, just return out. There's no need to
			// alter the selection settings if nothing changed in the value.
			if ( input.value === state.value ) {
 
				return( false );
 
			}
 
			input.value = state.value;
			input.selectionStart = state.start;
			input.selectionEnd = state.end;
 
			return( true );
 
		}

export default function Tutorials() {

    useEffect(()=>{
        		// Gather our DOM references.
		var input = document.querySelector( "#textInput" );
 

 
		input.addEventListener(
			"keydown",
			function( event ) {
 
				if ( isRelevantKeyEvent( event ) && isSelectionInCodeBlock( input ) ) {
 
					console.warn( "Overriding Key Event:", event.key, ( event.shiftKey ? "+ SHIFT" : "" ) );
 
					applyKeyEventToCodeBlock( input, event );
 
					// Since we're programmatically applying the key to the contextual
					// code-block, we don't want the default browser behavior to take
					// place - we are going to manually apply the key to the input state.
					event.preventDefault();
 
				}
 
			},
			false
		);
    })
    const codeAreaRef = useRef();
const [code, setCode] = useState(test);
    const [md, setMd] = useState('');

  return (
    <div className='h-[80vh] w-full  flex'>
    <div className='flex resize-x overflow-auto w-1/2'>
        <textarea
        id="textInput"
        className='grow shrink w-full h-full resize-none border-none bg-neutral-900 text-neutral-200'
        name='code'
        value={code}
        ref={codeAreaRef}
        onChange={(e) => {
            setCode(e.target.value);
        }}
        onKeyDown={(e) => {
            if (e.key == 'Tab') {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.target;

            const newText =
                code.substring(0, selectionStart) +
                '  ' + // Edit this for type tab you want
                    // Here it's 2 spaces per tab
                code.substring(selectionEnd, code.length);

            codeAreaRef.current.focus();
            codeAreaRef.current.value = newText;

            codeAreaRef.current.setSelectionRange(
                selectionStart + 2,
                selectionStart + 2
            );

            setCode(newText);
            }
        }}
        />
    </div>


        <div className='flex overflow-auto  grow shrink-2 p-2 bg-neutral-900 text-neutral-300'>
        <Markdowner markdown={code} />
        </div>
        
  
    </div>
  )
}
