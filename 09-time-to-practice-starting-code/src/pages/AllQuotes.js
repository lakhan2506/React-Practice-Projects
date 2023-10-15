import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
    {id:'q1', author:'Max',text:'Learning Rect is fun!'},
    {id:'q2', author:'Rohit',text:'Learning Rect is greate!'},
]

const AllQuotes = ()=>{
    return <QuoteList quotes={DUMMY_QUOTES}/>

}

export default AllQuotes;