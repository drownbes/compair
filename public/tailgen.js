var aItemWords = new Array()
var aItemCodes = new Array()
var aCheckArray = new Array()
var aCheckText = new Array()
var aDescSeed = new Array()
var aVocab = new Array();


var iCounter=0

//Example data.
//Data has binary flags (1,2,4,8,16, etc.)
// In this example we have
// 1 - First Part Only
// 2 - Last Part Only
// 3 - Both


aItemWords[iCounter]="n adventerous"
aItemCodes[iCounter++]=1
aItemWords[iCounter]="n ambitious"
aItemCodes[iCounter++]=1
aItemWords[iCounter]="n arrogant"
aItemCodes[iCounter++]=1
aItemWords[iCounter]=" brave"
aItemCodes[iCounter++]=1
aItemWords[iCounter]=" cowardly"
aItemCodes[iCounter++]=1
aItemWords[iCounter]=" lazy"
aItemCodes[iCounter++]=1
aItemWords[iCounter]=" lonely"
aItemCodes[iCounter++]=1
aItemWords[iCounter]=" shy"
aItemCodes[iCounter++]=1


aItemWords[iCounter]="boy"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="girl"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="king"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="man"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="musician"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="prince"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="princess"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="soldier"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="tailor"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="wizard"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="woman"
aItemCodes[iCounter++]=2
aItemWords[iCounter]="queen"
aItemCodes[iCounter++]=2


// Any Point
aItemWords[iCounter]="attend a dance"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="break a curse"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="defeat a giant"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="defeat a tyrant"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="save a prince"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="save a princess"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="slay a monster"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="escape an abusive parent"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="evade an unwanted lover"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="find a magic mirror"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="find a magic ring"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="outwit a faerie"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="outwit a witch"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="return home"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="solve a mystery"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="solve three riddles"
aItemCodes[iCounter++]=20
aItemWords[iCounter]="overcome three challenges"
aItemCodes[iCounter++]=20

// Only at the Beginning
aItemWords[iCounter]="leave home"
aItemCodes[iCounter++]=4

// Only at the End
aItemWords[iCounter]="save the kingdom"
aItemCodes[iCounter++]=16
aItemWords[iCounter]="win the hand of a love interest"
aItemCodes[iCounter++]=16
aItemWords[iCounter]="win the throne"
aItemCodes[iCounter++]=16

aItemWords[iCounter]="Things are complicated by a jealous rival"
aItemCodes[iCounter++]=8
aItemWords[iCounter]="Things are complicated by the main villain trying to kill the main character"
aItemCodes[iCounter++]=8
aItemWords[iCounter]="Things are complicated by the villain kidnapping the main character's brother"
aItemCodes[iCounter++]=8
aItemWords[iCounter]="Things are complicated by the villain kidnapping the main character's sister"
aItemCodes[iCounter++]=8
aItemWords[iCounter]="Complications arise when it's discovered that the hero and villain are related"
aItemCodes[iCounter++]=8

aItemWords[iCounter]="a kindly fairy"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a wise old woman"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic horse"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic cat"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic dog"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic owl"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic swan"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="friendly birds"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="an enchanted item"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a mighty weapon"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic fish"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic ring"
aItemCodes[iCounter++]=32
aItemWords[iCounter]="a magic mirror"
aItemCodes[iCounter++]=32


iCounter=0


//These are ways data can be formated.
//The first array is what value the tagged items must contain
//The second array contains the text that follows (first), is after each word (the latter) and finishes the construct (final one)
aCheckArray[iCounter] = new Array(1,2,4,20,20,16,8)
aCheckText[iCounter++] = new Array(
"The story is about a"
,
" "
,
" who must "
,
", "
,
", and "
,
" to "
,
".  "
,
".")
//
aCheckArray[iCounter] = new Array(1,2,4,20,20,16,8,32)
aCheckText[iCounter++] = new Array(
"The story is about a"
,
" "
,
" who must "
,
", "
,
", and "
,
" to "
,
".  "
,
".  Assistance comes in the form of "
,
".")
//
aCheckArray[iCounter] = new Array(1,2,4,20,20,16)
aCheckText[iCounter++] = new Array(
"The story is about a"
,
" "
,
" who must "
,
", "
,
", and "
,
" to "
,
".")
//
aCheckArray[iCounter] = new Array(1,2,4,20,20,16,32)
aCheckText[iCounter++] = new Array(
"The story is about a"
,
" "
,
" who must "
,
", "
,
", and "
,
" to "
,
".  Assistance comes in the form of "
,
".")
//

//Regular functions


	function DoExponent(intBase, intExp)
	{
	   var intCount = 1;
	   var intReturn = intBase;

	   if(intExp < 1)
		{
			intReturn = 1;
		}


	   while(intCount < intExp) {

		intReturn = intReturn * intBase;

		intCount = intCount + 1;

	      }

		return intReturn;
	}


	function GenNumber(nRange)
	{
		var iNumGen;
		iNumGen = Math.round((Math.random() * (nRange+1)))-1;

		if (iNumGen < 0)
		{
			iNumGen = GenNumber(nRange);
		}

		if (iNumGen>nRange)
		{
			iNumGen = GenNumber(nRange);
		}

	    return iNumGen;
	}


	function GetNumber(aCurrArray, intCheckNumber)
	{
		var intReturn, intLooper
		var bEnd=false

		while (bEnd==false)
		{
			intReturn=GenNumber(aItemCodes.length-1)

			if ((aItemCodes[intReturn]  &  intCheckNumber)==intCheckNumber)
			{
				bEnd=true;
			}

			for (intLooper=0;intLooper<aCurrArray.length;intLooper++)
			{
				if (aCurrArray[intLooper]==intReturn)
				{
					bEnd=false;
				}
			}
		}

		return intReturn;
	}



	function GenTitle()
	{
		var aUseNumber=new Array();
		var intArrayUse
		var strReturn=""
		var strPass
		var intNumber=-1
		var intLooper
		var bEnd = false

		intArrayUse=GenNumber(aCheckArray.length-1);

		for (intLooper=0;intLooper<aCheckArray[intArrayUse].length;intLooper++)
		{
			aUseNumber[intLooper]=-1;
		}

		for (intLooper=0;intLooper<aCheckArray[intArrayUse].length;intLooper++)
		{
                        intNumber=GetNumber(aUseNumber,aCheckArray[intArrayUse][intLooper]);
                        aUseNumber[intLooper]=intNumber;
		}

		strReturn = aCheckText[intArrayUse][0];

		for (intLooper=0;intLooper<aUseNumber.length;intLooper++)
		{
			if (aUseNumber[intLooper]>-1)
			{
				strReturn=strReturn + aItemWords[aUseNumber[intLooper]];
				strReturn=strReturn + aCheckText[intArrayUse][intLooper+1];
			}
		}

		return strReturn;
	}
