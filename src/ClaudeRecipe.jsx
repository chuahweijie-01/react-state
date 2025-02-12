import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown children={props.recipe} />
        </section>
    )
}