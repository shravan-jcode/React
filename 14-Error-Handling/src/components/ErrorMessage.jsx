function ErrorMessage({retry}){
    return (
        <>
        <h2>failed to load products</h2>
        
        <button onClick={retry}>
            Retry
        </button>
        </>
    )
}

export default ErrorMessage