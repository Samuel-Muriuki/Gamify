let count = 0;
const Message = () => {
    count++; // This makes the component impure as the count variable is being updated as part of rendering the message component
    return <h1>Message {count}</h1>
}

export default Message;