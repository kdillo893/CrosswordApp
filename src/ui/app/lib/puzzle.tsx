
import React from 'react';

export default function Puzzle() {

  //puzzle contains info about the arrangement, rows and columns...
  //I need the ID for lookup of the file, then fill the UI state. could save
  // it too cookie or cache in browser as I play...

  // imported data is in a string. I will parse them into the "data" 
  // which contains array of arrays.
  const puzzleFileImport: String = "MARIE.LANG.NODEOCEAN.ESPY.OPERSTANDSFIRM.HEMSESP.OATS.SCENE.SUE.RBI.CHALLAH.PRESENTCOMPANY...OER.WEEP.TEDDIGS..PAD..CEDEECO.OWEN.BSA...MATCHINGOUTFIT.ONRAMPS.OXO.MED.TENSE.FLOP.FARALAN.DREAMHOUSESIDE.REEL.IDLESKEYS.YODA.MELDS";

  //rows are all 15 in length, some data fills in the middle.
  const puzzleData: String[][] = puzzleFileImport.match(/.{1,15}/g)?.map((subset: String) => subset.split(''));

  return (
    <div>
      <table>
        { puzzleData.map((row: Array<String>, rowidx: Number) => {
          return (
            <tr key={rowidx}>
              {row.map((character: String, idx: Number) => {
                if (character === '.') {
                  return <td key={idx} style={{ "backgroundColor": "black" }} />
                }

                return (
                  <td key={idx}>{character}</td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>

  );

};
