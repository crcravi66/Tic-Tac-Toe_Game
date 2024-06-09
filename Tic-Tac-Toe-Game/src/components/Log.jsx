export default function Log({ turns }) {


    return <ol id="log">
        {turns.map(turn1 => <li key={`${turn1.square.row}${turn1.square.col}`}>{turn1.player} selected{turn1.square.row}, {turn1.square.col}</li>)}

    </ol>
}